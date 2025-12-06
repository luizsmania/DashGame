// Language System
const translations = {
    en: {
        // Menu
        mainMenu: 'Main Menu',
        playGame: 'Play Game',
        stats: 'Stats',
        achievements: 'Achievements',
        settings: 'Settings',
        language: 'Language',
        selectLanguage: 'Select Language',

        // Game modes
        selectGameMode: 'Select Game Mode',
        endless: 'Endless',
        endlessDesc: 'Survive as long as possible. Difficulty increases over time.',
        timeAttack: 'Time Attack',
        timeAttackDesc: 'Survive for 5 minutes. Beat the clock!',
        killTarget: 'Kill Target',
        killTargetDesc: 'Kill 100 monsters as fast as possible.',
        hardcore: 'Hardcore',
        hardcoreDesc: 'One hit and you are out. Ultimate challenge!',

        // Stats
        totalKills: 'Total Kills',
        totalPlayTime: 'Total Play Time',
        highScore: 'High Score',
        record: 'Record',
        allTimeTitle: 'All Time Statistics',
        currentStats: 'Current Session',
        health: 'Health',
        kills: 'Kills',
        score: 'Score',
        combo: 'Combo',
        time: 'Time',

        // Achievements
        achievementsTitle: 'Achievements',
        noAchievements: 'No achievements unlocked yet!',
        unlocked: 'Unlocked',
        locked: 'Locked',

        // UI
        back: 'Back',
        start: 'Start',
        restart: 'Restart',
        resume: 'Resume',
        paused: 'Paused',
        gameOver: 'Game Over',
        finalScore: 'Final Score',
        totalTime: 'Total Time',

        // Controls
        movement: 'Movement',
        dashAttack: 'Dash Attack',
        objective: 'Objective',
        moveInstructions: 'Use WASD or Arrow Keys to move your ninja around the arena.',
        dashInstructions: 'Left Click anywhere on the screen to dash to that location. Dashing into monsters will defeat them!',
        objectiveInstructions: 'Survive as long as possible and defeat as many monsters as you can. The game gets harder over time!',

        // Messages
        welcomeTitle: 'Welcome to Dash Combat!',
        howToPlay: 'How to Play',
        gameMechanics: 'Game Mechanics',
        controlsSummary: 'Controls Summary',
        dontShowAgain: "Don't show this tutorial again",
        pressEscToPause: 'Press ESC to Pause',
        pressRToRestart: 'Press R to Restart',
        selectMode: 'Select a game mode to start',

        // In-game UI
        dashEnergy: 'Dash Energy',
        ultimate: 'Ultimate',
        ultimateReady: 'ULTIMATE READY! (SPACE)',
        difficulty: 'Difficulty',
        speedBoost: 'Speed Boost',
        shield: 'Shield',
        mode: 'Mode',
        monstersKilled: 'Monsters Killed',
        maxCombo: 'Max Combo',
        survived: 'Survived',
        pressRRestart: 'Press R to Restart',
        pressEscMenu: 'Press ESC for Menu',
        critical: 'CRITICAL!',
        kill: 'KILL!',
        comboText: 'x COMBO!',
        achievementUnlocked: 'Achievement Unlocked!',
        phase: 'PHASE',
        tutorialActive: 'Tutorial Active',
        completeToStart: 'Complete the tutorial to start playing',
        paused: 'Paused',
        pressEscResume: 'Press ESC to Resume',
    },
    pt: {
        // Menu
        mainMenu: 'Menu Principal',
        playGame: 'Jogar',
        stats: 'Estatísticas',
        achievements: 'Conquistas',
        settings: 'Configurações',
        language: 'Idioma',
        selectLanguage: 'Selecione o Idioma',

        // Game modes
        selectGameMode: 'Selecione o Modo de Jogo',
        endless: 'Infinito',
        endlessDesc: 'Sobreviva o máximo de tempo possível. A dificuldade aumenta com o tempo.',
        timeAttack: 'Ataque ao Tempo',
        timeAttackDesc: 'Sobreviva por 5 minutos. Vença o tempo!',
        killTarget: 'Meta de Mortes',
        killTargetDesc: 'Mate 100 monstros o mais rápido possível.',
        hardcore: 'Hardcore',
        hardcoreDesc: 'Um golpe e você perde. Desafio supremo!',

        // Stats
        totalKills: 'Mortes Totais',
        totalPlayTime: 'Tempo de Jogo Total',
        highScore: 'Pontuação Máxima',
        record: 'Recorde',
        allTimeTitle: 'Estatísticas de Todos os Tempos',
        currentStats: 'Sessão Atual',
        health: 'Saúde',
        kills: 'Mortes',
        score: 'Pontuação',
        combo: 'Combo',
        time: 'Tempo',

        // Achievements
        achievementsTitle: 'Conquistas',
        noAchievements: 'Nenhuma conquista desbloqueada ainda!',
        unlocked: 'Desbloqueada',
        locked: 'Bloqueada',

        // UI
        back: 'Voltar',
        start: 'Iniciar',
        restart: 'Reiniciar',
        resume: 'Retomar',
        paused: 'Pausado',
        gameOver: 'Fim de Jogo',
        finalScore: 'Pontuação Final',
        totalTime: 'Tempo Total',

        // Controls
        movement: 'Movimento',
        dashAttack: 'Ataque Dash',
        objective: 'Objetivo',
        moveInstructions: 'Use WASD ou Setas para mover seu ninja pela arena.',
        dashInstructions: 'Clique com o botão esquerdo na tela para fazer dash. Passar pelo inimigo o derrota!',
        objectiveInstructions: 'Sobreviva o máximo possível e derrote quantos monstros conseguir. O jogo fica mais difícil com o tempo!',

        // Messages
        welcomeTitle: 'Bem-vindo ao Dash Combat!',
        howToPlay: 'Como Jogar',
        gameMechanics: 'Mecânicas do Jogo',
        controlsSummary: 'Resumo de Controles',
        dontShowAgain: 'Não mostrar este tutorial novamente',
        pressEscToPause: 'Pressione ESC para Pausar',
        pressRToRestart: 'Pressione R para Reiniciar',
        selectMode: 'Selecione um modo de jogo para começar',

        // In-game UI
        dashEnergy: 'Energia Dash',
        ultimate: 'Definitivo',
        ultimateReady: 'DEFINITIVO PRONTO! (ESPAÇO)',
        difficulty: 'Dificuldade',
        speedBoost: 'Aceleração',
        shield: 'Escudo',
        mode: 'Modo',
        monstersKilled: 'Monstros Derrotados',
        maxCombo: 'Combo Máximo',
        survived: 'Sobreviveu',
        pressRRestart: 'Pressione R para Reiniciar',
        pressEscMenu: 'Pressione ESC para Menu',
        critical: 'CRÍTICO!',
        kill: 'DERROTA!',
        comboText: 'x COMBO!',
        achievementUnlocked: 'Conquista Desbloqueada!',
        phase: 'FASE',
        tutorialActive: 'Tutorial Ativo',
        completeToStart: 'Complete o tutorial para começar a jogar',
        paused: 'Pausado',
        pressEscResume: 'Pressione ESC para Retomar',
    }
};

// Get current language from localStorage or default to English
let currentLanguage = localStorage.getItem('gameLanguage') || 'en';

function t(key) {
    return translations[currentLanguage][key] || translations['en'][key] || key;
}

function setLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('gameLanguage', lang);
    updateUILanguage();
}

// Canvas setup
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// Set canvas size
canvas.width = 1200;
// Set canvas size (fixed resolution, scaled via CSS)
canvas.width = 1200;
canvas.height = 800;

function resizeCanvas() {
    const container = document.getElementById('game-container');
    const scaleX = container.clientWidth / canvas.width;
    const scaleY = container.clientHeight / canvas.height;
    game.scale = Math.min(scaleX, scaleY);

    // Canvas is scaled by CSS object-fit: contain, so visual size matches aspect ratio
    // We just need the scale factor for input coordinate mapping
}

window.addEventListener('resize', resizeCanvas);
// Call once on init
setTimeout(resizeCanvas, 100);

// Game state
const game = {
    // Menu state
    currentMenu: 'main', // main, modes, stats, achievements, settings, language
    menuOpen: false,

    keys: {},
    joystick: { x: 0, y: 0, active: false, id: null },
    scale: 1,
    mouse: { x: 0, y: 0 },
    monsters: [],
    bosses: [],
    powerUps: [],
    projectiles: [],
    obstacles: [],
    particles: [],
    swordSlashes: [], // Sword slash effects
    lastSpawn: 0,
    baseSpawnInterval: 2000, // Base spawn interval
    spawnInterval: 2000, // Current spawn interval (decreases over time)
    health: 5,
    maxHealth: 5,
    kills: 0,
    score: 0,
    combo: 0,
    maxCombo: 0,
    comboTime: 0,
    comboTimeout: 3000, // 3 seconds to maintain combo
    record: parseInt(localStorage.getItem('dashGameRecord')) || 0,
    highScore: parseInt(localStorage.getItem('dashGameHighScore')) || 0,
    gameOver: false,
    invulnerable: false,
    invulnerableTime: 0,
    shieldActive: false,
    shieldTime: 0,
    startTime: 0,
    gameTime: 0, // Time in seconds
    difficultyMultiplier: 1.0, // Increases over time
    baseMonsterSpeed: 3,
    tutorialShown: false, // Track if tutorial is currently showing
    paused: false, // Track if game is paused (for tutorial)
    // Dash energy system
    dashEnergy: 100,
    maxDashEnergy: 100,
    dashEnergyRegen: 0.5, // Energy per frame
    dashCost: 20, // Energy cost per dash
    // Screen shake
    screenShake: { x: 0, y: 0, intensity: 0 },
    // Weapon upgrades
    swordLength: 30,
    baseSwordLength: 30,
    damageMultiplier: 1.0,
    // Power-up timers
    speedBoostActive: false,
    speedBoostTime: 0,
    speedMultiplier: 1.0,
    // Game mode
    gameMode: 'endless', // endless, timeAttack, killTarget, hardcore
    gameModeTarget: 0, // Target for time/kill modes
    // Progression
    totalKills: parseInt(localStorage.getItem('totalKills')) || 0,
    totalPlayTime: parseInt(localStorage.getItem('totalPlayTime')) || 0,
    achievements: JSON.parse(localStorage.getItem('achievements') || '[]'),
    // Settings
    soundEnabled: localStorage.getItem('soundEnabled') !== 'false',
    screenShakeEnabled: localStorage.getItem('screenShakeEnabled') !== 'false',
    // Boss system
    bossSpawnInterval: 50000, // Spawn boss every 50 kills
    lastBossSpawn: 0,
    bossKills: 0,
    // Visual feedback
    damageNumbers: [],
    hitIndicators: [],
    killStreakNotifications: [],
    // Special abilities/Ultimate
    ultimateMeter: 0,
    maxUltimateMeter: 100,
    ultimateReady: false,
    ultimateActive: false,
    ultimateType: 'areaDash', // areaDash, timeSlow, screenClear, damageBoost
    ultimateTime: 0,
    // Achievement system
    achievementNotifications: [],
    // Sound system
    audioContext: null,
    musicVolume: 0.3,
    sfxVolume: 0.5,
};

// Damage number class for visual feedback
class DamageNumber {
    constructor(x, y, damage, color = '#ffffff') {
        this.x = x;
        this.y = y;
        this.damage = damage;
        this.color = color;
        this.life = 1.0;
        this.decay = 0.02;
        this.vy = -2;
        this.size = 20 + Math.min(damage / 10, 10);
    }

    update() {
        this.y += this.vy;
        this.vy *= 0.95;
        this.life -= this.decay;
        return this.life > 0;
    }

    draw() {
        ctx.save();
        ctx.globalAlpha = this.life;
        ctx.fillStyle = this.color;
        ctx.font = `bold ${this.size}px Arial`;
        ctx.textAlign = 'center';
        ctx.strokeStyle = '#000000';
        ctx.lineWidth = 3;
        ctx.strokeText(`+${this.damage}`, this.x, this.y);
        ctx.fillText(`+${this.damage}`, this.x, this.y);
        ctx.restore();
    }
}

// Hit indicator class
class HitIndicator {
    constructor(x, y, type = 'hit') {
        this.x = x;
        this.y = y;
        this.type = type; // 'hit', 'critical', 'kill'
        this.life = 1.0;
        this.decay = 0.05;
        this.scale = 0.5;
        this.maxScale = 1.5;
    }

    update() {
        this.life -= this.decay;
        if (this.scale < this.maxScale) {
            this.scale += 0.1;
        }
        return this.life > 0;
    }

    draw() {
        ctx.save();
        ctx.globalAlpha = this.life;
        ctx.translate(this.x, this.y);
        ctx.scale(this.scale, this.scale);

        if (this.type === 'critical') {
            ctx.fillStyle = '#ffd700';
            ctx.font = 'bold 30px Arial';
            ctx.textAlign = 'center';
            ctx.strokeStyle = '#000000';
            ctx.lineWidth = 2;
            ctx.strokeText(t('critical'), 0, 0);
            ctx.fillText(t('critical'), 0, 0);
        } else if (this.type === 'kill') {
            ctx.fillStyle = '#ff4757';
            ctx.font = 'bold 25px Arial';
            ctx.textAlign = 'center';
            ctx.strokeStyle = '#000000';
            ctx.lineWidth = 2;
            ctx.strokeText(t('kill'), 0, 0);
            ctx.fillText(t('kill'), 0, 0);
        } else {
            ctx.fillStyle = '#4a9eff';
            ctx.beginPath();
            ctx.arc(0, 0, 15, 0, Math.PI * 2);
            ctx.fill();
        }

        ctx.restore();
    }
}

