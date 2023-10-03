class Hatchet{
    constructor(){
        this.name = 'Hatchet';
        this.type = 'Tool';
        this.style = 'icon-hatchet';
        this.qty = 1;
    }

    action(){
        const coords = HERO.getHeroCoordinates();
        
        switch(HERO.direction){
            case 'up':
               
                break;
            case 'down':

                break;
            case 'left':

                break;
            case 'right':
                if(HERO.location[coords[0]][coords[1] + 1].includes('o')){
                    TREE_MEMORY[`tree-${coords[0]}-${coords[1] + 1}`].chop()
                }
                break;
            default: break;
        }
    }
}