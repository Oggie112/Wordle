import { wordTester } from "./components/wordCheck";
import { getWords } from "./components/wordsApi";
import { buildHtml } from "./components/buildHtml";

export async function initApp() {
    buildHtml();
    let dataObj = await getWords();
    let words: string[] | undefined = dataObj?.words;
    let chosen: string | undefined = dataObj?.chosen;
    
    let wordsContainer = document.getElementById("word-container");

    let forms = Array.from(wordsContainer?.querySelectorAll<HTMLFormElement>("form") || []);
    
    forms.map((x) => {

    x!.addEventListener("submit", async (event) => await wordTester(event, chosen, words));

    let inputs = document.querySelectorAll("input[type=text]") as NodeListOf<HTMLInputElement>
    inputs.forEach((input) => {
        input.addEventListener("keydown", (event: KeyboardEvent) => {
            let key = event.key;
            let blocked = document.getElementById(key)?.getAttribute("blocked")
            if (blocked === "true") {
                event.preventDefault()
            }
        })

    })

    })
}