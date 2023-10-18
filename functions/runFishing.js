let CAST_THROTTLE = false;
let CAST_POWER = 0;

const closeFish = (val) => {
    clearInterval(val); 
    openFishing();
}

const cast = (val) =>{
    clearInterval(val); 
}

function runFishing(){
    let html = ``;

    html += ``;

    html += `
        <table style="width: 100%">
            <tr>
                <td>
                    <center>
                        <div id='cast-bar' class='cast-bar'>
                            <div id='cast-wedge' class='cast-wedge'></div>
                        </div>
                    </center>
                </td>
                <td>
                    <div id='fish-tank' class='fish-tank'>
                    </div>
                </td>
            </tr>
        </table>
    `

    let interval = setInterval(() => {
        let castHTML = '';

        if(CAST_THROTTLE){
            CAST_POWER -= 10;
            if(CAST_POWER <= 0){
                CAST_THROTTLE = false;
            }
        }else{
            CAST_POWER += 10;
            if(CAST_POWER >= 400){
                CAST_THROTTLE = true;
            }
        }

        castHTML += `
            <div 
                id='cast-wedge' 
                class='cast-wedge' 
                style='
                    height: ${CAST_POWER}px;
                    '>
            </div>
        `        
        document.getElementById('cast-bar').innerHTML = castHTML;
    }, 20);



    html += `
    <div>
        <button onclick="cast(${interval})">Cast</button>
    </div>
`

    html += `
    <div>
        <button onclick="closeFish(${interval})">Close</button>
    </div>
`
    document.getElementById('fishing-game').innerHTML = html;

}