// Kill streak notification class
class KillStreakNotification {
    constructor(text, color = '#ffd700') {
        this.text = text;
        this.color = color;
        this.life = 1.0;
        this.decay = 0.01;
        this.y = canvas.height / 2;
        this.scale = 0;
        this.maxScale = 1.2;
    }

    update() {
        this.life -= this.decay;
        if (this.scale < this.maxScale && this.life > 0.5) {
            this.scale += 0.1;
        } else if (this.life < 0.5) {
            this.scale = Math.max(0, this.scale - 0.05);
        }
        return this.life > 0;
    }

    draw() {
        ctx.save();
        ctx.globalAlpha = this.life;
        ctx.translate(canvas.width / 2, this.y);
        ctx.scale(this.scale, this.scale);
        ctx.fillStyle = this.color;
        ctx.font = 'bold 48px Arial';
        ctx.textAlign = 'center';
        ctx.strokeStyle = '#000000';
        ctx.lineWidth = 4;
        ctx.strokeText(this.text, 0, 0);
        ctx.fillText(this.text, 0, 0);
        ctx.restore();
    }
}

// Achievement notification class
class AchievementNotification {
    constructor(title, description) {
        this.title = title;
        this.description = description;
        this.life = 1.0;
        this.decay = 0.005;
        this.x = canvas.width;
        this.targetX = canvas.width - 350;
    }

    update() {
        this.life -= this.decay;
        if (this.x > this.targetX) {
            this.x -= 10;
        }
        return this.life > 0;
    }

    draw() {
        ctx.save();
        ctx.globalAlpha = this.life;

        // Background
        ctx.fillStyle = 'rgba(0, 0, 0, 0.8)';
        ctx.fillRect(this.x - 340, 20, 330, 80);
        ctx.strokeStyle = '#ffd700';
        ctx.lineWidth = 3;
        ctx.strokeRect(this.x - 340, 20, 330, 80);

        // Text
        ctx.fillStyle = '#ffd700';
        ctx.font = 'bold 20px Arial';
        ctx.textAlign = 'left';
        ctx.fillText('🏆 ' + t('achievementUnlocked'), this.x - 330, 45);

        ctx.fillStyle = '#ffffff';
        ctx.font = '16px Arial';
        ctx.fillText(this.title, this.x - 330, 70);
        ctx.fillText(this.description, this.x - 330, 90);

        ctx.restore();
    }
}

// Sound system (using Web Audio API for simple sound generation)
class SoundSystem {
    constructor() {
        this.audioContext = null;
        this.init();
    }

    init() {
        try {
            this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
        } catch (e) {
            console.log('Web Audio API not supported');
        }
    }

    playTone(frequency, duration, type = 'sine', volume = 0.3) {
        if (!this.audioContext || !game.soundEnabled) return;

        const oscillator = this.audioContext.createOscillator();
        const gainNode = this.audioContext.createGain();

        oscillator.connect(gainNode);
        gainNode.connect(this.audioContext.destination);

        oscillator.frequency.value = frequency;
        oscillator.type = type;

        gainNode.gain.setValueAtTime(volume * game.sfxVolume, this.audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + duration);

        oscillator.start(this.audioContext.currentTime);
        oscillator.stop(this.audioContext.currentTime + duration);
    }

    playDash() {
        this.playTone(400, 0.1, 'sine', 0.2);
    }

    playHit() {
        this.playTone(200, 0.15, 'square', 0.3);
    }

    playKill() {
        this.playTone(300, 0.1, 'sine', 0.3);
        setTimeout(() => this.playTone(400, 0.1, 'sine', 0.2), 50);
    }

    playPowerUp() {
        this.playTone(500, 0.2, 'sine', 0.4);
        setTimeout(() => this.playTone(600, 0.2, 'sine', 0.3), 100);
    }

    playBossSpawn() {
        this.playTone(150, 0.3, 'sawtooth', 0.5);
        setTimeout(() => this.playTone(100, 0.3, 'sawtooth', 0.4), 200);
    }

    playBossHit() {
        this.playTone(100, 0.2, 'square', 0.4);
    }

    playUltimate() {
        this.playTone(200, 0.1, 'sine', 0.5);
        setTimeout(() => this.playTone(300, 0.1, 'sine', 0.4), 50);
        setTimeout(() => this.playTone(400, 0.1, 'sine', 0.3), 100);
        setTimeout(() => this.playTone(500, 0.2, 'sine', 0.5), 150);
    }

    playCombo(multiplier) {
        const freq = 400 + (multiplier * 50);
        this.playTone(freq, 0.15, 'sine', 0.3);
    }
}

// Initialize sound system
const soundSystem = new SoundSystem();

// Particle class for explosion effects
class Particle {
    constructor(x, y, color = '#ff4757') {
        this.x = x;
        this.y = y;
        this.vx = (Math.random() - 0.5) * 8;
        this.vy = (Math.random() - 0.5) * 8;
        this.life = 1.0;
        this.decay = 0.02 + Math.random() * 0.03;
        this.size = 3 + Math.random() * 4;
        this.color = color;
        this.rotation = Math.random() * Math.PI * 2;
        this.rotationSpeed = (Math.random() - 0.5) * 0.2;
    }

    update() {
        this.x += this.vx;
        this.y += this.vy;
        this.vx *= 0.95; // Friction
        this.vy *= 0.95;
        this.life -= this.decay;
        this.rotation += this.rotationSpeed;
        return this.life > 0;
    }

    draw() {
        ctx.save();
        ctx.globalAlpha = this.life;
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rotation);
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.rect(-this.size / 2, -this.size / 2, this.size, this.size);
        ctx.fill();
        ctx.restore();
    }
}

// Sword slash effect class
class SwordSlash {
    constructor(x, y, angle, length = 60) {
        this.x = x;
        this.y = y;
        this.angle = angle;
        this.length = length;
        this.width = 8;
        this.life = 1.0;
        this.decay = 0.15;
        this.maxLength = length;
    }

    update() {
        this.life -= this.decay;
        this.length = this.maxLength * this.life;
        return this.life > 0;
    }

    draw() {
        ctx.save();
        ctx.globalAlpha = this.life;
        ctx.translate(this.x, this.y);
        ctx.rotate(this.angle);

        // Draw sword slash as a bright arc
        const gradient = ctx.createLinearGradient(0, -this.width / 2, 0, this.width / 2);
        gradient.addColorStop(0, 'rgba(255, 255, 255, 0.9)');
        gradient.addColorStop(0.5, 'rgba(100, 200, 255, 0.8)');
        gradient.addColorStop(1, 'rgba(255, 255, 255, 0.9)');

        ctx.strokeStyle = gradient;
        ctx.lineWidth = this.width;
        ctx.lineCap = 'round';
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(this.length, 0);
        ctx.stroke();

        // Add glow effect
        ctx.shadowBlur = 15;
        ctx.shadowColor = 'rgba(100, 200, 255, 0.8)';
        ctx.stroke();

        ctx.restore();
    }
}

// Power-up class
class PowerUp {
    constructor(x, y, type) {
        this.x = x;
        this.y = y;
        this.type = type; // 'health', 'speed', 'dash', 'shield', 'multiKill'
        this.radius = 15;
        this.rotation = 0;
        this.rotationSpeed = 0.05;
        this.pulse = 0;
        this.pulseSpeed = 0.1;
        this.life = 1.0;
        this.decay = 0.001;

        this.colors = {
            health: '#ff4757',
            speed: '#4a9eff',
            dash: '#00d2d3',
            shield: '#ffa502',
            multiKill: '#ff6348'
        };
    }

    update() {
        this.rotation += this.rotationSpeed;
        this.pulse += this.pulseSpeed;
        this.life -= this.decay;
        return this.life > 0;
    }

    draw() {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rotation);

        const pulseScale = 1 + Math.sin(this.pulse) * 0.2;
        ctx.scale(pulseScale, pulseScale);

        const color = this.colors[this.type] || '#ffffff';

        // Draw power-up icon based on type
        ctx.fillStyle = color;
        ctx.strokeStyle = '#ffffff';
        ctx.lineWidth = 2;

        if (this.type === 'health') {
            // Heart shape
            ctx.beginPath();
            ctx.moveTo(0, 5);
            ctx.bezierCurveTo(-5, -5, -10, -5, -10, 0);
            ctx.bezierCurveTo(-10, 5, -5, 10, 0, 15);
            ctx.bezierCurveTo(5, 10, 10, 5, 10, 0);
            ctx.bezierCurveTo(10, -5, 5, -5, 0, 5);
            ctx.closePath();
            ctx.fill();
            ctx.stroke();
        } else if (this.type === 'speed') {
            // Lightning bolt
            ctx.beginPath();
            ctx.moveTo(-5, -10);
            ctx.lineTo(2, -2);
            ctx.lineTo(-2, 0);
            ctx.lineTo(5, 10);
            ctx.lineTo(-2, 2);
            ctx.lineTo(2, 0);
            ctx.closePath();
            ctx.fill();
            ctx.stroke();
        } else if (this.type === 'dash') {
            // Dash icon (arrow)
            ctx.beginPath();
            ctx.moveTo(-8, 0);
            ctx.lineTo(0, -8);
            ctx.lineTo(8, 0);
            ctx.lineTo(0, 8);
            ctx.closePath();
            ctx.fill();
            ctx.stroke();
        } else if (this.type === 'shield') {
            // Shield
            ctx.beginPath();
            ctx.arc(0, 0, this.radius, 0, Math.PI * 2);
            ctx.fill();
            ctx.stroke();
        } else if (this.type === 'multiKill') {
            // Star
            ctx.beginPath();
            for (let i = 0; i < 5; i++) {
                const angle = (Math.PI * 2 * i) / 5 - Math.PI / 2;
                const x = Math.cos(angle) * this.radius;
                const y = Math.sin(angle) * this.radius;
                if (i === 0) ctx.moveTo(x, y);
                else ctx.lineTo(x, y);
            }
            ctx.closePath();
            ctx.fill();
            ctx.stroke();
        }

        ctx.restore();
    }
}

// Projectile class (for ranged enemies)
class Projectile {
    constructor(x, y, targetX, targetY, speed = 5) {
        this.x = x;
        this.y = y;
        this.radius = 5;
        this.speed = speed;
        const dx = targetX - x;
        const dy = targetY - y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        this.vx = (dx / distance) * speed;
        this.vy = (dy / distance) * speed;
        this.color = '#ff6b7a';
        this.life = 1.0;
    }

    update() {
        this.x += this.vx;
        this.y += this.vy;

        // Remove if off screen
        if (this.x < -50 || this.x > canvas.width + 50 ||
            this.y < -50 || this.y > canvas.height + 50) {
            return false;
        }
        return true;
    }

    draw() {
        ctx.save();
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.strokeStyle = '#ffffff';
        ctx.lineWidth = 1;
        ctx.stroke();
        ctx.restore();
    }
}

// Obstacle class
class Obstacle {
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = '#555';
    }

    draw() {
        ctx.save();
        ctx.fillStyle = this.color;
        ctx.strokeStyle = '#777';
        ctx.lineWidth = 2;
        ctx.fillRect(this.x - this.width / 2, this.y - this.height / 2, this.width, this.height);
        ctx.strokeRect(this.x - this.width / 2, this.y - this.height / 2, this.width, this.height);
        ctx.restore();
    }
}

