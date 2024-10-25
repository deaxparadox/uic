const leftPanelFunction = () => {
    let state = true

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