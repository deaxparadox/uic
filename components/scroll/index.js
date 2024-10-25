


const scroll100 = function() {
    let y = 0;
    let step = 100;
    const upButton = document.querySelector(".up");
    const downButton = document.querySelector(".down");


    upButton.addEventListener('click', () => {
        console.log("up step", y);
        
        if (y > 0) {
            y-=step;
            window.scrollTo({
                top: y,
                left: 0,
                behavior: "smooth"
            });
        }
    })


    downButton.addEventListener('click', () => {
        console.log("down step", y);

        if ((y + window.innerHeight) < document.body.clientHeight) {
            y+=step;
            window.scrollTo({
                top: y,
                left: 0,
                behavior: "smooth"
            })
        }
    })
};


const scrollFull = () => {
    const upButton = document.querySelector(".up");
    const downButton = document.querySelector(".down");

    upButton.addEventListener('click', () => {
        console.log("up");

        // 
        // scroll to top
        // 
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        });
    })


    downButton.addEventListener('click', () => {
        console.log("down");
        
        // 
        // // scroll to bottom
        // 
        window.scrollTo({
            top: document.body.scrollHeight,
            left: 0,
            behavior: "smooth"
        })  
        // 

    })
}


scroll100();