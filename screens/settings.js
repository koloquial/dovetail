function handleClose(){
    document.getElementById("modal").style.display = "none";
}

function handleSounds(key){
    let val = false;

    if(document.getElementById(`${key}-box`).checked){
        val = true;
    }

    if(HERO){
        HERO.setSound(key, val);
        HERO.save();
    }
}

function setCheckmarks(){
    if(HERO){
        console.log('HERO', HERO.sounds)
        for(let key in HERO.sounds){
            document.getElementById(`${key}-box`).checked = HERO.sounds[key];
        }
    }
}

function settings(){

    if(HERO){
        return `
            <div>
                <table style="width: 100%">
                    <tbody>
                        <tr>
                            <td><h2>Settings</h2></td>
                            <td>
                                <div style="float: right">
                                    <button onclick="handleClose()">Close</button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <hr />

                <div style="display: inline-block">
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
            ${setTimeout(() => setCheckmarks(), 0)}
        `
    }else{
        return `
            <div>
                <table style="width: 100%">
                    <tbody>
                        <tr>
                            <td><h2>Settings</h2></td>
                            <td>
                                <div style="float: right">
                                    <button onclick="handleClose()">Close</button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <hr />
            </div>
        `
    }
}