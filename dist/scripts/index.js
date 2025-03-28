var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { wordTester } from "./components/wordCheck";
import { getWords } from "./components/wordsApi";
import { buildHtml } from "./components/buildHtml";
export function initApp() {
    return __awaiter(this, void 0, void 0, function* () {
        buildHtml();
        let dataObj = yield getWords();
        let words = dataObj === null || dataObj === void 0 ? void 0 : dataObj.words;
        let chosen = dataObj === null || dataObj === void 0 ? void 0 : dataObj.chosen;
        document.getElementById("main-container").addEventListener("submit", (event) => __awaiter(this, void 0, void 0, function* () { return yield wordTester(event, chosen, words); }));
    });
}
