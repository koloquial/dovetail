function handleSubmit(){
    if(document.getElementById("name").value && document.getElementById("name").value !== ""){
        let newHero = new Hero(document.getElementById("name").value);

        newHero.save();

        document.getElementById("modal").style.display = "none";

        setSnackbar(`<p>${newHero.name} has been created.</p>`);

        changeScreen(game);
    }
}

function handleCancel(){
    document.getElementById("modal").style.display = "none";
}

function newGame(){
    return `
        <div>
            <h2>New Game</h2>
            <p>
                Create your character
            </p>
            <hr />
            <p>Name</p>
            <input type="text" id="name" placeholder="Name" maxlength="15" />

            <br /><br />
            <center>
                <button onclick="handleSubmit()">Start Game</button>
                <button onclick="handleCancel()">Cancel</button>
            </center>
        </div>
    `
}