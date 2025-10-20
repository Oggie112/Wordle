// function to get and set stats in local storage

    export function updateStats(won: boolean, attempts: number): void {
        const stats = JSON.parse(localStorage.getItem("stats") || '{"played":0,"won":0,"currentStreak":0,"maxStreak":0,"guessDistribution":[0,0,0,0,0,0]}');
        stats.played += 1;
        if (won) {
            stats.won += 1;
            stats.currentStreak += 1;
            stats.guessDistribution[attempts - 1] += 1;
            stats.currentStreak > stats.maxStreak ? stats.maxStreak = stats.currentStreak : null;
        } else {
            stats.currentStreak = 0;
        }
        localStorage.setItem('stats', JSON.stringify(stats))
    };
