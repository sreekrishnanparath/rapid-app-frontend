export class menu {

menuId:String;
menuDesc : String;
menuGroup : String
menuIcon : String

constructor(menuId:String,
    menuDesc : String,
    menuGroup : String,
    menuIcon : String
    ){
this.menuDesc = menuDesc;
this.menuId = menuId;
this.menuGroup = menuGroup;
this.menuIcon = menuIcon
}

}