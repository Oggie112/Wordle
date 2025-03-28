var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export function getWords() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let dataObj = yield fetch("https://cheaderthecoder.github.io/5-Letter-words/words.json").then(response => response.json()).then(data => {
                let words = data.words;
                let length = data.words.length;
                let chosen = words[Math.floor(Math.random() * length)];
                return {
                    words,
                    chosen
                };
            });
            return dataObj;
        }
        catch (error) {
            if (error instanceof Error) {
                console.error("Error: ", error.message);
            }
            ;
            return null;
        }
        ;
    });
}
;
