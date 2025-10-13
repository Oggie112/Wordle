import { wordTester } from "./components/wordCheck";
import { getWords } from "./components/wordsApi";
import { buildHtml } from "./components/buildHtml";

export async function initApp() {
    buildHtml();
    window.onload = async () => {
        const firstInput = document.getElementById("input-0") as HTMLInputElement;
        firstInput?.focus();
    };
    const dataObj = await getWords();
    if (!dataObj) {
        return console.error("Error: Failed to retrieve words");
    };
    const words: string[] = dataObj.words;
    const chosen: string = dataObj.chosen;
    const definition: string = dataObj.definition;
    ;
    const wordsContainer = document.getElementById("word-container");

    const forms = Array.from(wordsContainer?.querySelectorAll<HTMLFormElement>("form") || []);
    
    forms.map((x) => {

    x!.addEventListener("submit", async (event) => await wordTester(event, chosen, words, definition));

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