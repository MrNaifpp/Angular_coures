

export class user {
    public name: string;
    public email:string;
    public phone:string;
    public password:string;
    public myHisoryAqars=[];
    public myRemainders=[];

    constructor(name?,email?,phone?,password?,myHisoryAqars?,myRemainders?){  
        this.name=name;
        this.phone=phone;
        this.myHisoryAqars=myHisoryAqars;
        this.myRemainders=myRemainders;
        this.email=email;
        this.password=password;
    }
    
}

export class remainder {
    public title: string;
    public date:string;
    public time :string;
    public deleteId:string;

    
    constructor(title,date,time){
        this.title=title;
        this.date=date;
        this.time=time;  
    }
   
   
}
        

export class aqar {
    public name: string;
    public description:string;
    public price :string; 
    public imgUrl:string;   
    
    constructor( name?,description?,price?,imgUrl?){
        this.name=name;
        this.description=description;
        this.price=price;
        this.imgUrl=imgUrl;
    }
}



