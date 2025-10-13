export function popUp(message: string, chosen: string, definition: string): void {
    const container: HTMLElement | null = document.getElementById("main-container");
    
    const popUp: HTMLElement = document.createElement("div");

    const title: HTMLHeadingElement = document.createElement("h1");
    title.textContent = message;
    title.classList.add("text-5xl") 

    const word: HTMLHeadingElement = document.createElement("h2");
    word.textContent = `The word is ${chosen}`;
    word.classList.add("text-3xl");

    const description: HTMLParagraphElement = document.createElement("p");
    description.textContent = `Definition: ${definition}`;

    const buttonHolder: HTMLDivElement = document.createElement("div");

    const replay: HTMLButtonElement = document.createElement("button");
    replay.innerText = "Play again?";

    const stats: HTMLButtonElement = document.createElement("button");
    stats.textContent = "See your stats";

    buttonHolder.appendChild(replay);
    buttonHolder.appendChild(stats);

    popUp.appendChild(title);
    popUp.appendChild(word);
    popUp.appendChild(description);
    popUp.appendChild(buttonHolder);
    popUp.classList.add("pop-up")

    container?.appendChild(popUp)

       /* container!.onclick = () => {
        popUp.style.display = "none";
    };
    */

    replay.onclick = () => window.location.reload();
    
}

/*
popup text to be responsive, style button holder and buttons themselves.
Stats - localStorage. Played, won, current streak, max streak, which level guessed % .
Better handler for wrong word - shake form, red border?
*/