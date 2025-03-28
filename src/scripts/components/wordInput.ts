export function inputWord(event: SubmitEvent) {

    event.preventDefault();

    let form = event.target as HTMLFormElement;
    
    let formData = new FormData(form);
    console.log(formData)
    let inputWord: string = "";
    for (var [key, value] of formData.entries()) { 
        inputWord += value
    };
    return inputWord
};