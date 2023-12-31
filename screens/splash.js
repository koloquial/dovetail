window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }

function handleNewGame(){
    changeScreen(newGame);
}

function handleDeleteGame(){
    try{
        if(localStorage.getItem("dovetail")){
            let modal = document.getElementById("modal");
            modal.style.display = "block";
            setModalContent(deleteGame);
        }else{
            setSnackbar(`<p>Error finding game to delete.</p>`);
        }
    }catch(error){
        console.log("Error finding game to delete:", error)
        setSnackbar(`<p>Error finding game to delete.</p>`);
    }
}

function splash(){
    return `
        <center>
            <h1 class="title">Dovetail</h1>
            <button onclick="setModalContent(newGame)">New Game</button>
            <button onclick="loadGame(true);">Load Game</button>
            <button onclick="handleDeleteGame()">Delete Game</button>
        </center>
    `
}
