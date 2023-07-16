const counterEl = document.querySelector(".counter");
const frontBarEl = document.querySelector(".loading-bar-font");

counterEl.innerText = "20%";

let idx =0;

updateTime();

function updateTime(){
    counterEl.innerText = idx +"%";
    frontBarEl.style.width = idx + "%";
    idx++;
    if (idx < 101) {
        setTimeout(updateTime,20);
    }
 
}