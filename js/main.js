const update = () => {
    
    const showingStatus = "showing"
    const container = document.querySelector("#container-0")
    
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
        const showing = document.querySelector(".section-0.showing");
        const main_title = document.querySelector(".main-title");
        const first_text = document.querySelector(".first-text");
        const second_text = document.querySelector(".second-text");


        if (showing) {
            main_title.classList.add("active");
            first_text.classList.add("active");
            second_text.classList.add("active");
        } else {
            main_title.classList.remove("active");
            first_text.classList.remove("active");
            second_text.classList.remove("active");
        }
        
        const showing_2 = document.querySelector(".section-1.showing");
        const section_1_text = document.querySelector(".section-1-text");
        const section_1_text2 = document.querySelector(".section-1-text2");

        if (showing_2) {
            section_1_text.classList.add("active");
            section_1_text2.classList.add("active");
        } else {
            section_1_text.classList.remove("active");
            section_1_text2.classList.remove("active");    
        }
        
        
        
        const showing_3 = document.querySelector(".section-2.showing");
        const section_2_text = document.querySelector(".section-2-text");
        const section_2_text2 = document.querySelector(".section-2-text2");
        
        if (showing_3) {
            section_2_text.classList.add("active");
            section_2_text2.classList.add("active");
        } else {
            section_2_text.classList.remove("active");
            section_2_text2.classList.remove("active");
        }
    }
        carousel()
        setInterval(carousel, 4000);
}

window.addEventListener("load", update);