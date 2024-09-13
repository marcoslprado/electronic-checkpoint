// TO-DO:
// Organizar código-fonte,


const weekDay = document.getElementById("week-day");
const currentDate = document.getElementById("date");
const currentHour = document.getElementById("current-hour");


const registerCheckpointButton = document.getElementById("register-checkpoint-button");
registerCheckpointButton.addEventListener("click", register);

const dialogCheckpoint = document.getElementById("dialog-checkpoint");

const closeButton = document.getElementById("dialog-close");
closeButton.addEventListener("click", () => {
    dialogCheckpoint.close();
})

let registerLocalStorage = getRegisterLocalStorage();

const dialogDate = document.getElementById("dialog-date");
const dialogHour = document.getElementById("dialog-hour");

dialogDate.textContent = getCurrentDate();
dialogHour.textContent = getCurrentTime(); 

function getCurrentPosition() {
    navigator.geolocation.getCurrentPosition((position) => {
        return position;
    });
}

const btnDialogIn = document.getElementById("btn-dialog-register-checkpoint");
btnDialogIn.addEventListener("click", () => {
    let typeRegister = document.getElementById("checkpoint-types");

    let checkpoint = {
        "date": getCurrentDate(),
        "hour": getCurrentTime(),
        "location": getCurrentPosition(),
        "id": 1,
        "type": typeRegister
    }

    console.log(checkpoint);

    saveRegisterLocalStorage(checkpoint);

    localStorage.setItem("lastTypeRegister", typeRegister);

    dialogCheckpoint.close();

    // TO-DO:
    // Fechar o dialog ao bater ponto e apresentar, de alguma forma
    // uma confirmação (ou não) para o usuário
})


function saveRegisterLocalStorage(register) {
    registerLocalStorage.push(register); // Array
    localStorage.setItem("register", JSON.stringify(registerLocalStorage));
} 

// Esta função deve retornar sempre um ARRAY, mesmo que seja vazio
function getRegisterLocalStorage() {
    let registers = localStorage.getItem("register");

    if(!registers) {
        return [];
    }

    return JSON.parse(registers); // converte de JSON para Array
}


function register() {
    // TO-DO:
    // Atualizar hora a cada segundo e data 00:00:00
    dialogDate.textContent = "Date: " + getCurrentDate();
    dialogHour.textContent = "Hour: " + getCurrentTime();
    dialogCheckpoint.showModal();
}

// Retorna a hora atual(hora/minuto/segundo)
function getCurrentTime() {
    const date = new Date();
    const hour = String(date.getHours()).padStart(2, '0');
    const minute = String(date.getMinutes()).padStart(2, '0');
    const second = String(date.getSeconds()).padStart(2, '0');
    return hour + ":" + minute + ":" + second;
}

// Retorna a data atual no padrão dd/mm/aaaa
function getCurrentDate() {
    // TO-DO:
    // Alterar a solução para considerar padStart ou slice
    // Considerar formatos diferentes da data, conforme localização
    // do usuário dd/mm/aaaa, mm/dd/aaaa, aaaa/mm/dd, aaaa.mm.dd
    // Verificar se no Date() há algum método que possa auxiliar
    // locale
    const date = new Date();
    let month = date.getMonth();
    let day = date.getDate();
    if (day < 10) {
        day = "0" + day
    }
    if (month < 10) {
        month = "0" + (month + 1)
    }
    return day + "/" + month + "/" + date.getFullYear();
}

// Retorna o dia da semana atual
function getWeekDay() {
    const date = new Date();
    let day = date.getDay();
    let daynames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    return daynames[day];
}

function printCurrentHour() {
    currentHour.textContent = getCurrentHour();
}

printCurrentHour();
setInterval(printCurrentHour, 1000); // Faz algo ser executado a cada 1000 milisegundos, nesse caso a função de exibir a data/hora
