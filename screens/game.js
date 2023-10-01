function game(){
    if(!HERO){
        loadGame();
    }

    return `
        <center>
            <div id="game-window" class="game-window"></div>
            <div id="toolbar" class="toolbar"></div>
            
            <div id="menu" class="menu">
               <button>Character</button>
               <button>Inventory</button>
               <div id='menu-content' class='menu-content'>
               </div>
            </div>

            ${renderMap(HERO.location)}
        </center>
    `
}