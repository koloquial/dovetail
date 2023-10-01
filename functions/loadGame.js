//globals
let HERO;

function loadGame(transfer){
    try{
        let load = localStorage.getItem("dovetail");

        if(load){
            let raw =  JSON.parse(load);

            HERO = new Hero(raw.name, raw.appearance, raw.lcation, raw.direction, raw.inventory)

            let newInv = [];
            for(let i = 0; i < HERO.inventory.length; i++){
                if(HERO.inventory[i].name === 'Hatchet'){
                    newInv.push(new Hatchet)
                }
            }

            HERO.inventory = newInv;

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
        setSnackbar(`<p>Error loading saved game.</p>`);
    }
}
