export function buildHtml() {
    buildInput();
    buildAlpha();
}
;
function buildInput() {
    let wordContainer = document.getElementById("word-container");
    // create 6 elements with 5 inputs each - 6 goes at 5 letter word
    for (let i = 0; i < 6; i++) {
        let form = document.createElement("form");
        form === null || form === void 0 ? void 0 : form.setAttribute("id", `form-${i}`);
        for (let i = 0; i < 6; i++) {
            let input = document.createElement("input");
            if (i < 5) {
                input === null || input === void 0 ? void 0 : input.setAttribute("id", `input-${i}`);
                form === null || form === void 0 ? void 0 : form.appendChild(input);
            }
            else {
                input === null || input === void 0 ? void 0 : input.setAttribute("id", "submitter");
                input.style.visibility = "hidden";
            }
        }
        ;
        wordContainer === null || wordContainer === void 0 ? void 0 : wordContainer.appendChild(form);
    }
    ;
}
;
function buildAlpha() {
    let alphaContainer = document.getElementById("alph-container");
    // create clickable keyboard
    let abc = ["qwertyuiop", "asdfghjkl", "zxcvbnm"];
    abc.map((x, i) => {
        let row = document.createElement("div");
        row.setAttribute("id", `row-${i}`);
        for (let i = 0; i < x.length; i++) {
            let letter = document.createElement("div");
            letter.setAttribute("id", x[i]);
            letter.setAttribute("value", x[i]);
            letter.innerText = x[i];
            row === null || row === void 0 ? void 0 : row.appendChild(letter);
        }
        alphaContainer === null || alphaContainer === void 0 ? void 0 : alphaContainer.appendChild(row);
    });
}