// Player class
class Player {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.radius = 20;
        this.speed = 5;
        this.color = '#4a9eff';
        this.dashing = false;
        this.dashSpeed = 15;
        this.dashTarget = { x: 0, y: 0 };
        this.vibrating = false;
        this.vibrationOffset = { x: 0, y: 0 };
        this.vibrationTime = 0;
    }

    update() {
        // Don't update if game is over
        if (game.gameOver) return;

        // Handle invulnerability
        if (game.invulnerable) {
            game.invulnerableTime += 16;
            if (game.invulnerableTime > 1000) { // 1 second invulnerability
                game.invulnerable = false;
                game.invulnerableTime = 0;
            }
        }

        // Handle dash
        if (this.dashing) {
            // Calculate direction toward fixed target
            const dx = this.dashTarget.x - this.x;
            const dy = this.dashTarget.y - this.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance > this.dashSpeed) {
                // Still far from target, continue dashing
                const directionX = dx / distance;
                const directionY = dy / distance;

                this.x += directionX * this.dashSpeed;
                this.y += directionY * this.dashSpeed;

                // Keep player on screen during dash
                this.x = Math.max(this.radius, Math.min(canvas.width - this.radius, this.x));
                this.y = Math.max(this.radius, Math.min(canvas.height - this.radius, this.y));
            } else {
                // Reached target, stop dashing
                this.x = this.dashTarget.x;
                this.y = this.dashTarget.y;
                this.dashing = false;
            }
        }

        // Handle normal movement (only when not dashing)
        if (!this.dashing) {
            let dx = 0;
            let dy = 0;

            // Keyboard input
            if (game.keys['w'] || game.keys['ArrowUp']) dy -= 1;
            if (game.keys['s'] || game.keys['ArrowDown']) dy += 1;
            if (game.keys['a'] || game.keys['ArrowLeft']) dx -= 1;
            if (game.keys['d'] || game.keys['ArrowRight']) dx += 1;

            // Normalize keyboard movement
            if (dx !== 0 || dy !== 0) {
                const length = Math.sqrt(dx * dx + dy * dy);
                if (length > 0) {
                    dx /= length;
                    dy /= length;
                }
            }

            // Joystick input (overrides keyboard if active)
            if (game.joystick.active) {
                dx = game.joystick.x;
                dy = game.joystick.y;
            }

            this.x += dx * this.speed * game.speedMultiplier;
            this.y += dy * this.speed * game.speedMultiplier;

            // Keep player on screen
            this.x = Math.max(this.radius, Math.min(canvas.width - this.radius, this.x));
            this.y = Math.max(this.radius, Math.min(canvas.height - this.radius, this.y));
        }

        // Handle vibration
        if (this.vibrating) {
            this.vibrationTime += 16; // ~60fps
            const intensity = 3;
            this.vibrationOffset.x = (Math.random() - 0.5) * intensity;
            this.vibrationOffset.y = (Math.random() - 0.5) * intensity;

            if (this.vibrationTime > 200) { // Vibrate for 200ms
                this.vibrating = false;
                this.vibrationTime = 0;
                this.vibrationOffset = { x: 0, y: 0 };
            }
        }
    }


    triggerVibration() {
        this.vibrating = true;
        this.vibrationTime = 0;
    }

    startDash(targetX, targetY) {
        // Can't start new dash while already dashing
        if (this.dashing) return;

        // Check if player has enough dash energy
        if (game.dashEnergy < game.dashCost) return;

        // Clamp target to screen bounds
        const clampedX = Math.max(this.radius, Math.min(canvas.width - this.radius, targetX));
        const clampedY = Math.max(this.radius, Math.min(canvas.height - this.radius, targetY));

        this.dashTarget.x = clampedX;
        this.dashTarget.y = clampedY;
        this.dashing = true;

        // Consume dash energy
        game.dashEnergy = Math.max(0, game.dashEnergy - game.dashCost);

        // Sound
        soundSystem.playDash();
    }

    draw() {
        ctx.save();
        ctx.translate(this.x + this.vibrationOffset.x, this.y + this.vibrationOffset.y);

        // Flash effect when invulnerable
        const isFlashing = game.invulnerable && Math.floor(game.invulnerableTime / 50) % 2 === 0;
        const alpha = isFlashing ? 0.5 : 1.0;

        // Draw ninja body (torso)
        ctx.fillStyle = `rgba(30, 30, 30, ${alpha})`;
        ctx.beginPath();
        ctx.ellipse(0, 5, 8, 12, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.strokeStyle = `rgba(20, 20, 20, ${alpha})`;
        ctx.lineWidth = 1;
        ctx.stroke();

        // Draw ninja head
        ctx.fillStyle = `rgba(40, 40, 40, ${alpha})`;
        ctx.beginPath();
        ctx.arc(0, -8, 10, 0, Math.PI * 2);
        ctx.fill();
        ctx.strokeStyle = `rgba(20, 20, 20, ${alpha})`;
        ctx.lineWidth = 1;
        ctx.stroke();

        // Draw ninja mask (bandana covering eyes)
        ctx.fillStyle = `rgba(20, 20, 20, ${alpha})`;
        ctx.beginPath();
        ctx.ellipse(0, -5, 12, 6, 0, 0, Math.PI * 2);
        ctx.fill();

        // Draw eyes (glowing when dashing)
        if (this.dashing) {
            ctx.fillStyle = `rgba(255, 100, 100, ${alpha})`;
        } else {
            ctx.fillStyle = `rgba(100, 200, 255, ${alpha})`;
        }
        ctx.beginPath();
        ctx.arc(-4, -5, 2, 0, Math.PI * 2);
        ctx.fill();
        ctx.beginPath();
        ctx.arc(4, -5, 2, 0, Math.PI * 2);
        ctx.fill();

        // Draw ninja arms (extended when dashing)
        ctx.fillStyle = `rgba(30, 30, 30, ${alpha})`;
        if (this.dashing) {
            const dx = this.dashTarget.x - this.x;
            const dy = this.dashTarget.y - this.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            if (distance > 0) {
                const dirX = dx / distance;
                const dirY = dy / distance;

                // Draw extended arm in dash direction
                ctx.save();
                ctx.rotate(Math.atan2(dirY, dirX));
                ctx.beginPath();
                ctx.ellipse(12, 0, 6, 3, 0, 0, Math.PI * 2);
                ctx.fill();
                ctx.stroke();
                ctx.restore();
            }
        } else {
            // Normal arms position
            ctx.beginPath();
            ctx.ellipse(-10, 8, 4, 8, -0.3, 0, Math.PI * 2);
            ctx.fill();
            ctx.stroke();
            ctx.beginPath();
            ctx.ellipse(10, 8, 4, 8, 0.3, 0, Math.PI * 2);
            ctx.fill();
            ctx.stroke();
        }

        // Draw legs
        ctx.fillStyle = `rgba(25, 25, 25, ${alpha})`;
        ctx.beginPath();
        ctx.ellipse(-5, 18, 4, 8, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        ctx.beginPath();
        ctx.ellipse(5, 18, 4, 8, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();

        // Draw sword - always visible
        let swordAngle = 0;
        let swordX = 0;
        let swordY = 0;

        if (this.dashing) {
            // During dash: sword extends forward in dash direction
            const dx = this.dashTarget.x - this.x;
            const dy = this.dashTarget.y - this.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            if (distance > 0) {
                const dirX = dx / distance;
                const dirY = dy / distance;
                swordAngle = Math.atan2(dirY, dirX);

                // Draw multiple dash trails for motion blur effect
                for (let i = 0; i < 3; i++) {
                    const trailAlpha = 0.3 - (i * 0.1);
                    const trailLength = 20 + (i * 5);
                    ctx.strokeStyle = `rgba(100, 200, 255, ${trailAlpha})`;
                    ctx.lineWidth = 3 - i;
                    ctx.setLineDash([5, 5]);
                    ctx.beginPath();
                    ctx.moveTo(0, 0);
                    ctx.lineTo(-dirX * trailLength, -dirY * trailLength);
                    ctx.stroke();
                }
                ctx.setLineDash([]);
            }
        } else {
            // When not dashing: sword on back (pointing up and slightly to the side)
            swordAngle = -Math.PI / 2 - 0.3; // Slightly angled
            swordX = -8; // Position on back
            swordY = 2;
        }

        // Draw sword
        ctx.save();
        ctx.translate(swordX, swordY);
        ctx.rotate(swordAngle);

        // Sword blade
        const swordGradient = ctx.createLinearGradient(0, -3, 0, 3);
        swordGradient.addColorStop(0, 'rgba(200, 200, 255, 0.9)');
        swordGradient.addColorStop(0.5, 'rgba(255, 255, 255, 1)');
        swordGradient.addColorStop(1, 'rgba(200, 200, 255, 0.9)');

        ctx.fillStyle = swordGradient;
        ctx.strokeStyle = 'rgba(150, 200, 255, 0.8)';
        ctx.lineWidth = 1;

        // Draw sword blade (use upgraded length)
        const bladeLength = this.dashing ? game.swordLength + 5 : game.swordLength;
        ctx.beginPath();
        ctx.moveTo(8, 0);
        ctx.lineTo(bladeLength, -4);
        ctx.lineTo(bladeLength, 4);
        ctx.lineTo(8, 0);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();

        // Sword glow effect (stronger when dashing)
        if (this.dashing) {
            ctx.shadowBlur = 20;
            ctx.shadowColor = 'rgba(100, 200, 255, 0.8)';
        } else {
            ctx.shadowBlur = 8;
            ctx.shadowColor = 'rgba(100, 200, 255, 0.4)';
        }
        ctx.stroke();

        // Sword handle
        ctx.fillStyle = `rgba(60, 40, 20, ${alpha})`;
        ctx.beginPath();
        ctx.rect(0, -2, 8, 4);
        ctx.fill();
        ctx.stroke();

        ctx.restore();

        ctx.restore();
    }
}

// Monster class
class Monster {
    constructor(x, y, type = 'normal') {
        this.x = x;
        this.y = y;
        this.type = type; // 'normal', 'fast', 'tank', 'splitter', 'exploder', 'ranged'
        this.lastShotTime = 0;
        this.shootInterval = 2000; // For ranged enemies

        // Set properties based on type
        if (type === 'fast') {
            this.radius = 18;
            this.baseSpeed = game.baseMonsterSpeed * 1.8;
            this.color = '#ff6b7a';
            this.health = 1;
        } else if (type === 'tank') {
            this.radius = 35;
            this.baseSpeed = game.baseMonsterSpeed * 0.6;
            this.color = '#8b0000';
            this.health = 3;
        } else if (type === 'splitter') {
            this.radius = 22;
            this.baseSpeed = game.baseMonsterSpeed * 1.2;
            this.color = '#9b59b6';
            this.health = 1;
        } else if (type === 'exploder') {
            this.radius = 20;
            this.baseSpeed = game.baseMonsterSpeed * 1.1;
            this.color = '#ff9800';
            this.health = 1;
        } else if (type === 'ranged') {
            this.radius = 23;
            this.baseSpeed = game.baseMonsterSpeed * 0.8;
            this.color = '#00bcd4';
            this.health = 1;
            this.shootInterval = 2500;
        } else { // normal
            this.radius = 25;
            this.baseSpeed = game.baseMonsterSpeed;
            this.color = '#ff4757';
            this.health = 1;
        }

        this.maxHealth = this.health;
        this.speed = this.baseSpeed * game.difficultyMultiplier;
        this.vibrating = false;
        this.vibrationOffset = { x: 0, y: 0 };
        this.vibrationTime = 0;
        this.dead = false;
        this.deathTime = 0;
        this.hasHitPlayer = false;
        this.hasBeenKilled = false;
        this.predictionFactor = 0;
        this.lastPlayerX = player.x;
        this.lastPlayerY = player.y;
        this.playerVelocity = { x: 0, y: 0 };
        // Death animation properties
        this.splitAngle = 0;
        this.half1Offset = { x: 0, y: 0 };
        this.half2Offset = { x: 0, y: 0 };
        this.half1Rotation = 0;
        this.half2Rotation = 0;
        this.exploded = false;
    }

    update() {
        if (this.dead) {
            this.deathTime += 16;

            // Split animation
            if (!this.exploded && this.deathTime < 300) {
                // Split the monster in half
                const splitSpeed = 3;
                const rotationSpeed = 0.1;

                // Calculate split direction (perpendicular to slash)
                const splitDirX = Math.cos(this.splitAngle + Math.PI / 2);
                const splitDirY = Math.sin(this.splitAngle + Math.PI / 2);

                this.half1Offset.x += splitDirX * splitSpeed;
                this.half1Offset.y += splitDirY * splitSpeed;
                this.half2Offset.x -= splitDirX * splitSpeed;
                this.half2Offset.y -= splitDirY * splitSpeed;

                this.half1Rotation += rotationSpeed;
                this.half2Rotation -= rotationSpeed;

                // Fade out
                this.radius = Math.max(0, this.radius - 0.3);
            } else if (!this.exploded) {
                // Create explosion particles
                this.explode();
                this.exploded = true;
            }

            // Continue fading after explosion
            if (this.exploded) {
                this.radius = Math.max(0, this.radius - 0.5);
            }

            return;
        }

        // Update speed based on current difficulty
        this.speed = this.baseSpeed * game.difficultyMultiplier;

        // Smart AI: Predict player movement (gets smarter over time)
        // Calculate player velocity
        const playerDx = player.x - this.lastPlayerX;
        const playerDy = player.y - this.lastPlayerY;

        // Update velocity estimate (smoothed, more responsive at higher difficulty)
        const smoothing = Math.max(0.5, 1.0 - game.difficultyMultiplier * 0.1);
        this.playerVelocity.x = this.playerVelocity.x * smoothing + playerDx * (1 - smoothing);
        this.playerVelocity.y = this.playerVelocity.y * smoothing + playerDy * (1 - smoothing);

        this.lastPlayerX = player.x;
        this.lastPlayerY = player.y;

        // Predict where player will be (more prediction as difficulty increases)
        const predictionTime = Math.min(game.difficultyMultiplier * 0.3, 1.0); // Up to 1 second ahead
        const predictedX = player.x + this.playerVelocity.x * predictionTime;
        const predictedY = player.y + this.playerVelocity.y * predictionTime;

        // Move towards predicted position (blend between current and predicted)
        // At low difficulty: aim at current position
        // At high difficulty: aim at predicted position
        const blendFactor = Math.min((game.difficultyMultiplier - 1) * 0.3, 0.8);
        const targetX = player.x * (1 - blendFactor) + predictedX * blendFactor;
        const targetY = player.y * (1 - blendFactor) + predictedY * blendFactor;

        const dx = targetX - this.x;
        const dy = targetY - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance > 0) {
            this.direction = { x: dx / distance, y: dy / distance };
        }

        this.x += this.direction.x * this.speed;
        this.y += this.direction.y * this.speed;

        // Ranged enemies shoot projectiles
        if (this.type === 'ranged' && !this.dead) {
            const now = Date.now();
            const distanceToPlayer = Math.sqrt((player.x - this.x) ** 2 + (player.y - this.y) ** 2);
            if (now - this.lastShotTime > this.shootInterval && distanceToPlayer < 400) {
                game.projectiles.push(new Projectile(this.x, this.y, player.x, player.y, 4));
                this.lastShotTime = now;
            }
        }

        // Handle vibration
        if (this.vibrating) {
            this.vibrationTime += 16;
            const intensity = 4;
            this.vibrationOffset.x = (Math.random() - 0.5) * intensity;
            this.vibrationOffset.y = (Math.random() - 0.5) * intensity;

            if (this.vibrationTime > 200) {
                this.vibrating = false;
                this.vibrationTime = 0;
                this.vibrationOffset = { x: 0, y: 0 };
                this.dead = true;
            }
        }
    }

    triggerVibration() {
        this.vibrating = true;
        this.vibrationTime = 0;
    }

    triggerDeath(slashAngle) {
        this.dead = true;
        this.deathTime = 0;
        this.splitAngle = slashAngle;
        this.half1Offset = { x: 0, y: 0 };
        this.half2Offset = { x: 0, y: 0 };
        this.half1Rotation = 0;
        this.half2Rotation = 0;
        this.exploded = false;
    }

    explode() {
        // Handle splitter type - spawn smaller enemies
        if (this.type === 'splitter') {
            for (let i = 0; i < 2; i++) {
                const angle = (Math.PI * 2 * i) / 2;
                const spawnX = this.x + Math.cos(angle) * 30;
                const spawnY = this.y + Math.sin(angle) * 30;
                const smallMonster = new Monster(spawnX, spawnY, 'fast');
                smallMonster.radius = 12;
                smallMonster.baseSpeed = game.baseMonsterSpeed * 1.5;
                game.monsters.push(smallMonster);
            }
        }

        // Handle exploder type - damage nearby enemies
        if (this.type === 'exploder') {
            const explosionRadius = 80;
            game.monsters.forEach(monster => {
                if (monster !== this && !monster.dead) {
                    const dx = monster.x - this.x;
                    const dy = monster.y - this.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);
                    if (distance < explosionRadius) {
                        monster.health--;
                        if (monster.health <= 0 && !monster.dead) {
                            const slashAngle = Math.atan2(dy, dx) + Math.PI / 2;
                            monster.triggerDeath(slashAngle);
                            monster.hasBeenKilled = true;
                            game.kills++;
                            addScore(10);
                        }
                    }
                }
            });
        }

        // Create explosion particles
        const particleCount = this.type === 'exploder' ? 25 : 15;
        for (let i = 0; i < particleCount; i++) {
            const angle = (Math.PI * 2 * i) / particleCount;
            const speed = 2 + Math.random() * 4;
            const particle = new Particle(
                this.x + this.half1Offset.x,
                this.y + this.half1Offset.y,
                this.color
            );
            particle.vx = Math.cos(angle) * speed;
            particle.vy = Math.sin(angle) * speed;
            game.particles.push(particle);
        }
        for (let i = 0; i < particleCount; i++) {
            const angle = (Math.PI * 2 * i) / particleCount;
            const speed = 2 + Math.random() * 4;
            const particle = new Particle(
                this.x + this.half2Offset.x,
                this.y + this.half2Offset.y,
                this.color
            );
            particle.vx = Math.cos(angle) * speed;
            particle.vy = Math.sin(angle) * speed;
            game.particles.push(particle);
        }
    }

    draw() {
        if (this.dead && this.radius <= 0 && this.exploded) return;

        ctx.save();

        if (this.dead && !this.exploded) {
            // Draw split monster halves
            const alpha = Math.max(0, 1 - this.deathTime / 300);
            ctx.globalAlpha = alpha;

            // Draw first half
            ctx.save();
            ctx.translate(this.x + this.half1Offset.x, this.y + this.half1Offset.y);
            ctx.rotate(this.half1Rotation);
            ctx.beginPath();
            ctx.arc(0, 0, this.radius, this.splitAngle, this.splitAngle + Math.PI);
            ctx.lineTo(0, 0);
            ctx.closePath();
            ctx.fillStyle = this.color;
            ctx.fill();
            ctx.strokeStyle = '#ffffff';
            ctx.lineWidth = 2;
            ctx.stroke();
            ctx.restore();

            // Draw second half
            ctx.save();
            ctx.translate(this.x + this.half2Offset.x, this.y + this.half2Offset.y);
            ctx.rotate(this.half2Rotation);
            ctx.beginPath();
            ctx.arc(0, 0, this.radius, this.splitAngle + Math.PI, this.splitAngle + Math.PI * 2);
            ctx.lineTo(0, 0);
            ctx.closePath();
            ctx.fillStyle = this.color;
            ctx.fill();
            ctx.strokeStyle = '#ffffff';
            ctx.lineWidth = 2;
            ctx.stroke();
            ctx.restore();

            ctx.globalAlpha = 1;
        } else {
            // Draw normal monster
            ctx.translate(this.x + this.vibrationOffset.x, this.y + this.vibrationOffset.y);

            // Draw monster circle
            ctx.beginPath();
            ctx.arc(0, 0, this.radius, 0, Math.PI * 2);
            ctx.fillStyle = this.dead ? '#666' : this.color;
            ctx.fill();
            ctx.strokeStyle = '#ffffff';
            ctx.lineWidth = 2;
            ctx.stroke();

            // Draw eyes
            if (!this.dead) {
                ctx.fillStyle = '#ffffff';
                ctx.beginPath();
                ctx.arc(-8, -5, 4, 0, Math.PI * 2);
                ctx.fill();
                ctx.beginPath();
                ctx.arc(8, -5, 4, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        ctx.restore();
    }
}

// Boss class
class Boss {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.radius = 50;
        this.baseSpeed = game.baseMonsterSpeed * 0.5;
        this.speed = this.baseSpeed;
        this.color = '#8b0000';
        this.health = 10;
        this.maxHealth = 10;
        this.dead = false;
        this.lastShotTime = 0;
        this.shootInterval = 1500;
        this.phase = 1; // Boss phases
        this.lastPlayerX = player.x;
        this.lastPlayerY = player.y;
        this.playerVelocity = { x: 0, y: 0 };
        this.attackPattern = 0; // Different attack patterns
        this.attackCooldown = 0;
        this.chargeDirection = { x: 0, y: 0 };
        this.charging = false;
        this.chargeTime = 0;
    }

    update() {
        if (this.dead) return;

        // Update phase based on health
        if (this.health <= this.maxHealth * 0.5 && this.phase === 1) {
            this.phase = 2;
            this.speed *= 1.5;
            this.shootInterval = 1000;
            // Visual indicator for phase change
            for (let i = 0; i < 20; i++) {
                const angle = (Math.PI * 2 * i) / 20;
                const particle = new Particle(this.x, this.y, '#ffd700');
                particle.vx = Math.cos(angle) * 5;
                particle.vy = Math.sin(angle) * 5;
                game.particles.push(particle);
            }
            soundSystem.playBossSpawn();
        }

        // Calculate player velocity
        const playerDx = player.x - this.lastPlayerX;
        const playerDy = player.y - this.lastPlayerY;
        this.playerVelocity.x = this.playerVelocity.x * 0.7 + playerDx * 0.3;
        this.playerVelocity.y = this.playerVelocity.y * 0.7 + playerDy * 0.3;
        this.lastPlayerX = player.x;
        this.lastPlayerY = player.y;

        const dx = player.x - this.x;
        const dy = player.y - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        // Enhanced attack patterns
        const now = Date.now();
        this.attackCooldown -= 16;

        if (this.attackCooldown <= 0) {
            this.attackPattern = (this.attackPattern + 1) % 3;
            this.attackCooldown = 3000; // 3 seconds between pattern changes
        }

        // Pattern 0: Normal movement and shooting
        if (this.attackPattern === 0) {
            if (distance > 0) {
                this.x += (dx / distance) * this.speed;
                this.y += (dy / distance) * this.speed;
            }

            if (now - this.lastShotTime > this.shootInterval && distance < 500) {
                const count = this.phase === 2 ? 3 : 1;
                for (let i = 0; i < count; i++) {
                    const angle = i === 0 ? Math.atan2(dy, dx) :
                        Math.atan2(dy, dx) + (i - 1) * 0.5 - 0.5;
                    const targetX = player.x + Math.cos(angle) * 200;
                    const targetY = player.y + Math.sin(angle) * 200;
                    game.projectiles.push(new Projectile(this.x, this.y, targetX, targetY, 3));
                }
                this.lastShotTime = now;
            }
        }
        // Pattern 1: Charge attack
        else if (this.attackPattern === 1) {
            if (!this.charging && distance > 150) {
                // Prepare charge
                this.chargeDirection.x = dx / distance;
                this.chargeDirection.y = dy / distance;
                this.chargeTime = 0;
            } else if (!this.charging && distance <= 150) {
                // Start charging
                this.charging = true;
                this.chargeTime = 0;
            }

            if (this.charging) {
                this.chargeTime += 16;
                if (this.chargeTime < 500) {
                    // Charge preparation (visual indicator)
                    this.speed = 0;
                } else if (this.chargeTime < 1500) {
                    // Charge!
                    this.speed = this.baseSpeed * 3;
                    this.x += this.chargeDirection.x * this.speed;
                    this.y += this.chargeDirection.y * this.speed;
                } else {
                    // Charge complete
                    this.charging = false;
                    this.speed = this.baseSpeed;
                    this.chargeTime = 0;
                }
            } else {
                // Normal movement
                if (distance > 0) {
                    this.x += (dx / distance) * this.speed;
                    this.y += (dy / distance) * this.speed;
                }
            }
        }
        // Pattern 2: Circular projectile burst
        else if (this.attackPattern === 2) {
            // Move away from player
            if (distance > 0 && distance < 300) {
                this.x -= (dx / distance) * this.speed;
                this.y -= (dy / distance) * this.speed;
            } else if (distance > 0) {
                this.x += (dx / distance) * this.speed;
                this.y += (dy / distance) * this.speed;
            }

            // Burst attack
            if (now - this.lastShotTime > this.shootInterval * 2) {
                const burstCount = this.phase === 2 ? 12 : 8;
                for (let i = 0; i < burstCount; i++) {
                    const angle = (Math.PI * 2 * i) / burstCount;
                    const targetX = this.x + Math.cos(angle) * 300;
                    const targetY = this.y + Math.sin(angle) * 300;
                    game.projectiles.push(new Projectile(this.x, this.y, targetX, targetY, 2.5));
                }
                this.lastShotTime = now;
            }
        }
    }

    draw() {
        ctx.save();
        ctx.translate(this.x, this.y);

        // Phase 2 glow effect
        if (this.phase === 2) {
            ctx.shadowBlur = 20;
            ctx.shadowColor = '#ff4757';
        }

        // Charge indicator
        if (this.charging && this.chargeTime < 500) {
            const pulse = Math.sin(this.chargeTime / 50) * 0.3 + 0.7;
            ctx.globalAlpha = pulse;
            ctx.strokeStyle = '#ffd700';
            ctx.lineWidth = 5;
            ctx.beginPath();
            ctx.arc(0, 0, this.radius + 10, 0, Math.PI * 2);
            ctx.stroke();
            ctx.globalAlpha = 1;
        }

        // Draw boss body
        ctx.beginPath();
        ctx.arc(0, 0, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.phase === 2 ? '#ff0000' : this.color;
        ctx.fill();
        ctx.strokeStyle = '#ffffff';
        ctx.lineWidth = 3;
        ctx.stroke();

        // Draw health bar
        const barWidth = this.radius * 2;
        const barHeight = 8;
        ctx.fillStyle = '#333';
        ctx.fillRect(-barWidth / 2, -this.radius - 20, barWidth, barHeight);
        ctx.fillStyle = this.phase === 2 ? '#ff0000' : '#ff4757';
        ctx.fillRect(-barWidth / 2, -this.radius - 20, barWidth * (this.health / this.maxHealth), barHeight);
        ctx.strokeStyle = '#fff';
        ctx.strokeRect(-barWidth / 2, -this.radius - 20, barWidth, barHeight);

        // Phase indicator
        ctx.fillStyle = '#ffffff';
        ctx.font = 'bold 12px Arial';
        ctx.textAlign = 'center';
        ctx.fillText(`${t('phase')} ${this.phase}`, 0, -this.radius - 25);

        // Draw eyes (glow in phase 2)
        ctx.fillStyle = this.phase === 2 ? '#ff4757' : '#ffffff';
        ctx.shadowBlur = this.phase === 2 ? 10 : 0;
        ctx.beginPath();
        ctx.arc(-15, -10, 8, 0, Math.PI * 2);
        ctx.fill();
        ctx.beginPath();
        ctx.arc(15, -10, 8, 0, Math.PI * 2);
        ctx.fill();

        ctx.restore();
    }

    takeDamage() {
        this.health--;
        if (this.health <= 0) {
            this.dead = true;
            // Create big explosion
            for (let i = 0; i < 50; i++) {
                const angle = (Math.PI * 2 * i) / 50;
                const speed = 3 + Math.random() * 5;
                const particle = new Particle(this.x, this.y, '#ffd700');
                particle.vx = Math.cos(angle) * speed;
                particle.vy = Math.sin(angle) * speed;
                particle.size = 5 + Math.random() * 5;
                game.particles.push(particle);
            }
            addScore(500);
            game.bossKills++;
            triggerScreenShake(15);
            soundSystem.playBossSpawn(); // Victory sound
            checkAchievements();
        } else {
            triggerScreenShake(5);
        }
    }
}

// Helper functions
function triggerScreenShake(intensity) {
    if (game.screenShakeEnabled) {
        game.screenShake.intensity = Math.max(game.screenShake.intensity, intensity);
    }
}

function updateScreenShake() {
    if (game.screenShake.intensity > 0) {
        game.screenShake.x = (Math.random() - 0.5) * game.screenShake.intensity;
        game.screenShake.y = (Math.random() - 0.5) * game.screenShake.intensity;
        game.screenShake.intensity *= 0.9;
        if (game.screenShake.intensity < 0.1) {
            game.screenShake.intensity = 0;
            game.screenShake.x = 0;
            game.screenShake.y = 0;
        }
    }
}

// Achievement definitions
const achievements = {
    firstKill: { id: 'firstKill', title: 'First Blood', description: 'Kill your first monster', unlocked: false },
    combo10: { id: 'combo10', title: 'Combo Master', description: 'Reach a 10x combo', unlocked: false },
    combo25: { id: 'combo25', title: 'Combo Legend', description: 'Reach a 25x combo', unlocked: false },
    kill100: { id: 'kill100', title: 'Monster Slayer', description: 'Kill 100 monsters', unlocked: false },
    kill500: { id: 'kill500', title: 'Massacre', description: 'Kill 500 monsters', unlocked: false },
    bossKill: { id: 'bossKill', title: 'Boss Hunter', description: 'Defeat your first boss', unlocked: false },
    survive5min: { id: 'survive5min', title: 'Survivor', description: 'Survive for 5 minutes', unlocked: false },
    hardcoreWin: { id: 'hardcoreWin', title: 'Hardcore Champion', description: 'Win in hardcore mode', unlocked: false },
    perfectRun: { id: 'perfectRun', title: 'Perfect Run', description: 'Complete a run without taking damage', unlocked: false },
    ultimateUse: { id: 'ultimateUse', title: 'Ultimate Power', description: 'Use your ultimate ability', unlocked: false },
};

function checkAchievements() {
    const unlocked = [];

    // Check each achievement
    if (game.kills >= 1 && !achievements.firstKill.unlocked) {
        achievements.firstKill.unlocked = true;
        unlocked.push(achievements.firstKill);
    }
    if (game.combo >= 10 && !achievements.combo10.unlocked) {
        achievements.combo10.unlocked = true;
        unlocked.push(achievements.combo10);
    }
    if (game.combo >= 25 && !achievements.combo25.unlocked) {
        achievements.combo25.unlocked = true;
        unlocked.push(achievements.combo25);
    }
    if (game.kills >= 100 && !achievements.kill100.unlocked) {
        achievements.kill100.unlocked = true;
        unlocked.push(achievements.kill100);
    }
    if (game.kills >= 500 && !achievements.kill500.unlocked) {
        achievements.kill500.unlocked = true;
        unlocked.push(achievements.kill500);
    }
    if (game.bossKills >= 1 && !achievements.bossKill.unlocked) {
        achievements.bossKill.unlocked = true;
        unlocked.push(achievements.bossKill);
    }
    if (game.gameTime >= 300 && !achievements.survive5min.unlocked) {
        achievements.survive5min.unlocked = true;
        unlocked.push(achievements.survive5min);
    }

    // Show notifications for unlocked achievements
    unlocked.forEach(achievement => {
        game.achievementNotifications.push(new AchievementNotification(achievement.title, achievement.description));
        game.achievements.push(achievement.id);
        localStorage.setItem('achievements', JSON.stringify(game.achievements));
    });
}

function addScore(points) {
    const comboMultiplier = 1 + (game.combo * 0.1);
    const finalPoints = Math.floor(points * comboMultiplier);
    game.score += finalPoints;

    // Update combo
    game.combo++;
    game.comboTime = game.comboTimeout;
    if (game.combo > game.maxCombo) {
        game.maxCombo = game.combo;
    }

    // Update ultimate meter (gain 2% per kill)
    game.ultimateMeter = Math.min(game.maxUltimateMeter, game.ultimateMeter + 2);
    if (game.ultimateMeter >= game.maxUltimateMeter && !game.ultimateReady) {
        game.ultimateReady = true;
        soundSystem.playPowerUp();
    }

    // Check kill streak notifications
    if (game.combo === 2) {
        game.killStreakNotifications.push(new KillStreakNotification('DOUBLE KILL!', '#4a9eff'));
        soundSystem.playCombo(2);
    } else if (game.combo === 3) {
        game.killStreakNotifications.push(new KillStreakNotification('TRIPLE KILL!', '#9b59b6'));
        soundSystem.playCombo(3);
    } else if (game.combo === 5) {
        game.killStreakNotifications.push(new KillStreakNotification('KILLING SPREE!', '#ff4757'));
        soundSystem.playCombo(5);
    } else if (game.combo === 10) {
        game.killStreakNotifications.push(new KillStreakNotification('DOMINATING!', '#ffd700'));
        soundSystem.playCombo(10);
    } else if (game.combo === 20) {
        game.killStreakNotifications.push(new KillStreakNotification('UNSTOPPABLE!', '#ff6348'));
        soundSystem.playCombo(20);
    }

    // Check achievements
    checkAchievements();

    // Update high score
    if (game.score > game.highScore) {
        game.highScore = game.score;
        localStorage.setItem('dashGameHighScore', game.highScore.toString());
    }
}

function updateCombo() {
    if (game.combo > 0) {
        game.comboTime -= 16;
        if (game.comboTime <= 0) {
            game.combo = 0;
            game.comboTime = 0;
        }
    }
}

// Ultimate ability functions
function activateUltimate() {
    if (!game.ultimateReady || game.ultimateActive) return;

    game.ultimateActive = true;
    game.ultimateReady = false;
    game.ultimateMeter = 0;
    game.ultimateTime = 0;
    soundSystem.playUltimate();

    if (game.ultimateType === 'areaDash') {
        // Area dash - dash through all enemies in range
        const dashRadius = 200;
        let killed = 0;
        game.monsters.forEach(monster => {
            if (!monster.dead) {
                const dx = monster.x - player.x;
                const dy = monster.y - player.y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                if (distance < dashRadius) {
                    const slashAngle = Math.atan2(dy, dx) + Math.PI / 2;
                    monster.triggerDeath(slashAngle);
                    monster.hasBeenKilled = true;
                    game.kills++;
                    game.totalKills++;
                    killed++;
                    addScore(15);
                    triggerScreenShake(2);
                    // Visual effect
                    game.damageNumbers.push(new DamageNumber(monster.x, monster.y - 20, 15, '#ffd700'));
                }
            }
        });
        // Create circular slash effect
        for (let i = 0; i < 8; i++) {
            const angle = (Math.PI * 2 * i) / 8;
            const slash = new SwordSlash(player.x, player.y, angle, dashRadius);
            game.swordSlashes.push(slash);
        }
        game.ultimateTime = 500; // 0.5 seconds
    } else if (game.ultimateType === 'timeSlow') {
        // Time slow - slow down enemies for 3 seconds
        game.ultimateTime = 3000;
        game.monsters.forEach(monster => {
            monster.speed *= 0.3;
        });
        // Visual effect - screen tint
        game.screenShake.intensity = 5; // Subtle effect
    } else if (game.ultimateType === 'screenClear') {
        // Screen clear - kill all enemies on screen
        let cleared = 0;
        game.monsters.forEach(monster => {
            if (!monster.dead) {
                const slashAngle = Math.random() * Math.PI * 2;
                monster.triggerDeath(slashAngle);
                monster.hasBeenKilled = true;
                cleared++;
                // Visual effect
                game.damageNumbers.push(new DamageNumber(monster.x, monster.y - 20, 10, '#ff4757'));
            }
        });
        game.kills += cleared;
        game.totalKills += cleared;
        addScore(cleared * 10);
        triggerScreenShake(10);
        // Create explosion effect at player
        for (let i = 0; i < 30; i++) {
            const angle = (Math.PI * 2 * i) / 30;
            const particle = new Particle(player.x, player.y, '#ffd700');
            particle.vx = Math.cos(angle) * 8;
            particle.vy = Math.sin(angle) * 8;
            particle.size = 5 + Math.random() * 5;
            game.particles.push(particle);
        }
        game.ultimateTime = 500;
    } else if (game.ultimateType === 'damageBoost') {
        // Damage boost - 3x damage for 5 seconds
        game.damageMultiplier = 3.0;
        game.ultimateTime = 5000;
        // Visual effect - player glow
        game.killStreakNotifications.push(new KillStreakNotification('DAMAGE BOOST ACTIVATED!', '#ff4757'));
    }

    // Unlock achievement
    if (!achievements.ultimateUse.unlocked) {
        achievements.ultimateUse.unlocked = true;
        game.achievementNotifications.push(new AchievementNotification(achievements.ultimateUse.title, achievements.ultimateUse.description));
        game.achievements.push(achievements.ultimateUse.id);
        localStorage.setItem('achievements', JSON.stringify(game.achievements));
    }
}

function updateUltimate() {
    if (game.ultimateActive) {
        game.ultimateTime -= 16;
        if (game.ultimateTime <= 0) {
            game.ultimateActive = false;
            if (game.ultimateType === 'timeSlow') {
                // Restore monster speeds
                game.monsters.forEach(monster => {
                    monster.speed = monster.baseSpeed * game.difficultyMultiplier;
                });
            } else if (game.ultimateType === 'damageBoost') {
                game.damageMultiplier = 1.0;
            }
        }
    }
}

function spawnPowerUp(x, y) {
    const types = ['health', 'speed', 'dash', 'shield', 'multiKill'];
    const type = types[Math.floor(Math.random() * types.length)];
    game.powerUps.push(new PowerUp(x, y, type));
}

function applyPowerUp(powerUp) {
    if (powerUp.type === 'health') {
        game.health = Math.min(game.maxHealth, game.health + 1);
    } else if (powerUp.type === 'speed') {
        game.speedBoostActive = true;
        game.speedBoostTime = 10000; // 10 seconds
        game.speedMultiplier = 1.5;
    } else if (powerUp.type === 'dash') {
        game.dashEnergy = Math.min(game.maxDashEnergy, game.dashEnergy + 50);
    } else if (powerUp.type === 'shield') {
        game.shieldActive = true;
        game.shieldTime = 8000; // 8 seconds
    } else if (powerUp.type === 'multiKill') {
        addScore(100 * game.combo);
    }
}

function spawnBoss() {
    const side = Math.floor(Math.random() * 4);
    let x, y;

    switch (side) {
        case 0: x = canvas.width / 2; y = -100; break;
        case 1: x = canvas.width + 100; y = canvas.height / 2; break;
        case 2: x = canvas.width / 2; y = canvas.height + 100; break;
        case 3: x = -100; y = canvas.height / 2; break;
    }

    game.bosses.push(new Boss(x, y));
    triggerScreenShake(10);
    soundSystem.playBossSpawn();
    game.killStreakNotifications.push(new KillStreakNotification('BOSS INCOMING!', '#ff4757'));
}

// Spawn monster from random edge
function spawnMonster(type = null) {
    const side = Math.floor(Math.random() * 4);
    let x, y;

    switch (side) {
        case 0: // Top
            x = Math.random() * canvas.width;
            y = -50;
            break;
        case 1: // Right
            x = canvas.width + 50;
            y = Math.random() * canvas.height;
            break;
        case 2: // Bottom
            x = Math.random() * canvas.width;
            y = canvas.height + 50;
            break;
        case 3: // Left
            x = -50;
            y = Math.random() * canvas.height;
            break;
    }

    // Determine monster type based on difficulty and random chance
    if (!type) {
        const rand = Math.random();
        const difficulty = game.difficultyMultiplier;

        if (difficulty > 3 && rand < 0.15) {
            type = 'ranged';
        } else if (difficulty > 2 && rand < 0.2) {
            type = 'exploder';
        } else if (difficulty > 1.5 && rand < 0.25) {
            type = 'splitter';
        } else if (difficulty > 1 && rand < 0.3) {
            type = 'tank';
        } else if (rand < 0.3) {
            type = 'fast';
        } else {
            type = 'normal';
        }
    }

    game.monsters.push(new Monster(x, y, type));
}

// Check collision between player dash and monsters
function checkCollisions() {
    // Check monster collisions
    for (let i = game.monsters.length - 1; i >= 0; i--) {
        const monster = game.monsters[i];
        if (monster.dead) continue;

        const dx = player.x - monster.x;
        const dy = player.y - monster.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < player.radius + monster.radius) {
            if (player.dashing) {
                // Player hits monster with dash
                if (!monster.dead && !monster.hasBeenKilled) {
                    // Calculate slash angle (perpendicular to dash direction)
                    const dashDx = player.dashTarget.x - player.x;
                    const dashDy = player.dashTarget.y - player.y;
                    const dashDistance = Math.sqrt(dashDx * dashDx + dashDy * dashDy);

                    if (dashDistance > 0) {
                        // Slash angle is perpendicular to dash direction
                        const dashAngle = Math.atan2(dashDy, dashDx);
                        const slashAngle = dashAngle + Math.PI / 2;

                        // Create sword slash effect at monster position
                        const slash = new SwordSlash(monster.x, monster.y, slashAngle, 80);
                        game.swordSlashes.push(slash);

                        // Trigger death animation
                        monster.triggerDeath(slashAngle);
                        monster.hasBeenKilled = true;

                        player.triggerVibration();
                        game.kills++;
                        game.totalKills++;
                        addScore(10);
                        triggerScreenShake(3);

                        // Visual feedback
                        game.damageNumbers.push(new DamageNumber(monster.x, monster.y - 20, 10, '#4a9eff'));
                        game.hitIndicators.push(new HitIndicator(monster.x, monster.y, 'kill'));

                        // Sound
                        soundSystem.playKill();

                        // Random chance to spawn power-up
                        if (Math.random() < 0.15) {
                            spawnPowerUp(monster.x, monster.y);
                        }

                        // Update record if needed
                        if (game.kills > game.record) {
                            game.record = game.kills;
                            localStorage.setItem('dashGameRecord', game.record.toString());
                        }
                    }
                }
            } else if (!game.invulnerable && !game.shieldActive && !monster.hasHitPlayer) {
                // Monster hits player (only when not dashing)
                if (game.gameMode === 'hardcore') {
                    game.health = 0; // One hit death in hardcore
                } else {
                    game.health--;
                }
                game.invulnerable = true;
                game.invulnerableTime = 0;
                monster.hasHitPlayer = true;
                player.triggerVibration();
                triggerScreenShake(8);
                game.combo = 0; // Reset combo on damage

                // Visual and audio feedback
                soundSystem.playHit();
                game.hitIndicators.push(new HitIndicator(player.x, player.y - 30, 'hit'));

                if (game.health <= 0) {
                    game.gameOver = true;
                    // Save total play time
                    game.totalPlayTime += Math.floor(game.gameTime);
                    localStorage.setItem('totalPlayTime', game.totalPlayTime.toString());
                    localStorage.setItem('totalKills', game.totalKills.toString());
                }
            }
        }
    }

    // Check boss collisions
    for (let i = game.bosses.length - 1; i >= 0; i--) {
        const boss = game.bosses[i];
        if (boss.dead) continue;

        const dx = player.x - boss.x;
        const dy = player.y - boss.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < player.radius + boss.radius) {
            if (player.dashing) {
                boss.takeDamage();
                // Visual feedback
                game.damageNumbers.push(new DamageNumber(boss.x, boss.y - 30, 1, '#ffd700'));
                game.hitIndicators.push(new HitIndicator(boss.x, boss.y, 'critical'));
                soundSystem.playBossHit();
                if (boss.dead) {
                    game.bosses.splice(i, 1);
                }
            } else if (!game.invulnerable && !game.shieldActive) {
                game.health--;
                game.invulnerable = true;
                game.invulnerableTime = 0;
                player.triggerVibration();
                triggerScreenShake(10);
                game.combo = 0;

                if (game.health <= 0) {
                    game.gameOver = true;
                }
            }
        }
    }

    // Check power-up collisions
    for (let i = game.powerUps.length - 1; i >= 0; i--) {
        const powerUp = game.powerUps[i];
        const dx = player.x - powerUp.x;
        const dy = player.y - powerUp.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < player.radius + powerUp.radius) {
            applyPowerUp(powerUp);
            game.powerUps.splice(i, 1);
            soundSystem.playPowerUp();
            game.hitIndicators.push(new HitIndicator(powerUp.x, powerUp.y, 'hit'));
        }
    }

    // Check obstacle collisions
    for (let i = game.obstacles.length - 1; i >= 0; i--) {
        const obstacle = game.obstacles[i];
        const dx = player.x - obstacle.x;
        const dy = player.y - obstacle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < player.radius + Math.max(obstacle.width, obstacle.height) / 2) {
            if (!game.invulnerable && !game.shieldActive && !player.dashing) {
                game.health--;
                game.invulnerable = true;
                game.invulnerableTime = 0;
                player.triggerVibration();
                triggerScreenShake(5);
                game.combo = 0;

                if (game.health <= 0) {
                    game.gameOver = true;
                }
            }
        }
    }

    // Check projectile collisions with player
    for (let i = game.projectiles.length - 1; i >= 0; i--) {
        const projectile = game.projectiles[i];
        const dx = player.x - projectile.x;
        const dy = player.y - projectile.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < player.radius + projectile.radius) {
            if (!game.invulnerable && !game.shieldActive && !player.dashing) {
                game.health--;
                game.invulnerable = true;
                game.invulnerableTime = 0;
                player.triggerVibration();
                triggerScreenShake(5);
                game.combo = 0;
                game.projectiles.splice(i, 1);

                if (game.health <= 0) {
                    game.gameOver = true;
                }
            } else if (player.dashing) {
                // Destroy projectile on dash
                game.projectiles.splice(i, 1);
            }
        }
    }
}

