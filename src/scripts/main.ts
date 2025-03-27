fetch("https://cheaderthecoder.github.io/5-Letter-words/words.json").then(response => response.json()).then(data => {
    let words = data.words;
    let length = data.words.length
    let chosen = "reach";//Math.floor(Math.random() * length);
    function inputWord(event) {
        event.preventDefault();
        let formData = new FormData(event.target);
        let word = "";
        for (var [key, value] of formData.entries()) { 
            word += value
        };
        return word
    };
    function wordTester(event) {
        event.preventDefault();
        let inputs = event.target.children;
        let word = inputWord(event);
        for (let i = 0; i < word.length; i++) {
            if (word[i] === chosen[i]) {
                inputs[i].correct = true;
                inputs[i].style.background = "green";
            } else if (chosen.includes(word[i])) {
                inputs[i].style.background = "yellow"
            }
            inputs[i].disabled = true;
        }
    }
    
    document.getElementById("firstWord").addEventListener("submit", wordTester)
    // onchange for input to auto focus next;
    // colour change function
    // enter function = prevent default unless on submit butt; 
    // backspace function to go back if value.length = 0;
});
