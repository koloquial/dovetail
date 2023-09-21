class Hero{
    constructor(name, location = _garden){
        this.name = name;
        this.location = location;
    }

    //save hero data into localstorage
    save(){
        try{
            localStorage.setItem("dovetail", JSON.stringify(this));
        }catch(error){
            console.log('error saving:', error);
        }
        
    }

    //remove cached data
    delete(){
        localStorage.removeItem("dovetail");
    }
}