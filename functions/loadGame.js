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

            //assign object classes back to inventory
            let newInv = [];
            for(let i = 0; i < inventory.length; i++){
                let name = inventory[i].name;
                switch(name){
                    case 'Hatchet': newInv.push(new Hatchet); break;
                    case 'Hoe': newInv.push(new Hoe); break;
                    case 'Fishing Rod': newInv.push(new FishingRod); break;
                    case 'Scythe': newInv.push(new Scythe); break;
                    case 'Watering Can': newInv.push(new WateringCan); break;
                    case 'Pickaxe': newInv.push(new Pickaxe); break;
                    case 'Wood': newInv.push(new Wood(inventory[i].qty)); break;
                    case 'Srublory Seed': newInv.push(new SrublorySeed(inventory[i].qty)); break;
                    default: break;
                }
            }
            inventory = newInv;

             //assign object classes back to items in toolbar
             let newToolbar = [];
             for(let i = 0; i < toolbar.length; i++){
                 let name = toolbar[i].name;
                 switch(name){
                     case 'Hatchet': newToolbar.push(new Hatchet); break;
                     case 'Hoe': newToolbar.push(new Hoe); break;
                     case 'Fishing Rod': newToolbar.push(new FishingRod); break;
                     case 'Scythe': newToolbar.push(new Scythe); break;
                     case 'Watering Can': newToolbar.push(new WateringCan); break;
                     case 'Pickaxe': newToolbar.push(new Pickaxe); break;
                     case 'Wood': newToolbar.push(new Wood(inventory[i].qty)); break;
                     case 'Srublory Seed': newToolbar.push(new SrublorySeed(inventory[i].qty)); break;
                     default: break;
                 }
             }
            toolbar = newToolbar;

            //make a new hero
            HERO = new Hero(name, appearance, location, direction, inventory, toolbar, skills, sounds)

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
