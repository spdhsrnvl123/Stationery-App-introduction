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

    //전역에 let pageNum = 0
    const note = document.querySelector(".note");
    const life_log = document.querySelector(".life_log");
    const life_log_box = document.querySelector(".life_log_box");

    //2번째 section으로 이동.
    const move = () => {
        window.scrollTo(
            {
                top:section[1].offsetTop,
                behavior:'smooth'
            }
        )
    }
    setTimeout(move, 2000);

    const navigationhandler = (e) => {
        for (let i = 0; i < pointWrap_li.length; i++){
            if (e.target === pointWrap_li[i]) {
                pointNumber = i;
                window.scrollTo(
                    {
                        top: section[pointNumber+3].offsetTop,
                        behavior: "smooth"
                    }
                )
            }        
        }
    }

    pointWrap.addEventListener("click", navigationhandler);

    const navigation = () => {
        for (i = 0; i < pointWrap_li.length; i++){
            pointWrap_li[i].classList.remove("active");
        }
        pointWrap.classList.add("appear");
        pointWrap_li[pageNum - 3].classList.add("active");
    }

    window.addEventListener("scroll", () => {
        let yOffset = window.pageYOffset;

        for (let i = 0; i < section.length; i++){
            if (yOffset > section[i].offsetTop - window.innerHeight/2 && yOffset < section[i].offsetTop -window.innerHeight/2 + section[i].offsetHeight) {
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
                console.log(pageNum);
                break;
            case 1:
                console.log(pageNum);
                note.style.opacity = 1;
                life_log.style.opacity = 1;
                life_log_box.style.opacity = 1;
                life_log_box.style.transform = "none";
                break;
            case 2:
                console.log(pageNum);
                pointWrap.classList.remove("appear");
                break;
            case 3:
                console.log(pageNum);
                text_box[0].style.opacity = 1;
                text_box[0].style.transform = `none`;
                img[0].style.opacity = 1;
                navigation();
                break;
            case 4:
                console.log(pageNum);
                text_box[1].style.opacity = 1;
                text_box[1].style.transform = `none`;
                img[1].style.opacity = 1;
                navigation();
                break;
            case 5:
                console.log(pageNum);
                text_box[2].style.opacity = 1;
                text_box[2].style.transform = `none`;
                img[2].style.opacity = 1;
                navigation();
                break;
            case 6:
                console.log(pageNum);
                pointWrap.classList.remove("appear");
                break;
            case 7:
                console.log(pageNum);
                content_1.style.opacity = 1;
                content_1.style.transform = `none`;
                content_2.style.opacity = 1;
                content_2.style.transform = `none`;
                break;
            case 8:
                console.log(pageNum);
                color_container.style.opacity = 1;
                color_container.style.transform = `none`;
                break;
        }
    }
}

window.addEventListener("load", update);