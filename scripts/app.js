const closeMenuButton = document.querySelector("#--close-menu");
const openMenuButton = document.querySelector("#--open-menu");
const menu = document.querySelector("#--menu");

class App {
    constructor() {}

    static hidden = "hidden";
    static visible = "visible";

    static closeMenu() {
        closeMenuButton.addEventListener("click", () => {
            if (menu.classList.contains(this.visible)) {
                menu.classList.remove(this.visible);
                menu.classList.add(this.hidden);
            }
        });
    }
    static openMenu() {
        openMenuButton.addEventListener("click", () => {
            if (menu.classList.contains(this.hidden)) {
                menu.classList.remove(this.hidden);
                menu.classList.add(this.visible);
            }
        });
    }

    static start() {
        this.openMenu();
        this.closeMenu();

        if (window.matchMedia("max-width: 1401px").matches) {
            console.log("hey");
        }
    }
}

App.start();