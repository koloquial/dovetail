function handleClose(){
    document.getElementById("modal").style.display = "none";
}

function handleSounds(key){

    let val = false;

    if(document.getElementById(`${key}-box`).checked){
        val = true;
        if(key === 'gamepad'){
            document.getElementById('gamepad-container').style.visibility = 'visible';
        }
    }else{
        if(key === 'gamepad'){
            document.getElementById('gamepad-container').style.visibility = 'hidden';
        }
    }

    if(HERO){
        HERO.setSound(key, val);
        HERO.save();
    }
}

function setCheckmarks(){
    if(HERO){
        for(let key in HERO.sounds){
            document.getElementById(`${key}-box`).checked = HERO.sounds[key];
        }
    }
}

function settings(){

    if(HERO){
        return `
            <div class='modal-heading'>
                <table style="width: 100%">
                    <tbody>
                        <tr>
                            <td>
                                <h2>Settings</h2>
                            </td>
                            <td>
                                <div style="float: right">
                                    <button onclick="handleClose()">
                                        Close
                                    </button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <br />
            <div class='modal-body'>
                <form>
                <fieldset class='fieldset-range'>
                    <legend>Gamepad</legend>

                    <div style="display: block">
                        <fieldset class='fieldset-cell'>
                            <legend>Visible</legend>
                            <label class="switch">
                            <input 
                                id="gamepad-box" 
                                type="checkbox" 
                                onclick="handleSounds('gamepad');"
                            />
                                <span class="slider round"></span>
                            </label>
                        </fieldset>
                    </div>
                    </fieldset>
                    </form>
               
                <form>
                        <fieldset>
                            <legend>Sound</legend>

                            <div style="display: block">
                                <fieldset>
                                    <legend>Mute</legend>
                                    <label class="switch">
                                    <input 
                                        id="mute-box" 
                                        type="checkbox" 
                                        onclick="handleSounds('mute');"
                                    />
                                        <span class="slider round"></span>
                                    </label>
                                </fieldset>
                            </div>

                            <div style="display: block">
                                <fieldset>
                                    <legend>System</legend>
                                    <label class="switch">
                                        <input 
                                            id="system-box" 
                                            type="checkbox" 
                                            onclick="handleSounds('system');"
                                        />
                                            <span class="slider round"></span>
                                    </label>
                                </fieldset>
                            </div>

                            <div style="display: block">
                                <fieldset>
                                    <legend>Music</legend>
                                    <label class="switch">
                                        <input 
                                            id="music-box" 
                                            type="checkbox" 
                                            onclick="handleSounds('music');"
                                        />
                                            <span class="slider round"></span>
                                    </label>
                                </fieldset>
                            </div>

                            <div style="display: block">
                                <fieldset>
                                    <legend>Background</legend>
                                    <label class="switch">
                                        <input 
                                            id="bgsfx-box" 
                                            type="checkbox" 
                                            onclick="handleSounds('bgsfx');"
                                        />
                                            <span class="slider round"></span>
                                    </label>
                                </fieldset>
                            </div>

                            <div style="display: block">
                                <fieldset>
                                    <legend>Effects</legend>
                                    <label class="switch">
                                        <input 
                                            id="sfx-box" 
                                            type="checkbox" 
                                            onclick="handleSounds('sfx');"
                                        />
                                            <span class="slider round"></span>
                                    </label>
                                </fieldset> 
                            </div>
                        </fieldset>
                    </form>
                
                </div>
            </div>
            ${setTimeout(setCheckmarks, 0)}
        `
    }else{
        return `
            <div class='modal-heading'>
                <table style="width: 100%">
                    <tbody>
                        <tr>
                            <td>
                                <h2>Settings</h2>
                            </td>
                            <td>
                                <div style="float: right">
                                    <button onclick="handleClose()">
                                        Close
                                    </button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <br />

            <div class='modal-body'>
                <p>
                    Start a new game or load game to access settings.
                </p>
            </div>
        `
    }
}