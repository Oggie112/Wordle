import { wordTester } from "./components/wordCheck";
import { getWords } from "./components/wordsApi";
import { buildHtml } from "./components/buildHtml";
import { setupModalEventListeners } from "./components/modal";

export async function initApp() {
    console.log("App initialized");
    buildHtml();
    setupModalEventListeners();
    console.log('html built')
    window.onload = async () => {
        const firstInput = document.getElementById("input-0") as HTMLInputElement;
        firstInput?.focus();
    };
    console.log('window onload set')
    const dataObj = await getWords();
    if (!dataObj) {
        const mainContainer = document.getElementById("main-container");
        if (mainContainer) {
            mainContainer.innerHTML = `<div class="text-white text-2xl text-center">Error: Could not load game data. Please check your internet connection and try again.</div>`;
        }
        return console.error("Error: Failed to retrieve words");
    };
    const words: string[] = dataObj.words;
    const chosen: string = dataObj.chosen;
    const definition: string = dataObj.definition;
    ;
    const wordsContainer = document.getElementById("word-container");

    const forms = Array.from(wordsContainer?.querySelectorAll<HTMLFormElement>("form") || []);
    forms.map((x, i) => {
    x!.addEventListener("submit", async (event) => await wordTester(event, chosen, words, definition, i+1));
    
    const inputs = document.querySelectorAll("input[type=text]") as NodeListOf<HTMLInputElement>
    inputs.forEach((input) => {
        input.addEventListener("keydown", (event: KeyboardEvent) => {
            const key = event.key;
            const blocked = document.getElementById(key)?.getAttribute("blocked")
            if (blocked === "true") {
                event.preventDefault()
            }
        })

    })

    })
}