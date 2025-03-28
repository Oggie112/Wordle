export function moveFocus(event: Event | KeyboardEvent, form: HTMLFormElement, index: number, direction: "next" | "prev") {

    const inputs = Array.from(form.querySelectorAll<HTMLInputElement>('input[type="text"]'));
    
    if (direction === "next" && (event as InputEvent).inputType !== "deleteContentBackward") {
        if (inputs[index].value.length === 1 && index < inputs.length - 1) {
            inputs[index + 1].focus();
        }
    } 
    else if (direction === "prev" && (event as KeyboardEvent).key === "Backspace") {
        if (inputs[index].value.length === 0 && index > 0) {
            inputs[index - 1].focus();
        }
    }
}