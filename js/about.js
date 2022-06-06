const update = () => {
    const section = document.getElementsByTagName("section");
    const text_box = document.querySelectorAll(".text-box");
    const img = document.querySelectorAll(".img-box");
    const totalNum = text_box.length;
    let pageNum;
    //전역에 let pageNum = 0

    window.addEventListener("scroll", () => {
        let yOffset = window.pageYOffset;

        for (let i = 0; i < totalNum; i++){
            if (yOffset > section[i+3].offsetTop - window.innerHeight/3 && yOffset < section[i+3].offsetTop  -window.innerHeight/3 + section[i+2].offsetHeight) {
                pageNum = i;
                break;
            }
        }

        pageEffect()
    })

    const pageEffect = () => {
        text_box[pageNum].style.opacity = 1;
        text_box[pageNum].style.transform = `none`;
        img[pageNum].style.opacity = 1;
    }

}

window.addEventListener("load", update);