function game() {
  if (!HERO) {
    loadGame();
  }

  return `
    <center>
        <div id='game-container'>
            <div id="game-window" class="game-window"></div>
            <div id="toolbar" class="toolbar"></div>
            <div id="menu" class="menu">
                <div style="background-color: #000000; margin: 0; padding: 5px 25px 5px 25px; border-bottom: 1px solid black;">
                    <div style="display: inline-block;">
                        <button onclick="renderCharacter()">Character</button>
                        <button onclick="renderInventory()">Inventory</button>
                    </div>
                    <div style="display: inline-block; float: right;">
                        <button onclick="openMenu()">Close</button>
                    </div>
                </div>
                
                <div id='menu-content' class='menu-content'>
                </div>
            </div>
            <div id="status-update" class="status-update"></div>
            <div id="minimap" class="minimap"></div>
            <div id="stamina-bar" class="stamina-bar"></div>
        </div>
    </center>
    <script>
    ${renderMap(HERO.location)}
    </script>
    
    `
}