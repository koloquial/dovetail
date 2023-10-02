function game(){
    if(!HERO){
        loadGame();
    }

    return `
    <center>
        <div id='game-container'>
            <div id="game-window" class="game-window"></div>
            <div id="toolbar" class="toolbar"></div>
            <div id="menu" class="menu">
                <button onclick="renderCharacter()">Character</button>
                <button onclick="renderInventory()">Inventory</button>
                <div id='menu-content' class='menu-content'>
                </div>
            </div>
        </div>
    </center>
    <script>
    ${renderMap(HERO.location)}
    </script>
    
    `
}