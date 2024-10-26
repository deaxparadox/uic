
const leftPanelFunction = () => {

    // state control of panel
    let state = true;

    /* 
    - function: checkf the width of screen.
    - If width if less or equal to 1024, minimize the panel. 
    */
    (function() {
        const width = window.screen.width;
        console.log(width)
        if (width <= 1024) {
            console.log(document.querySelector(".ewl-left-panel-left").style.width);
            document.querySelector(".ewl-left-panel-left").style.width = "0px";
            state = false;
        }
    })();


    const leftButton = document.querySelector(".ewl-left-panel-button");
    const leftPanel = document.querySelector(".ewl-left-panel-left");
    const leftButtonIcon = document.querySelector(".ewl-left-panel-button > span");

    leftButton.addEventListener('click', () => {

        state = !state;
        console.log("Left button clicked", state);

        if (state){
            leftPanel.style.width = '300px';
            leftButtonIcon.style.transform = "rotateY(180deg)";
        } else {
            leftPanel.style.width = '0px';
            leftButtonIcon.style.transform = "rotateY(0deg)";

        }

        
        
    })
}

leftPanelFunction();