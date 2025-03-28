export function buildHtml() {

    buildInput();

    buildAlpha();
};

function buildInput() {
    
    let wordContainer = document.getElementById("word-container");
    // create 6 elements with 5 inputs each - 6 goes at 5 letter word
    for (let i = 0; i < 6; i++) {

        let form = document.createElement("form");
        form?.setAttribute("id", `form-${i}`);

        for (let i = 0; i < 6; i++) {
            let input = document.createElement("input");

            if (i < 5) {

                input?.setAttribute("id", `input-${i}`);
                input.name = `letter-${i}`

            } else {

                input?.setAttribute("id", "submitter");
                input.type = "submit";
                //input.style.visibility = "hidden";
                
            };

            form?.appendChild(input);
        };

    wordContainer?.appendChild(form);
    };
};

function buildAlpha() {
    let alphaContainer = document.getElementById("alpha-container") 

    // create clickable keyboard
    let abc: string[] = ["qwertyuiop", "asdfghjkl", "zxcvbnm"];

    abc.map((x, i) => {

        let row = document.createElement("div");
        row.setAttribute("id", `row-${i}`);

        for (let i = 0; i < x.length; i++) {
            let letter = document.createElement("div");
            letter.setAttribute("id", x[i]);
            letter.setAttribute("value", x[i]);
            letter.innerText = x[i];
            row?.appendChild(letter); 
        }
        alphaContainer?.appendChild(row);
    })
}
