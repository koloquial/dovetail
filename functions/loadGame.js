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
                let name = HERO.inventory[i].name;

                switch(name){
                    case 'Hatchet': newInv.push(new Hatchet); break;
                    case 'Hoe': newInv.push(new Hoe); break;
                    case 'Fishing Rod': newInv.push(new FishingRod); break;
                    case 'Scythe': newInv.push(new Scythe); break;
                    case 'Watering Can': newInv.push(new WateringCan); break;
                    case 'Pickaxe': newInv.push(new Pickaxe); break;
                    default: break;
                }
            }

            console.log('new inv', newInv)
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
