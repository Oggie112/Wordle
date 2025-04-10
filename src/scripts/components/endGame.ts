export function endGame (inputs: HTMLCollectionOf<HTMLInputElement>) {
    for (let i = 0; i < 6; i++) {

        inputs[i].setAttribute("letter", "correct")

        inputs[i].style.background = "green";

        let delay: number = i * 1000;

        inputs[i].style.animationDelay = `${delay}ms`;

        inputs[i].classList.add("animate-bounce-once");

        setTimeout(() => {

            inputs[i].classList.remove("animate-bounce-once");

          }, delay + 1000);
    };
}