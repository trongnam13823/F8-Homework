import { questions, GameState, UserAnswerStatus } from './const.js';
import { answerButtons, btnAudience, btnCallFriend, btnExpert, btnRemoveTwo, continueButton, finalAnswerButton, replayButton, startButton, stopButton } from './references.js';
import { countdownInterval, renderButtonAction, renderHelpButtons, renderMilestones, renderPrize, renderQuestion, renderQuestionTimer } from './render.js';
import { getRandomQuestions, use5050, useAudiencePoll, useExpertAdvice, usePhoneFriend } from './utils.js';

const totalMilestones = questions.length;

let gameState = GameState.START;

let currentMilestone = 0;

let currentQuestion = {
    question: '',
    options: [
        { id: 'A', text: '' },
        { id: 'B', text: '' },
        { id: 'C', text: '' },
        { id: 'D', text: '' },
    ],
    answer: '',
};

let userAnswerStatus = UserAnswerStatus.NONE;
let userAnswerOption = '';
let disabledHelpButtons = [];
let questionTimerStart = 30;
let questionTimerEnd = 0;


renderQuestion(currentQuestion, userAnswerStatus, userAnswerOption, currentMilestone, totalMilestones);
renderButtonAction(gameState);
renderMilestones(currentMilestone);
renderHelpButtons(gameState, currentMilestone, disabledHelpButtons);
renderQuestionTimer(gameState, questionTimerStart, questionTimerEnd, handleQuestionTimeOut);

function handleQuestionTimeOut() {
    userAnswerStatus = UserAnswerStatus.SUBMIT;
    gameState = GameState.LOSE;

    renderQuestion(currentQuestion, userAnswerStatus, userAnswerOption, currentMilestone, totalMilestones);
    renderPrize(gameState, currentMilestone, totalMilestones);

    gameState = GameState.REPLAY;
    renderButtonAction(gameState);
}

startButton.addEventListener('click', () => {
    gameState = GameState.SELECTING;
    currentMilestone++;
    currentQuestion = getRandomQuestions(questions, currentMilestone);

    renderQuestionTimer(gameState, questionTimerStart, questionTimerEnd, handleQuestionTimeOut);
    renderHelpButtons(gameState, currentMilestone, disabledHelpButtons);
    renderQuestion(currentQuestion, userAnswerStatus, userAnswerOption, currentMilestone, totalMilestones);
    renderButtonAction(gameState);
    renderMilestones(currentMilestone);
});


answerButtons.forEach((button) => {
    button.addEventListener('click', () => {
        if (gameState === GameState.SELECTING) {
            userAnswerStatus = UserAnswerStatus.SELECT;
            userAnswerOption = button.dataset.answer;
            finalAnswerButton.classList.remove('btn-disabled')

            renderQuestion(currentQuestion, userAnswerStatus, userAnswerOption, currentMilestone, totalMilestones);
        }
    });
})

finalAnswerButton.addEventListener('click', () => {
    if (gameState === GameState.SELECTING) {
        userAnswerStatus = UserAnswerStatus.SUBMIT;

        if (userAnswerOption === currentQuestion.answer) {
            gameState = GameState.DECIDING;

            if (currentMilestone === totalMilestones) {
                gameState = GameState.WIN;

                renderPrize(gameState, currentMilestone, totalMilestones);

                gameState = GameState.REPLAY;
            }

        } else {
            gameState = GameState.LOSE;

            renderPrize(gameState, currentMilestone, totalMilestones);

            gameState = GameState.REPLAY;
        }

        clearInterval(countdownInterval);
        renderQuestion(currentQuestion, userAnswerStatus, userAnswerOption, currentMilestone, totalMilestones);
        renderButtonAction(gameState);
    }
})

continueButton.addEventListener('click', () => {
    if (gameState === GameState.DECIDING) {
        userAnswerStatus = UserAnswerStatus.NONE;
        userAnswerOption = '';

        currentMilestone = Math.min(currentMilestone + 1, totalMilestones);

        currentQuestion = getRandomQuestions(questions, currentMilestone);
        gameState = GameState.SELECTING;

        renderQuestionTimer(gameState, questionTimerStart, questionTimerEnd, handleQuestionTimeOut);
        renderHelpButtons(gameState, currentMilestone, disabledHelpButtons);
        renderQuestion(currentQuestion, userAnswerStatus, userAnswerOption, currentMilestone, totalMilestones);
        renderButtonAction(gameState);
        renderMilestones(currentMilestone);
    }
})

stopButton.addEventListener('click', () => {
    gameState = GameState.WIN;
    renderPrize(gameState, currentMilestone, totalMilestones);

    gameState = GameState.REPLAY;

    renderQuestion(currentQuestion, userAnswerStatus, userAnswerOption, currentMilestone, totalMilestones);
    renderButtonAction(gameState);
})

replayButton.addEventListener('click', () => {
    gameState = GameState.START;
    currentMilestone = 0;
    userAnswerStatus = UserAnswerStatus.NONE;
    userAnswerOption = '';

    currentQuestion = {
        question: '',
        options: [
            { id: 'A', text: '' },
            { id: 'B', text: '' },
            { id: 'C', text: '' },
            { id: 'D', text: '' },
        ],
        answer: '',
    };

    disabledHelpButtons = [];

    renderHelpButtons(gameState, currentMilestone, disabledHelpButtons);
    renderQuestionTimer(gameState, questionTimerStart, questionTimerEnd, handleQuestionTimeOut);
    renderQuestion(currentQuestion, userAnswerStatus, userAnswerOption, currentMilestone, totalMilestones);
    renderButtonAction(gameState);
    renderPrize(gameState, currentMilestone, totalMilestones);
    renderMilestones(currentMilestone);
})

btnRemoveTwo.addEventListener('click', () => {
    currentQuestion = use5050(currentQuestion);
    disabledHelpButtons.push(btnRemoveTwo.id);
    renderHelpButtons(gameState, currentMilestone, disabledHelpButtons);
    renderQuestion(currentQuestion, userAnswerStatus, userAnswerOption, currentMilestone, totalMilestones);
})

btnAudience.addEventListener('click', () => {
    currentQuestion.options = useAudiencePoll(currentQuestion);
    disabledHelpButtons.push(btnAudience.id);
    renderHelpButtons(gameState, currentMilestone, disabledHelpButtons);
    renderQuestion(currentQuestion, userAnswerStatus, userAnswerOption, currentMilestone, totalMilestones);
})

btnCallFriend.addEventListener('click', () => {
    currentQuestion.options = usePhoneFriend(currentQuestion);
    disabledHelpButtons.push(btnCallFriend.id);
    renderHelpButtons(gameState, currentMilestone, disabledHelpButtons);
    renderQuestion(currentQuestion, userAnswerStatus, userAnswerOption, currentMilestone, totalMilestones);
})

btnExpert.addEventListener('click', () => {
    currentQuestion.options = useExpertAdvice(currentQuestion);
    disabledHelpButtons.push(btnExpert.id);
    renderHelpButtons(gameState, currentMilestone, disabledHelpButtons);
    renderQuestion(currentQuestion, userAnswerStatus, userAnswerOption, currentMilestone, totalMilestones);
})