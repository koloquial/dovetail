class Srublory{
    constructor(row, col){
        this.name = 'Srublory';
        this.type = 'Nature';
        this.health = 10;
        this.row = row;
        this.col = col;
        this.style = 'icon-srublory';
    }

    chop(){
        //play sound
        document.getElementById('audio-chop-wood').play();

        //damage health
        this.health -= 1 * HERO.getHatchetMultiplier();

        //check if tree fell
        if(this.health <= 0){
             //remove tree from map
             document.getElementById(`tree-${this.row}-${this.col}`).style.visibility = 'none';

             //change tree tile to grass
             HERO.location[this.row][this.col] = 'g';

             //add wood to inventory

            //add status-update
            let wood = Math.floor(Math.random() * 15) + 1
            addStatusUpdate(`+ ${wood} wood`)
            
             //drop seed?
             let randomDropSeed = Math.floor(Math.random() * 100) + 1; 
             if(randomDropSeed <= 25){
                 //drop seed
                 let seeds = Math.floor(Math.random() * 3) + 1
                 addStatusUpdate(`+ ${seeds} Srublory seeds`)
             }

             //add experience to hatchet
             HERO.addXP('hatchet', 1)

            


        }
    }

    drop(){
    }

    render(){
        return `
            <div id="tree-${this.row}-${this.col}">
                <div id="tree-${this.row}-${this.col}-stump" class="srublory-stump">
                </div>
    
                <div id="tree-${this.row}-${this.col}-length" class="srublory-length">
                </div>
    
                <div id="tree-${this.row}-${this.col}-leaves-center" class="srublory-leaves-center">
                </div>
    
                <div id="tree-${this.row}-${this.col}-leaves-left" class="srublory-leaves-left">
                </div>
    
                <div id="tree-${this.row}-${this.col}-leaves-right" class="srublory-leaves-right">
                </div>
            </div>
        `
    }
}

