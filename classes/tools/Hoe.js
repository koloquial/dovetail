class Hoe{
    constructor(){
        this.name = 'Hoe';
        this.type = 'Tool';
        this.style = 'icon-hoe';
        this.qty = 1;
    }

    action(direction, heroCoordinates, location){
        console.log('hoe action')
        switch(direction){
            case 'up':
                if(location[heroCoordinates[0] - 1][heroCoordinates[1]].includes('o')){
                    TREE_MEMORY[`tree-${heroCoordinates[0] - 1}-${heroCoordinates[1]}`].chop();
                }
            break;
            case 'down':
                if(location[heroCoordinates[0] + 1][heroCoordinates[1]].includes('o')){
                    TREE_MEMORY[`tree-${heroCoordinates[0] + 1}-${heroCoordinates[1]}`].chop();
                }
                break;
            case 'left':
                if(location[heroCoordinates[0]][heroCoordinates[1] - 1].includes('o')){
                    TREE_MEMORY[`tree-${heroCoordinates[0]}-${heroCoordinates[1] - 1}`].chop();
                }
                break;
            case 'right':
                if(location[heroCoordinates[0]][heroCoordinates[1] + 1].includes('o')){
                    TREE_MEMORY[`tree-${heroCoordinates[0]}-${heroCoordinates[1] + 1}`].chop()
                }
                break;
            default: break;
        }
    }
}