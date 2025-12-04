// Canvas setup
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// Set canvas size
canvas.width = 1200;
canvas.height = 800;

// Game state
const game = {
    keys: {},
    mouse: { x: 0, y: 0 },
    monsters: [],
    particles: [],
    lastSpawn: 0,
    baseSpawnInterval: 2000, // Base spawn interval
    spawnInterval: 2000, // Current spawn interval (decreases over time)
    health: 5,
    maxHealth: 5,
    kills: 0,
    record: parseInt(localStorage.getItem('dashGameRecord')) || 0,
    gameOver: false,
    invulnerable: false,
    invulnerableTime: 0,
    startTime: 0,
    gameTime: 0, // Time in seconds
    difficultyMultiplier: 1.0, // Increases over time
    baseMonsterSpeed: 3,
};

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

            if (game.keys['w'] || game.keys['ArrowUp']) dy -= 1;
            if (game.keys['s'] || game.keys['ArrowDown']) dy += 1;
            if (game.keys['a'] || game.keys['ArrowLeft']) dx -= 1;
            if (game.keys['d'] || game.keys['ArrowRight']) dx += 1;

            // Normalize diagonal movement
            if (dx !== 0 && dy !== 0) {
                dx *= 0.707;
                dy *= 0.707;
            }

            this.x += dx * this.speed;
            this.y += dy * this.speed;

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

        // Clamp target to screen bounds
        const clampedX = Math.max(this.radius, Math.min(canvas.width - this.radius, targetX));
        const clampedY = Math.max(this.radius, Math.min(canvas.height - this.radius, targetY));

        this.dashTarget.x = clampedX;
        this.dashTarget.y = clampedY;
        this.dashing = true;
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

        // Draw dash trail effect
        if (this.dashing) {
            const dx = this.dashTarget.x - this.x;
            const dy = this.dashTarget.y - this.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            if (distance > 0) {
                const dirX = dx / distance;
                const dirY = dy / distance;
                
                // Draw dash trail
                ctx.strokeStyle = `rgba(255, 100, 100, 0.6)`;
                ctx.lineWidth = 2;
                ctx.setLineDash([3, 3]);
                ctx.beginPath();
                ctx.moveTo(0, 0);
                ctx.lineTo(-dirX * 15, -dirY * 15);
                ctx.stroke();
                ctx.setLineDash([]);
            }
        }

        ctx.restore();
    }
}

