const update = () => {
    const section = document.getElementsByTagName("section");
    const text_box = document.querySelectorAll(".text-box");
    const img = document.querySelectorAll(".img-box");
    const content_1 = document.querySelector(".content-1");
    const content_2 = document.querySelector(".content-2");
    const color_container = document.querySelector(".color-container");
    let pageNum;

    //전역에 let pageNum = 0

    window.addEventListener("scroll", () => {
        let yOffset = window.pageYOffset;

        for (let i = 0; i < section.length; i++){
            if (yOffset > section[i].offsetTop - window.innerHeight/3 && yOffset < section[i].offsetTop - window.innerHeight/3 + section[i].offsetHeight) {
                pageNum = i;
                break;
            }
        }
        pageEffect()
    })

    //섹션별 이벤트 적용
    const pageEffect = () => {
        switch (pageNum) {
            case 0:
                // console.log(pageNum);
                break;
            case 1:
                // console.log(pageNum);
                break;
            case 2:
                // console.log(pageNum);
                break;
            case 3:
                text_box[0].style.opacity = 1;
                text_box[0].style.transform = `none`;
                img[0].style.opacity = 1;
                break;
            case 4:
                text_box[1].style.opacity = 1;
                text_box[1].style.transform = `none`;
                img[1].style.opacity = 1;
                break;
            case 5:
                text_box[2].style.opacity = 1;
                text_box[2].style.transform = `none`;
                img[2].style.opacity = 1;
                break;
            case 6:
                // console.log(pageNum);
                break;
            case 7:
                content_1.style.opacity = 1;
                content_1.style.transform = `none`;
                content_2.style.opacity = 1;
                content_2.style.transform = `none`;
                break;
            case 8:
                color_container.style.opacity = 1;
                color_container.style.transform = `none`;
                break;
        }
    }

}

window.addEventListener("load", update);