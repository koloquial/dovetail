function renderMiniMap(){
    let location = HERO.location;
    let minimap = `<table style="border-collapse: collapse; width: 100%; cellspacing: -5; cellpadding: 0;">`

    for(let minix = 0; minix < location.length; minix++){
        minimap += `<tr style="line-height: 10% !important">`;
        for(let miniy = 0; miniy < location[minix].length; miniy++){
            minimap += `<td id='minimap-cell-${minix}-${miniy}' class='minimap-square`;
            
            if(location[minix][miniy].includes('h')){
                minimap += ' hero-marker'
            }else if(location[minix][miniy].includes('o')){
                minimap += ' tree-basic'
            }else{

                if(location[minix][miniy].includes('g')){
                    minimap += ' grass-basic'
                }
    
                if(location[minix][miniy].includes('w')){
                    minimap += ' water-basic'
                }
    
                if(location[minix][miniy].includes('d')){
                    minimap += ' dirt-basic'
                }
    
                if(location[minix][miniy].includes('x')){
                    minimap += ' grass-basic'
                }

            }
            
            minimap += `'>`

            minimap += `</td>`;
        }
        minimap += `</tr>`
    }
    minimap += `</table>`

    try{
        document.getElementById("minimap").innerHTML = minimap;
    }catch(e){
        setLoading(true, 10, () => { 
            document.getElementById("minimap").innerHTML = minimap;
        });
    }
}