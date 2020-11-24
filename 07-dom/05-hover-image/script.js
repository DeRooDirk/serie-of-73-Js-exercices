(function() {
    let container = document.getElementsByTagName("img")[0];
    let oldImg = container.src;
    let newImg = container.getAttribute("data-hover");

    container.addEventListener("mouseover", () => { container.src = newImg; });
    container.onmouseout = () => { container.src = oldImg; };

})();