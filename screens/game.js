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
            <div id="game-window"></div>

            <div id="toolbar"></div>

            <div id="menu" class="menu">
                <div style="background-color: #000000; margin: 0; padding: 5px 25px 5px 25px; border-bottom: 1px solid black;">
                    <table style="width: 100%">
                        <tbody>
                            <tr>
                                <td><h2 id='active-menu-heading'></h2></td>
                                <td>
                                    <div style="float: right">
                                        <button onclick="openMenu()">Close</button>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <br />
                <div id='menu-content' class='menu-content'>
                </div>
            </div>

            <div id="status-update" class="status-update"></div>
        </div>
        <script>
            ${renderMap(HERO.location)}
        </script>
    `
}