(() => {
    let y = 0;
    let mouseY = 0;
    let mouseStart = 0;
    let mouseStop = 0;
    let mouseOn = false;
    let distance = 0
    
    document.querySelector("body").addEventListener("mousedown", e => {
        e.preventDefault();
        // mouseY = e.clientY;
        // console.log(mouseY);
        mouseOn = true;
    });


    document.querySelector("body").addEventListener("mouseup", e => {
        e.preventDefault();
        // console.log(mouseY);
        mouseOn = false
    });


    document.addEventListener("mousemove", (e) => {    
        e.preventDefault();
        // if (mouseOn) {
        //     mouseStart = e.clientY;
        // } else {
        //     mouseStop = e.clientY;
        // }
        distance = mouseStop - mouseStart;
        if (distance < 0) {
            y -= distance;
        } else {
            y += distance;
        }
        window.scrollTo({
            top: y,
            left: 0,
            behavior: "smooth"
        })
        
    })


})();