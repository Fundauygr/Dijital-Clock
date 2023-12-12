
function uptadeClock() {

    const now = new Date();
    const hours = now.getHours().toString().padStart(2, 0);
    const minutes = now.getMinutes().toString().padStart(2, 0);
    const seconds = now.getSeconds().toString().padStart(2, 0);
    const timeString = `${hours}: ${minutes}:${seconds}`;
    document.getElementById("clock").textContent = timeString;

}

uptadeClock();
setInterval(uptadeClock, 1000);



const uptadeDate = new Date();

const dateContainer = document.getElementById("date");
dateContainer.innerHTML = formatDate(uptadeDate);

function formatDate(date) {
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    const uptadeDate = new Date();

    const formattedDate = day + "/" + month + "/" + year;

    return formattedDate;
}






















