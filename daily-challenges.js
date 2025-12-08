// Daily Challenge System for Dash Combat

class DailyChallengeSystem {
    constructor() {
        this.challenges = [
            { id: 'kills_50', name: 'Monster Hunter', desc: 'Kill 50 monsters', target: 50, type: 'kills', reward: 100 },
            { id: 'combo_15', name: 'Combo Master', desc: 'Reach a 15x combo', target: 15, type: 'combo', reward: 150 },
            { id: 'survive_3min', name: 'Survivor', desc: 'Survive for 3 minutes', target: 180, type: 'time', reward: 120 },
            { id: 'no_damage', name: 'Untouchable', desc: 'Kill 20 monsters without taking damage', target: 20, type: 'perfect', reward: 200 },
            { id: 'boss_kill', name: 'Boss Slayer', desc: 'Defeat a boss', target: 1, type: 'boss', reward: 150 },
            { id: 'score_5000', name: 'High Scorer', desc: 'Reach 5000 points', target: 5000, type: 'score', reward: 100 },
            { id: 'ultimate_5', name: 'Ultimate Power', desc: 'Use ultimate 5 times', target: 5, type: 'ultimate', reward: 130 }
        ];
        
        this.loadProgress();
    }

    // Get today's challenge (deterministic based on date)
    getTodayChallenge() {
        const today = new Date();
        const dayOfYear = Math.floor((today - new Date(today.getFullYear(), 0, 0)) / 86400000);
        const challengeIndex = dayOfYear % this.challenges.length;
        return this.challenges[challengeIndex];
    }

    // Load progress from localStorage
    loadProgress() {
        const saved = localStorage.getItem('dailyChallengeProgress');
        if (saved) {
            const data = JSON.parse(saved);
            const today = new Date().toDateString();
            
            // Reset if it's a new day
            if (data.date !== today) {
                this.resetProgress();
            } else {
                this.progress = data.progress || 0;
                this.completed = data.completed || false;
                this.claimed = data.claimed || false;
            }
        } else {
            this.resetProgress();
        }
    }

    // Save progress to localStorage
    saveProgress() {
        const data = {
            date: new Date().toDateString(),
            progress: this.progress,
            completed: this.completed,
            claimed: this.claimed
        };
        localStorage.setItem('dailyChallengeProgress', JSON.stringify(data));
    }

    // Reset progress for new day
    resetProgress() {
        this.progress = 0;
        this.completed = false;
        this.claimed = false;
        this.saveProgress();
    }

    // Update progress based on game events
    updateProgress(type, value) {
        if (this.completed) return;

        const challenge = this.getTodayChallenge();
        if (challenge.type !== type) return;

        if (type === 'perfect') {
            // Special handling for perfect runs
            this.progress = value;
        } else {
            this.progress = Math.max(this.progress, value);
        }

        if (this.progress >= challenge.target) {
            this.completed = true;
        }

        this.saveProgress();
    }

    // Claim reward
    claimReward() {
        if (!this.completed || this.claimed) return 0;
        
        this.claimed = true;
        this.saveProgress();
        
        const challenge = this.getTodayChallenge();
        
        // Add coins to player
        const currentCoins = parseInt(localStorage.getItem('playerCoins') || '0');
        localStorage.setItem('playerCoins', (currentCoins + challenge.reward).toString());
        
        return challenge.reward;
    }

    // Get progress percentage
    getProgressPercent() {
        const challenge = this.getTodayChallenge();
        return Math.min(100, (this.progress / challenge.target) * 100);
    }
}

// Export for use in game
if (typeof module !== 'undefined' && module.exports) {
    module.exports = DailyChallengeSystem;
}
