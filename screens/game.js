function game(){
   playSound('background-1');
   playSound(`music-chill${Math.floor(Math.random() * 6)}`);
   
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