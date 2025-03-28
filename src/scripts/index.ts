import { wordTester } from "./components/wordCheck";
import { getWords } from "./components/wordsApi";
import { buildHtml } from "./components/buildHtml";

export async function initApp() {
    buildHtml();
    let dataObj = await getWords();
    let words: string[] | undefined = dataObj?.words
    let chosen: string | undefined = dataObj?.chosen
    document.getElementById("form-0")!.addEventListener("submit", async (event) => await wordTester(event, chosen, words))

}