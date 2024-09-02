const weekDay = document.getElementById("week-day");
const currentDate = document.getElementById("date");
const currentHour = document.getElementById("current-hour");
const registerCheckpointButton = document.getElementById("register-checkpoint-button");

registerCheckpointButton.addEventListener("click", register);

const dialogCheckpoint = document.getElementById("dialog-checkpoint");

const closeButton = document.getElementById("close-button")
closeButton.addEventListener("click", () => {
    dialogCheckpoint.close();
})

function register() {
    dialogCheckpoint.showModal();
}

// Imprime a Data e horário no HTML
function updateContentHour() {
    currentDate.textContent = getCurrentDate();
    currentHour.textContent = getCurrentTime();
    weekDay.textContent = getWeekDay();
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
    const date = new Date();
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    return day + "/" + month + "/" + date.getFullYear();
}

// Retorna o dia da semana atual
function getWeekDay() {
    const date = new Date();
    let day = date.getDay();
    let daynames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    return daynames[day];
}

updateContentHour();
setInterval(updateContentHour, 1000); // Faz algo ser executado a cada 1000 milisegundos, nesse caso a função de exibir a data/hora

//Ver dialog(HTML)