// Initialize player
const player = new Player(canvas.width / 2, canvas.height / 2);

// Event listeners
document.addEventListener('keydown', (e) => {
    game.keys[e.key.toLowerCase()] = true;
});

document.addEventListener('keyup', (e) => {
    game.keys[e.key.toLowerCase()] = false;
});

canvas.addEventListener('mousemove', (e) => {
    const rect = canvas.getBoundingClientRect();
    game.mouse.x = e.clientX - rect.left;
    game.mouse.y = e.clientY - rect.top;
});

canvas.addEventListener('click', (e) => {
    // Don't allow dashing during tutorial
    if (game.paused) return;

    if (e.button === 0 || !e.button) { // Left mouse button (or no button for click event)
        const rect = canvas.getBoundingClientRect();
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        player.startDash(mouseX, mouseY);
    }
});

// Restart game on R key, Pause on ESC, Ultimate on Space
document.addEventListener('keydown', (e) => {
    if (e.key.toLowerCase() === 'r' && game.gameOver && !game.paused) {
        restartGame();
    }

    if (e.key === 'Escape') {
        // Don't allow pause during tutorial
        if (game.tutorialShown) return;

        if (game.gameOver) {
            // Show main menu
            openMainMenu();
        } else {
            // Toggle pause and show/hide menu
            if (game.menuOpen) {
                // Menu is open, close it and resume
                resumeGame();
            } else {
                // Menu is closed, open it and pause
                openMainMenu();
            }
        }
    }

    // Ultimate ability on Space
    if (e.key === ' ' && !game.paused && !game.gameOver) {
        e.preventDefault();
        activateUltimate();
    }
});

