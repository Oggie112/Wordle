export function inputWord(event: SubmitEvent) {

    event.preventDefault();

    const form = event.target as HTMLFormElement;
    
    const formData = new FormData(form);
    console.log(formData)
    let inputWord: string = "";
    for (var [key, value] of formData.entries()) { 
        inputWord += value
    };
    return inputWord
};