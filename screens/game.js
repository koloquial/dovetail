function checkGamepad(){
    try{
        if(HERO.sounds.gamepad){
            document.getElementById("gamepad-container").style.visibility = "visible";
        }else{
            document.getElementById("gamepad-container").style.visibility = "hidden";
        }
    }catch(error){
        console.log("Error checking gamepad", error);
    }
}

function game() {
    if (!HERO) {
        loadGame();
    }

    return `
        <div id="game-container">
            <center>
                <div id="game-window"></div>
            </center>
        </div>

        <script>
            ${renderMap(HERO.location)}
        </script>
    `
}