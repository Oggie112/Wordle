var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { inputWord } from "./wordInput";
export function wordTester(event, chosen, words) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            event.preventDefault();
            let form = event.target;
            let inputs = form.children;
            let word = inputWord(event);
            console.log(chosen);
            if (!chosen) {
                return console.log("Error: WordApi failed");
            }
            else if (word.length < 5) {
                return null;
            }
            if (words === null || words === void 0 ? void 0 : words.includes(word)) {
                for (let i = 0; i < word.length; i++) {
                    if (word[i] === chosen[i]) {
                        inputs[i].setAttribute("letter", "correct");
                        inputs[i].style.background = "green";
                    }
                    else if (chosen.includes(word[i])) {
                        inputs[i].style.background = "yellow";
                    }
                    inputs[i].disabled = true;
                }
                ;
            }
            else {
                alert("Word not recognised");
            }
        }
        catch (error) {
            if (error instanceof Error) {
                console.error("Error: ", error.message);
            }
            ;
            return null;
        }
    });
}
