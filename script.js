const field1 = document.querySelector('#field1');
const field2 = document.querySelector('#field2');
const field3 = document.querySelector('#field3');
const fieldsArray = [field1, field2, field3];
let solution = fieldsArray[Math.floor(Math.random()*fieldsArray.length)].textContent;
let randomField;

const winSound = new Audio('./resources/Glass.m4a');
const loseSound = new Audio('./resources/Basso.m4a');
const cijfer0 = new Audio('./resources/cijfers_nul.mp3');
const cijfer1 = new Audio('./resources/cijfers_een.mp3');
const cijfer2 = new Audio('./resources/cijfers_twee.mp3');
const cijfer3 = new Audio('./resources/cijfers_drie.mp3');
const cijfer4 = new Audio('./resources/cijfers_vier.mp3');
const cijfer5 = new Audio('./resources/cijfers_vijf.mp3');
const cijfer6 = new Audio('./resources/cijfers_zes.mp3');
const cijfer7 = new Audio('./resources/cijfers_zeven.mp3');
const cijfer8 = new Audio('./resources/cijfers_acht.mp3');
const cijfer9 = new Audio('./resources/cijfers_negen.mp3');

const repeatButton = document.querySelector('#repeat');
repeatButton.addEventListener('click', playSolution);

function createGame() {


}
// switch in global scope? / createGame() leest waarde van inputs oid

const gameMode = document.querySelector('#gameMode');
gameMode.addEventListener('change', () => {
    const data = new FormData(gameMode);
    let output = "";
    for (const [name, value] of data) {
        output = `${value}`;
        console.log(output);
    }
    switch (output) {
        case 'easy':
            createEasyGame();
            break;
        case 'normal':
            createNormalGame();
            break;   
        case 'hard':
            createHardGame();
            break;
    }
})

function getRandomEasyNumber() {
    const easyArray = [0, 1, 2, 3, 4, 5];
    let easyNumber = easyArray[Math.floor(Math.random()*easyArray.length)];
    return easyNumber;
}

function getRandomHardNumber() {
    const hardArray = [6, 7, 8, 9];
    let hardNumber = hardArray[Math.floor(Math.random()*hardArray.length)];
    return hardNumber;
}


function createEasyGame() {
    fieldsArray.forEach((field) => {
        field.textContent = getRandomEasyNumber();
    })

    while(field2.textContent === field1.textContent) {
        field2.textContent = getRandomEasyNumber();
    }
    while(field3.textContent === field1.textContent || field3.textContent === field2.textContent) {
        field3.textContent = getRandomEasyNumber();
    }

    randomField = fieldsArray[Math.floor(Math.random()*fieldsArray.length)];
    randomField.textContent = getRandomHardNumber();

    pickNumToCall();

    setTimeout(() => {
        playSolution();
    },500);
}

function createNormalGame() {
    fieldsArray.forEach((field) => {
        field.textContent = getRandomHardNumber();
    })

    while(field2.textContent === field1.textContent) {
        field2.textContent = getRandomHardNumber();
    }
    while(field3.textContent === field1.textContent || field3.textContent === field2.textContent) {
        field3.textContent = getRandomHardNumber();
    }

    randomField = fieldsArray[Math.floor(Math.random()*fieldsArray.length)];
    randomField.textContent = getRandomEasyNumber();

    pickNumToCall();

    setTimeout(() => {
        playSolution();
    },500);
}

function createHardGame() {
    fieldsArray.forEach((field) => {
        field.textContent = getRandomHardNumber();
    })

    while(field2.textContent === field1.textContent) {
        field2.textContent = getRandomHardNumber();
    }
    while(field3.textContent === field1.textContent || field3.textContent === field2.textContent) {
        field3.textContent = getRandomHardNumber();
    }

    pickNumToCall();

    setTimeout(() => {
        playSolution();
    },500);
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
            console.log('Win');
            winSound.play();
        } else {
            loseSound.play();
        }
    };

    function reloadGame() {
        setTimeout(() => {
            fieldsArray.forEach((field) => {
                field.style.backgroundColor = 'skyblue';
                field.style.transform = 'scale(1)';
            })
            createGame();
        }, 2000);
    }
});

function playSolution() {
    switch (solution) {
        case '0':
            cijfer0.play();
            break;
        case '1':
            cijfer1.play();
            break;
        case '2':
            cijfer2.play();
            break;
        case '3':
            cijfer3.play();
            break;
        case '4':
            cijfer4.play();
            break;
        case '5':
            cijfer5.play();
            break;
        case '6':
            cijfer6.play();
            break;
        case '7':
            cijfer7.play();
            break;
        case '8':
            cijfer8.play();
            break;
        case '9':
            cijfer9.play();
            break;
    }
};

createEasyGame();



