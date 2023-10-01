//globals

//holds tree objects: [key] tree-${i}-${j}
const TREE_MEMORY = {};

function renderMap(location){
    const heroCoordinates = HERO.getHeroCoordinates();

    //render cells within a five tile radius around hero
    let startRow = heroCoordinates[0] - 4;
    let startCell = heroCoordinates[1] - 5;
    let lengthRow = 10;
    let lengthCol = 10;

    let html = `<table style="border-collapse: collapse;">`;

    for(let i = 0; i < location.length; i++){
        if(i >= startRow && i <= lengthRow + startRow){
            html += `<tr>`;

            for(let j = 0; j < location[i].length; j++){
                if(j >= startCell && j <= lengthCol + startCell){
                    html += `<td id='cell-${i}-${j}' class='grid-square`;
                    
                    if(location[i][j].includes('g')){
                        html += ' grass'
                    }

                    if(location[i][j].includes('w')){
                        html += ' water'
                    }

                    if(location[i][j].includes('d')){
                        html += ' dirt'
                    }

                    if(location[i][j].includes('x')){
                        html += ' grass'
                    }
        
                    html += `'>`

                    //location includes hero
                    if(location[i][j].includes('h')){
                        switch(HERO.direction){
                            case 'up': html += `<div style="width: 1px solid black"><p>UP</p></div>`; break;
                            case 'down': 
                                html += `
                                <center>
                                <div id="hero" class="hero-down">
                                    <div id="head" class="head-down">
                                        <div id="hair" class="hair-down-b"></div>
                                        <div id="face">
                                            <div id="left-eye" class='left-eye-down'>
                                                <div id="left-iris" class="left-iris-down"></div>
                                                <div id="left-pupil" class="left-pupil-down"></div>
                                                <div id="left-speck" class='left-speck-down'></div>
                                            </div>
                                            <div id="right-eye" class="right-eye-down">
                                                <div id="right-iris" class="right-iris-down"></div>
                                                <div id="right-pupil" class="right-pupil-down"></div>
                                                <div id="right-speck" class='right-speck-down'></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="neck" class="neck-down"></div>
                                    <div id="torso" class="torso-down">
                                        <div id="left-arm" class="left-arm-down">
                                            <div id="left-shoulder" class="left-shoulder-down"></div>
                                            <div id="left-hand" class="left-hand-down"></div>
                                        </div>
                                        <div id="right-arm" class="right-arm-down">
                                            <div id="right-shoulder" class="right-shoulder-down"></div>
                                            <div id="right-hand" class="right-hand-down"></div>
                                        </div>
                                    </div>
                                    
                                        <div id="left-leg" class="left-leg-down">
                                            <div id="left-shoe" class="left-shoe-down"></div>
                                        </div>
                                        <div id="right-leg" class="right-leg-down">
                                            <div id="right-shoe" class="right-shoe-down"></div>
                                        </div>
                                    </div>
                                </div>
                                </center>
                                `
                                break;
                            case 'left': 
                            html += `<div style="width: 1px solid black"><p>LEFT</p></div>`; break;
                            case 'right': 
                            html += `<div style="width: 1px solid black"><p>RIGHT</p></div>`; break;
                            default: break;
                        }
                    }

                    //location includes tree
                    if(location[i][j].includes('o')){
                        let newSrublory = new Srublory(i, j);
                        TREE_MEMORY[`tree-${i}-${j}`] = newSrublory 
                        html += newSrublory.render()
                    }
                    html += `</td>`;
                }
            }
    
            html += `</tr>`
        }
    }
        
    html += `</table>`

    try{
        document.getElementById("game-window").innerHTML = html; 
    }catch(e){
        setLoading(true, 10, () => { 
            document.getElementById("game-window").innerHTML = html; 
            renderToolbar();
            setLoading(false);
        });
    }
    
    
}