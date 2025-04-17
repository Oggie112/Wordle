import { moveFocus } from "./moveFocus";

export function buildHtml(): void {

    buildInput();

    buildAlpha();
};

function buildInput(): void {
    
    let wordContainer: HTMLElement | null = document.getElementById("word-container");
    // create 6 elements with 5 inputs each - 6 goes at 5 letter word
    for (let i = 0; i < 6; i++) {

        let form: HTMLFormElement = document.createElement("form");
        form?.setAttribute("id", `form-${i}`);
        form.classList.add("forms");

        for (let j = 0; j < 6; j++) {
            let input: HTMLInputElement = document.createElement("input");
            input.classList.add("inputs")
            if (j < 5) {

                input?.setAttribute("id", `input-${j}`);

                input.name = `letter-${j}`;

                input.type = "text"

                input.maxLength = 1;

                input.addEventListener("input", (event) => moveFocus(event, form, j, "next"))

                input.addEventListener("keydown", (event) => moveFocus(event, form, j, "prev"))

            } else {

                input?.setAttribute("id", "submitter");

                input.type = "submit";

                input.style.visibility = "hidden";

                input.style.position = "absolute"
                
            };

            i > 0 ? input.disabled = true : null;
            
            form?.appendChild(input);

        };

    wordContainer?.appendChild(form);
    };
};

function buildAlpha(): void {
    let alphaContainer: HTMLElement | null = document.getElementById("alpha-container") 

    // create clickable keyboard
    let abc: string[] = ["qwertyuiop", "asdfghjkl", "zxcvbnm"];

    abc.map((x, i) => {

        let row = document.createElement("div");
        row.classList.add("alpha-row")
        row.setAttribute("id", `row-${i}`);

        for (let i = 0; i < x.length; i++) {
            let letter = document.createElement("div");
            letter.setAttribute("id", x[i]);
            letter.setAttribute("value", x[i]);
            letter.setAttribute("blocked", "false")
            letter.innerText = x[i];
            letter.classList.add("letters")
            row?.appendChild(letter); 
        }
        alphaContainer?.appendChild(row);
    })
}
