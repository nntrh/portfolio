const text = document.getElementById("text");
const messages = ["<strong> À propos de moi...</strong>"];
let i = 0;
let j = 0;
function type() {
    if (i < messages[j].length) {
        text.style.visibility = "visible";
        text.innerHTML = messages[j].slice(0, i+1);
        i++;
        setTimeout(type, 100)
    } 
}
type();