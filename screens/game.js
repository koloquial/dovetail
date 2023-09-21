function game(){
    if(!HERO){
        loadGame();
    }
    
    return `
        <center>
            <div id="game-window" class="game-window">
                <script>renderMap(HERO.location)</script>
            </div>
        </center>
    `
}