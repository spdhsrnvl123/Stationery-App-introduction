const update = () => {
    const section = document.getElementsByTagName("section");
    let pageNum;

    const element = [
        {
            service: document.querySelector(".service"),
            first_text: document.querySelector(".first-text"),
            install_button : document.querySelector(".install-button")
        },
        {

        },
        {

        },
        {

        },
        {

        },
        {

        },
        {

        },
    ]

    console.log()

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

    const pageEffect = () => {
        switch (pageNum) {
            case 0:
                break;
            case 1:
                break;
            case 2:
                break;
            case 3:
                break;
            case 4:
                break;
            case 5:
                break;
            case 6:
                break;
            case 7:
                break;
            case 8:
                break;
        }
    }

}

window.addEventListener("load", update);