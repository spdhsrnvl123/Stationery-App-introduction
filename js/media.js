const update = () => {
    const content = document.querySelector(".section-3 .container .content");
    const container = document.querySelector(".section-3 .container");
    const next = document.querySelector(".section-3 .button-box .next");
    const prev = document.querySelector(".section-3 .button-box .prev");

    next.addEventListener("click", () => {
        content.style.transform = `translateX(${-49.6}vw)`
        container.style.overflow = `hidden`;
    })
    prev.addEventListener("click", () => {
        content.style.transform = `translateX(${0}vw)`
        // container.style.overflow = `hidden`;
    })

}

window.addEventListener("load", update);