
class chat
{
    constructor(user,message)
    {
        this.user=user;
        this.message=message;

    }
    showMessage()
    {
        
        console.log("User name is: " + this.user+ " and message:" + this.message);
    }
}
class User
{
    constructor(name)
    {
        this.name=name;
    }
    setName(nm)
    {
     this.name=nm;
    }
    getName()
    {
        this.name;
    }
    sendMessage(message)
    {
        this.message=message;
        let cr=new chat(this.name,this.message);
        cr.showMessage();   
    }
}
class demo
{
    
}
let user1=new User();
let user2=new User();

user1.setName("Manoj");
user2.setName("Vikas");
user1.sendMessage("Hi Vikas");
user2.sendMessage("Hi Manoj");
