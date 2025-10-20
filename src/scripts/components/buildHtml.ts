
import { moveFocus } from "./moveFocus";
import { showModal, hideModal } from "./modal";

export function buildHtml(): void {
    buildHeader();
    buildInput();
    buildAlpha();
    buildEndGameModal();
    buildStatsModal();
};

let lastFocusedInput: HTMLInputElement | null = null;

function buildInput(): void {
    const wordContainer: HTMLElement | null = document.getElementById("word-container");
    for (let i = 0; i < 6; i++) {
        const form: HTMLFormElement = document.createElement("form");
        form?.setAttribute("id", `form-${i}`);
        form.classList.add("forms");
        for (let j = 0; j < 6; j++) {
            const input: HTMLInputElement = document.createElement("input");
            input.classList.add("inputs");
            input.addEventListener('focus', () => {
                lastFocusedInput = input;
        });
            if (j < 5) {
                input?.setAttribute("id", `input-${j}`);
                input.name = `letter-${j}`;
                input.type = "text"
                input.maxLength = 1;
                input.addEventListener("input", (event) => moveFocus(event, form, j, "next"))
                input.addEventListener("keydown", (event) => moveFocus(event, form, j, "prev"))
            } else {
                input?.setAttribute("id", "submitter");
                input.type = "submit";
                input.style.visibility = "hidden";
                input.style.position = "absolute"
            };
            i > 0 ? input.disabled = true : null;
            form?.appendChild(input);
        };
        wordContainer?.appendChild(form);
    };
};

function buildAlpha(): void {
    const alphaContainer: HTMLElement | null = document.getElementById("alpha-container");
    const abc: string[] = ["qwertyuiop", "asdfghjkl", "zxcvbnm"];
    abc.map((x, i) => {
        const row = document.createElement("div");
        row.classList.add("alpha-row")
        row.setAttribute("id", `row-${i}`);
        for (let i = 0; i < x.length; i++) {
            const letter = document.createElement("div");
            letter.setAttribute("id", x[i]);
            letter.setAttribute("value", x[i]);
            letter.setAttribute("blocked", "false")
            letter.innerText = x[i];
            letter.classList.add("letters")
            letter.addEventListener("click", () => {
                if(lastFocusedInput && !lastFocusedInput.disabled) {
                    lastFocusedInput.value = x[i];
                    const inputEvent = new Event('input', { bubbles: true });
                    lastFocusedInput.dispatchEvent(inputEvent);
                };
            });
            row?.appendChild(letter);
        }
        alphaContainer?.appendChild(row);
    })
}

function buildEndGameModal(): void {
    const container: HTMLElement | null = document.getElementById("main-container");
    const popUp: HTMLElement = document.createElement("div");
    popUp.id = "end-game-modal";
    popUp.classList.add("modal");

    const modalContent: HTMLDivElement = document.createElement("div");
    modalContent.classList.add("modal-content");

    const title: HTMLHeadingElement = document.createElement("h1");
title.classList.add("text-4xl");

    const word: HTMLHeadingElement = document.createElement("h2");
    word.id = "end-game-word";
    word.classList.add("text-2xl");

    const description: HTMLParagraphElement = document.createElement("p");
    description.id = "end-game-definition";

    const buttonHolder: HTMLDivElement = document.createElement("div");

    const replay: HTMLButtonElement = document.createElement("button");
    replay.id = "replay-button";
    replay.innerText = "Play again?";
    replay.classList.add("modal-button");

    const stats: HTMLButtonElement = document.createElement("button");
    stats.id = "show-stats-button";
    stats.textContent = "See your stats";
    stats.classList.add("modal-button");

    buttonHolder.appendChild(replay);
    buttonHolder.appendChild(stats);

    modalContent.appendChild(title);
    modalContent.appendChild(word);
    modalContent.appendChild(description);
    modalContent.appendChild(buttonHolder);
    
    popUp.appendChild(modalContent);
    container?.appendChild(popUp);
}

function buildStatsModal(): void {
    const stats = localStorage.getItem("stats") || '{"played":0,"won":0,"currentStreak":0,"maxStreak":0,"guessDistribution": [0,0,0,0,0,0]}';
    const statsData: any = JSON.parse(stats);
    console.log(statsData);
    const container: HTMLElement | null = document.getElementById("main-container");
    const statsPage: HTMLElement = document.createElement("div");
    statsPage.id = "stats-modal";
    statsPage.classList.add("modal");

    const modalContent: HTMLDivElement = document.createElement("div");
    modalContent.classList.add("modal-content");

    const title: HTMLHeadingElement = document.createElement("h1");
    title.textContent = "Your Statistics";
    title.classList.add("text-4xl");
    modalContent.appendChild(title);

    const statsContent: HTMLDivElement = document.createElement("div");
    statsContent.id = "stats-content";
    statsContent.textContent = `
        Games Played: ${statsData.played}
        Games Won: ${statsData.won}
        Current Streak: ${statsData.currentStreak}
        Max Streak: ${statsData.maxStreak}
        Guess Distribution:
        1 Guess: ${statsData.guessDistribution[0]}
        2 Guesses: ${statsData.guessDistribution[1]}
        3 Guesses: ${statsData.guessDistribution[2]}
        4 Guesses: ${statsData.guessDistribution[3]}
        5 Guesses: ${statsData.guessDistribution[4]}
        6 Guesses: ${statsData.guessDistribution[5]}
    `;
    modalContent.appendChild(statsContent);





    const closeButton: HTMLButtonElement = document.createElement("button");
    closeButton.id = "close-stats-button";
    closeButton.innerText = "Close";
    closeButton.classList.add("modal-button");
    modalContent.appendChild(closeButton);
    closeButton.addEventListener("click", () => hideModal("stats-modal"));

    statsPage.appendChild(modalContent);
    container?.appendChild(statsPage);
}

function buildHeader(): void {
    const headerContainer: HTMLElement = document.createElement("div");
    headerContainer.id = "header-container";
    headerContainer.classList.add("fixed", "top-0", "left-0", "w-full", "bg-gray-900", "z-10", "flex", "justify-center", "items-center", "p-2");
    const container: HTMLElement | null = document.getElementById("main-container");
    container?.appendChild(headerContainer);

    const title: HTMLHeadingElement = document.createElement("h1");
    title.id = "game-title";
    title.innerText = "Wordlike";
    title.classList.add("text-3xl", "font-bold", "text-center", "text-white");
    headerContainer.appendChild(title);

    const menuButton: HTMLButtonElement = document.createElement("button");
    menuButton.id = "menu-button";
    menuButton.innerText = "☰";
    menuButton.classList.add("text-2xl", "text-white", "absolute", "top-4", "right-4");
    headerContainer.appendChild(menuButton);
    menuButton.addEventListener("click", () => showModal("stats-modal"));
}