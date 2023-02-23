const dropdown = document.querySelector("#nav-bar header li p");
const hidden = document.querySelector("#nav-bar .drop-down");

hidden.setAttribute("hidden", null)
dropdown.addEventListener("hover", drpdwn, false)

var drpdwn = function() {
    hidden.removeAttribute("hidden")
}