class Hero{
    constructor(name, appearance, location = _garden, direction = 'down'){
        this.name = name;
        this.location = location;
        this.appearance = appearance;
        this.direction = direction;
    }

    save(){
        try{
            localStorage.setItem("dovetail", JSON.stringify(this));
        }catch(error){
            console.log('error saving:', error);
        }
    }

    delete(){
        localStorage.removeItem("dovetail");
    }

    getHeroCoordinates(){
        const heroCoordinates = [];
        for(let i = 0; i < this.location.length; i++){
            for(let j = 0; j < this.location[i].length; j++){
                if(this.location[i][j].includes('h')){
                    heroCoordinates.push(i, j)
                }
            }
        }
        return heroCoordinates;
    }

    getDirection(){
        console.log('get direction', this.direction)
        return this.direction;
    }

    setDirection(value){
        try{
            this.direction = value;
        }catch(e){
            console.log('error setting direction', e)
        } 
    }

    setHeroCoordinates(coords){
        try{
            console.log('add to?', this.location[coords[0]][coords[1]])
            this.location[coords[0]][coords[1]] += 'h';
            console.log('added to', this.location[coords[0]][coords[1]])
        }catch(e){
            console.log('error setting hero coordinates', e);
        }
    }

    removeHeroCoordinates(coords){
        try{
            this.location[coords[0]][coords[1]] = this.location[coords[0]][coords[1]].replace('h', '');
        }catch(e){
            console.log('error removing hero coordinates', e)
        }
    }

    walk(face){
        let heroCoords = this.getHeroCoordinates();
        let row = heroCoords[0];
        let col = heroCoords[1];

        switch(face){
            case 'down':
                this.setHeroCoordinates([row + 1, col]);
                break;
            case 'up':
                this.setHeroCoordinates([row - 1, col]);
                break;
            case 'left':
                this.setHeroCoordinates([row, col - 1]);
                break;
            case 'right':
                this.setHeroCoordinates([row, col + 1]);
                break;
            default: break
        }

        this.removeHeroCoordinates([row, col])
        this.save();
    }

    checkSpace(face){
        let heroCoords = this.getHeroCoordinates();
        let row = heroCoords[0];
        let col = heroCoords[1];

        try{
            switch(face){
                case 'down':
                    if(this.location[row + 1][col].length === 1 && !this.location[row + 1][col].includes('w')){
                        
                        return true;
                    }else{
                        return false;
                    }
                case 'up':
                    if(this.location[row - 1][col].length === 1){
                        return true;
                    }else{
                        return false;
                    }
                case 'left':
                    if(this.location[row][col - 1].length === 1){
                        return true
                    }else{
                        return false;
                    }
                case 'right':
                    if(this.location[row][col + 1].length === 1){
                        return true
                    }else{
                        return false;
                    }
                default: return false;
            }
        }catch(e){
            console.log('error checking space', e)
            return false;
        }
    }

}