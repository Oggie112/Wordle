import { inputWord } from "./wordInput";
import { endGame } from "./endGame";

export async function wordTester(event: SubmitEvent, chosen: string, words: string[], definition: string) {
    
    try {

    event.preventDefault(); 

    const form = event?.target as HTMLFormElement; 

    const inputs = form?.children as HTMLCollectionOf<HTMLInputElement>;

    const nextForm = form?.nextSibling as HTMLFormElement;


    const nextInputs = nextForm?.children as HTMLCollectionOf<HTMLInputElement>

    console.log(chosen)

    const word = await inputWord(event);

    if (word?.length < 5) {

        alert("Word must be 5 letters long");
        
    } else if (!chosen) {

        return console.log("Error: WordApi failed");

    } else {

        if (chosen === word) {

            console.log("winner")
            endGame(inputs, "Well Done!", chosen, definition, true);

        } else if (words?.includes(word)) {

            for (let i = 0; i < 6; i++) {

                if (word[i] === chosen[i] && i < words.length) {

                    inputs[i].setAttribute("letter", "correct")
                    inputs[i].style.background = "green";

                } else if (chosen.includes(word[i]) && i < words.length) {

                    inputs[i].style.background = "yellow";

                } else if (!nextForm) {
                    endGame(inputs, `Unlucky!`, chosen, definition, false);
                } else {

                    const letter = document.getElementById(word[i]) as HTMLDivElement;
                    inputs[i].style.background = "grey"
                    letter.style.background = "grey";
                    // letter.setAttribute("blocked", "true");

                }

                inputs[i].disabled = true;
                nextInputs ? nextInputs[i].disabled = false : null;
                nextInputs ? nextInputs[0].focus() : null;
            };

        } else {
            alert("Word not recognised");
        };
    };
    } catch (error: unknown) {
        if (error instanceof Error) {
            console.error("Error: ", error.message);
        };
        return null;
    };
};