// Function to draw a heart shape
function drawHeart(ctx, x, y, size, fillColor, strokeColor) {
    ctx.save();
    ctx.translate(x, y);
    ctx.scale(size / 20, size / 20); // Scale to desired size

    ctx.fillStyle = fillColor;
    ctx.strokeStyle = strokeColor;
    ctx.lineWidth = 0.5;

    ctx.beginPath();
    // Left curve
    ctx.moveTo(0, 5);
    ctx.bezierCurveTo(-5, -5, -10, -5, -10, 0);
    ctx.bezierCurveTo(-10, 5, -5, 10, 0, 15);
    // Right curve
    ctx.bezierCurveTo(5, 10, 10, 5, 10, 0);
    ctx.bezierCurveTo(10, -5, 5, -5, 0, 5);
    ctx.closePath();

    ctx.fill();
    ctx.stroke();
    ctx.restore();
}

// Draw UI elements
function drawUI() {
    // Draw hearts at bottom
    const heartSize = 30;
    const heartSpacing = 40;
    const startX = (canvas.width - (game.maxHealth * heartSpacing)) / 2;
    const y = canvas.height - 50;

    for (let i = 0; i < game.maxHealth; i++) {
        const fillColor = i < game.health ? '#ff4757' : '#444';
        const strokeColor = i < game.health ? '#ff6b7a' : '#666';
        drawHeart(ctx, startX + i * heartSpacing, y, heartSize, fillColor, strokeColor);
    }

    // Draw dash energy bar
    const energyBarWidth = 200;
    const energyBarHeight = 20;
    const energyBarX = canvas.width - energyBarWidth - 20;
    const energyBarY = 20;

    // Background
    ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
    ctx.fillRect(energyBarX, energyBarY, energyBarWidth, energyBarHeight);

    // Energy fill
    const energyPercent = game.dashEnergy / game.maxDashEnergy;
    const gradient = ctx.createLinearGradient(energyBarX, energyBarY, energyBarX + energyBarWidth, energyBarY);
    gradient.addColorStop(0, '#00d2d3');
    gradient.addColorStop(1, '#4a9eff');
    ctx.fillStyle = gradient;
    ctx.fillRect(energyBarX, energyBarY, energyBarWidth * energyPercent, energyBarHeight);

    // Border
    ctx.strokeStyle = '#ffffff';
    ctx.lineWidth = 2;
    ctx.strokeRect(energyBarX, energyBarY, energyBarWidth, energyBarHeight);

    // Energy text
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 14px Arial';
    ctx.textAlign = 'center';
    ctx.fillText(`${t('dashEnergy')}: ${Math.floor(game.dashEnergy)}/${game.maxDashEnergy}`, energyBarX + energyBarWidth / 2, energyBarY + 35);

    // Draw ultimate meter
    const ultimateBarWidth = 200;
    const ultimateBarHeight = 20;
    const ultimateBarX = canvas.width - ultimateBarWidth - 20;
    const ultimateBarY = 70;

    // Background
    ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
    ctx.fillRect(ultimateBarX, ultimateBarY, ultimateBarWidth, ultimateBarHeight);

    // Ultimate fill
    const ultimatePercent = game.ultimateMeter / game.maxUltimateMeter;
    const ultimateGradient = ctx.createLinearGradient(ultimateBarX, ultimateBarY, ultimateBarX + ultimateBarWidth, ultimateBarY);
    ultimateGradient.addColorStop(0, '#ff4757');
    ultimateGradient.addColorStop(1, '#ffd700');
    ctx.fillStyle = ultimateGradient;
    ctx.fillRect(ultimateBarX, ultimateBarY, ultimateBarWidth * ultimatePercent, ultimateBarHeight);

    // Glow effect when ready
    if (game.ultimateReady) {
        ctx.shadowBlur = 15;
        ctx.shadowColor = '#ffd700';
        ctx.fillRect(ultimateBarX, ultimateBarY, ultimateBarWidth, ultimateBarHeight);
        ctx.shadowBlur = 0;
    }

    // Border
    ctx.strokeStyle = game.ultimateReady ? '#ffd700' : '#ffffff';
    ctx.lineWidth = game.ultimateReady ? 3 : 2;
    ctx.strokeRect(ultimateBarX, ultimateBarY, ultimateBarWidth, ultimateBarHeight);

    // Ultimate text
    ctx.fillStyle = game.ultimateReady ? '#ffd700' : '#ffffff';
    ctx.font = 'bold 14px Arial';
    ctx.textAlign = 'center';
    const ultimateText = game.ultimateReady ? t('ultimateReady') : `${t('ultimate')}: ${Math.floor(game.ultimateMeter)}/${game.maxUltimateMeter}`;
    ctx.fillText(ultimateText, ultimateBarX + ultimateBarWidth / 2, ultimateBarY + 35);

    // Draw stats on left
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 24px Arial';
    ctx.textAlign = 'left';
    ctx.fillText(`${t('kills')}: ${game.kills}`, 20, 40);
    ctx.fillText(`${t('score')}: ${game.score}`, 20, 70);
    ctx.fillText(`${t('highScore')}: ${game.highScore}`, 20, 100);

    // Draw combo
    if (game.combo > 0) {
        const comboSize = 32 + Math.min(game.combo * 2, 20);
        ctx.fillStyle = `rgba(255, 215, 0, ${0.7 + Math.sin(Date.now() / 100) * 0.3})`;
        ctx.font = `bold ${comboSize}px Arial`;
        ctx.textAlign = 'center';
        ctx.fillText(`${game.combo}${t('comboText')}`, canvas.width / 2, 80);
        ctx.strokeStyle = '#ffd700';
        ctx.lineWidth = 3;
        ctx.strokeText(`${game.combo}${t('comboText')}`, canvas.width / 2, 80);
    }

    // Draw time and difficulty
    const minutes = Math.floor(game.gameTime / 60);
    const seconds = Math.floor(game.gameTime % 60);
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 20px Arial';
    ctx.textAlign = 'left';
    ctx.fillText(`${t('time')}: ${minutes}:${seconds.toString().padStart(2, '0')}`, 20, 130);
    ctx.fillText(`${t('difficulty')}: ${game.difficultyMultiplier.toFixed(1)}x`, 20, 160);

    // Draw power-up indicators
    if (game.speedBoostActive) {
        ctx.fillStyle = 'rgba(74, 158, 255, 0.8)';
        ctx.font = 'bold 18px Arial';
        ctx.fillText(`⚡ ${t('speedBoost')}: ${Math.ceil(game.speedBoostTime / 1000)}s`, 20, 190);
    }

    if (game.shieldActive) {
        ctx.fillStyle = 'rgba(255, 165, 2, 0.8)';
        ctx.font = 'bold 18px Arial';
        ctx.fillText(`🛡️ ${t('shield')}: ${Math.ceil(game.shieldTime / 1000)}s`, 20, 220);
    }

    // Draw game mode
    ctx.fillStyle = '#aaaaaa';
    ctx.font = '16px Arial';
    ctx.textAlign = 'right';
    const modeText = game.gameMode === 'endless' ? t('endless') :
        game.gameMode === 'timeAttack' ? t('timeAttack') :
            game.gameMode === 'killTarget' ? t('killTarget') :
                t('hardcore');
    ctx.fillText(`${t('mode')}: ${modeText}`, canvas.width - 20, canvas.height - 20);
}

