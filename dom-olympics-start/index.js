
//create heading by selecting #header and appending h2 and h2 and then prepending the span to the h2 element. 

var header = document.querySelector("#header");
var h1 = document.createElement("h1");
var h2 = document.createElement("h2")
var span = document.createElement("span")

h1.textContent = "This heading was inserted using Javascript!";
h2.textContent = " Page Creator, Web Developer"
span.textContent = "Noah Kenney Berlove:"
span.style.color = "orange"

header.append(h1);
header.append(h2);
h2.prepend(span);

var clearButton = document.getElementById("clear-button")
clearButton.addEventListener("click", clear)    
var messages = document.getElementsByClassName("message")


function clear() {
    for (var i = 0; i < messages.length; i++) {
        messages[i].style.display = "none";
        messages[i].textContent = ""
    }
}
// Happier content 

messages[0].textContent = "I have something fun I want to share"
messages[1].textContent = "Oh? I love fun things! What is it?"
messages[2].textContent = "I found this neat insect and I think you might like it"
messages[3].textContent = "Whoa Cool!"

//Theme Change Functionality

var theme = document.querySelector("#theme-drop-down");

theme.addEventListener("change", themeChange);

function themeChange() {
    for (var i = 0; i < messages.length; i++) {
        messages[i].classList.toggle("theme-two");
    }
}


// var send = document.getElementById("send")
// send.addEventListener("click", getInput)

// function getInput() {
//     var input = document.getElementById("input");
//     var current = messages[messageNumber]
//     current.textContent = input.value;
//     message.style.display = "flex-start";
//     messageNumber++;
// }
