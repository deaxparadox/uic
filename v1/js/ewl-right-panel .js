
const rightPanelFunction = () => {

    
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
            console.log(document.querySelector(".ewl-right-panel-right").style.width);
            document.querySelector(".ewl-right-panel-right").style.width = "0px";
            state = false;
        }
    })()

    const leftButton = document.querySelector(".ewl-right-panel-button");
    const leftPanel = document.querySelector(".ewl-right-panel-right");
    const leftButtonIcon = document.querySelector(".ewl-right-panel-button > span");

    leftButton.addEventListener('click', () => {

        state = !state;
        console.log("Right button clicked", state);

        if (state){
            leftPanel.style.width = '300px';
            leftButtonIcon.style.transform = "rotateY(180deg)";
        } else {
            leftPanel.style.width = '0px';
            leftButtonIcon.style.transform = "rotateY(0deg)";

        }

        
        
    })
}

rightPanelFunction();