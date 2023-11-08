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

            <div id='gamepad-container' class='gamepad-container'>
                <div style="float: left">
                    <div id='gamepad-directional' class='gamepad-block'>
                        <table>
                            <tr>
                                <td>&nbsp;</td>
                                <td>
                                    <div id='gamepad-up' class='gamepad-arrow' onclick="keyPress({key: 'arrowup'});">
                                        <span class="material-symbols-outlined">
                                            keyboard_arrow_up
                                        </span>
                                    </div>
                                </td>
                                <td>&nbsp;</td>
                            </tr>
                            <tr>
                                <td>
                                    <div id='gamepad-left' class='gamepad-arrow' onclick="keyPress({key: 'arrowleft'});">
                                        <span class="material-symbols-outlined">
                                            keyboard_arrow_left
                                        </span>
                                    </div>
                                </td>
                                <td>&nbsp;</td>
                                <td>
                                    <div id='gamepad-right' class='gamepad-arrow' onclick="keyPress({key: 'arrowright'});">
                                        <span class="material-symbols-outlined">
                                            keyboard_arrow_right
                                        </span>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>&nbsp;</td>
                                <td>
                                    <div id='gamepad-down' class='gamepad-arrow' onclick="keyPress({key: 'arrowdown'});">
                                        <span class="material-symbols-outlined">
                                            keyboard_arrow_down
                                        </span>
                                    </div>
                                </td>
                                <td>&nbsp;</td>
                            </tr>
                        </table>
                    </div>
                </div>

                <div style="float: right">
                    <div id='gamepad-action' class='gamepad-block'>
                        <div id='gamepad-action' class='gamepad-action' onclick="keyPress({key: 'a'});">
                            <div style="display: inline-block; position: relative; top: 37px; left: 38px;">
                                <span class="material-symbols-outlined">
                                    target
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        <script>
            ${renderMap(HERO.location)}
        </script>
    `
}