// Draw game over screen
function drawGameOver() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.9)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 48px Arial';
    ctx.textAlign = 'center';
    ctx.fillText(t('gameOver'), canvas.width / 2, canvas.height / 2 - 120);

    ctx.font = '28px Arial';
    ctx.fillText(`${t('monstersKilled')}: ${game.kills}`, canvas.width / 2, canvas.height / 2 - 70);
    ctx.fillText(`${t('score')}: ${game.score}`, canvas.width / 2, canvas.height / 2 - 40);
    ctx.fillText(`${t('maxCombo')}: ${game.maxCombo}x`, canvas.width / 2, canvas.height / 2 - 10);
    const minutes = Math.floor(game.gameTime / 60);
    const seconds = Math.floor(game.gameTime % 60);
    ctx.fillText(`${t('survived')}: ${minutes}:${seconds.toString().padStart(2, '0')}`, canvas.width / 2, canvas.height / 2 + 20);
    ctx.fillText(`${t('highScore')}: ${game.highScore}`, canvas.width / 2, canvas.height / 2 + 50);

    ctx.font = '24px Arial';
    ctx.fillText(t('pressRRestart'), canvas.width / 2, canvas.height / 2 + 100);
    ctx.fillText(t('pressEscMenu'), canvas.width / 2, canvas.height / 2 + 130);
}

