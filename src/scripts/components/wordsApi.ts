export async function getWords(): Promise<string | null> {
    try {
        let chosen = await fetch("https://cheaderthecoder.github.io/5-Letter-words/words.json").then(response => response.json()).then(data => {
        
        let words: string[] = data.words;

        let length: number = data.words.length;

        let word: string = words[Math.floor(Math.random() * length)];

        return word;
        });

        return chosen

    } catch (error: unknown) {

        if (error instanceof Error) {
            console.error("Error: ", error.message)
        };
        return null;
    };
};
