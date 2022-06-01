(() => {
    let currentScene = 0;
    let prevScrollHeight = 0;
    let yOffset = 0;
    let totalHeight = 0;
    let error_protect = false;

    const scene = [
        {
            type : "normal",
            scrollHeight: 0,
            objs:{
                container : document.querySelector("#container-0")
            }
        },
        {
            type: "scrollEvent",
            scrollHeight: 0,
            height_add: 3,
            objs: {
                container: document.querySelector("#container-1"),
                messageA: document.querySelector(".messageA"),
                messageB: document.querySelector(".messageB"),
                messageC: document.querySelector(".messageC")
            },
            value: {
                messageA_opacity_in: [0, 1, {start : 0 , end:0.16}]
            }
        },
        {
            type: "normal",
            scrollHeight: 0,
            objs:{
                container : document.querySelector("#container-2")
            }
        }
    ]

    const set_Height = () => {
        for (let i = 0; i < scene.length; i++){
            if (scene[i].type === "scrollEvent") {
                scene[i].scrollHeight = scene[i].height_add * window.innerHeight;
            } else if (scene[i].type === "normal") {
                scene[i].scrollHeight = scene[i].objs.container.offsetHeight;
            }
            scene[i].objs.container.style.height = `${scene[i].scrollHeight}px`
        }

        //새로고침 했을때 잘못된 값 삽입 방지.
        totalHeight = 0;
        for (let i = 0; i< scene.length; i++){
            totalHeight += scene[i].scrollHeight;
            if (totalHeight >= pageYOffset) {
                currentScene = i;
                break;
            }
        }
        document.body.setAttribute('id', `show-scene-${currentScene}`);
    }

    const calculate = (value,currentYOffset) => {
        let result;
        let start_point = value[2].start * scene[currentScene].scrollHeight;
        let end_point = value[2].end * scene[currentScene].scrollHeight;
        let animation_point = end_point - start_point;

        if (currentYOffset >= start_point && currentYOffset <= end_point) {
            result = (currentYOffset - start_point) / animation_point;
        }

        return result;
    }

    const playAnimation = () => {
        let currentYOffset = 0;
        let value = scene[currentScene].value;
        currentYOffset = yOffset - prevScrollHeight;
        scrollRatio = currentYOffset / scene[currentScene].scrollHeight;

        switch (currentScene) {
            case 0:
                break;
            case 1:
                scene[currentScene].objs.messageA.style.opacity = calculate(value.messageA_opacity_in,currentYOffset)
                break;
            case 2:
                break;
        }
    }

    const update = () => {
        prevScrollHeight = 0;
        error_protect = false;
        
        for (let i = 0; i < currentScene; i++){
            prevScrollHeight = prevScrollHeight + scene[i].scrollHeight;
        }
        if (yOffset > prevScrollHeight + scene[currentScene].scrollHeight) {
            error_protect = true;
            currentScene++;
            document.body.setAttribute("id", `show-scene-${currentScene}`);
        }
        if (yOffset < prevScrollHeight) {
            error_protect = true;
            if (currentScene === 0) return; //바운스를 방지하기 위해.
            currentScene--;
            document.body.setAttribute("id", `show-scene-${currentScene}`);
        }

        if (error_protect) return;

        playAnimation();
    }

    window.addEventListener("scroll", () => {
        yOffset = pageYOffset;
        update();
    })

    window.addEventListener('load', set_Height);
    window.addEventListener('resize', set_Height);
})()