(() => {
    const information = [
        {
            type : "normal",
            scrollHeight: 0,
            objs: {
                container : document.querySelector("#container")
            }
        },
        {
            type: "scroll",
            scrollHeight: 0,
            objs: {
                container: document.querySelector("#container-2")
            }
        },
        {
            type: "normal",
            srollHeight: 0,
            objs: {
                container : document.querySelector("#container-3")
            }
        }
    ]

    const setHeight = () => {
        for (let i = 0; i < information.length; i++){
            if (information[i].type === "normal"){
                information[i].scrollHeight = information[i].objs.container.offsetHeight;
            } else if(information[i].type === "scroll") {
                information[i].scrollHeight = window.innerHeight * 3
            }
            information[i].objs.container.style.height = `${information[i].scrollHeight}px`;
        }
    }
    window.addEventListener("load", setHeight);
    window.addEventListener("resize", setHeight)
})();