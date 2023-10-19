/***************
g: grass
d: dirt
o: tree

h: hero
****************/

function generateMap(){
    const garden = [[]];
    let mapSize = 50;

    //place trees
    let treeCount = 500;
    for(let i = 0; i < mapSize; i++){
        if(i > 0){
            garden.push([])
        }
        for(let j = 0; j < mapSize; j++){
            let random = Math.floor(Math.random() * 100 + 1);

            if(treeCount > 0 && random <= 4){
                garden[i][j] = 'go'
                treeCount--;
            }else{
                garden[i][j] = 'g'
            }
        }
    }

    //place lakes
    let lakes = Math.floor(Math.random() * 7 + 3);
    let lakeSizeSeed = 10;
    let lakeSize, lakex, lakey;

    for(let j = 0; j < lakes; j++){

        let validLake = false;

        while(!validLake){
            try{
                lakeSize = Math.floor(Math.random() * lakeSizeSeed + 3);
                lakex = Math.floor(Math.random() * mapSize);
                lakey = Math.floor(Math.random() * mapSize);
    
                let test = true;

                for(let k = 0; k < lakeSize; k++){
                    for(let l = 0; l < lakeSize; l++){
                        if(!garden[lakex + k][lakey + l] || !garden[lakex + k][lakey + l]){
                            test = false;
                        }
                    }
                }

                if(test){
                    for(let k = 0; k < lakeSize; k++){
                        for(let l = 0; l < lakeSize; l++){
                            garden[lakex + k][lakey + l] = 'w';
                            garden[lakex + k][lakey + l] = 'w';
                        }
                    }
                    validLake = true;
                }
               
            }catch(error){
                // console.log('LAKE OUT OF BOUNDS:\n\n', error, '\n');
            }
        }
    }

    //place hero
    let valid = false;
    while(!valid){
        let x = Math.floor(Math.random() * mapSize);
        let y = Math.floor(Math.random() * mapSize);
        
        if(garden[x][y] === 'g'){
            garden[x][y] += 'h'; 
            valid = true;
        }
    }

    return garden;
}