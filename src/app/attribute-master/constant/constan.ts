export  class constan{
    public inputControlTypes =
    ["Text Field", 
   "Button", 
   "Date Field", "Check Box",
   "Drop Down",
   "Radio Button"
 ]
 public attributTypes=
 ["Int", 
 "String", 
 "Double", 
 "Long",
 "Float",
 "Boolean",
 "Date"] 
 public actionTypes=[
     "Clear",
     "Save"
 ]
    constructor(){

    }
    getInputControlTypes(){
        return this.inputControlTypes;
    }
    getAttributTypes(){
        return this.attributTypes;
    }
    getActionTypes(){
        return this.actionTypes;
    }
}

