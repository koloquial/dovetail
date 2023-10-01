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

    }

    drop(){
        console.log('tree struck')
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

