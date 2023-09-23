function game(){
    if(!HERO){
        loadGame();
    }

    console.log('HERO', HERO)
    
    return `
        <center>
            <div id="game-window" class="game-window">
                <script>renderMap(HERO.location)</script>
            </div>
        </center>
    `
}