// Monster class
class Monster {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.radius = 25;
        this.baseSpeed = game.baseMonsterSpeed;
        this.speed = this.baseSpeed * game.difficultyMultiplier; // Speed scales with difficulty
        this.color = '#ff4757';
        this.vibrating = false;
        this.vibrationOffset = { x: 0, y: 0 };
        this.vibrationTime = 0;
        this.dead = false;
        this.deathTime = 0;
        this.hasHitPlayer = false; // Prevent multiple hits from same monster
        this.hasBeenKilled = false; // Prevent multiple kill counts from same monster
        this.predictionFactor = 0; // For smart prediction
        this.lastPlayerX = player.x;
        this.lastPlayerY = player.y;
        this.playerVelocity = { x: 0, y: 0 };
    }

    update() {
        if (this.dead) {
            this.deathTime += 16;
            // Fade out and shrink
            this.radius = Math.max(0, this.radius - 0.5);
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

    draw() {
        if (this.dead && this.radius <= 0) return;

        ctx.save();
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

        ctx.restore();
    }
}

// Spawn monster from random edge
function spawnMonster() {
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

    game.monsters.push(new Monster(x, y));
}

// Check collision between player dash and monsters
function checkCollisions() {
    for (let i = game.monsters.length - 1; i >= 0; i--) {
        const monster = game.monsters[i];
        if (monster.dead) continue;

        const dx = player.x - monster.x;
        const dy = player.y - monster.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < player.radius + monster.radius) {
            if (player.dashing) {
                // Player hits monster
                if (!monster.vibrating && !monster.hasBeenKilled) {
                    player.triggerVibration();
                    monster.triggerVibration();
                    monster.hasBeenKilled = true;
                    game.kills++;
                    // Update record if needed
                    if (game.kills > game.record) {
                        game.record = game.kills;
                        localStorage.setItem('dashGameRecord', game.record.toString());
                    }
                }
            } else if (!game.invulnerable && !monster.hasHitPlayer) {
                // Monster hits player (only when not dashing)
                game.health--;
                game.invulnerable = true;
                game.invulnerableTime = 0;
                monster.hasHitPlayer = true;
                player.triggerVibration();
                
                if (game.health <= 0) {
                    game.gameOver = true;
                }
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
    if (e.button === 0 || !e.button) { // Left mouse button (or no button for click event)
        const rect = canvas.getBoundingClientRect();
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        player.startDash(mouseX, mouseY);
    }
});

// Restart game on R key
document.addEventListener('keydown', (e) => {
    if (e.key.toLowerCase() === 'r' && game.gameOver) {
        restartGame();
    }
});

// Draw UI elements
function drawUI() {
    // Draw hearts at bottom
    const heartSize = 30;
    const heartSpacing = 40;
    const startX = (canvas.width - (game.maxHealth * heartSpacing)) / 2;
    const y = canvas.height - 50;

    for (let i = 0; i < game.maxHealth; i++) {
        ctx.fillStyle = i < game.health ? '#ff4757' : '#444';
        ctx.beginPath();
        ctx.arc(startX + i * heartSpacing, y, heartSize / 2, 0, Math.PI * 2);
        ctx.fill();
        ctx.strokeStyle = '#fff';
        ctx.lineWidth = 2;
        ctx.stroke();
    }

    // Draw kill counter, record, and time
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 24px Arial';
    ctx.textAlign = 'left';
    ctx.fillText(`Kills: ${game.kills}`, 20, 40);
    ctx.fillText(`Record: ${game.record}`, 20, 70);
    
    // Draw time and difficulty
    const minutes = Math.floor(game.gameTime / 60);
    const seconds = Math.floor(game.gameTime % 60);
    ctx.fillText(`Time: ${minutes}:${seconds.toString().padStart(2, '0')}`, 20, 100);
    ctx.fillText(`Difficulty: ${game.difficultyMultiplier.toFixed(1)}x`, 20, 130);
}

// Draw game over screen
function drawGameOver() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.8)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 48px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('GAME OVER', canvas.width / 2, canvas.height / 2 - 60);

    ctx.font = '32px Arial';
    ctx.fillText(`Monsters Killed: ${game.kills}`, canvas.width / 2, canvas.height / 2 - 20);
    const minutes = Math.floor(game.gameTime / 60);
    const seconds = Math.floor(game.gameTime % 60);
    ctx.fillText(`Survived: ${minutes}:${seconds.toString().padStart(2, '0')}`, canvas.width / 2, canvas.height / 2 + 20);
    ctx.fillText(`Record: ${game.record}`, canvas.width / 2, canvas.height / 2 + 60);

    ctx.font = '24px Arial';
    ctx.fillText('Press R to Restart', canvas.width / 2, canvas.height / 2 + 120);
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

    if (!game.gameOver) {
        // Update difficulty
        updateDifficulty();

        // Spawn monsters (more frequently as difficulty increases)
        const now = Date.now();
        if (now - game.lastSpawn > game.spawnInterval) {
            // Spawn multiple monsters as difficulty increases
            const spawnCount = Math.floor(game.difficultyMultiplier / 1.5) + 1; // 1 at start, more as difficulty increases
            for (let i = 0; i < spawnCount; i++) {
                // Stagger spawns slightly
                setTimeout(() => spawnMonster(), i * 100);
            }
            game.lastSpawn = now;
        }

        // Update player
        player.update();

        // Update monsters
        game.monsters.forEach(monster => monster.update());

        // Remove dead monsters
        game.monsters = game.monsters.filter(monster => !monster.dead || monster.radius > 0);

        // Check collisions
        checkCollisions();

        // Draw everything
        game.monsters.forEach(monster => monster.draw());
        player.draw();

        // Draw cursor aim line
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

        // Draw UI
        drawUI();
    } else {
        // Draw game over screen
        drawGameOver();
    }

    requestAnimationFrame(gameLoop);
}

// Restart game function
function restartGame() {
    game.health = game.maxHealth;
    game.kills = 0;
    game.gameOver = false;
    game.invulnerable = false;
    game.invulnerableTime = 0;
    game.monsters = [];
    game.lastSpawn = Date.now();
    game.startTime = 0;
    game.gameTime = 0;
    game.difficultyMultiplier = 1.0;
    game.spawnInterval = game.baseSpawnInterval;
    player.x = canvas.width / 2;
    player.y = canvas.height / 2;
    player.dashing = false;
    player.dashTarget = { x: player.x, y: player.y };
}

// Start game
gameLoop();

