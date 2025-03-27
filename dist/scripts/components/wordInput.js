export function inputWord(event) {
    event.preventDefault();
    let form = event.target;
    let formData = new FormData(form);
    let inputWord = "";
    for (var [key, value] of formData.entries()) {
        inputWord += value;
    }
    ;
    return inputWord;
}
;
