//globals
let HERO;

function loadGame(transfer){
    try{
        //get data from cache
        let load = localStorage.getItem("dovetail");

        //if there is saved data
        if(load){
            //pull HERO class constructor values
            let { name, appearance, location, direction, inventory, toolbar, skills, sounds } =  JSON.parse(load);

            //make a new hero
            HERO = new Hero(name, appearance, location, direction, inventory, toolbar, skills, sounds)

            //REFACTOR CODE BELOW

            //assign object classes back to inventory
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
                    case 'Wood': newInv.push(new Wood(HERO.inventory[i].qty)); break;
                    case 'Srublory Seed': newInv.push(new SrublorySeed(HERO.inventory[i].qty)); break;
                    default: break;
                }
            }
            HERO.inventory = newInv;

            //assign object classes back to items in toolbar
            let newToolbar = [];
            for(let i = 0; i < HERO.toolbar.length; i++){
                let name = HERO.toolbar[i].name;
                switch(name){
                    case 'Hatchet': newInv.push(new Hatchet); break;
                    case 'Hoe': newInv.push(new Hoe); break;
                    case 'Fishing Rod': newInv.push(new FishingRod); break;
                    case 'Scythe': newInv.push(new Scythe); break;
                    case 'Watering Can': newInv.push(new WateringCan); break;
                    case 'Pickaxe': newInv.push(new Pickaxe); break;
                    case 'Wood': newInv.push(new Wood); break;
                    case 'Srublory Seed': newInv.push(new SrublorySeed); break;
                    default: break;
                }
            }
            HERO.toolbar = newToolbar;

            //send toast message
            setSnackbar(`<p>${HERO.name} has been found.</p>`);

            //if transfer parameter fulfilled - > change screen
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
