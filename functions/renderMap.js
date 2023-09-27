function renderMap(location){
    const heroCoordinates = HERO.getHeroCoordinates();

    // console.log('hero coordinates', heroCoordinates)

    //render cells within a five tile radius around hero
    let startRow = heroCoordinates[0] - 4;
    let startCell = heroCoordinates[1] - 5;
    let lengthRow = 10;
    let lengthCol = 10;

    let html = `<table style="border-collapse: collapse;">`;

    console.log('location', location)
    // console.log('location length', location.length);
    // console.log('start row', startRow)
    // console.log('start cell', startCell)

    for(let i = 0; i < location.length; i++){
        if(i >= startRow && i <= lengthRow + startRow){
            // console.log('called tr')
            html += `<tr>`;

            for(let j = 0; j < location[i].length; j++){
                if(j >= startCell && j <= lengthCol + startCell){
                    // console.log('called td')
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
        
                    html += `'>`

                    if(location[i][j].includes('h')){
                        // console.log('found hero')
                        switch(HERO.direction){
                            case 'up': html += `<p>UP</p>`; break;
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
                            html += `<p>LEFT</p>`; break;
                            case 'right': 
                            html += `<p>RIGHT</p>`; break;
                            default: break;
                        }
                    }
                    html += `</td>`;
                }
            }
    
            html += `</tr>`
        }
    }
        

    html += `</table>`

    // console.log('html', html)
    setTimeout(() => {
        document.getElementById("game-window").innerHTML = html;
    }, 0)
   

    
}