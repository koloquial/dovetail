/***************
g: grass
d: dirt
o: tree

h: hero
****************/

function generateMap(){
    const garden = [[]];

    let treeCount = 500;

    for(let i = 0; i < 60; i++){

        if(i > 0){
            garden.push([])
        }
        for(let j = 0; j < 50; j++){
            let random = Math.floor(Math.random() * 100 + 1);

            if(treeCount > 0 && random <= 4){
                garden[i][j] = 'go'
                treeCount--;
            }else{
                console.log('add grass')
                garden[i][j] = 'g'
            }
        }
    }
    
    let valid = false;

    while(!valid){
        let x = Math.floor(Math.random() * 50);
        let y = Math.floor(Math.random() * 50);
        
        if(garden[x][y] === 'g'){
            garden[x][y] += 'h'; 
            valid = true;
        }
    }

    console.log('garden', garden)

    return garden;
}


