class FishingRod{
    constructor(){
        this.name = 'Fishing Rod';
        this.type = 'Tool';
        this.style = 'icon-fishing-rod';
        this.qty = 1;
    }

    action(){
        const coords = HERO.getHeroCoordinates();

        const invalid = ['o', 'd', 'g'];

        let valid = true;

        if(HERO.getStamina() > 0){
            switch(HERO.direction){
                case 'up':
                    for(let i = 0; i < invalid.length; i++){
                        if(HERO.location[coords[0]  - 1][coords[1]].includes(invalid[i])){
                            valid = false;
                        }
                    }

                    if(valid){
                        //call fishing game
                        openFishing();

                        //play sounds
                    }

                    break;
                default: break;
            }
        }else{
            setSnackbar(`<p>No stamina to complete action.</p>`);
        }
    }
}