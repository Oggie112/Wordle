
export function showModal(modalId: string): void {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.add('is-visible');
    }
}

export function hideModal(modalId: string): void {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove('is-visible');
    }
}

export function setupModalEventListeners(): void {
    const replayButton = document.getElementById('replay-button');
    if (replayButton) {
        replayButton.onclick = () => window.location.reload();
    }

    const showStatsButton = document.getElementById('show-stats-button');
    if (showStatsButton) {
        showStatsButton.onclick = () => {
            hideModal('end-game-modal');
            showModal('stats-modal');
        };
    }

    const closeStatsButton = document.getElementById('close-stats-button');
    if (closeStatsButton) {
        closeStatsButton.onclick = () => {
            hideModal('stats-modal');
        };
    }
}
