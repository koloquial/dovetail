class Hoe{
    constructor(){
        this.name = 'Hoe';
        this.type = 'Tool';
        this.style = 'icon-hoe';
        this.qty = 1;
    }

    action(){
        const coords = HERO.getHeroCoordinates();
        const invalid = ['o', 'w']
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
                        HERO.location[coords[0]  - 1][coords[1]] = 'd';
                        HERO.setStamina(-3 + HERO.getHoeMultiplier());

                        //play sound
                        playSound('sfx', 'audio-dig1');

                        //add experience to hatchet
                        HERO.addXP('hoe', .2);
                    }

                    break;
                case 'down':
                    for(let i = 0; i < invalid.length; i++){
                        if(HERO.location[coords[0]  + 1][coords[1]].includes(invalid[i])){
                            valid = false;
                        }
                    }

                    if(valid){
                        HERO.location[coords[0]  + 1][coords[1]] = 'd';
                        HERO.setStamina(-3 + HERO.getHoeMultiplier());

                        //play sound
                        playSound('sfx', 'audio-dig1');

                        //add experience to hatchet
                        HERO.addXP('hoe', .2);
                    }

                    break;
                case 'right':
                    for(let i = 0; i < invalid.length; i++){
                        if(HERO.location[coords[0]][coords[1]  + 1].includes(invalid[i])){
                            valid = false;
                        }
                    }

                    if(valid){
                        HERO.location[coords[0]][coords[1]  + 1] = 'd';
                        HERO.setStamina(-3 + HERO.getHoeMultiplier());

                        //play sound
                        playSound('sfx', 'audio-dig1');

                        //add experience to hatchet
                        HERO.addXP('hoe', .2);
                    }

                    break;
                case 'left':
                    for(let i = 0; i < invalid.length; i++){
                        if(HERO.location[coords[0]][coords[1]  - 1].includes(invalid[i])){
                            valid = false;
                        }
                    }

                    if(valid){
                        HERO.location[coords[0]][coords[1]  - 1] = 'd';
                        HERO.setStamina(-3 + HERO.getHoeMultiplier());

                        //play sound
                        playSound('sfx', 'audio-dig1');

                        //add experience to hatchet
                        HERO.addXP('hoe', .2);
                    }

                    break;
                default: break;
            }
        }else{
            setSnackbar(`<p>No stamina to complete action.</p>`);
        }
    }
}