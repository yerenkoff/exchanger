let menuButtons = document.getElementsByClassName("menuButton");

if (window.matchMedia("(max-width: 700px)").matches) {
    for (let menuButton of menuButtons) {
        // console.log(menuButton);
        let navHeight = menuButton.nextElementSibling.offsetHeight;
        menuButton.nextElementSibling.style.maxHeight = 0;
        console.log(navHeight);
        menuButton.onclick = () => {
            // e.target.classList.toggle("accordeon");
            menuButton.nextElementSibling.classList.toggle("accordeon");
            if (menuButton.nextElementSibling.offsetHeight == 0) {
                menuButton.style.color = "#F0B90B";
                menuButton.children[0].style.transform = "rotate(0deg)";
                menuButton.children[0].style.filter = "grayscale(0%)";
                menuButton.nextElementSibling.style.maxHeight = navHeight + "px";
            } else {
                menuButton.style.color = "#5d5d5d";
                menuButton.children[0].style.transform = "rotate(-180deg)";
                menuButton.children[0].style.filter = "grayscale(100%)";
                menuButton.nextElementSibling.style.maxHeight = 0 + "px";
            }
        }
    }
}
















