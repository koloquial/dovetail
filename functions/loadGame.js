//globals
let HERO;

function loadGame(transfer){
    try{
        let load = localStorage.getItem("dovetail");

        if(load){
            let { name, appearance, location, direction, inventory, toolbar } =  JSON.parse(load);

            HERO = new Hero(name, appearance, location, direction, inventory, toolbar)

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

            HERO.inventory = newInv;

            let newToolbar = [];
            for(let i = 0; i < HERO.toolbar.length; i++){
                let name = HERO.toolbar[i].name;

                switch(name){
                    case 'Hatchet': newToolbar.push(new Hatchet); break;
                    case 'Hoe': newToolbar.push(new Hoe); break;
                    case 'Fishing Rod': newToolbar.push(new FishingRod); break;
                    case 'Scythe': newToolbar.push(new Scythe); break;
                    case 'Watering Can': newToolbar.push(new WateringCan); break;
                    case 'Pickaxe': newToolbar.push(new Pickaxe); break;
                    default: break;
                }
            }

            HERO.toolbar = newToolbar;

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
