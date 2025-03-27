import { wordTester } from "./components/wordCheck";
import { getWords } from "./components/wordsApi";

export async function initApp() {
    let dataObj = await getWords();
    let words: string[] | undefined = dataObj?.words
    let chosen: string | undefined = dataObj?.chosen
    document.getElementById("firstWord")!.addEventListener("submit", async (event) => await wordTester(event, chosen, words))

}