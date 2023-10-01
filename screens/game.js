function game(){
    if(!HERO){
        loadGame();
        console.log('HERO', HERO)
    }

    return `
        <center>
            <div id="game-window" class="game-window"></div>
            <div id="toolbar" class="toolbar"></div>
            <div id="menu" class="menu">
                <div class="tab">
                    <button class="tablinks" onclick="openTab(event, 'character')">character</button>
                    <button class="tablinks" onclick="openTab(event, 'inventory')">inventory</button>
                </div>
          
                <div id="character" class="tabcontent">
                    <h3>character</h3>
                </div>
          
                <div id="inventory" class="tabcontent">
                    <h3>inventory</h3>
                </div>
            </div>

            ${renderMap(HERO.location)}
        </center>
    `
}