// Update difficulty based on time
function updateDifficulty() {
    if (game.gameOver) return;

    // Update game time
    const currentTime = Date.now();
    if (game.startTime === 0) {
        game.startTime = currentTime;
    }
    game.gameTime = (currentTime - game.startTime) / 1000; // Time in seconds

    // Increase difficulty over time
    // Difficulty multiplier increases every 10 seconds
    // Formula: 1.0 + (time / 10) * 0.1, capped at reasonable max
    game.difficultyMultiplier = Math.min(1.0 + (game.gameTime / 10) * 0.15, 5.0);

    // Decrease spawn interval (more frequent spawning)
    // Start at 2000ms, decrease to minimum of 400ms
    game.spawnInterval = Math.max(400, game.baseSpawnInterval - (game.gameTime / 10) * 200);
}

// Game loop
function gameLoop() {
    // Clear canvas
    ctx.fillStyle = '#0f3460';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw grid background
    ctx.strokeStyle = '#16213e';
    ctx.lineWidth = 1;
    for (let x = 0; x < canvas.width; x += 50) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
    }
    for (let y = 0; y < canvas.height; y += 50) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
    }

    // Pause game updates if tutorial is showing or game is paused
    if (game.paused && game.tutorialShown) {
        // Still draw the player and monsters in their current state
        game.monsters.forEach(monster => monster.draw());
        player.draw();

        // Draw pause message only if tutorial is actually showing
        ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = '#ffffff';
        ctx.font = 'bold 36px Arial';
        ctx.textAlign = 'center';
        ctx.fillText(t('tutorialActive'), canvas.width / 2, canvas.height / 2);
        ctx.font = '24px Arial';
        ctx.fillText(t('completeToStart'), canvas.width / 2, canvas.height / 2 + 40);

        requestAnimationFrame(gameLoop);
        return;
    }

    // Handle regular pause (ESC key)
    if (game.paused && !game.tutorialShown && !game.gameOver) {
        // Draw pause overlay
        ctx.fillStyle = 'rgba(0, 0, 0, 0.8)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = '#ffffff';
        ctx.font = 'bold 48px Arial';
        ctx.textAlign = 'center';
        ctx.fillText(t('paused'), canvas.width / 2, canvas.height / 2);
        ctx.font = '24px Arial';
        ctx.fillText(t('pressEscResume'), canvas.width / 2, canvas.height / 2 + 40);

        requestAnimationFrame(gameLoop);
        return;
    }

    if (!game.gameOver) {
        // Update difficulty
        updateDifficulty();

        // Check game mode win conditions
        if (game.gameMode === 'timeAttack' && game.gameTime >= game.gameModeTarget) {
            game.gameOver = true;
            // Victory!
        } else if (game.gameMode === 'killTarget' && game.kills >= game.gameModeTarget) {
            game.gameOver = true;
            // Victory!
        }

        // Weapon upgrades based on kills
        if (game.kills > 0 && game.kills % 25 === 0 && game.swordLength < game.baseSwordLength * 2) {
            game.swordLength += 5;
            game.damageMultiplier += 0.1;
        }

        // Spawn obstacles periodically
        if (game.difficultyMultiplier > 2 && Math.random() < 0.001) {
            const side = Math.floor(Math.random() * 4);
            let x, y;
            switch (side) {
                case 0: x = Math.random() * canvas.width; y = -50; break;
                case 1: x = canvas.width + 50; y = Math.random() * canvas.height; break;
                case 2: x = Math.random() * canvas.width; y = canvas.height + 50; break;
                case 3: x = -50; y = Math.random() * canvas.height; break;
            }
            game.obstacles.push(new Obstacle(x, y, 40, 40));
        }

        // Update obstacles (move them)
        game.obstacles.forEach(obstacle => {
            const dx = player.x - obstacle.x;
            const dy = player.y - obstacle.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            if (distance < 300) {
                const speed = 0.5;
                obstacle.x += (dx / distance) * speed;
                obstacle.y += (dy / distance) * speed;
            }
        });

        // Update dash energy regeneration
        if (game.dashEnergy < game.maxDashEnergy) {
            game.dashEnergy = Math.min(game.maxDashEnergy, game.dashEnergy + game.dashEnergyRegen);
        }

        // Update power-up timers
        if (game.speedBoostActive) {
            game.speedBoostTime -= 16;
            if (game.speedBoostTime <= 0) {
                game.speedBoostActive = false;
                game.speedMultiplier = 1.0;
            }
        }

        if (game.shieldActive) {
            game.shieldTime -= 16;
            if (game.shieldTime <= 0) {
                game.shieldActive = false;
            }
        }

        // Update combo timer
        updateCombo();

        // Update ultimate
        updateUltimate();

        // Update visual feedback systems
        game.damageNumbers = game.damageNumbers.filter(num => num.update());
        game.hitIndicators = game.hitIndicators.filter(ind => ind.update());
        game.killStreakNotifications = game.killStreakNotifications.filter(notif => notif.update());
        game.achievementNotifications = game.achievementNotifications.filter(notif => notif.update());

        // Update screen shake
        updateScreenShake();

        // Apply screen shake offset
        ctx.save();
        ctx.translate(game.screenShake.x, game.screenShake.y);

        // Spawn monsters (more frequently as difficulty increases)
        const now = Date.now();
        if (now - game.lastSpawn > game.spawnInterval) {
            // Spawn multiple monsters as difficulty increases
            const spawnCount = Math.floor(game.difficultyMultiplier / 1.5) + 1;
            for (let i = 0; i < spawnCount; i++) {
                setTimeout(() => spawnMonster(), i * 100);
            }
            game.lastSpawn = now;
        }

        // Spawn boss periodically
        if (game.kills > 0 && game.kills % 50 === 0 && now - game.lastBossSpawn > 10000) {
            spawnBoss();
            game.lastBossSpawn = now;
        }

        // Update player
        player.update();

        // Update monsters
        game.monsters.forEach(monster => monster.update());

        // Update bosses
        game.bosses.forEach(boss => boss.update());

        // Update projectiles
        game.projectiles = game.projectiles.filter(projectile => projectile.update());

        // Update power-ups
        game.powerUps = game.powerUps.filter(powerUp => powerUp.update());

        // Update particles
        game.particles = game.particles.filter(particle => {
            particle.update();
            return particle.life > 0;
        });

        // Update sword slashes
        game.swordSlashes = game.swordSlashes.filter(slash => {
            slash.update();
            return slash.life > 0;
        });

        // Remove dead monsters (only after they've fully animated and exploded)
        game.monsters = game.monsters.filter(monster => {
            if (!monster.dead) return true;
            if (!monster.exploded) return true;
            return monster.radius > 0;
        });

        // Remove dead bosses
        game.bosses = game.bosses.filter(boss => !boss.dead);

        // Check collisions
        checkCollisions();

        // Draw everything (order matters for visual layering)
        // Draw obstacles
        game.obstacles.forEach(obstacle => obstacle.draw());

        // Draw sword slashes first (behind monsters)
        game.swordSlashes.forEach(slash => slash.draw());

        // Draw monsters
        game.monsters.forEach(monster => monster.draw());

        // Draw bosses
        game.bosses.forEach(boss => boss.draw());

        // Draw projectiles
        game.projectiles.forEach(projectile => projectile.draw());

        // Draw power-ups
        game.powerUps.forEach(powerUp => powerUp.draw());

        // Draw player
        player.draw();

        // Draw shield effect
        if (game.shieldActive) {
            ctx.save();
            ctx.strokeStyle = 'rgba(255, 165, 2, 0.6)';
            ctx.lineWidth = 3;
            ctx.beginPath();
            ctx.arc(player.x, player.y, player.radius + 5, 0, Math.PI * 2);
            ctx.stroke();
            ctx.restore();
        }

        // Draw ultimate active effect
        if (game.ultimateActive) {
            ctx.save();
            const pulse = Math.sin(Date.now() / 100) * 0.3 + 0.7;
            ctx.globalAlpha = pulse;
            ctx.strokeStyle = game.ultimateType === 'damageBoost' ? 'rgba(255, 71, 87, 0.8)' : 'rgba(255, 215, 0, 0.8)';
            ctx.lineWidth = 5;
            ctx.shadowBlur = 20;
            ctx.shadowColor = game.ultimateType === 'damageBoost' ? '#ff4757' : '#ffd700';
            ctx.beginPath();
            ctx.arc(player.x, player.y, player.radius + 10, 0, Math.PI * 2);
            ctx.stroke();
            ctx.restore();
        }

        // Draw particles on top (explosion effects)
        game.particles.forEach(particle => particle.draw());

        // Restore screen shake transform
        ctx.restore();

        // Draw cursor aim line (inside screen shake transform)
        if (!player.dashing) {
            ctx.beginPath();
            ctx.moveTo(player.x, player.y);
            ctx.lineTo(game.mouse.x, game.mouse.y);
            ctx.strokeStyle = 'rgba(255, 255, 255, 0.3)';
            ctx.lineWidth = 1;
            ctx.setLineDash([5, 5]);
            ctx.stroke();
            ctx.setLineDash([]);
        }

        // Restore screen shake transform before UI
        ctx.restore();

        // Draw visual feedback (not affected by screen shake)
        game.damageNumbers.forEach(num => num.draw());
        game.hitIndicators.forEach(ind => ind.draw());
        game.killStreakNotifications.forEach(notif => notif.draw());
        game.achievementNotifications.forEach(notif => notif.draw());

        // Draw UI (not affected by screen shake)
        drawUI();
    } else {
        // Draw game over screen
        drawGameOver();
    }

    requestAnimationFrame(gameLoop);
}

// Restart game function
function restartGame() {
    // Reset health based on game mode
    if (game.gameMode === 'hardcore') {
        game.maxHealth = 1;
    } else {
        game.maxHealth = 5;
    }
    game.health = game.maxHealth;
    game.kills = 0;
    game.score = 0;
    game.combo = 0;
    game.comboTime = 0;
    game.maxCombo = 0;
    game.gameOver = false;
    game.invulnerable = false;
    game.invulnerableTime = 0;
    game.shieldActive = false;
    game.shieldTime = 0;
    game.speedBoostActive = false;
    game.speedBoostTime = 0;
    game.speedMultiplier = 1.0;
    game.monsters = [];
    game.bosses = [];
    game.powerUps = [];
    game.projectiles = [];
    game.obstacles = [];
    game.particles = [];
    game.swordSlashes = [];
    game.lastSpawn = Date.now();
    game.lastBossSpawn = 0;
    game.startTime = 0;
    game.gameTime = 0;
    game.difficultyMultiplier = 1.0;
    game.spawnInterval = game.baseSpawnInterval;
    game.dashEnergy = game.maxDashEnergy;
    game.screenShake = { x: 0, y: 0, intensity: 0 };
    game.swordLength = game.baseSwordLength;
    game.damageMultiplier = 1.0;
    game.ultimateMeter = 0;
    game.ultimateReady = false;
    game.ultimateActive = false;
    game.ultimateTime = 0;
    game.damageNumbers = [];
    game.hitIndicators = [];
    game.killStreakNotifications = [];
    game.achievementNotifications = [];
    player.x = canvas.width / 2;
    player.y = canvas.height / 2;
    player.dashing = false;
    player.dashTarget = { x: player.x, y: player.y };
}

