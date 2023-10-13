//default values
let defaultSkin = 'aliceblue';
let defaultEyes = 'aliceblue';
let defaultShirt = 'aliceblue';
let defaultPants = 'aliceblue';
let defaultShoes = 'aliceblue';

function changeShirtColor(){
    let value = document.getElementById("shirt-color").value;

    document.getElementById("shirt-color").style.backgroundColor = value;

    const shirtValues = ['left-shoulder', 'right-shoulder', 'torso'];

    shirtValues.forEach(item => {
        document.getElementById(item).style.backgroundColor = value;
    });
}

function changeSkinTone(){
    let value = document.getElementById("skin-tone").value;

    document.getElementById("skin-tone").style.backgroundColor = value;

    const skinValues = ['head', 'neck', 'left-arm', 'right-arm', 'left-hand', 'right-hand' ];

    skinValues.forEach(item => {
        document.getElementById(item).style.backgroundColor = value;
    });
}

function changeEyeColor(){
    let value = document.getElementById("eye-color").value;

    document.getElementById("eye-color").style.backgroundColor = value;

    const eyeColorValues = ['left-iris', 'right-iris'];

    eyeColorValues.forEach(item => {
        document.getElementById(item).style.backgroundColor = value;
    });
}

function handleSubmit(){
    if(document.getElementById("name").value && document.getElementById("name").value !== ""){
        
        let appearance = {
            hair: '',
            hairstyle: '',
            skin: document.getElementById("skin-tone").value,
            eye: document.getElementById("eye-color").value,
            shirt: document.getElementById("shirt-color").value,
            pants: document.getElementById("pants-color").value,
            shoes: document.getElementById("shoe-color").value,
        }

        let newHero = new Hero(
            document.getElementById("name").value, 
            appearance,
            generateMap(),
            'down',
            [
                new Hatchet, 
                new Hoe, 
                new FishingRod, 
                new Pickaxe, 
                new Scythe, 
                new WateringCan
            ]
        );
       
        newHero.save();

        document.getElementById("modal").style.display = "none";

        setSnackbar(`<p>${newHero.name} has been created.</p>`);

        changeScreen(game);
    }else{
        setSnackbar(`<p>Please enter a valid name.</p>`);
    }
}

function handleCancel(){
    document.getElementById("modal").style.display = "none";
}

function newGame(){
    return `
        <div style="background-color: #000000; margin: 0; padding: 5px 25px 5px 25px; border-bottom: 1px solid black;">
            <table style="width: 100%">
                <tbody>
                    <tr>
                        <td><h2>New Game</h2></td>
                        <td>
                            <div style="float: right">
                                <button onclick="handleClose()">Close</button>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class='menu-content'>

            <center>
            <div id="hero-preview" class="hero-preview">
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
            <br />

            <center>
            <div style="display: inline-block; vertical-align: top;">
            <form>
                <fieldset>
                    <legend>Name</legend>
                    <input type="text" id="name" placeholder="Name" />
                </fieldset>
            </form>
            </div>

            <div style="display: inline-block;">
                <form>
                    <fieldset>
                        <legend>Appearance</legend>

                        <div style="display: block;">
                            <form>
                                <fieldset>
                                    <legend>Hair</legend>
                                        <select name="hair">
                                            <option value="none">None</option>
                                        </select>
                                </fieldset>
                            </form>
                        </div>

                        <div style="display: block;">
                            <form>
                                <fieldset>
                                    <legend>Hair Color</legend>
                                        <select name="hair-color">
                                            <option value="none">None</option>
                                        </select>
                                </fieldset>
                            </form>
                        </div>

                        <div style="display: block;">
                            <form>
                                <fieldset>
                                    <legend>Skin Tone</legend>
                                    <select id="skin-tone" style=${'background-color:' + defaultSkin} onchange="changeSkinTone()">
                                        <option style="background-color: #ffe7d1" value="#ffe7d1"></option>
                                        <option style="background-color: #e6bc98" value="#e6bc98"></option>
                                        <option style="background-color: #d4aa78" value="#d4aa78"></option>
                                        <option style="background-color: #a16e4b" value="#a16e4b"></option>
                                        <option style="background-color: #3b2219" value="#3b2219"></option>
                                    </select>
                                </fieldset>
                            </form>
                        </div>

                        <div style="display: block;">
                        <form>
                            <fieldset>
                                <legend>Eye Color</legend>
                                <select id="eye-color" style=${'background-color:' + defaultEyes} onchange="changeEyeColor()">
                                    <option style="background-color: #634e34" value="#634e34"></option>
                                    <option style="background-color: #2e536f" value="#2e536f"></option>
                                    <option style="background-color: #3d671d" value="#3d671d"></option>
                                    <option style="background-color: #1c7847" value="#1c7847"></option>
                                    <option style="background-color: #497665" value="#497665"></option>
                                </select>
                            </fieldset>
                        </form>
                    </div>
                    </fieldset>
                </form>
            </div>

            <div style="display: inline-block; vertical-align: top;">
                <form>
                    <fieldset>
                        <legend>Clothing</legend>

                        <div style="display: block;">
                        <form>
                            <fieldset>
                                <legend>Shirt Color</legend>
                                <select id="shirt-color" style=${'background-color:' + defaultShirt} onchange="changeShirtColor()">
                                    <option style="background-color: #ffe7d1" value="#ffe7d1"></option>
                                    <option style="background-color: #e6bc98" value="#e6bc98"></option>
                                    <option style="background-color: #d4aa78" value="#d4aa78"></option>
                                    <option style="background-color: #a16e4b" value="#a16e4b"></option>
                                    <option style="background-color: #3b2219" value="#3b2219"></option>
                                </select>
                            </fieldset>
                        </form>
                    </div>

                        <div style="display: block;">
                            <form>
                                <fieldset>
                                    <legend>Pants Color</legend>
                                    <select id="pants-color" style=${'background-color:' + defaultPants} onchange="changePantsColor()">
                                        <option style="background-color: #ffe7d1" value="#ffe7d1"></option>
                                        <option style="background-color: #e6bc98" value="#e6bc98"></option>
                                        <option style="background-color: #d4aa78" value="#d4aa78"></option>
                                        <option style="background-color: #a16e4b" value="#a16e4b"></option>
                                        <option style="background-color: #3b2219" value="#3b2219"></option>
                                    </select>
                                </fieldset>
                            </form>
                        </div>

                        <div style="display: block;">
                        <form>
                            <fieldset>
                                <legend>Shoe Color</legend>
                                <select id="shoe-color" style=${'background-color:' + defaultShoes} onchange="changeShoesColor()">
                                    <option style="background-color: #634e34" value="#634e34"></option>
                                    <option style="background-color: #2e536f" value="#2e536f"></option>
                                    <option style="background-color: #3d671d" value="#3d671d"></option>
                                    <option style="background-color: #1c7847" value="#1c7847"></option>
                                    <option style="background-color: #497665" value="#497665"></option>
                                </select>
                            </fieldset>
                        </form>
                    </div>
                    </fieldset>
                </form>
            </div>
            </center>
           
            <br /><br />
            <center>
                <button onclick="handleSubmit()">Start Game</button>
            </center>
            <br />
        </div>
    </div>
    `
}