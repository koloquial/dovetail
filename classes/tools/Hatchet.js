class Hatchet{
    constructor(){
        this.name = 'Hatchet';
        this.type = 'Tool';
        this.style = 'icon-hatchet';
        this.qty = 1;
    }

    action(){
        const coords = HERO.getHeroCoordinates();

        if(HERO.getStamina() > 0){
            switch(HERO.direction){
                case 'up':
                    if(HERO.location[coords[0]  - 1][coords[1]].includes('o')){
                        TREE_MEMORY[`tree-${coords[0]  - 1}-${coords[1]}`].chop()
                        HERO.setStamina(-4 + HERO.getHatchetMultiplier());
                    }
                    break;
                case 'down':
                    if(HERO.location[coords[0]  + 1][coords[1]].includes('o')){
                        TREE_MEMORY[`tree-${coords[0]  + 1}-${coords[1]}`].chop()
                        HERO.setStamina(-4 + HERO.getHatchetMultiplier());
                    }
                    break;
                case 'left':
                    if(HERO.location[coords[0]][coords[1] - 1].includes('o')){
                        TREE_MEMORY[`tree-${coords[0]}-${coords[1] - 1}`].chop()
                        HERO.setStamina(-4 + HERO.getHatchetMultiplier());
                    }
                    break;
                case 'right':
                    if(HERO.location[coords[0]][coords[1] + 1].includes('o')){
                        TREE_MEMORY[`tree-${coords[0]}-${coords[1] + 1}`].chop()
                        HERO.setStamina(-4 + HERO.getHatchetMultiplier());
                    }
                    break;
                default: break;
            }
        }else{
            setSnackbar(`<p>No stamina to complete action.</p>`);
        }
    }
}