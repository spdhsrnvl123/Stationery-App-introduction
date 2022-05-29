window.onload = function () {
    let scene = document.querySelectorAll(".scene");
    let pageNum = 0;
    let totalNum = scene.length;

    window.addEventListener("scroll", () => {
        let scrollY = window.scrollY;
    console.log(scrollY);
        
        for (let i = 0; i < totalNum; i++){
            if (scrollY > scene[i].offsetTop - window.innerHeight/3 && scrollY < scene[i].offsetTop - window.innerHeight/3 + scene[i].offsetHeight) {
                pageNum = i;
            }
        }
        pageChangeFunc();
        page_n_value();

    })

    const page_n_value = () => {
        if (scrollY < scene[0].offsetTop) {
            scene[0].classList.remove("update");
        } else if (scrollY > scene[2].offsetTop) {
            scene[2].classList.remove("update");
        }
    }

    const pageChangeFunc = ()=>{
        for (let i = 0; i < totalNum; i++){
            scene[i].classList.remove("update");
        }
            scene[pageNum].classList.add("update");
    }
    
    pageChangeFunc();
    page_n_value();
}