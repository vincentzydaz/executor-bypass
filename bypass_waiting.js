async function main() {
var interv;
document.body.remove();
document.write('<h1 style="color: red;">Bypassing...\nPlease wait: </h1><h1 id="timer" style="color: red;">7s</h1>')
var timer = document.getElementById("timer");
var i=7
function countdown() {
    if (i==0) {clearInterval(interv)}
    i--
    timer.innerHTML = i+"s"
}
interv = setInterval(countdown, 1000)
await new Promise(r => setTimeout(r, 7000));
window.location.href = "https://mobile.codex.lol?page=tasks"
}
main()