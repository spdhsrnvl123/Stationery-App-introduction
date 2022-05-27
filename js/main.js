const update = () => {
    
    const showingStatus = "showing"
    const container = document.querySelector(".container")
    
    const carousel = () => {
        const currentScene = document.querySelector(`.${showingStatus}`)
        if (currentScene) {
            currentScene.classList.remove("showing")
            const nextSlide = currentScene.nextElementSibling;
            if (nextSlide) {
                nextSlide.classList.add("showing");
            } else {
                container.firstElementChild.classList.add("showing");
            }
        } else {
            container.firstElementChild.classList.add("showing");
        }
        represent()
    }


    const represent = () => {
        // const section_0 = document.querySelector(".section-0");
        const main_title = document.querySelector(".main-title");
        const first_text = document.querySelector(".first-text");
        const second_text = document.querySelector(".second-text");
        const showing = document.querySelector(".section-0.showing");

        if (showing) {
            main_title.classList.add("active");
            first_text.classList.add("active");
            second_text.classList.add("active");
        } else {
            main_title.classList.remove("active");
            first_text.classList.remove("active");
            second_text.classList.remove("active");
        }
    }

    carousel()
    setInterval(carousel, 8000);

}

window.addEventListener("load", update);