interface RetrievedWords {
    words: string[],
    chosen: string,
    definition: string
}

export async function getWords(): Promise<RetrievedWords | null> {
    try {
        console.log("getWords called");
        const wordText = await fetch('https://raw.githubusercontent.com/dariusk/corpora/refs/heads/master/data/words/word_clues/clues_five.json').then(res => res.json());
        
        const words: string[] = Object.keys(wordText.data);
        const length: number = words.length;
        const chosen: string = words[Math.floor(Math.random() * length)];

        let definition: string;

        try {
            const res = await fetch(`https://en.wiktionary.org/api/rest_v1/page/definition/${chosen}`);
            if (!res.ok) {
                throw new Error('Failed to fetch definition');
            }
            const dictionary = await res.json();

            if (dictionary.title || !dictionary[0]?.definitions[0]?.definition) {
                definition = "No definition found";
            } else {
                const defHtml = dictionary[0].definitions[0].definition;
                definition = defHtml.replace(/<[^>]*>?/gm, '');
            }
        } catch (error) {
            console.error("Definition fetch failed:", error);
            definition = "No definition found";
        }

        console.log(chosen);
        return {
            words,
            chosen,
            definition
        };
    } catch (error: unknown) {
        if (error instanceof Error) {
            console.error("Critical Error: Failed to retrieve words list.", error.message);
        }
        return null;
    }
}
