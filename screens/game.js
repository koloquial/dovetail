function game(){
    if(!HERO){
        loadGame();
    }

    return `
        <center>
            <div id="game-window" class="game-window">
            </div>
            ${renderMap(HERO.location)}
        </center>
    `
}