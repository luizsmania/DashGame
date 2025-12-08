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

// Set canvas size (initial)
// Canvas size will be set by resizeCanvas() defined later, after game object initialization

// Animated Background System - Declare early to avoid initialization errors
const backgroundStars = [];
function initBackgroundStars() {
    if (!canvas || canvas.width === 0 || canvas.height === 0) {
        return; // Canvas not ready yet
    }
    backgroundStars.length = 0;
    const starCount = Math.floor((canvas.width * canvas.height) / 8000);
    for (let i = 0; i < starCount; i++) {
        backgroundStars.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            size: Math.random() * 2 + 0.5,
            speed: Math.random() * 0.5 + 0.1,
            opacity: Math.random() * 0.5 + 0.3,
            twinkle: Math.random() * Math.PI * 2
        });
    }
}

// Game state
const game = {
    // Menu state
    currentMenu: 'main', // main, modes, stats, achievements, settings, language
    menuOpen: false,

    keys: {},
    joystick: { x: 0, y: 0, active: false, id: null },
    rightJoystick: { x: 0, y: 0, active: false, id: null, startX: 0, startY: 0 },

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
    coinMultiplier: 1.0, // Coin multiplier from shop boosts
    // Game mode
    gameMode: 'endless', // endless, timeAttack, killTarget, hardcore, waves
    gameModeTarget: 0, // Target for time/kill modes
    // Wave system
    waveMode: false,
    currentWave: 0,
    waveBreakTime: 0,
    waveBreakDuration: 5000, // 5 seconds
    inWaveBreak: false,
    enemiesRemaining: 0,
    // Ability loadout
    selectedAbilities: [],
    activeAbilities: {}, // Active ability states
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

function resizeCanvas() {
    const container = document.getElementById('game-container');
    // Ensure container exists
    if (!container) return;

    const aspect = container.clientWidth / container.clientHeight;

    // Better responsive sizing
    const maxHeight = Math.min(800, window.innerHeight * 0.95);
    const maxWidth = Math.min(1200, window.innerWidth * 0.95);
    
    canvas.height = maxHeight;
    canvas.width = Math.max(800, Math.min(maxWidth, canvas.height * aspect));

    // Update game scale
    if (typeof game !== 'undefined') {
        game.scale = container.clientHeight / canvas.height;
    }
    
    // Reinitialize background stars on resize
    if (typeof initBackgroundStars === 'function') {
        initBackgroundStars();
    }
}

window.addEventListener('resize', resizeCanvas);
// Call once on init
resizeCanvas();
// Repeated call to handle late layout shifts
setTimeout(resizeCanvas, 100);

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

// Enhanced Particle class with more variety
class Particle {
    constructor(x, y, color = '#ff4757', type = 'square') {
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
        this.type = type; // 'square', 'circle', 'star', 'spark'
        this.gravity = type === 'spark' ? 0.2 : 0;
    }

    update() {
        this.x += this.vx;
        this.y += this.vy;
        this.vy += this.gravity; // Add gravity for sparks
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

        if (this.type === 'circle') {
            ctx.beginPath();
            ctx.arc(0, 0, this.size / 2, 0, Math.PI * 2);
            ctx.fill();
        } else if (this.type === 'star') {
            // Draw star
            ctx.beginPath();
            for (let i = 0; i < 5; i++) {
                const angle = (Math.PI * 2 * i) / 5 - Math.PI / 2;
                const x = Math.cos(angle) * this.size;
                const y = Math.sin(angle) * this.size;
                if (i === 0) ctx.moveTo(x, y);
                else ctx.lineTo(x, y);
            }
            ctx.closePath();
            ctx.fill();
        } else if (this.type === 'spark') {
            // Draw spark (line)
            ctx.strokeStyle = this.color;
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.moveTo(0, 0);
            ctx.lineTo(this.size * 2, 0);
            ctx.stroke();
        } else {
            // Square (default)
            ctx.beginPath();
            ctx.rect(-this.size / 2, -this.size / 2, this.size, this.size);
            ctx.fill();
        }

        ctx.restore();
    }
}

// Helper function to create particle bursts
function createParticleBurst(x, y, count, color, type = 'square') {
    for (let i = 0; i < count; i++) {
        const particle = new Particle(x, y, color, type);
        game.particles.push(particle);
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
        this.dashDamage = 1.0;
        this.isTeleport = false;
        this.vibrating = false;
        this.vibrationOffset = { x: 0, y: 0 };
        this.vibrationTime = 0;
        this.lastInput = { x: 0, y: 0 };
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

        // Calculate Movement Input (Early)
        let inputDx = 0;
        let inputDy = 0;

        // Keyboard input
        if (game.keys['w'] || game.keys['ArrowUp']) inputDy -= 1;
        if (game.keys['s'] || game.keys['ArrowDown']) inputDy += 1;
        if (game.keys['a'] || game.keys['ArrowLeft']) inputDx -= 1;
        if (game.keys['d'] || game.keys['ArrowRight']) inputDx += 1;

        // Normalize keyboard movement
        if (inputDx !== 0 || inputDy !== 0) {
            const length = Math.sqrt(inputDx * inputDx + inputDy * inputDy);
            if (length > 0) {
                inputDx /= length;
                inputDy /= length;
            }
        }

        // Joystick input (overrides keyboard if active)
        if (game.joystick.active) {
            inputDx = game.joystick.x;
            inputDy = game.joystick.y;
        }

        // Check for Dash Cancel (Change in input)
        // We compare current input with last frame's input
        // If significantly different, and dashing, we cancel
        if (this.dashing && this.lastInput) {
            const diffX = Math.abs(inputDx - this.lastInput.x);
            const diffY = Math.abs(inputDy - this.lastInput.y);
            // Threshold to ignore micro-jitters from touch
            if (diffX > 0.5 || diffY > 0.5) {
                this.dashing = false;
                // Don't warp position, just return control
            }
        }

        // Store input for next frame
        this.lastInput = { x: inputDx, y: inputDy };

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
        // Note: we use the already calculated inputDx/inputDy
        if (!this.dashing) {
            const dx = inputDx;
            const dy = inputDy;

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

        // Apply ability modifications
        let dashCost = game.dashCost;
        let dashRange = 1.0;
        let dashDamage = 1.0;
        let isTeleport = false;

        if (game.activeAbilities.quickDash) {
            dashCost = game.dashCost * 0.5;
            dashRange = 0.5;
        } else if (game.activeAbilities.powerDash) {
            dashCost = game.dashCost * 2.0;
            dashRange = 2.0;
            dashDamage = 2.0;
        } else if (game.activeAbilities.teleport) {
            dashCost = game.dashCost * 0.3;
            isTeleport = true;
        }

        // Check if player has enough dash energy
        if (game.dashEnergy < dashCost) return;

        // Calculate dash distance
        const dx = targetX - this.x;
        const dy = targetY - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const maxDashDistance = 200 * dashRange;

        // Clamp target based on dash range
        let finalX = targetX;
        let finalY = targetY;
        if (distance > maxDashDistance) {
            const angle = Math.atan2(dy, dx);
            finalX = this.x + Math.cos(angle) * maxDashDistance;
            finalY = this.y + Math.sin(angle) * maxDashDistance;
        }

        // Clamp to screen bounds
        const clampedX = Math.max(this.radius, Math.min(canvas.width - this.radius, finalX));
        const clampedY = Math.max(this.radius, Math.min(canvas.height - this.radius, finalY));

        this.dashTarget.x = clampedX;
        this.dashTarget.y = clampedY;
        this.dashing = true;
        this.dashDamage = dashDamage;
        this.isTeleport = isTeleport;

        // Consume dash energy
        game.dashEnergy = Math.max(0, game.dashEnergy - dashCost);

        // Sound
        soundSystem.playDash();
        
        // Teleport ability: instant movement
        if (isTeleport) {
            this.x = clampedX;
            this.y = clampedY;
            this.dashing = false;
        }
    }

    draw() {
        ctx.save();
        ctx.translate(this.x + this.vibrationOffset.x, this.y + this.vibrationOffset.y);

        // Flash effect when invulnerable
        const isFlashing = game.invulnerable && Math.floor(game.invulnerableTime / 50) % 2 === 0;
        const alpha = isFlashing ? 0.5 : 1.0;

        // Get current skin
        const skin = ninjaSkins[playerProgression.currentSkin] || ninjaSkins.default;
        const bodyColor = skin.bodyColor.replace('1)', `${alpha})`);
        const headColor = skin.headColor.replace('1)', `${alpha})`);
        const eyeColor = skin.eyeColor.replace('1)', `${alpha})`);

        // Draw ninja body (torso)
        ctx.fillStyle = bodyColor;
        ctx.beginPath();
        ctx.ellipse(0, 5, 8, 12, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.strokeStyle = `rgba(20, 20, 20, ${alpha})`;
        ctx.lineWidth = 1;
        ctx.stroke();

        // Draw ninja head
        ctx.fillStyle = headColor;
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

        // Draw eyes (glowing when dashing, using skin color)
        if (this.dashing) {
            ctx.fillStyle = `rgba(255, 100, 100, ${alpha})`;
        } else {
            ctx.fillStyle = eyeColor;
        }
        ctx.beginPath();
        ctx.arc(-4, -5, 2, 0, Math.PI * 2);
        ctx.fill();
        ctx.beginPath();
        ctx.arc(4, -5, 2, 0, Math.PI * 2);
        ctx.fill();

        // Draw ninja arms (extended when dashing, using body color)
        ctx.fillStyle = bodyColor;
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

        // Draw legs (using body color)
        ctx.fillStyle = bodyColor.replace(alpha.toString(), (alpha * 0.8).toString());
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
        this.type = type; // 'normal', 'fast', 'tank', 'splitter', 'exploder', 'ranged', 'shaman', 'shield', 'commander'
        this.lastShotTime = 0;
        this.shootInterval = 2000; // For ranged enemies
        this.threatLevel = 1; // 1=low, 2=medium, 3=high
        this.auraRadius = 0; // For synergy enemies
        this.lastHealTime = 0; // For shaman

        // Set properties based on type
        if (type === 'fast') {
            this.radius = 18;
            this.baseSpeed = game.baseMonsterSpeed * 1.8;
            this.color = '#ff6b7a';
            this.health = 1;
            this.threatLevel = 1;
        } else if (type === 'tank') {
            this.radius = 35;
            this.baseSpeed = game.baseMonsterSpeed * 0.6;
            this.color = '#8b0000';
            this.health = 3;
            this.threatLevel = 2;
        } else if (type === 'splitter') {
            this.radius = 22;
            this.baseSpeed = game.baseMonsterSpeed * 1.2;
            this.color = '#9b59b6';
            this.health = 1;
            this.threatLevel = 2;
        } else if (type === 'exploder') {
            this.radius = 20;
            this.baseSpeed = game.baseMonsterSpeed * 1.1;
            this.color = '#ff9800';
            this.health = 1;
            this.threatLevel = 2;
        } else if (type === 'ranged') {
            this.radius = 23;
            this.baseSpeed = game.baseMonsterSpeed * 0.8;
            this.color = '#00bcd4';
            this.health = 1;
            this.shootInterval = 2500;
            this.threatLevel = 2;
        } else if (type === 'shaman') {
            // Heals nearby enemies
            this.radius = 28;
            this.baseSpeed = game.baseMonsterSpeed * 0.7;
            this.color = '#9b59b6';
            this.health = 2;
            this.auraRadius = 150;
            this.threatLevel = 3; // High priority
        } else if (type === 'shield') {
            // Protects nearby enemies, blocks dashes
            this.radius = 32;
            this.baseSpeed = game.baseMonsterSpeed * 0.5;
            this.color = '#4a9eff';
            this.health = 2;
            this.auraRadius = 120;
            this.threatLevel = 3; // High priority
        } else if (type === 'commander') {
            // Buffs nearby enemies with speed/damage
            this.radius = 40;
            this.baseSpeed = game.baseMonsterSpeed * 0.4;
            this.color = '#ffd700';
            this.health = 4;
            this.auraRadius = 200;
            this.threatLevel = 3; // Highest priority
        } else { // normal
            this.radius = 25;
            this.baseSpeed = game.baseMonsterSpeed;
            this.color = '#ff4757';
            this.health = 1;
            this.threatLevel = 1;
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

        // Update speed based on current difficulty (unless slowed by ultimate)
        if (!this.originalSpeed) {
            this.speed = this.baseSpeed * game.difficultyMultiplier;
        }

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

        // Enemy Synergy Effects
        if (this.auraRadius > 0 && !this.dead) {
            // Shaman: Heal nearby enemies
            if (this.type === 'shaman') {
                const now = Date.now();
                if (now - this.lastHealTime > 2000) { // Heal every 2 seconds
                    game.monsters.forEach(monster => {
                        if (monster !== this && !monster.dead && monster.health < monster.maxHealth) {
                            const dx = monster.x - this.x;
                            const dy = monster.y - this.y;
                            const distance = Math.sqrt(dx * dx + dy * dy);
                            if (distance < this.auraRadius) {
                                monster.health = Math.min(monster.maxHealth, monster.health + 1);
                            }
                        }
                    });
                    this.lastHealTime = now;
                }
            }
            
            // Commander: Buff nearby enemies
            if (this.type === 'commander') {
                game.monsters.forEach(monster => {
                    if (monster !== this && !monster.dead) {
                        const dx = monster.x - this.x;
                        const dy = monster.y - this.y;
                        const distance = Math.sqrt(dx * dx + dy * dy);
                        if (distance < this.auraRadius) {
                            // Speed and damage buff
                            monster.speed = monster.baseSpeed * game.difficultyMultiplier * 1.5;
                            monster.buffed = true;
                        } else {
                            monster.speed = monster.baseSpeed * game.difficultyMultiplier;
                            monster.buffed = false;
                        }
                    }
                });
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

            // Draw threat indicator
            if (!this.dead) {
                ctx.save();
                ctx.translate(0, -this.radius - 15);
                let threatColor = '#4caf50'; // Green - low
                if (this.threatLevel === 2) threatColor = '#ffd700'; // Yellow - medium
                if (this.threatLevel === 3) threatColor = '#ff4757'; // Red - high
                
                ctx.fillStyle = threatColor;
                ctx.font = 'bold 16px Arial';
                ctx.textAlign = 'center';
                const threatSymbol = this.threatLevel === 3 ? '⚠️' : this.threatLevel === 2 ? '⚡' : '';
                ctx.fillText(threatSymbol, 0, 0);
                ctx.restore();
            }

            // Draw aura for synergy enemies
            if (!this.dead && this.auraRadius > 0) {
                ctx.save();
                ctx.globalAlpha = 0.2;
                ctx.strokeStyle = this.color;
                ctx.lineWidth = 2;
                ctx.setLineDash([5, 5]);
                ctx.beginPath();
                ctx.arc(0, 0, this.auraRadius, 0, Math.PI * 2);
                ctx.stroke();
                ctx.setLineDash([]);
                ctx.globalAlpha = 1;
                ctx.restore();

                // Draw synergy icon
                ctx.save();
                ctx.translate(0, -this.radius - 25);
                let icon = '';
                if (this.type === 'shaman') icon = '💚';
                else if (this.type === 'shield') icon = '🛡️';
                else if (this.type === 'commander') icon = '👑';
                ctx.font = '20px Arial';
                ctx.textAlign = 'center';
                ctx.fillText(icon, 0, 0);
                ctx.restore();
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
        // Time slow - slow down enemies for 3 seconds (50% speed instead of 30%)
        game.ultimateTime = 3000;
        game.monsters.forEach(monster => {
            // Store original speed if not already stored
            if (!monster.originalSpeed) {
                monster.originalSpeed = monster.speed;
            }
            monster.speed = monster.originalSpeed * 0.5; // 50% speed (less extreme)
        });
        // Also slow down bosses
        game.bosses.forEach(boss => {
            if (!boss.originalSpeed) {
                boss.originalSpeed = boss.speed;
            }
            boss.speed = boss.originalSpeed * 0.5;
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
                // Restore monster speeds properly
                game.monsters.forEach(monster => {
                    if (monster.originalSpeed !== undefined) {
                        monster.speed = monster.originalSpeed;
                        delete monster.originalSpeed;
                    } else {
                        monster.speed = monster.baseSpeed * game.difficultyMultiplier;
                    }
                });
                // Restore boss speeds
                game.bosses.forEach(boss => {
                    if (boss.originalSpeed !== undefined) {
                        boss.speed = boss.originalSpeed;
                        delete boss.originalSpeed;
                    } else {
                        boss.speed = boss.baseSpeed * game.difficultyMultiplier;
                    }
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

// Wave System
const waveDefinitions = [
    { enemies: [{type: 'normal', count: 5}], breakTime: 5000 },
    { enemies: [{type: 'fast', count: 8}], breakTime: 5000 },
    { enemies: [{type: 'normal', count: 3}, {type: 'tank', count: 2}], breakTime: 5000 },
    { enemies: [{type: 'ranged', count: 4}, {type: 'normal', count: 6}], breakTime: 5000 },
    { enemies: [{type: 'boss', count: 1}], breakTime: 10000 }, // Boss wave
    { enemies: [{type: 'shaman', count: 2}, {type: 'normal', count: 8}], breakTime: 5000 },
    { enemies: [{type: 'shield', count: 3}, {type: 'fast', count: 10}], breakTime: 5000 },
    { enemies: [{type: 'commander', count: 1}, {type: 'normal', count: 12}], breakTime: 5000 },
    { enemies: [{type: 'tank', count: 5}, {type: 'ranged', count: 6}], breakTime: 5000 },
    { enemies: [{type: 'boss', count: 1}, {type: 'normal', count: 10}], breakTime: 10000 }, // Elite boss wave
];

function generateWave(waveNumber) {
    // For waves beyond definition, scale up
    if (waveNumber <= waveDefinitions.length) {
        return waveDefinitions[waveNumber - 1];
    }
    
    // Generate dynamic waves for higher levels
    const baseWave = waveDefinitions[waveNumber % waveDefinitions.length];
    const scale = Math.floor(waveNumber / waveDefinitions.length) + 1;
    
    const scaledWave = {
        enemies: baseWave.enemies.map(e => ({
            type: e.type,
            count: Math.floor(e.count * scale)
        })),
        breakTime: baseWave.breakTime
    };
    
    return scaledWave;
}

function spawnWave(waveData) {
    game.enemiesRemaining = 0;
    waveData.enemies.forEach(enemyGroup => {
        game.enemiesRemaining += enemyGroup.count;
        for (let i = 0; i < enemyGroup.count; i++) {
            setTimeout(() => {
                if (enemyGroup.type === 'boss') {
                    spawnBoss();
                } else {
                    spawnMonster(enemyGroup.type);
                }
            }, i * 200); // Stagger spawns
        }
    });
}

function checkWaveComplete() {
    if (!game.waveMode || game.inWaveBreak) return false;
    
    const aliveMonsters = game.monsters.filter(m => {
        if (m.dead && m.exploded && m.radius <= 0) return false;
        return !m.dead || !m.exploded || m.radius > 0;
    }).length;
    const aliveBosses = game.bosses.filter(b => !b.dead).length;
    
    return aliveMonsters === 0 && aliveBosses === 0 && game.currentWave > 0;
}

function startWaveBreak() {
    game.inWaveBreak = true;
    game.waveBreakTime = Date.now();
    game.paused = true;
    const nextWave = generateWave(game.currentWave + 1);
    
    // Show wave break screen
    const waveBreakScreen = document.getElementById('waveBreakScreen');
    if (waveBreakScreen) {
        waveBreakScreen.classList.remove('hidden');
        
        // Update wave title
        const waveTitle = document.getElementById('waveBreakTitle');
        if (waveTitle) {
            waveTitle.textContent = `Wave ${game.currentWave} Complete!`;
        }
        
        // Update wave preview
        const previewContainer = document.getElementById('waveEnemiesPreview');
        if (previewContainer) {
            previewContainer.innerHTML = '';
            nextWave.enemies.forEach(enemyGroup => {
                const previewDiv = document.createElement('div');
                previewDiv.style.cssText = 'padding: 10px; background: rgba(15, 52, 96, 0.7); border-radius: 8px; text-align: center; border: 2px solid #4a9eff;';
                previewDiv.innerHTML = `
                    <div style="font-size: 24px; margin-bottom: 5px;">${getEnemyIcon(enemyGroup.type)}</div>
                    <div style="color: #e0e0e0; font-weight: bold;">${enemyGroup.count}x</div>
                    <div style="color: #aaa; font-size: 12px;">${getEnemyName(enemyGroup.type)}</div>
                `;
                previewContainer.appendChild(previewDiv);
            });
        }
        
        // Calculate rewards
        const coinsReward = game.currentWave * 10;
        const xpReward = game.currentWave * 5;
        const coinsEl = document.getElementById('waveRewardCoins');
        const xpEl = document.getElementById('waveRewardXP');
        if (coinsEl) coinsEl.textContent = coinsReward;
        if (xpEl) xpEl.textContent = xpReward;
        
        // Award rewards
        playerProgression.addCoins(coinsReward);
        playerProgression.addXP(xpReward);
    }
    
    // Auto-continue after break time
    let countdown = 5;
    const continueBtn = document.getElementById('btnContinueWave');
    if (continueBtn) {
        continueBtn.textContent = `Continue (${countdown}s)`;
        const updateCountdown = () => {
            if (countdown > 0) {
                countdown--;
                continueBtn.textContent = `Continue (${countdown}s)`;
                setTimeout(updateCountdown, 1000);
            } else {
                continueWave();
            }
        };
        setTimeout(updateCountdown, 1000);
    }
}

function continueWave() {
    game.currentWave++;
    game.inWaveBreak = false;
    game.waveBreakTime = 0;
    game.paused = false;
    
    const waveBreakScreen = document.getElementById('waveBreakScreen');
    if (waveBreakScreen) {
        waveBreakScreen.classList.add('hidden');
    }
    
    const nextWave = generateWave(game.currentWave);
    spawnWave(nextWave);
}

function getEnemyIcon(type) {
    const icons = {
        'normal': '👹', 'fast': '💨', 'tank': '🛡️', 'splitter': '💜', 
        'exploder': '💥', 'ranged': '🏹', 'shaman': '💚', 'shield': '🛡️', 
        'commander': '👑', 'boss': '👾'
    };
    return icons[type] || '👹';
}

function getEnemyName(type) {
    const names = {
        'normal': 'Normal', 'fast': 'Fast', 'tank': 'Tank', 'splitter': 'Splitter',
        'exploder': 'Exploder', 'ranged': 'Ranged', 'shaman': 'Shaman', 
        'shield': 'Shield Bearer', 'commander': 'Commander', 'boss': 'Boss'
    };
    return names[type] || 'Enemy';
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
    // Check for shield bearer blocking dashes
    let dashBlocked = false;
    if (player.dashing) {
        game.monsters.forEach(monster => {
            if (monster.type === 'shield' && !monster.dead) {
                // Check if any enemy is protected by this shield bearer
                game.monsters.forEach(otherMonster => {
                    if (otherMonster !== monster && !otherMonster.dead) {
                        const dx2 = otherMonster.x - monster.x;
                        const dy2 = otherMonster.y - monster.y;
                        const dist2 = Math.sqrt(dx2 * dx2 + dy2 * dy2);
                        if (dist2 < monster.auraRadius) {
                            // Check if player dash would hit protected enemy
                            const playerToEnemy = Math.sqrt(
                                (player.x - otherMonster.x) ** 2 + 
                                (player.y - otherMonster.y) ** 2
                            );
                            if (playerToEnemy < player.radius + otherMonster.radius + 20) {
                                dashBlocked = true;
                            }
                        }
                    }
                });
            }
        });
    }

    // Check monster collisions
    for (let i = game.monsters.length - 1; i >= 0; i--) {
        const monster = game.monsters[i];
        if (monster.dead) continue;

        const dx = player.x - monster.x;
        const dy = player.y - monster.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < player.radius + monster.radius) {
            if (player.dashing && !dashBlocked && !player.isTeleport) {
                // Player hits monster with dash (unless blocked by shield or teleport)
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
                        const damage = Math.floor(10 * (player.dashDamage || 1.0));
                        addScore(damage);
                        triggerScreenShake(3);

                        // Player progression rewards
                        playerProgression.addXP(10); // 10 XP per kill
                        const coinReward = Math.floor(1 * (game.coinMultiplier || 1.0));
                        playerProgression.addCoins(coinReward); // Coins per kill (with multiplier)

                        // Visual feedback
                        game.damageNumbers.push(new DamageNumber(monster.x, monster.y - 20, 10, '#4a9eff'));
                        game.hitIndicators.push(new HitIndicator(monster.x, monster.y, 'kill'));

                        // Enhanced particle effects based on combo
                        if (game.combo >= 10) {
                            createParticleBurst(monster.x, monster.y, 15, '#ffd700', 'star');
                        } else if (game.combo >= 5) {
                            createParticleBurst(monster.x, monster.y, 10, '#4a9eff', 'spark');
                        }

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
                    
                    // Clear boost flags on game over
                    localStorage.removeItem('activeSpeedBoost');
                    localStorage.removeItem('activeShieldBoost');
                    localStorage.removeItem('activeDoubleCoins');
                    
                    // Play celebration sound for new high score
                    if (game.score === game.highScore && game.score > 0) {
                        setTimeout(() => soundSystem.playNewHighScore(), 500);
                    }
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

// Restart game on R key (optional, buttons are primary), Pause on ESC, Ultimate on Space
document.addEventListener('keydown', (e) => {
    // R key still works for quick restart (optional)
    if (e.key.toLowerCase() === 'r' && game.gameOver && !game.paused) {
        hideGameOverScreen();
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

// Combo Visual Effects
function drawComboEffects() {
    if (game.combo >= 10) {
        // Screen border glow
        const intensity = Math.min(game.combo / 50, 1);
        const pulse = Math.sin(Date.now() / 100) * 0.3 + 0.7;
        
        ctx.save();
        ctx.strokeStyle = `rgba(255, 215, 0, ${intensity * pulse * 0.6})`;
        ctx.lineWidth = 8;
        ctx.shadowBlur = 25;
        ctx.shadowColor = '#ffd700';
        ctx.strokeRect(5, 5, canvas.width - 10, canvas.height - 10);
        ctx.restore();
    }

    if (game.combo >= 25) {
        // Subtle chromatic aberration effect
        ctx.save();
        ctx.globalCompositeOperation = 'screen';
        ctx.globalAlpha = 0.08;
        ctx.fillStyle = '#ff0000';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = '#00ff00';
        ctx.fillRect(2, 0, canvas.width, canvas.height);
        ctx.fillStyle = '#0000ff';
        ctx.fillRect(-2, 0, canvas.width, canvas.height);
        ctx.restore();
    }
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

    // Draw game mode and wave info
    ctx.fillStyle = '#aaaaaa';
    ctx.font = '16px Arial';
    ctx.textAlign = 'right';
    let modeText = game.gameMode === 'endless' ? t('endless') :
        game.gameMode === 'timeAttack' ? t('timeAttack') :
            game.gameMode === 'killTarget' ? t('killTarget') :
                game.gameMode === 'waves' ? 'Wave Mode' :
                    t('hardcore');
    
    if (game.waveMode && game.currentWave > 0) {
        modeText = `Wave ${game.currentWave}`;
        ctx.fillStyle = '#ffd700';
    }
    
    ctx.fillText(`${t('mode')}: ${modeText}`, canvas.width - 20, canvas.height - 20);
    
    // Draw wave progress
    if (game.waveMode && game.currentWave > 0) {
        ctx.fillStyle = '#ffffff';
        ctx.font = '14px Arial';
        ctx.textAlign = 'right';
        const aliveCount = game.monsters.filter(m => !m.dead || !m.exploded || m.radius > 0).length + 
                         game.bosses.filter(b => !b.dead).length;
        ctx.fillText(`Enemies: ${aliveCount}`, canvas.width - 20, canvas.height - 45);
    }
}

// Show game over screen
function showGameOverScreen() {
    const gameOverScreen = document.getElementById('gameOverScreen');
    if (!gameOverScreen) return;
    
    // Check if new high score
    const isNewHighScore = game.score === game.highScore && game.score > 0;
    const isNewRecord = game.kills === game.record && game.kills > 0;
    
    // Update stats
    document.getElementById('gameOverKillsValue').textContent = game.kills;
    document.getElementById('gameOverScoreValue').textContent = game.score.toLocaleString();
    document.getElementById('gameOverComboValue').textContent = `${game.maxCombo}x`;
    
    const minutes = Math.floor(game.gameTime / 60);
    const seconds = Math.floor(game.gameTime % 60);
    document.getElementById('gameOverTimeValue').textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
    document.getElementById('gameOverHighScoreValue').textContent = game.highScore.toLocaleString();
    
    // Show celebration if new record
    const celebrationEl = document.getElementById('gameOverCelebration');
    if (isNewHighScore || isNewRecord) {
        celebrationEl.style.display = 'block';
        celebrationEl.textContent = isNewHighScore ? '🎉 NEW HIGH SCORE! 🎉' : '🏆 NEW RECORD! 🏆';
        celebrationEl.className = 'game-over-celebration celebration-show';
    } else {
        celebrationEl.style.display = 'none';
    }
    
    // Highlight score if new high score
    const scoreCard = document.getElementById('gameOverScoreValue').parentElement;
    if (isNewHighScore) {
        scoreCard.classList.add('new-record');
    } else {
        scoreCard.classList.remove('new-record');
    }
    
    // Show the screen
    gameOverScreen.classList.remove('hidden');
}

// Hide game over screen
function hideGameOverScreen() {
    const gameOverScreen = document.getElementById('gameOverScreen');
    if (gameOverScreen) {
        gameOverScreen.classList.add('hidden');
    }
}

// Draw game over screen (minimal - just dark overlay, UI is HTML)
function drawGameOver() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.85)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
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

// Animated Background System - Already declared above

function drawAnimatedBackground() {
    // Draw gradient background
    const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
    gradient.addColorStop(0, 'rgba(15, 52, 96, 0.8)');
    gradient.addColorStop(0.5, 'rgba(22, 33, 62, 0.9)');
    gradient.addColorStop(1, 'rgba(10, 14, 25, 0.8)');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw animated grid with parallax effect
    const time = Date.now() * 0.001;
    const gridOffsetX = Math.sin(time * 0.1) * 10;
    const gridOffsetY = Math.cos(time * 0.1) * 10;
    
    ctx.strokeStyle = 'rgba(74, 158, 255, 0.15)';
    ctx.lineWidth = 1;
    
    // Vertical lines
    for (let x = -50 + (gridOffsetX % 50); x < canvas.width; x += 50) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
    }
    
    // Horizontal lines
    for (let y = -50 + (gridOffsetY % 50); y < canvas.height; y += 50) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
    }

    // Draw animated stars
    const currentTime = Date.now() * 0.001;
    backgroundStars.forEach(star => {
        star.twinkle += 0.05;
        star.y += star.speed;
        if (star.y > canvas.height) {
            star.y = -5;
            star.x = Math.random() * canvas.width;
        }
        
        const twinkleOpacity = star.opacity + Math.sin(star.twinkle) * 0.2;
        ctx.fillStyle = `rgba(255, 255, 255, ${twinkleOpacity})`;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();
    });

    // Draw subtle energy waves
    ctx.strokeStyle = 'rgba(74, 158, 255, 0.1)';
    ctx.lineWidth = 2;
    for (let i = 0; i < 3; i++) {
        const waveTime = currentTime + i * 2;
        const waveRadius = (waveTime * 30) % (canvas.width + canvas.height);
        const centerX = canvas.width / 2;
        const centerY = canvas.height / 2;
        
        ctx.beginPath();
        ctx.arc(centerX, centerY, waveRadius, 0, Math.PI * 2);
        ctx.stroke();
    }
}

// Game loop
function gameLoop() {
    // Draw animated background
    drawAnimatedBackground();

    // Pause game updates if tutorial is showing, game is paused, or in wave break
    if (game.inWaveBreak) {
        // Draw current state but don't update
        game.monsters.forEach(monster => monster.draw());
        game.bosses.forEach(boss => boss.draw());
        player.draw();
        drawUI();
        requestAnimationFrame(gameLoop);
        return;
    }
    
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
                // Clear boost flag if it was from shop
                if (localStorage.getItem('activeSpeedBoost') === 'true') {
                    localStorage.removeItem('activeSpeedBoost');
                }
            }
        }

        if (game.shieldActive) {
            game.shieldTime -= 16;
            if (game.shieldTime <= 0) {
                game.shieldActive = false;
                // Clear boost flag if it was from shop
                if (localStorage.getItem('activeShieldBoost') === 'true') {
                    localStorage.removeItem('activeShieldBoost');
                }
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

        // Wave mode or continuous spawning
        if (game.waveMode) {
            // Check if wave is complete
            if (checkWaveComplete() && !game.inWaveBreak) {
                startWaveBreak();
            }
            
            // Don't spawn during wave break
            if (!game.inWaveBreak && game.enemiesRemaining === 0 && game.currentWave === 0) {
                // Start first wave
                game.currentWave = 1;
                const firstWave = generateWave(1);
                spawnWave(firstWave);
            }
        } else {
            // Continuous spawning (original mode)
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
        }

        // Update player
        player.update();

        // Add movement trail particles when dashing
        if (player.dashing && Math.random() < 0.5) {
            const trailParticle = new Particle(player.x, player.y, '#4a9eff', 'circle');
            trailParticle.vx = 0;
            trailParticle.vy = 0;
            trailParticle.decay = 0.05;
            trailParticle.size = 8;
            game.particles.push(trailParticle);
        }

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

        // Draw combo effects
        drawComboEffects();

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

        // Draw combo visual effects (after all game elements)
        drawComboEffects();

        // Draw UI (not affected by screen shake)
        drawUI();

        // Update and draw performance tracking
        performance.update();
        performance.draw();
        
        // Update active effects display
        updateActiveEffectsDisplay();
    } else {
        // Draw game over screen
        drawGameOver();
        showGameOverScreen();
    }

    requestAnimationFrame(gameLoop);
}

// Active Effects Display System
// Cache for active effects to prevent unnecessary DOM updates
let lastEffectsState = '';

function updateActiveEffectsDisplay() {
    const effectsContainer = document.getElementById('activeEffects');
    if (!effectsContainer) return;
    
    // Only show during active gameplay
    if (game.gameOver || game.paused || game.menuOpen || game.inWaveBreak) {
        if (effectsContainer.innerHTML !== '') {
            effectsContainer.innerHTML = '';
            lastEffectsState = '';
        }
        return;
    }
    
    // Build current state string to compare
    const hasSpeedBoost = localStorage.getItem('activeSpeedBoost') === 'true';
    const hasShieldBoost = localStorage.getItem('activeShieldBoost') === 'true';
    const hasDoubleCoins = localStorage.getItem('activeDoubleCoins') === 'true';
    
    const speedTime = (hasSpeedBoost && game.speedBoostActive) ? Math.ceil(game.speedBoostTime / 1000) : 
                     (game.speedBoostActive && !hasSpeedBoost) ? Math.ceil(game.speedBoostTime / 1000) : null;
    const shieldTime = (hasShieldBoost && game.shieldActive) ? Math.ceil(game.shieldTime / 1000) :
                      (game.shieldActive && !hasShieldBoost) ? Math.ceil(game.shieldTime / 1000) : null;
    const ultimateTime = game.ultimateActive ? Math.ceil(game.ultimateTime / 1000) : null;
    
    const currentState = JSON.stringify({
        dashEnergy: !!playerUpgrades.dashEnergy,
        health: !!playerUpgrades.startingHealth,
        regen: !!playerUpgrades.dashRegen,
        sword: !!playerUpgrades.swordLength,
        speedBoost: game.speedBoostActive,
        speedTime: speedTime,
        shield: game.shieldActive,
        shieldTime: shieldTime,
        doubleCoins: game.coinMultiplier > 1,
        ultimate: game.ultimateActive,
        ultimateTime: ultimateTime
    });
    
    // Only update if state changed
    if (currentState === lastEffectsState) {
        // Just update timers on existing elements
        const timerElements = effectsContainer.querySelectorAll('.effect-timer');
        timerElements.forEach(timerEl => {
            const parent = timerEl.parentElement;
            if (parent) {
                const emoji = parent.querySelector('.effect-emoji')?.textContent;
                if (emoji === '💨' && speedTime !== null) {
                    timerEl.textContent = `${speedTime}s`;
                } else if (emoji === '🛡️' && shieldTime !== null) {
                    timerEl.textContent = `${shieldTime}s`;
                } else if (emoji === '⚡' && ultimateTime !== null) {
                    timerEl.textContent = `${ultimateTime}s`;
                }
            }
        });
        return;
    }
    
    lastEffectsState = currentState;
    effectsContainer.innerHTML = '';
    
    // Show shop upgrades (permanent)
    if (playerUpgrades.dashEnergy) {
        addEffectIcon(effectsContainer, '⚡', 'Dash Energy+', null, 'shop-upgrade');
    }
    if (playerUpgrades.startingHealth) {
        addEffectIcon(effectsContainer, '❤️', 'Extra Health', null, 'shop-upgrade');
    }
    if (playerUpgrades.dashRegen) {
        addEffectIcon(effectsContainer, '🔄', 'Faster Regen', null, 'shop-upgrade');
    }
    if (playerUpgrades.swordLength) {
        addEffectIcon(effectsContainer, '🗡️', 'Longer Sword', null, 'shop-upgrade');
    }
    
    // Show active boosts from shop (temporary, one-time use)
    if (hasSpeedBoost && game.speedBoostActive) {
        addEffectIcon(effectsContainer, '💨', 'Speed Boost', speedTime, 'shop-boost');
    }
    if (hasShieldBoost && game.shieldActive) {
        addEffectIcon(effectsContainer, '🛡️', 'Shield', shieldTime, 'shop-boost');
    }
    if (hasDoubleCoins && game.coinMultiplier > 1) {
        addEffectIcon(effectsContainer, '💰', 'Double Coins', null, 'shop-boost');
    }
    
    // Show active power-ups (from gameplay)
    if (game.speedBoostActive && !hasSpeedBoost) {
        addEffectIcon(effectsContainer, '💨', 'Speed Boost', speedTime, 'active-powerup');
    }
    if (game.shieldActive && !hasShieldBoost) {
        addEffectIcon(effectsContainer, '🛡️', 'Shield', shieldTime, 'active-powerup');
    }
    
    // Show ultimate active
    if (game.ultimateActive) {
        addEffectIcon(effectsContainer, '⚡', 'Ultimate Active', ultimateTime, 'active-powerup');
    }
}

function addEffectIcon(container, emoji, name, timer, className) {
    const icon = document.createElement('div');
    icon.className = `effect-icon ${className}`;
    icon.innerHTML = `
        <span class="effect-emoji">${emoji}</span>
        <span class="effect-name">${name}</span>
        ${timer !== null ? `<span class="effect-timer">${timer}s</span>` : ''}
    `;
    container.appendChild(icon);
}

// Mobile Ultimate Button
function initMobileUltimateButton() {
    const btnUltimate = document.getElementById('btnMobileUltimate');
    if (!btnUltimate) return;
    
    btnUltimate.addEventListener('click', () => {
        if (game.ultimateReady && !game.ultimateActive && !game.paused && !game.gameOver) {
            activateUltimate();
        }
    });
    
    // Update button visibility and state
    function updateUltimateButton() {
        if (game.gameOver || game.paused) {
            btnUltimate.style.display = 'none';
            return;
        }
        
        // Show on mobile/touch devices
        if (window.matchMedia('(pointer: coarse)').matches) {
            btnUltimate.style.display = 'block';
            if (game.ultimateReady) {
                btnUltimate.classList.add('ready');
            } else {
                btnUltimate.classList.remove('ready');
            }
        } else {
            btnUltimate.style.display = 'none';
        }
    }
    
    // Update button state continuously
    const updateInterval = setInterval(() => {
        if (!game || game.gameOver) {
            clearInterval(updateInterval);
            return;
        }
        updateUltimateButton();
    }, 100);
}

// Apply shop upgrades at game start
function applyShopUpgrades() {
    // Apply permanent upgrades
    if (playerUpgrades.dashEnergy) {
        game.maxDashEnergy = Math.floor(game.maxDashEnergy * 1.2); // +20%
    }
    if (playerUpgrades.startingHealth) {
        game.maxHealth += 1;
        game.health = game.maxHealth;
    }
    if (playerUpgrades.dashRegen) {
        game.dashEnergyRegen *= 1.5; // +50%
    }
    if (playerUpgrades.swordLength) {
        game.swordLength += 10;
        game.baseSwordLength += 10;
    }
    
    // Apply active boosts for this game
    if (activeBoosts.includes('speedBoost')) {
        game.speedBoostActive = true;
        game.speedBoostTime = 30000; // 30 seconds
        game.speedMultiplier = 2.0;
        localStorage.setItem('activeSpeedBoost', 'true');
    }
    if (activeBoosts.includes('shieldStart')) {
        game.shieldActive = true;
        game.shieldTime = 10000; // 10 seconds
        localStorage.setItem('activeShieldBoost', 'true');
    }
    if (activeBoosts.includes('doubleCoins')) {
        // This will be handled in the coin reward logic
        game.coinMultiplier = 2.0;
        localStorage.setItem('activeDoubleCoins', 'true');
    } else {
        game.coinMultiplier = 1.0;
    }
    
    // Clear boosts after applying (they're one-time use)
    activeBoosts = [];
    saveUpgrades();
}

// Restart game function
function restartGame() {
    // Hide game over screen
    hideGameOverScreen();
    
    // Reset health based on game mode
    if (game.gameMode === 'hardcore') {
        game.maxHealth = 1;
    } else {
        game.maxHealth = 5;
    }
    
    // Apply shop upgrades
    applyShopUpgrades();
    
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
    
    // Reset wave mode
    if (game.waveMode) {
        game.currentWave = 0;
        game.inWaveBreak = false;
        game.enemiesRemaining = 0;
    }
    
    player.x = canvas.width / 2;
    player.y = canvas.height / 2;
    player.dashing = false;
    player.dashTarget = { x: player.x, y: player.y };
    player.dashDamage = 1.0;
    player.isTeleport = false;
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
    const shopScreen = document.getElementById('shopScreen');
    if (shopScreen) shopScreen.classList.add('hidden');
    game.menuOpen = true;
    game.paused = true;

    // Show/hide resume button based on whether a game is in progress
    const resumeBtn = document.getElementById('btnResumeGame');
    if (resumeBtn) {
        // Show resume if game was already started (not a fresh start)
        resumeBtn.style.display = (game.startTime > 0) ? 'block' : 'none';
    }
}

// Enhanced Stats Display
function updateStatsScreen() {
    const stats = {
        totalKills: game.totalKills,
        totalPlayTime: game.totalPlayTime,
        highScore: game.highScore,
        record: game.record,
        level: playerProgression.level,
        xp: playerProgression.xp,
        coins: playerProgression.coins,
        gamesPlayed: parseInt(localStorage.getItem('gamesPlayed') || '0'),
        averageScore: Math.floor(game.highScore / Math.max(1, parseInt(localStorage.getItem('gamesPlayed') || '1'))),
        favoriteMode: localStorage.getItem('favoriteMode') || 'endless'
    };

    // Update HTML elements
    document.getElementById('totalKillsValue').textContent = stats.totalKills;
    document.getElementById('highScoreValue').textContent = stats.highScore;
    document.getElementById('recordValue').textContent = stats.record;
    
    // Add new stat elements if they don't exist
    const statsContainer = document.querySelector('.stats-container');
    if (statsContainer) {
        // Remove old dynamic stats if they exist
        const oldLevelDiv = document.getElementById('levelStat');
        const oldCoinsDiv = document.getElementById('coinsStat');
        if (oldLevelDiv) oldLevelDiv.remove();
        if (oldCoinsDiv) oldCoinsDiv.remove();
        
        // Add level display
        const levelDiv = document.createElement('div');
        levelDiv.id = 'levelStat';
        levelDiv.className = 'stat-row';
        levelDiv.innerHTML = `
            <span>Level:</span>
            <span>${stats.level} (${stats.xp}/${playerProgression.getXPForNextLevel()} XP)</span>
        `;
        statsContainer.appendChild(levelDiv);

        // Add coins display
        const coinsDiv = document.createElement('div');
        coinsDiv.id = 'coinsStat';
        coinsDiv.className = 'stat-row';
        coinsDiv.innerHTML = `
            <span>💰 Coins:</span>
            <span>${stats.coins}</span>
        `;
        statsContainer.appendChild(coinsDiv);
    }
}

// Open stats screen
function openStatsScreen() {
    document.getElementById('statsScreen').classList.remove('hidden');
    document.getElementById('mainMenu').classList.add('hidden');
    const shopScreen = document.getElementById('shopScreen');
    if (shopScreen) shopScreen.classList.add('hidden');

    // Update stats
    const hours = Math.floor(game.totalPlayTime / 3600);
    const minutes = Math.floor((game.totalPlayTime % 3600) / 60);

    document.getElementById('totalKillsValue').textContent = game.totalKills;
    document.getElementById('totalPlayTimeValue').textContent = `${hours}h ${minutes}m`;
    document.getElementById('highScoreValue').textContent = game.highScore;
    document.getElementById('recordValue').textContent = game.record;
    
    // Update enhanced stats
    updateStatsScreen();
}


// Open achievements screen
function openAchievementsScreen() {
    document.getElementById('achievementsScreen').classList.remove('hidden');
    document.getElementById('mainMenu').classList.add('hidden');
    const shopScreen = document.getElementById('shopScreen');
    if (shopScreen) shopScreen.classList.add('hidden');

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
    const shopScreen = document.getElementById('shopScreen');
    if (shopScreen) shopScreen.classList.add('hidden');

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
    console.log('startGameFromMenu called');
    const mainMenu = document.getElementById('mainMenu');
    const modeSelection = document.getElementById('modeSelection');
    
    if (mainMenu) {
        mainMenu.classList.add('hidden');
    }
    
    if (modeSelection) {
        modeSelection.classList.remove('hidden');
    }
    
    game.paused = true;
    game.menuOpen = false;
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

    // Main menu buttons - ensure they're properly initialized
    const btnPlayGame = document.getElementById('btnPlayGame');
    if (btnPlayGame) {
        // Remove any existing event listeners by cloning
        const newPlayBtn = btnPlayGame.cloneNode(true);
        btnPlayGame.parentNode.replaceChild(newPlayBtn, btnPlayGame);
        // Re-get the element after replacement
        document.getElementById('btnPlayGame').onclick = function(e) {
            e.preventDefault();
            e.stopPropagation();
            console.log('Play Game button clicked');
            startGameFromMenu();
            return false;
        };
    } else {
        console.error('btnPlayGame button not found in DOM!');
    }
    
    const btnStats = document.getElementById('btnStats');
    if (btnStats) {
        const newStatsBtn = btnStats.cloneNode(true);
        btnStats.parentNode.replaceChild(newStatsBtn, btnStats);
        document.getElementById('btnStats').onclick = openStatsScreen;
    }
    
    const btnAchievements = document.getElementById('btnAchievements');
    if (btnAchievements) {
        const newAchievementsBtn = btnAchievements.cloneNode(true);
        btnAchievements.parentNode.replaceChild(newAchievementsBtn, btnAchievements);
        document.getElementById('btnAchievements').onclick = openAchievementsScreen;
    }
    
    const btnSettings = document.getElementById('btnSettings');
    if (btnSettings) {
        const newSettingsBtn = btnSettings.cloneNode(true);
        btnSettings.parentNode.replaceChild(newSettingsBtn, btnSettings);
        document.getElementById('btnSettings').onclick = openSettingsScreen;
    }
    
    const btnShop = document.getElementById('btnShop');
    if (btnShop) {
        const newShopBtn = btnShop.cloneNode(true);
        btnShop.parentNode.replaceChild(newShopBtn, btnShop);
        document.getElementById('btnShop').onclick = openShopScreen;
    }

    // Back buttons
    document.getElementById('btnBackToMenu').addEventListener('click', openMainMenu);
    document.getElementById('btnBackFromStats').addEventListener('click', openMainMenu);
    document.getElementById('btnBackFromAchievements').addEventListener('click', openMainMenu);
    document.getElementById('btnBackFromSettings').addEventListener('click', openMainMenu);
    const btnBackFromShop = document.getElementById('btnBackFromShop');
    if (btnBackFromShop) {
        btnBackFromShop.addEventListener('click', openMainMenu);
    }

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
    
    // Always skip tutorial - go straight to mode selection
    if (tutorialOverlay) {
        tutorialOverlay.classList.add('hidden');
    }
    if (modeSelection) {
        modeSelection.classList.remove('hidden');
    }
    game.tutorialShown = false;
    game.paused = true;

    // Handle game mode selection
    document.querySelectorAll('.mode-button').forEach(button => {
        button.addEventListener('click', () => {
            const mode = button.dataset.mode;
            game.gameMode = mode;

            // Set mode-specific targets
            if (mode === 'timeAttack') {
                game.gameModeTarget = 300; // 5 minutes in seconds
                game.waveMode = false;
            } else if (mode === 'killTarget') {
                game.gameModeTarget = 100; // 100 kills
                game.waveMode = false;
            } else if (mode === 'hardcore') {
                game.maxHealth = 1;
                game.health = 1;
                game.waveMode = false;
            } else if (mode === 'waves') {
                game.waveMode = true;
                game.currentWave = 0;
                game.inWaveBreak = false;
                // Show ability selection
                modeSelection.classList.add('hidden');
                showAbilitySelection();
                return;
            } else {
                game.waveMode = false;
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

    const rightJoystickZone = document.getElementById('joystick-right-zone');
    const rightJoystickContainer = document.getElementById('joystick-right-container');
    const rightJoystickKnob = document.getElementById('joystick-right-knob');

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

    // Right Joystick Logic (Aim & Dash)
    rightJoystickZone.addEventListener('touchstart', (e) => {
        if (game.paused) return;
        e.preventDefault();
        const touch = e.changedTouches[0];
        game.rightJoystick.id = touch.identifier;
        game.rightJoystick.active = true;
        game.rightJoystick.wasOverdrive = false; // Track previous state for haptics

        rightJoystickContainer.style.display = 'block';
        rightJoystickContainer.style.left = `${touch.clientX}px`;
        rightJoystickContainer.style.top = `${touch.clientY}px`;
        rightJoystickKnob.style.transform = `translate(-50%, -50%)`;
        rightJoystickKnob.classList.remove('overdrive');

        // Use initial touch as center
        game.rightJoystick.startX = touch.clientX;
        game.rightJoystick.startY = touch.clientY;
        game.rightJoystick.x = 0;
        game.rightJoystick.y = 0;
    }, { passive: false });

    rightJoystickZone.addEventListener('touchmove', (e) => {
        e.preventDefault();
        if (!game.rightJoystick.active) return;

        for (let i = 0; i < e.changedTouches.length; i++) {
            if (e.changedTouches[i].identifier === game.rightJoystick.id) {
                const touch = e.changedTouches[i];

                // Two-Step Config
                const normalRadius = 50;
                const overdriveRadius = 90;

                let dx = touch.clientX - game.rightJoystick.startX;
                let dy = touch.clientY - game.rightJoystick.startY;
                const dist = Math.sqrt(dx * dx + dy * dy);

                // Visual limiting
                // We allow visual stretching up to overdriveRadius
                const visualLimit = overdriveRadius;

                if (dist > visualLimit) {
                    const ratio = visualLimit / dist;
                    rightJoystickKnob.style.transform = `translate(calc(-50% + ${dx * ratio}px), calc(-50% + ${dy * ratio}px))`;
                } else {
                    rightJoystickKnob.style.transform = `translate(calc(-50% + ${dx}px), calc(-50% + ${dy}px))`;
                }

                // Check Overdrive State (for haptics & visuals)
                const isOverdrive = dist > normalRadius;
                if (isOverdrive && !game.rightJoystick.wasOverdrive) {
                    // Entered Overdrive
                    if (navigator.vibrate) navigator.vibrate(20);
                    rightJoystickKnob.classList.add('overdrive');
                    game.rightJoystick.wasOverdrive = true;
                } else if (!isOverdrive && game.rightJoystick.wasOverdrive) {
                    // Left Overdrive
                    rightJoystickKnob.classList.remove('overdrive');
                    game.rightJoystick.wasOverdrive = false;
                }

                // Store aim vector
                if (dist > 0) {
                    game.rightJoystick.x = dx;
                    game.rightJoystick.y = dy;
                }
            }
        }
    }, { passive: false });

    const endRightJoystick = (e) => {
        e.preventDefault();
        for (let i = 0; i < e.changedTouches.length; i++) {
            if (e.changedTouches[i].identifier === game.rightJoystick.id) {
                // Trigger Dash on release (if dragged far enough)
                const dx = game.rightJoystick.x;
                const dy = game.rightJoystick.y;
                const dist = Math.sqrt(dx * dx + dy * dy);

                const normalRadius = 50;
                const overdriveRadius = 90; // The extra pull range

                // Dash Ranges
                const normalMaxDash = 500;
                const overdriveMaxDash = 900;

                if (dist > 10) { // Minimum drag threshold
                    // Calculate aim direction
                    const dirX = dx / dist;
                    const dirY = dy / dist;

                    let dashDistance = 0;

                    if (dist <= normalRadius) {
                        // Normal Zone: 0 to 500
                        // Map dist (0-50) to range (0-500)
                        dashDistance = (dist / normalRadius) * normalMaxDash;
                    } else {
                        // Overdrive Zone: 500 to 900
                        // Map extra dist (0-40) to extra range (0-400)
                        // Clamp visual dist to actual overdrive limit for calculation
                        const effectiveDist = Math.min(dist, overdriveRadius);
                        const extraDist = effectiveDist - normalRadius;
                        const extraRange = overdriveRadius - normalRadius;

                        const extraDash = (extraDist / extraRange) * (overdriveMaxDash - normalMaxDash);
                        dashDistance = normalMaxDash + extraDash;
                    }

                    const targetX = player.x + dirX * dashDistance;
                    const targetY = player.y + dirY * dashDistance;

                    player.startDash(targetX, targetY);
                }

                game.rightJoystick.active = false;
                game.rightJoystick.id = null;
                game.rightJoystick.x = 0;
                game.rightJoystick.y = 0;
                game.rightJoystick.wasOverdrive = false;
                rightJoystickContainer.style.display = 'none';
                rightJoystickKnob.classList.remove('overdrive');
            }
        }
    };

    rightJoystickZone.addEventListener('touchend', endRightJoystick);
    rightJoystickZone.addEventListener('touchcancel', endRightJoystick);

    // Mobile UI Buttons
    const btnPause = document.getElementById('btnMobilePause');
    if (btnPause) {
        btnPause.addEventListener('touchstart', (e) => {
            e.preventDefault();
            e.stopPropagation(); // Prevent joystick from catching this

            if (game.gameOver) return;

            if (game.menuOpen) {
                resumeGame();
            } else {
                openMainMenu();
                game.menuOpen = true;
            }
        });
    }
}

// Share Score Feature
function initShareButton() {
    const shareBtn = document.getElementById('shareScoreBtn');
    if (!shareBtn) return;

    shareBtn.addEventListener('click', () => {
        const minutes = Math.floor(game.gameTime / 60);
        const seconds = Math.floor(game.gameTime % 60);
        const timeStr = `${minutes}:${seconds.toString().padStart(2, '0')}`;
        
        const text = `🥷 I scored ${game.score} points in Dash Combat!\n\n` +
                    `💀 Kills: ${game.kills}\n` +
                    `🔥 Max Combo: ${game.maxCombo}x\n` +
                    `⏱️ Time: ${timeStr}\n\n` +
                    `Can you beat me?`;
        
        if (navigator.share) {
            navigator.share({
                title: 'Dash Combat - My Score',
                text: text,
                url: window.location.href
            }).catch(err => {
                if (err.name !== 'AbortError') {
                    console.log('Share failed:', err);
                }
            });
        } else {
            // Fallback: Copy to clipboard
            const fullText = text + '\n\n' + window.location.href;
            if (navigator.clipboard && navigator.clipboard.writeText) {
                navigator.clipboard.writeText(fullText)
                    .then(() => {
                        // Show feedback
                        shareBtn.textContent = '✅ Copied!';
                        setTimeout(() => {
                            shareBtn.textContent = '📱 Share Score';
                        }, 2000);
                    })
                    .catch(() => {
                        alert('Share not supported. Copy this:\n\n' + fullText);
                    });
            } else {
                alert('Share not supported. Copy this:\n\n' + fullText);
            }
        }
    });
}

// Show buttons on game over (legacy - now uses showGameOverScreen)
function showGameOverButtons() {
    showGameOverScreen();
}

function hideGameOverButtons() {
    hideGameOverScreen();
}

// Quick Restart Handler
function initQuickRestart() {
    const quickRestartBtn = document.getElementById('quickRestartBtn');
    if (!quickRestartBtn) return;

    quickRestartBtn.addEventListener('click', () => {
        restartGame();
        hideGameOverButtons();
    });
}

// Enhanced Sound System
class EnhancedSoundSystem extends SoundSystem {
    playDash() {
        // Whoosh sound
        this.playTone(600, 0.08, 'sine', 0.2);
        setTimeout(() => this.playTone(400, 0.08, 'sine', 0.15), 30);
    }

    playKill() {
        // Satisfying kill sound
        this.playTone(800, 0.05, 'square', 0.3);
        setTimeout(() => this.playTone(600, 0.05, 'square', 0.25), 40);
        setTimeout(() => this.playTone(400, 0.08, 'sine', 0.2), 80);
    }

    playCombo(multiplier) {
        // Escalating combo sound
        const baseFreq = 400;
        const freq = baseFreq + (multiplier * 30);
        this.playTone(freq, 0.1, 'sine', 0.3);
        setTimeout(() => this.playTone(freq * 1.5, 0.1, 'sine', 0.2), 50);
    }

    playPowerUp() {
        // Power-up jingle
        this.playTone(523, 0.1, 'sine', 0.4); // C
        setTimeout(() => this.playTone(659, 0.1, 'sine', 0.4), 100); // E
        setTimeout(() => this.playTone(784, 0.2, 'sine', 0.4), 200); // G
    }

    playHit() {
        // Painful hit sound
        this.playTone(150, 0.2, 'sawtooth', 0.4);
    }

    playUltimate() {
        // Epic ultimate sound
        for (let i = 0; i < 5; i++) {
            setTimeout(() => {
                this.playTone(200 + (i * 100), 0.1, 'sine', 0.5 - (i * 0.08));
            }, i * 50);
        }
    }

    playNewHighScore() {
        // Victory fanfare
        const notes = [523, 659, 784, 1047]; // C E G C
        notes.forEach((note, i) => {
            setTimeout(() => this.playTone(note, 0.2, 'sine', 0.4), i * 150);
        });
    }
}

// Replace sound system with enhanced version
const enhancedSoundSystem = new EnhancedSoundSystem();
// Keep reference to old one for compatibility
Object.setPrototypeOf(soundSystem, EnhancedSoundSystem.prototype);
Object.assign(soundSystem, enhancedSoundSystem);

// Player Progression System
class PlayerProgression {
    constructor() {
        this.level = parseInt(localStorage.getItem('playerLevel') || '1');
        this.xp = parseInt(localStorage.getItem('playerXP') || '0');
        this.coins = parseInt(localStorage.getItem('playerCoins') || '0');
        this.unlockedSkins = JSON.parse(localStorage.getItem('unlockedSkins') || '["default"]');
        this.currentSkin = localStorage.getItem('currentSkin') || 'default';
    }

    addXP(amount) {
        this.xp += amount;
        const xpNeeded = this.getXPForNextLevel();
        
        if (this.xp >= xpNeeded) {
            this.levelUp();
        }
        
        this.save();
    }

    getXPForNextLevel() {
        return this.level * 100; // 100 XP per level
    }

    levelUp() {
        this.level++;
        this.xp = 0;
        this.coins += 50; // Reward coins on level up
        
        // Show level up notification
        if (game.killStreakNotifications) {
            game.killStreakNotifications.push(
                new KillStreakNotification(`LEVEL UP! Level ${this.level}`, '#ffd700')
            );
        }
        
        soundSystem.playPowerUp();
        this.save();
    }

    addCoins(amount) {
        this.coins += amount;
        this.save();
    }

    unlockSkin(skinId) {
        if (!this.unlockedSkins.includes(skinId)) {
            this.unlockedSkins.push(skinId);
            this.save();
            return true;
        }
        return false;
    }

    setSkin(skinId) {
        if (this.unlockedSkins.includes(skinId)) {
            this.currentSkin = skinId;
            this.save();
            return true;
        }
        return false;
    }

    save() {
        localStorage.setItem('playerLevel', this.level.toString());
        localStorage.setItem('playerXP', this.xp.toString());
        localStorage.setItem('playerCoins', this.coins.toString());
        localStorage.setItem('unlockedSkins', JSON.stringify(this.unlockedSkins));
        localStorage.setItem('currentSkin', this.currentSkin);
    }
}

// Initialize progression system
const playerProgression = new PlayerProgression();

// Shop System
const shopItems = {
    skins: [
        { id: 'red', type: 'skin', name: 'Fire Ninja', desc: 'Burning hot style', icon: '🔥', cost: 100 },
        { id: 'blue', type: 'skin', name: 'Ice Ninja', desc: 'Cool as ice', icon: '❄️', cost: 100 },
        { id: 'shadow', type: 'skin', name: 'Shadow Ninja', desc: 'Dark and mysterious', icon: '🌑', cost: 250 },
        { id: 'gold', type: 'skin', name: 'Golden Ninja', desc: 'Legendary warrior', icon: '⭐', cost: 500 }
    ],
    upgrades: [
        { id: 'dashEnergy', type: 'upgrade', name: 'Dash Energy+', desc: '+20% max dash energy', icon: '⚡', cost: 200, effect: 'dashEnergy' },
        { id: 'startingHealth', type: 'upgrade', name: 'Extra Health', desc: '+1 starting health', icon: '❤️', cost: 300, effect: 'health' },
        { id: 'dashRegen', type: 'upgrade', name: 'Faster Regen', desc: '+50% dash energy regen', icon: '🔄', cost: 250, effect: 'regen' },
        { id: 'swordLength', type: 'upgrade', name: 'Longer Sword', desc: '+10 sword length', icon: '🗡️', cost: 400, effect: 'sword' }
    ],
    boosts: [
        { id: 'speedBoost', type: 'boost', name: 'Speed Start', desc: 'Start with 2x speed (1 game)', icon: '💨', cost: 50, effect: 'speed' },
        { id: 'shieldStart', type: 'boost', name: 'Shield Start', desc: 'Start with shield (1 game)', icon: '🛡️', cost: 75, effect: 'shield' },
        { id: 'doubleCoins', type: 'boost', name: 'Double Coins', desc: '2x coins this game', icon: '💰', cost: 100, effect: 'coins' }
    ]
};

// Player upgrades storage
let playerUpgrades = JSON.parse(localStorage.getItem('playerUpgrades') || '{}');
let activeBoosts = JSON.parse(localStorage.getItem('activeBoosts') || '[]');

function saveUpgrades() {
    localStorage.setItem('playerUpgrades', JSON.stringify(playerUpgrades));
    localStorage.setItem('activeBoosts', JSON.stringify(activeBoosts));
}

function openShopScreen() {
    document.getElementById('shopScreen').classList.remove('hidden');
    document.getElementById('mainMenu').classList.add('hidden');
    updateShopDisplay();
}

function updateShopDisplay() {
    // Update coins display
    const coinsValue = document.getElementById('shopCoinsValue');
    if (coinsValue) {
        coinsValue.textContent = playerProgression.coins;
    }
    
    // Update shop items
    renderShopItems('skins');
    
    // Setup tab switching
    document.querySelectorAll('.shop-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            document.querySelectorAll('.shop-tab').forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            renderShopItems(tab.dataset.tab);
        });
    });
}

function renderShopItems(category) {
    const itemsList = document.getElementById('shopItemsList');
    if (!itemsList) return;
    
    itemsList.innerHTML = '';
    const items = shopItems[category] || [];
    
    items.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.className = 'shop-item';
        
        // Check if owned/equipped
        let isOwned = false;
        let isEquipped = false;
        
        if (item.type === 'skin') {
            isOwned = playerProgression.unlockedSkins.includes(item.id);
            isEquipped = playerProgression.currentSkin === item.id;
        } else if (item.type === 'upgrade') {
            isOwned = playerUpgrades[item.id] || false;
        } else if (item.type === 'boost') {
            isOwned = activeBoosts.includes(item.id);
        }
        
        if (isOwned) itemDiv.classList.add('owned');
        if (isEquipped) itemDiv.classList.add('equipped');
        if (!isOwned && playerProgression.coins >= item.cost) {
            itemDiv.classList.add('new');
        }
        
        const canAfford = playerProgression.coins >= item.cost;
        
        itemDiv.innerHTML = `
            <div class="shop-item-icon">${item.icon}</div>
            <div class="shop-item-name">${item.name || item.id}</div>
            <div class="shop-item-desc">${item.desc}</div>
            <div class="shop-item-price">
                <span class="coins-icon">💰</span>
                <span>${item.cost}</span>
            </div>
            <button class="shop-item-buy-btn" ${!canAfford && !isOwned ? 'disabled' : ''}>
                ${isEquipped ? 'Equipped' : isOwned ? (item.type === 'skin' ? 'Equip' : 'Owned') : 'Buy'}
            </button>
        `;
        
        const buyBtn = itemDiv.querySelector('.shop-item-buy-btn');
        buyBtn.addEventListener('click', () => {
            if (isEquipped) return;
            
            if (isOwned && item.type === 'skin') {
                // Equip skin
                playerProgression.setSkin(item.id);
                updateShopDisplay();
                soundSystem.playPowerUp();
            } else if (!isOwned && canAfford) {
                // Purchase item
                purchaseItem(item);
            }
        });
        
        itemsList.appendChild(itemDiv);
    });
}

function purchaseItem(item) {
    if (playerProgression.coins < item.cost) {
        alert('Not enough coins!');
        return;
    }
    
    playerProgression.coins -= item.cost;
    playerProgression.save();
    
    if (item.type === 'skin') {
        playerProgression.unlockSkin(item.id);
        playerProgression.setSkin(item.id);
    } else if (item.type === 'upgrade') {
        playerUpgrades[item.id] = true;
    } else if (item.type === 'boost') {
        activeBoosts.push(item.id);
    }
    
    saveUpgrades();
    updateShopDisplay();
    soundSystem.playPowerUp();
    
    // Show purchase notification
    if (game.killStreakNotifications) {
        game.killStreakNotifications.push(
            new KillStreakNotification(`Purchased: ${item.name || item.id}!`, '#4a9eff')
        );
    }
}

// Ninja Skins
const ninjaSkins = {
    default: {
        name: 'Classic Ninja',
        bodyColor: 'rgba(30, 30, 30, 1)',
        headColor: 'rgba(40, 40, 40, 1)',
        eyeColor: 'rgba(100, 200, 255, 1)',
        cost: 0
    },
    red: {
        name: 'Fire Ninja',
        bodyColor: 'rgba(139, 0, 0, 1)',
        headColor: 'rgba(178, 34, 34, 1)',
        eyeColor: 'rgba(255, 69, 0, 1)',
        cost: 100
    },
    blue: {
        name: 'Ice Ninja',
        bodyColor: 'rgba(0, 0, 139, 1)',
        headColor: 'rgba(30, 144, 255, 1)',
        eyeColor: 'rgba(173, 216, 230, 1)',
        cost: 100
    },
    gold: {
        name: 'Golden Ninja',
        bodyColor: 'rgba(184, 134, 11, 1)',
        headColor: 'rgba(255, 215, 0, 1)',
        eyeColor: 'rgba(255, 255, 255, 1)',
        cost: 500
    },
    shadow: {
        name: 'Shadow Ninja',
        bodyColor: 'rgba(0, 0, 0, 1)',
        headColor: 'rgba(20, 20, 20, 1)',
        eyeColor: 'rgba(138, 43, 226, 1)',
        cost: 250
    }
};

// Combo Visual Effects
function drawComboEffects() {
    if (game.combo >= 10) {
        // Screen border glow
        const intensity = Math.min(game.combo / 50, 1);
        const pulse = Math.sin(Date.now() / 100) * 0.3 + 0.7;
        
        ctx.save();
        ctx.strokeStyle = `rgba(255, 215, 0, ${intensity * pulse * 0.5})`;
        ctx.lineWidth = 10;
        ctx.shadowBlur = 30;
        ctx.shadowColor = '#ffd700';
        ctx.strokeRect(5, 5, canvas.width - 10, canvas.height - 10);
        ctx.restore();
    }

    if (game.combo >= 25) {
        // Chromatic aberration effect
        ctx.save();
        ctx.globalCompositeOperation = 'screen';
        ctx.globalAlpha = 0.05;
        ctx.fillStyle = '#ff0000';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = '#00ff00';
        ctx.fillRect(2, 0, canvas.width, canvas.height);
        ctx.fillStyle = '#0000ff';
        ctx.fillRect(-2, 0, canvas.width, canvas.height);
        ctx.restore();
    }
}

// Performance Optimization
const performance = {
    fps: 60,
    lastTime: Date.now(),
    frames: 0,
    lowPerformanceMode: false,
    
    update() {
        this.frames++;
        const now = Date.now();
        if (now - this.lastTime >= 1000) {
            this.fps = this.frames;
            this.frames = 0;
            this.lastTime = now;
            
            // Auto-enable low performance mode if FPS drops
            if (this.fps < 30 && !this.lowPerformanceMode) {
                this.enableLowPerformanceMode();
            } else if (this.fps > 50 && this.lowPerformanceMode) {
                this.disableLowPerformanceMode();
            }
        }
    },
    
    enableLowPerformanceMode() {
        this.lowPerformanceMode = true;
        // Reduce particle count
        if (game.particles && game.particles.length > 50) {
            game.particles = game.particles.slice(0, 50);
        }
        console.log('Low performance mode enabled');
    },
    
    disableLowPerformanceMode() {
        this.lowPerformanceMode = false;
        console.log('Low performance mode disabled');
    },
    
    draw() {
        // Optional: Show FPS counter (uncomment to enable)
        // ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
        // ctx.font = '12px Arial';
        // ctx.textAlign = 'right';
        // ctx.fillText(`FPS: ${this.fps}`, canvas.width - 10, 20);
    }
};

// Ability Loadout System
const availableAbilities = {
    quickDash: { id: 'quickDash', name: 'Quick Dash', desc: '50% cost, 50% range, instant', icon: '⚡', category: 'dash' },
    powerDash: { id: 'powerDash', name: 'Power Dash', desc: '200% cost, 200% range, 2x damage', icon: '💥', category: 'dash' },
    multiDash: { id: 'multiDash', name: 'Multi-Dash', desc: 'Dash through line of enemies', icon: '🌀', category: 'dash' },
    teleport: { id: 'teleport', name: 'Teleport', desc: 'Instant reposition, no damage', icon: '✨', category: 'dash' },
    parry: { id: 'parry', name: 'Parry', desc: 'Block next attack, counter-attack', icon: '🛡️', category: 'defense' },
    dodgeRoll: { id: 'dodgeRoll', name: 'Dodge Roll', desc: 'Brief invulnerability', icon: '🎯', category: 'defense' },
    whirlwind: { id: 'whirlwind', name: 'Whirlwind', desc: 'Spin attack hits all nearby', icon: '🌪️', category: 'offense' },
    chainLightning: { id: 'chainLightning', name: 'Chain Lightning', desc: 'Dash chains to nearby enemies', icon: '⚡', category: 'offense' },
    markedTarget: { id: 'markedTarget', name: 'Marked Target', desc: 'Next dash does 3x damage', icon: '🎯', category: 'offense' }
};

function showAbilitySelection() {
    const abilityScreen = document.getElementById('abilitySelection');
    if (!abilityScreen) return;
    
    abilityScreen.classList.remove('hidden');
    game.selectedAbilities = [];
    
    const abilityList = document.getElementById('abilityList');
    if (!abilityList) return;
    
    abilityList.innerHTML = '';
    
    Object.values(availableAbilities).forEach(ability => {
        const abilityDiv = document.createElement('div');
        abilityDiv.className = 'ability-item';
        abilityDiv.dataset.abilityId = ability.id;
        abilityDiv.innerHTML = `
            <div class="ability-icon">${ability.icon}</div>
            <div class="ability-name">${ability.name}</div>
            <div class="ability-desc">${ability.desc}</div>
        `;
        
        abilityDiv.addEventListener('click', () => {
            toggleAbility(ability.id);
        });
        
        abilityList.appendChild(abilityDiv);
    });
    
    updateAbilitySelection();
}

function toggleAbility(abilityId) {
    const index = game.selectedAbilities.indexOf(abilityId);
    if (index > -1) {
        game.selectedAbilities.splice(index, 1);
    } else {
        if (game.selectedAbilities.length < 3) {
            game.selectedAbilities.push(abilityId);
        }
    }
    updateAbilitySelection();
}

function updateAbilitySelection() {
    const count = game.selectedAbilities.length;
    document.getElementById('selectedCount').textContent = count;
    document.getElementById('btnStartWithAbilities').disabled = count === 0;
    
    // Update visual selection
    document.querySelectorAll('.ability-item').forEach(item => {
        const abilityId = item.dataset.abilityId;
        if (game.selectedAbilities.includes(abilityId)) {
            item.classList.add('selected');
        } else {
            item.classList.remove('selected');
        }
    });
}

function applySelectedAbilities() {
    game.activeAbilities = {};
    game.selectedAbilities.forEach(abilityId => {
        game.activeAbilities[abilityId] = true;
    });
}

// Initialize on page load - ensure DOM is ready
function initializeGame() {
    // Wait for DOM to be fully loaded
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initializeGame);
        return;
    }
    
    loadAchievements();
    updateUILanguage();
    initMenu();
    initTutorial();
    initTouchControls();
    initShareButton();
    initQuickRestart();
    initMobileUltimateButton();
    
    // Initialize ability selection handlers
    const btnStartWithAbilities = document.getElementById('btnStartWithAbilities');
    const btnSkipAbilities = document.getElementById('btnSkipAbilities');
    if (btnStartWithAbilities) {
        btnStartWithAbilities.addEventListener('click', () => {
            applySelectedAbilities();
            document.getElementById('abilitySelection').classList.add('hidden');
            game.tutorialShown = false;
            game.paused = false;
            restartGame();
        });
    }
    if (btnSkipAbilities) {
        btnSkipAbilities.addEventListener('click', () => {
            game.selectedAbilities = [];
            applySelectedAbilities();
            document.getElementById('abilitySelection').classList.add('hidden');
            game.tutorialShown = false;
            game.paused = false;
            restartGame();
        });
    }
    
    const btnContinueWave = document.getElementById('btnContinueWave');
    if (btnContinueWave) {
        btnContinueWave.addEventListener('click', continueWave);
    }
    
    // Game Over screen buttons
    const btnPlayAgain = document.getElementById('btnPlayAgain');
    const btnMainMenu = document.getElementById('btnMainMenu');
    if (btnPlayAgain) {
        btnPlayAgain.addEventListener('click', () => {
            hideGameOverScreen();
            restartGame();
        });
    }
    if (btnMainMenu) {
        btnMainMenu.addEventListener('click', () => {
            hideGameOverScreen();
            openMainMenu();
        });
    }

    // Initialize background stars
    initBackgroundStars();

    // Start game
    gameLoop();
}

// Start initialization
initializeGame();

