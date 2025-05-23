import { GameState, prizes } from './const.js';
import {
    questionNumber,
    questionText,
    answerA,
    answerB,
    answerC,
    answerD,
    startButton,
    finalAnswerButton,
    replayButton,
    continueButton,
    prize,
    prizeText,
    prizeAmount,
    stopButton,
    milestoneContainer,
    helpButtons,
    questionTimer,
} from './references.js';

const optionsMap = {
    A: answerA,
    B: answerB,
    C: answerC,
    D: answerD
};

export function renderQuestion(questionObj, userAnswerStatus, userAnswerOption, currentNumber, totalNumber) {
    const { question, options, answer: correctAnswer } = questionObj;

    questionNumber.textContent = `Câu ${currentNumber}/${totalNumber}`;
    questionText.textContent = question;

    options.forEach(({ id, text, percent, hidden, suggested }) => {
        const btn = optionsMap[id];

        btn.innerHTML = `<span>${id}. ${text}</span> <span>${Number(percent) >= 0 ? percent + '%' : ''}</span>`;

        btn.className = 'answer-button';

        if (suggested) btn.className = 'answer-suggested';

        if (userAnswerStatus === 'select' && userAnswerOption === id) {
            btn.className = 'answer-select'
        }

        else if (userAnswerStatus === 'submit') {
            if (correctAnswer === id) btn.className = 'answer-correct';
            if (userAnswerOption === id && userAnswerOption !== correctAnswer) btn.className = 'answer-incorrect';

            btn.classList.add('no-interaction');
        }

        hidden ? btn.classList.add('d-hidden') : btn.classList.remove('d-hidden');
    });
}

const buttonMap = {
    [GameState.START]: [startButton],
    [GameState.SELECTING]: [finalAnswerButton],
    [GameState.DECIDING]: [continueButton, stopButton],
    [GameState.REPLAY]: [replayButton],
};

export function renderButtonAction(gameState) {
    const allButtons = new Set(Object.values(buttonMap).flat());
    const visibleButtons = new Set(buttonMap[gameState] || []);

    allButtons.forEach((button) => {
        button.classList.toggle('d-none', !visibleButtons.has(button));
        button.classList.toggle('btn-disabled', gameState === GameState.SELECTING);
    });
}

export function renderPrize(gameState, currentMilestone, totalMilestones) {
    prize.classList.add('d-none');

    if (gameState === GameState.WIN) {
        prizeAmount.textContent = prizes[currentMilestone];
        prizeText.textContent = 'Chúc mừng bạn đã nhận được';

        if (currentMilestone === totalMilestones) {
            prizeText.textContent = 'Bạn đã trở thành triệu phú';
        }

        prize.classList.remove('d-none');
    }
    else if (gameState === GameState.LOSE) {
        const milestoneSafe = Math.floor((currentMilestone - 1) / 5) * 5
        prizeAmount.textContent = prizes[milestoneSafe];

        if (prizes[milestoneSafe] === '0') {
            prizeText.textContent = 'Bạn đã mất tất cả';
        } else {
            prizeText.textContent = `Bạn nhận được mốc an toàn số ${milestoneSafe}`;
        }

        prize.classList.remove('d-none');
    }
}

const milestoneSafe = [5, 10, 15]

export function renderMilestones(currentMilestone) {
    milestoneContainer.innerHTML = prizes.map((prize, index) =>
        `<div class="milestone 
            ${currentMilestone === index ? 'milestone-current' : milestoneSafe.includes(index) ? 'milestone-safe' : ''}
        ">${index < 10 ? '0' + index : index} <span>${prize + 'đ'}</span></div>`
    ).join('');
}

export function renderHelpButtons(gameState, currentMilestone, btnDisable = []) {
    helpButtons.forEach(button => {
        if (gameState === GameState.SELECTING && currentMilestone > 5) {
            button.classList.remove('btn-disabled');
        } else {
            button.classList.add('btn-disabled');
        }

        if (btnDisable.includes(button.id)) {
            button.classList.add('btn-disabled');
        }
    });
}

export let countdownInterval;

export function renderQuestionTimer(gameState, start, end, handleTimeOut) {
    clearInterval(countdownInterval);
    questionTimer.textContent = `${start} giây`;
    questionTimer.classList.remove('question-timer-out');

    if (gameState === GameState.SELECTING) {
        let time = start;

        countdownInterval = setInterval(() => {
            time--;
            questionTimer.textContent = `${time} giây`;

            if (time <= end) {
                clearInterval(countdownInterval);
                handleTimeOut();
                questionTimer.textContent = 'Hết giờ';
                questionTimer.classList.add('question-timer-out');
            }
        }, 1000);
    }
}