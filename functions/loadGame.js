//globals
let HERO;

function loadGame(transfer){
    try{
        let load = localStorage.getItem("dovetail");
        if(load){
            HERO = JSON.parse(load);
            setSnackbar(`<p>${HERO.name} has been found.</p>`);
            if(transfer){
                changeScreen(game);
            }
        }else{
            //game file not found
            setSnackbar(`<p>Saved game not found.</p>`);
        }
    }catch(error){
        //error reading local storage
        setSnackbar(`<p>Error loading save dgame.</p>`);
    }
}
