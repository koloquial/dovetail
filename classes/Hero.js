class Hero{
    constructor(name, appearance, location = _garden){
        this.name = name;
        this.location = location;
        this.appearance = appearance;
    }

    save(){
        try{
            localStorage.setItem("dovetail", JSON.stringify(this));
        }catch(error){
            console.log('error saving:', error);
        }
        
    }

    delete(){
        localStorage.removeItem("dovetail");
    }
}