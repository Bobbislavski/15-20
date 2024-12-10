class Game {
    constructor(maxAttempts = 10) {
        this.maxAttempts = maxAttempts;
        this.randomNumber = this.generateRandomNumber();
        this.attempts = 0;
    }

    generateRandomNumber() {
        return Math.floor(Math.random() * 100) + 1;
    }

    checkGuess(userGuess) {
        this.attempts++;
        
        if (userGuess === this.randomNumber) {
            return { result: `Поздравляю! Вы угадали число ${this.randomNumber} за ${this.attempts} попыток.`, success: true };
        } else if (userGuess > this.randomNumber) {
            return { result: "Меньше!", success: false };
        } else {
            return { result: "Больше!", success: false };
        }
    }

    isGameOver() {
        return this.attempts >= this.maxAttempts;
    }

    resetGame() {
        this.randomNumber = this.generateRandomNumber();
        this.attempts = 0;
    }
}

class UI {
    constructor() {
        this.game = new Game();
        this.resultElement = document.getElementById('result');
        this.attemptsLeftElement = document.getElementById('attemptsLeft');
        this.guessInput = document.getElementById('guess');
        this.checkButton = document.getElementById('checkButton');
        this.resetButton = document.getElementById('resetButton');

        
        this.checkButton.addEventListener('click', () => this.checkGuess());
        this.resetButton.addEventListener('click', () => this.resetGame());
    }

    checkGuess() {
        const userGuess = parseInt(this.guessInput.value);

        if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
            this.displayMessage("Введите число от 1 до 100!", 'orange');
            return;
        }

        const { result, success } = this.game.checkGuess(userGuess);
        this.displayMessage(result, success ? 'green' : 'red');
        this.updateAttemptsLeft();

        if (success || this.game.isGameOver()) {
            this.endGame();
        }
    }

    updateAttemptsLeft() {
        this.attemptsLeftElement.textContent = `Осталось попыток: ${this.game.maxAttempts - this.game.attempts}`;
    }

    displayMessage(message, color) {
        this.resultElement.textContent = message;
        this.resultElement.style.color = color;
    }

    endGame() {
        if (this.game.isGameOver() && this.resultElement.textContent.indexOf('Поздравляю') === -1) {
            this.displayMessage(`Игра окончена. Вы не угадали число. Это было ${this.game.randomNumber}.`, 'blue');
        }
        this.guessInput.disabled = true;
    }

    resetGame() {
        this.game.resetGame();
        this.guessInput.disabled = false;
        this.resultElement.textContent = '';
        this.attemptsLeftElement.textContent = '';
        this.guessInput.value = '';
    }
}


document.addEventListener('DOMContentLoaded', () => {
    const ui = new UI(); 
});
