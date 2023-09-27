"use strict"

document.addEventListener('DOMContentLoaded', () => {

    // SPACE AND BACKSPACE REVERSED CODE
    const input = document.getElementById("input");
    input.addEventListener("keydown", (e) => {
        if (e.code === "Space") {
            e.preventDefault();
            input.value = input.value.slice(0, -1);
        }
        else if (e.code === "Backspace") {
            e.preventDefault();
            input.value += " ";
        }
    });

    // CAPS LOCK CHECK CODE
    const capsMessage = document.getElementById("capsMessage");
    window.addEventListener("keydown", (e) => {
        const capsLock = e.getModifierState("CapsLock");
        capsLock ? capsMessage.innerHTML = "Turn off CapsLock!" : capsMessage.innerHTML = "";
    });
});