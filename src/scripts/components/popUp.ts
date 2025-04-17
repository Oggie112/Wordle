export function popUp(message: string, chosen: string): void {
    let container: HTMLElement | null = document.getElementById("main-container");
    let popUp: HTMLElement = document.createElement("div");

    let title: HTMLHeadingElement = document.createElement("h1");
    title.textContent = message;
    title.classList.add("text-5xl") 

    let word: HTMLHeadingElement = document.createElement("h2");
    word.textContent = `The word is ${chosen}`;
    word.classList.add("text-3xl");

    let description: HTMLParagraphElement = document.createElement("p");
    description.textContent = "This is just a placeholder for now. I want to make an api call to a dictionary to get a description. Lalalalalalalallalalallalalallalaallalalaal"

    let buttonHolder: HTMLDivElement = document.createElement("div");

    let replay: HTMLButtonElement = document.createElement("button");
    replay.innerText = "Play again?";

    let stats: HTMLButtonElement = document.createElement("button");
    stats.textContent = "See your stats";

    buttonHolder.appendChild(replay);
    buttonHolder.appendChild(stats);

    popUp.appendChild(title);
    popUp.appendChild(word);
    popUp.appendChild(description);
    popUp.appendChild(buttonHolder);
    popUp.classList.add("pop-up")

    container?.appendChild(popUp)
    
}

/*
Create pop of a resonsive size. Title message - Win / lose. The Word as a title. Dictionary api underneath. 
Stats and play again button underneath
*/