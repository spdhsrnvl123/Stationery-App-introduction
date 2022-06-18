//section-3 carousel
const update = () => {    
    const content = document.querySelector(".section-3 .container .content");
    const container = document.querySelector(".section-3 .container");
    const next = document.querySelector(".section-3 .button-box .next");
    const prev = document.querySelector(".section-3 .button-box .prev");


    next.addEventListener("click", () => {
        content.style.transform = `translateX(${-49.6}vw)`
        container.style.overflow = `hidden`;
        container.classList.remove("box_opacity");
        container.classList.add("active");
    })

    prev.addEventListener("click", () => {
        content.style.transform = `translateX(${0}vw)`
        container.classList.remove("active");
        container.classList.add("box_opacity");
        // container.style.overflow = `hidden`;
    })

}

window.addEventListener("load", update);

//section-2 carousel
const update_0 = () => {    
    const content_0 = document.querySelector(".section-2 .container .content");
    const container_0 = document.querySelector(".section-2 .container");
    const next_0 = document.querySelector(".section-2 .button-box .next");
    const prev_0 = document.querySelector(".section-2 .button-box .prev");


    next_0.addEventListener("click", () => {
        content_0.style.transform = `translateX(${-44.2}vw)`
        container_0.style.overflow = `hidden`;
        container_0.classList.remove("box_opacity");
        container_0.classList.add("active");
    })

    prev_0.addEventListener("click", () => {
        content_0.style.transform = `translateX(${0}vw)`
        container_0.classList.remove("active");
        container_0.classList.add("box_opacity");
    })


}

window.addEventListener("load", update_0);