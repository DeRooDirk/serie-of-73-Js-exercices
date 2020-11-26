(function() {
    //Clear the target
    document.getElementById("target").innerHTML = "";

    let messageTyped = text => {
        let arrayMessage = text.split('');

        let i = 0;
        let printMessage = setInterval(() => {
            document.getElementById("target").innerHTML += arrayMessage[i];
            i++;
            if (i === arrayMessage.length) {
                clearInterval(printMessage);
            }
        }, 100);
    };

    messageTyped("Do not go where the path may lead, go instead where there is no path and leave a trail.");
})();