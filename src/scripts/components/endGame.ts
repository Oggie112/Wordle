import { popUp } from "./popUp";

export function endGame (inputs: HTMLCollectionOf<HTMLInputElement>, message: string, chosen: string, definition: string, success: boolean): void {
    if (success) {
            for (let i = 0; i < 6; i++) {

        inputs[i].setAttribute("letter", "correct")

        inputs[i].style.background = "green";

        let delay: number = i * 1000;

        inputs[i].style.animationDelay = `${delay}ms`;

        inputs[i].classList.add("animate-bounce-once");

        inputs[i].disabled = true;

        setTimeout(() => {

            inputs[i].classList.remove("animate-bounce-once");

          }, delay + 1000);
    };
    setTimeout(() => {
        popUp(message, chosen, definition)
    }, 5000)
    }
    else {
        popUp(message, chosen, definition);
    }

}