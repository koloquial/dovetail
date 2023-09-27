function game(){
    if(!HERO){
        loadGame();
    }

    console.log('HERO', HERO)

    return `
        <center>
            <div id="game-window" class="game-window">
            </div>
            ${renderMap(HERO.location)}
        </center>
    `
}