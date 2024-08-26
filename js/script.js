const weekDay = document.getElementById("week-day");
const currentDate = document.getElementById("date");
const currentHour = document.getElementById("current-hour");

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
    let month = date.getMonth() + 1;
    return date.getDate() + "/" + month + "/" + date.getFullYear();
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

console.log(getCurrentTime());
console.log(getCurrentDate());
console.log(getWeekDay());