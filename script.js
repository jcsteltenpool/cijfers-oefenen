const field1 = document.querySelector('#field1');
const field2 = document.querySelector('#field2');
const field3 = document.querySelector('#field3');
const fieldsArray = [field1, field2, field3];
let solution = fieldsArray[Math.floor(Math.random()*fieldsArray.length)].textContent;

const gameModeSwitch = document.querySelector('#gameMode');
let gameModeValue = 'easy';

const repeatButton = document.querySelector('#repeat');
repeatButton.addEventListener('click', playSolution);

gameModeSwitch.addEventListener('change', () => {
    const data = new FormData(gameModeSwitch);
    for (const [name, value] of data) {
        gameModeValue = `${value}`;
        startNewGame();
    }
})

function startNewGame() {
    switch (gameModeValue) {
        case 'easy':
            createGame('easy', 'hard');
            break;
        case 'normal':
            createGame('hard', 'easy');
            break;   
        case 'hard':
            createGame('hard', 'hard');
            break;
    }   
}

function createGame(main, sec) {
    fieldsArray.forEach((field) => {
        field.textContent = getRandomNumber(main);
    });
    while(field2.textContent === field1.textContent) {
        field2.textContent = getRandomNumber(main);
    }
    while(field3.textContent === field1.textContent || field3.textContent === field2.textContent) {
        field3.textContent = getRandomNumber(main);
    }
        
    let randomField = fieldsArray[Math.floor(Math.random()*fieldsArray.length)];
    randomField.textContent = getRandomNumber(sec);
    while(field1.textContent === field2.textContent || field1.textContent === field3.textContent || field2.textContent === field3.textContent) {
        randomField.textContent = getRandomNumber(sec);
    }
        
    pickNumToCall();
    setTimeout(() => {
        playSolution();
    },500);
}

function getRandomNumber(level) {
    if (level === 'easy') {
        const easyArray = [0, 1, 2, 3, 4, 5];
        let easyNumber = easyArray[Math.floor(Math.random()*easyArray.length)];
        return easyNumber;
    } else if (level === 'hard') {
        const hardArray = [6, 7, 8, 9];
        let hardNumber = hardArray[Math.floor(Math.random()*hardArray.length)];
        return hardNumber;
    }
}

function pickNumToCall() {
    solution = fieldsArray[Math.floor(Math.random()*fieldsArray.length)].textContent;
};

fieldsArray.forEach((field) => {
    field.addEventListener('click', () => {
        showSolution();
        playWinOrLoseSound();
        reloadGame();
    });

    function showSolution() {
        fieldsArray.forEach((field) => {
            if (field.textContent === solution) {
                field.style.backgroundColor = 'limegreen';
                field.style.transform = 'scale(1.1)';
            } else {
                field.style.backgroundColor = 'red';
                field.style.transform = 'scale(0.95)';
            }
        })
    };

    function playWinOrLoseSound() {
        if (field.textContent === solution) {
            const winSound = new Audio('./resources/Glass.m4a');
            winSound.play();
        } else {
            const loseSound = new Audio('./resources/Basso.m4a');
            loseSound.play();
        }
    };

    function reloadGame() {
        setTimeout(() => {
            fieldsArray.forEach((field) => {
                field.style.backgroundColor = 'skyblue';
                field.style.transform = 'scale(1)';
            })
            startNewGame();
        }, 2000);
    }
});

function playSolution() {
    switch (solution) {
        case '0':
            const cijfer0 = new Audio('./resources/cijfers_nul.mp3');
            cijfer0.play();
            break;
        case '1':
            const cijfer1 = new Audio('./resources/cijfers_een.mp3');
            cijfer1.play();
            break;
        case '2':
            const cijfer2 = new Audio('./resources/cijfers_twee.mp3');
            cijfer2.play();
            break;
        case '3':
            const cijfer3 = new Audio('./resources/cijfers_drie.mp3');
            cijfer3.play();
            break;
        case '4':
            const cijfer4 = new Audio('./resources/cijfers_vier.mp3');
            cijfer4.play();
            break;
        case '5':
            const cijfer5 = new Audio('./resources/cijfers_vijf.mp3');
            cijfer5.play();
            break;
        case '6':
            const cijfer6 = new Audio('./resources/cijfers_zes.mp3');
            cijfer6.play();
            break;
        case '7':
            const cijfer7 = new Audio('./resources/cijfers_zeven.mp3');
            cijfer7.play();
            break;
        case '8':
            const cijfer8 = new Audio('./resources/cijfers_acht.mp3');
            cijfer8.play();
            break;
        case '9':
            const cijfer9 = new Audio('./resources/cijfers_negen.mp3');
            cijfer9.play();
            break;
    }
};

startNewGame();

