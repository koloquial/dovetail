class SrublorySeed{
    constructor(qty){
        this.qty = qty
        this.name = 'Srublory Seed'
        this.type = 'Seed'
        this.style = 'icon-srublory-seed'
    }

    action(){
        if(this.checkPlant()){
            //plant
        }else{
            //eat, give... ?
        }
    }

    checkPlant(){
        let heroCoords = HERO.getCoordinates();

        switch(HERO.direction){
            case 'up':
                if(HERO.location[heroCoords[0] - 1][heroCoords[1]] === 'd'){
                    //plant okay
                    return true
                }else{
                    //cannot plant here
                    return false
                }
                break;
            case 'down':
                if(HERO.location[heroCoords[0] + 1][heroCoords[1]] === 'd'){
                    //plant okay
                    return true
                }else{
                    //cannot plant here
                    return false
                }
                break;
            case 'left':
                if(HERO.location[heroCoords[0]][heroCoords[1] - 1] === 'd'){
                    //plant okay
                    return true
                }else{
                    //cannot plant here
                    return false
                }
                break;
            case 'right':
                if(HERO.location[heroCoords[0]][heroCoords[1] + 1] === 'd'){
                    //plant okay
                    return true
                }else{
                    //cannot plant here
                    return false
                }
                break;
            default:
                break;
        }
    }

}