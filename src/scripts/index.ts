import { wordTester } from "./components/wordCheck";
import { getWords } from "./components/wordsApi";

export async function initApp() {
    let chosen = await getWords();
    document.getElementById("firstWord")!.addEventListener("submit", async (event) => await wordTester(event, chosen))

}