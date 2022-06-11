const update = () => {
    const section = document.getElementsByTagName("section");
    const text_box = document.querySelectorAll(".text-box");
    const img = document.querySelectorAll(".img-box");
    const content_1 = document.querySelector(".content-1");
    const content_2 = document.querySelector(".content-2");
    const color_container = document.querySelector(".color-container");
    let pageNum;

    const pointWrap = document.querySelector(".pointWrap");
    const pointWrap_li = document.querySelectorAll(".pointWrap li");

    console.log(pointWrap);
    console.log(pointWrap_li);
    //전역에 let pageNum = 0

    const move = () => {
        window.scrollTo(
            {
                top:section[1].offsetTop,
                behavior:'smooth'
            }
        )
    }
    setTimeout(move, 2000);

    window.addEventListener("scroll", () => {
        let yOffset = window.pageYOffset;

        for (let i = 0; i < section.length; i++){
            if (yOffset > section[i].offsetTop - window.innerHeight/2 && yOffset < section[i].offsetTop - window.innerHeight/2 + section[i].offsetHeight) {
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
                pointWrap.classList.remove("appear");
                break;
            case 3:
                text_box[0].style.opacity = 1;
                text_box[0].style.transform = `none`;
                img[0].style.opacity = 1;
                navigation();
                break;
            case 4:
                text_box[1].style.opacity = 1;
                text_box[1].style.transform = `none`;
                img[1].style.opacity = 1;
                navigation();
                break;
            case 5:
                text_box[2].style.opacity = 1;
                text_box[2].style.transform = `none`;
                img[2].style.opacity = 1;
                navigation();
                break;
            case 6:
                // console.log(pageNum);
                pointWrap.classList.remove("appear");
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

    const navigation = () => {
        for (i = 0; i < pointWrap_li.length; i++){
            pointWrap_li[i].classList.remove("active");
        }
        pointWrap.classList.add("appear");
        pointWrap_li[pageNum - 3].classList.add("active");
    }

}

window.addEventListener("load", update);