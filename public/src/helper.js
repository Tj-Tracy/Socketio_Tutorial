function openUsers() {
    if(document.querySelector('.user-bar').style.width !== "200px") {
        document.querySelector('.user-bar').style.width = "200px";
        document.querySelector('.main-window').style.marginLeft = "200px";
    }
    else {
        document.querySelector('.user-bar').style.width = "0px";
        document.querySelector('.main-window').style.marginLeft = "0px";
    }
}

window.onload = () => {
    document.querySelector('.message-send').addEventListener("keyup", (event) => {
       event.preventDefault();
       if (event.keyCode == 13) {
           document.querySelector('.message-send').click();
       }
    });
    console.log(document.querySelector('.message-send'));
}
