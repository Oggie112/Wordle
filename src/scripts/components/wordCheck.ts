import { inputWord } from "./wordInput";

export async function wordTester(event: SubmitEvent, chosen: string | null) {
    event.preventDefault();
    try {
    console.log(chosen)
    if (!chosen) {
        return console.log("Error: WordApi failed");
    };
     
    let form = event.target as HTMLFormElement;
    let inputs = form.children as HTMLCollectionOf<HTMLInputElement>;
    let word = inputWord(event);
    for (let i = 0; i < word.length; i++) {
        if (word[i] === chosen[i]) {
            inputs[i].setAttribute("letter", "correct")
            inputs[i].style.background = "green";
        } else if (chosen.includes(word[i])) {
            inputs[i].style.background = "yellow"
        }
        inputs[i].disabled = true;
    }
} catch (error: unknown) {
    if (error instanceof Error) {
        console.error("Error: ", error.message);
        };
        return null;
    }
}
