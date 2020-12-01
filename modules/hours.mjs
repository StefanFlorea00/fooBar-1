
export function init(data){
    updateHours(data);
}

function updateHours(data){
    let today = new Date();
    let timeToClosingHours =parseInt(data.split(":")[0]) - parseInt(today.getHours()) ;
    let timeToClosingMinutes = 60 - parseInt(data.split(":")[1]) - parseInt(today.getMinutes()) ;
    let timeToClosingSeconds = 60 - parseInt(data.split(":")[2]) - parseInt(today.getSeconds()) ;
    console.log(timeToClosingHours + ":" + timeToClosingMinutes + ":" + timeToClosingSeconds);
    document.querySelector(".hour-display").textContent = timeToClosingHours + ":" + timeToClosingMinutes + ":" + timeToClosingSeconds;
}