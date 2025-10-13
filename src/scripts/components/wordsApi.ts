interface RetrievedWords {
    words: string[],
    chosen: string,
    definition: string
}

export async function getWords(): Promise<RetrievedWords | null> {
    try {

        const wordText = await fetch('https://raw.githubusercontent.com/dariusk/corpora/refs/heads/master/data/words/word_clues/clues_five.json').then(res => res.json());
        
        const words: string[] = Object.keys(wordText.data);

        const length: number = words.length;

        const chosen: string = words[Math.floor(Math.random() * length)];

         const dictionary = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${chosen}`).then(res => res.json());
         
         const definition = dictionary[0].meanings[0].definitions[0].definition || "No definition found";

         console.log(chosen);
        return {
            words,
            chosen,
            definition
        }
        }
        catch (error: unknown) {

        if (error instanceof Error) {
            console.error("Error: ", error.message)
        };
        return null;
    };
};
