export const questionNumber = document.getElementById('question-number');
export const questionTimer = document.getElementById('question-timer');
export const questionText = document.getElementById('question-text');

export const answerA = document.querySelector('button[data-answer=A]')
export const answerB = document.querySelector('button[data-answer=B]');
export const answerC = document.querySelector('button[data-answer=C]');
export const answerD = document.querySelector('button[data-answer=D]');

export const answerButtons = document.querySelectorAll('.answer-button');

export const startButton = document.getElementById('start-button');
export const finalAnswerButton = document.getElementById('final-answer-button');
export const continueButton = document.getElementById('continue-button');
export const stopButton = document.getElementById('stop-button');
export const replayButton = document.getElementById('replay-button');

export const prize = document.getElementById('prize');
export const prizeText = prize.querySelector('.prizes-text');
export const prizeAmount = prize.querySelector('.prize-amount');

export const milestoneContainer = document.getElementById('milestone-container');

export const helpButtons = document.querySelectorAll('.help-button');

export const btnRemoveTwo = document.getElementById('remove-two-wrong-answers');
export const btnAudience = document.getElementById('ask-audience');
export const btnCallFriend = document.getElementById('call-friend');
export const btnExpert = document.getElementById('ask-expert');
