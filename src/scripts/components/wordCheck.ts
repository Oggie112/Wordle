import { inputWord } from "./wordInput";

export async function wordTester(event: SubmitEvent, chosen: string | undefined, words: string[] | undefined) {
    event.preventDefault();
    try {
    console.log(chosen)
    if (!chosen) {
        return console.log("Error: WordApi failed");
    };
     
    let form = event.target as HTMLFormElement;
    let inputs = form.children as HTMLCollectionOf<HTMLInputElement>;
    let word = inputWord(event);
    if (words?.includes(word)) {
    for (let i = 0; i < word.length; i++) {
        if (word[i] === chosen[i]) {
            inputs[i].setAttribute("letter", "correct")
            inputs[i].style.background = "green";
        } else if (chosen.includes(word[i])) {
            inputs[i].style.background = "yellow"
        }
        inputs[i].disabled = true;
    };
} else {
    alert("Word not recognised")
}
} catch (error: unknown) {
    if (error instanceof Error) {
        console.error("Error: ", error.message);
        };
        return null;
    }
}