// Tutorial Management
// Update UI text based on language
function updateUILanguage() {
    // Menu titles
    document.getElementById('menuTitle').textContent = t('mainMenu');
    document.getElementById('btnPlayGame').textContent = t('playGame');
    document.getElementById('btnStats').textContent = t('stats');
    document.getElementById('btnAchievements').textContent = t('achievements');
    document.getElementById('btnSettings').textContent = t('settings');

    // Mode selection
    document.getElementById('modeSelectionTitle').textContent = t('selectGameMode');
    document.getElementById('mode-endless').textContent = t('endless');
    document.getElementById('mode-endless-desc').textContent = t('endlessDesc');
    document.getElementById('mode-timeAttack').textContent = t('timeAttack');
    document.getElementById('mode-timeAttack-desc').textContent = t('timeAttackDesc');
    document.getElementById('mode-killTarget').textContent = t('killTarget');
    document.getElementById('mode-killTarget-desc').textContent = t('killTargetDesc');
    document.getElementById('mode-hardcore').textContent = t('hardcore');
    document.getElementById('mode-hardcore-desc').textContent = t('hardcoreDesc');

    // Stats
    document.getElementById('statsTitle').textContent = t('stats');
    document.getElementById('allTimeTitle').textContent = t('allTimeTitle') || 'All Time Statistics';
    document.getElementById('totalKillsLabel').textContent = t('totalKills') + ':';
    document.getElementById('totalPlayTimeLabel').textContent = t('totalPlayTime') + ':';
    document.getElementById('highScoreLabel').textContent = t('highScore') + ':';
    document.getElementById('recordLabel').textContent = t('record') + ':';

    // Achievements
    document.getElementById('achievementsTitle').textContent = t('achievementsTitle');

    // Settings
    document.getElementById('settingsTitle').textContent = t('settings');
    document.getElementById('languageLabel').textContent = t('language') + ':';
    document.getElementById('langBtn-en').textContent = 'English';
    document.getElementById('langBtn-pt').textContent = 'Português';

    // Tutorial
    document.getElementById('tutorialTitle').textContent = t('welcomeTitle');
    document.getElementById('howToPlayTitle').textContent = t('howToPlay');
    document.getElementById('movementLabel').textContent = t('movement') + ':';
    document.getElementById('dashAttackLabel').textContent = t('dashAttack') + ':';
    document.getElementById('objectiveLabel').textContent = t('objective') + ':';
    document.getElementById('movementDesc').innerHTML = t('moveInstructions').replace(/WASD/g, '<kbd>W</kbd><kbd>A</kbd><kbd>S</kbd><kbd>D</kbd>').replace(/Arrow Keys/g, '<kbd>↑</kbd><kbd>↓</kbd><kbd>←</kbd><kbd>→</kbd>');

    // Update language button states
    document.querySelectorAll('.lang-button').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.lang === currentLanguage) {
            btn.classList.add('active');
        }
    });
}

// Resume game from menu
function resumeGame() {
    document.getElementById('mainMenu').classList.add('hidden');
    document.getElementById('statsScreen').classList.add('hidden');
    document.getElementById('achievementsScreen').classList.add('hidden');
    document.getElementById('settingsScreen').classList.add('hidden');
    game.menuOpen = false;
    game.paused = false;
}

// Open main menu
function openMainMenu() {
    document.getElementById('mainMenu').classList.remove('hidden');
    document.getElementById('modeSelection').classList.add('hidden');
    document.getElementById('statsScreen').classList.add('hidden');
    document.getElementById('achievementsScreen').classList.add('hidden');
    document.getElementById('settingsScreen').classList.add('hidden');
    game.menuOpen = true;
    game.paused = true;

    // Show/hide resume button based on whether a game is in progress
    const resumeBtn = document.getElementById('btnResumeGame');
    if (resumeBtn) {
        // Show resume if game was already started (not a fresh start)
        resumeBtn.style.display = (game.startTime > 0) ? 'block' : 'none';
    }
}

// Open stats screen
function openStatsScreen() {
    document.getElementById('statsScreen').classList.remove('hidden');
    document.getElementById('mainMenu').classList.add('hidden');

    // Update stats
    const hours = Math.floor(game.totalPlayTime / 3600);
    const minutes = Math.floor((game.totalPlayTime % 3600) / 60);

    document.getElementById('totalKillsValue').textContent = game.totalKills;
    document.getElementById('totalPlayTimeValue').textContent = `${hours}h ${minutes}m`;
    document.getElementById('highScoreValue').textContent = game.highScore;
    document.getElementById('recordValue').textContent = game.record;
}

// Open achievements screen
function openAchievementsScreen() {
    document.getElementById('achievementsScreen').classList.remove('hidden');
    document.getElementById('mainMenu').classList.add('hidden');

    // Generate achievements list
    const achievementsList = document.getElementById('achievementsList');
    achievementsList.innerHTML = '';

    // Sample achievements to display
    const sampleAchievements = [
        { id: 'firstKill', icon: '⚔️', name: 'First Blood', desc: 'Defeat your first monster' },
        { id: 'killer100', icon: '💀', name: 'Centennial', desc: 'Defeat 100 monsters' },
        { id: 'survivor', icon: '🛡️', name: 'Survivor', desc: 'Survive for 5 minutes' },
        { id: 'ultimate', icon: '⚡', name: 'Ultimate Power', desc: 'Use ultimate ability 10 times' },
    ];

    sampleAchievements.forEach(ach => {
        const unlocked = game.achievements.includes(ach.id);
        const div = document.createElement('div');
        div.className = `achievement-item ${unlocked ? '' : 'locked'}`;
        div.innerHTML = `
            <div class="achievement-icon">${ach.icon}</div>
            <div class="achievement-name">${ach.name}</div>
            <div class="achievement-desc">${ach.desc}</div>
            <div class="achievement-status">${unlocked ? t('unlocked') : t('locked')}</div>
        `;
        achievementsList.appendChild(div);
    });
}

// Open settings screen
function openSettingsScreen() {
    document.getElementById('settingsScreen').classList.remove('hidden');
    document.getElementById('mainMenu').classList.add('hidden');

    // Update language button states
    document.querySelectorAll('.lang-button').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.lang === currentLanguage) {
            btn.classList.add('active');
        }
    });
}

// Close all screens and start game mode selection
function startGameFromMenu() {
    document.getElementById('mainMenu').classList.add('hidden');
    document.getElementById('modeSelection').classList.remove('hidden');
    game.paused = true;
}

// Initialize menu
function initMenu() {
    const mainMenu = document.getElementById('mainMenu');
    const statsScreen = document.getElementById('statsScreen');
    const achievementsScreen = document.getElementById('achievementsScreen');
    const settingsScreen = document.getElementById('settingsScreen');

    // Add Resume button to main menu (if not already present)
    let resumeButton = document.getElementById('btnResumeGame');
    if (!resumeButton) {
        resumeButton = document.createElement('button');
        resumeButton.id = 'btnResumeGame';
        resumeButton.className = 'menu-button';
        resumeButton.textContent = t('resume');
        resumeButton.addEventListener('click', resumeGame);
        resumeButton.style.display = 'none';
        const menuButtons = document.querySelector('.menu-buttons');
        menuButtons.insertBefore(resumeButton, menuButtons.firstChild);
    } else {
        resumeButton.textContent = t('resume');
    }

    // Main menu buttons
    document.getElementById('btnPlayGame').addEventListener('click', startGameFromMenu);
    document.getElementById('btnStats').addEventListener('click', openStatsScreen);
    document.getElementById('btnAchievements').addEventListener('click', openAchievementsScreen);
    document.getElementById('btnSettings').addEventListener('click', openSettingsScreen);

    // Back buttons
    document.getElementById('btnBackToMenu').addEventListener('click', openMainMenu);
    document.getElementById('btnBackFromStats').addEventListener('click', openMainMenu);
    document.getElementById('btnBackFromAchievements').addEventListener('click', openMainMenu);
    document.getElementById('btnBackFromSettings').addEventListener('click', openMainMenu);

    // Language buttons
    document.querySelectorAll('.lang-button').forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.dataset.lang;
            setLanguage(lang);
        });
    });

    // Show main menu on start
    openMainMenu();
}

function initTutorial() {
    const tutorialOverlay = document.getElementById('tutorialOverlay');
    const modeSelection = document.getElementById('modeSelection');
    const startGameBtn = document.getElementById('startGameBtn');
    const dontShowAgainCheckbox = document.getElementById('dontShowAgain');

    // Check if user has chosen to skip tutorial
    const skipTutorial = localStorage.getItem('skipTutorial') === 'true';

    if (skipTutorial) {
        // Show mode selection instead
        modeSelection.classList.remove('hidden');
        tutorialOverlay.classList.add('hidden');
        game.tutorialShown = false;
        game.paused = true;
    } else {
        // Show tutorial and pause game
        tutorialOverlay.classList.remove('hidden');
        modeSelection.classList.add('hidden');
        game.tutorialShown = true;
        game.paused = true;
    }

    // Handle start game button
    startGameBtn.addEventListener('click', () => {
        // Save preference if checkbox is checked
        if (dontShowAgainCheckbox.checked) {
            localStorage.setItem('skipTutorial', 'true');
        }

        // Hide tutorial, show mode selection
        tutorialOverlay.classList.add('hidden');
        modeSelection.classList.remove('hidden');
        game.tutorialShown = false;
        game.paused = true;
    });

    // Handle game mode selection
    document.querySelectorAll('.mode-button').forEach(button => {
        button.addEventListener('click', () => {
            const mode = button.dataset.mode;
            game.gameMode = mode;

            // Set mode-specific targets
            if (mode === 'timeAttack') {
                game.gameModeTarget = 300; // 5 minutes in seconds
            } else if (mode === 'killTarget') {
                game.gameModeTarget = 100; // 100 kills
            } else if (mode === 'hardcore') {
                game.maxHealth = 1;
                game.health = 1;
            }

            modeSelection.classList.add('hidden');
            game.tutorialShown = false;
            game.paused = false;
            restartGame();
        });
    });
}

// Load achievements from localStorage
function loadAchievements() {
    const savedAchievements = JSON.parse(localStorage.getItem('achievements') || '[]');
    savedAchievements.forEach(achievementId => {
        if (achievements[achievementId]) {
            achievements[achievementId].unlocked = true;
        }
    });
    game.achievements = savedAchievements;
}

// Initialize touch controls
function initTouchControls() {
    const joystickZone = document.getElementById('joystick-zone');
    const joystickContainer = document.getElementById('joystick-container');
    const joystickKnob = document.getElementById('joystick-knob');
    const dashZone = document.getElementById('dash-zone');

    // Joystick Logic
    joystickZone.addEventListener('touchstart', (e) => {
        e.preventDefault();
        const touch = e.changedTouches[0];
        game.joystick.id = touch.identifier;
        game.joystick.active = true;

        // Position joystick visual
        joystickContainer.style.display = 'block';
        joystickContainer.style.left = `${touch.clientX}px`;
        joystickContainer.style.top = `${touch.clientY}px`;
        joystickKnob.style.transform = `translate(-50%, -50%)`;

        // Center of joystick for calculation
        game.joystick.centerX = touch.clientX;
        game.joystick.centerY = touch.clientY;
        game.joystick.x = 0;
        game.joystick.y = 0;
    }, { passive: false });

    joystickZone.addEventListener('touchmove', (e) => {
        e.preventDefault();
        if (!game.joystick.active) return;

        for (let i = 0; i < e.changedTouches.length; i++) {
            if (e.changedTouches[i].identifier === game.joystick.id) {
                const touch = e.changedTouches[i];

                const maxDist = 35; // Max joystick radius
                let dx = touch.clientX - game.joystick.centerX;
                let dy = touch.clientY - game.joystick.centerY;
                const dist = Math.sqrt(dx * dx + dy * dy);

                // Clamp visual knob
                if (dist > maxDist) {
                    const ratio = maxDist / dist;
                    const visuallyDx = dx * ratio;
                    const visuallyDy = dy * ratio;
                    joystickKnob.style.transform = `translate(calc(-50% + ${visuallyDx}px), calc(-50% + ${visuallyDy}px))`;
                } else {
                    joystickKnob.style.transform = `translate(calc(-50% + ${dx}px), calc(-50% + ${dy}px))`;
                }

                // Normalize input for game (0 to 1)
                if (dist > 0) {
                    const normalizedMag = Math.min(dist / maxDist, 1.0);
                    game.joystick.x = (dx / dist) * normalizedMag;
                    game.joystick.y = (dy / dist) * normalizedMag;
                }
            }
        }
    }, { passive: false });

    const endJoystick = (e) => {
        e.preventDefault();
        for (let i = 0; i < e.changedTouches.length; i++) {
            if (e.changedTouches[i].identifier === game.joystick.id) {
                game.joystick.active = false;
                game.joystick.id = null;
                game.joystick.x = 0;
                game.joystick.y = 0;
                joystickContainer.style.display = 'none';
            }
        }
    };

    joystickZone.addEventListener('touchend', endJoystick);
    joystickZone.addEventListener('touchcancel', endJoystick);

    // Dash Logic (Tap on right side)
    dashZone.addEventListener('touchstart', (e) => {
        if (game.paused) return;
        e.preventDefault();

        // Perform dash for the first touch in this zone
        const touch = e.changedTouches[0];
        const rect = canvas.getBoundingClientRect();

        // Translate touch to game coordinates
        // game.scale is calculated in resizeCanvas()
        const gameX = (touch.clientX - rect.left) / game.scale;
        const gameY = (touch.clientY - rect.top) / game.scale;

        player.startDash(gameX, gameY);
    }, { passive: false });
}

// Initialize tutorial on page load
loadAchievements();
updateUILanguage();
initMenu();
initTutorial();
initTouchControls();

// Start game
gameLoop();

