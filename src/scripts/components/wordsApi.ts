
interface RetrievedWords {
    words: string[],
    chosen: string
}

export async function getWords(): Promise<RetrievedWords | null> {
    try {
        let dataObj: RetrievedWords = await fetch("https://cheaderthecoder.github.io/5-Letter-words/words.json").then(response => response.json()).then(data => {
        
        let words: string[] = data.words;

        let length: number = data.words.length;

        let chosen: string = words[Math.floor(Math.random() * length)];

        return {
            words,
            chosen
        }
        });

        return dataObj

    } catch (error: unknown) {

        if (error instanceof Error) {
            console.error("Error: ", error.message)
        };
        return null;
    };
};
