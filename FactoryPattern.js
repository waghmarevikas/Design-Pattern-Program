/**
 * Purpose of Computer Factory that can Produce PC,
 *  Laptop and Server Class Computers.
 */

function Factory() 
{
    this.createComputer = function (type) 
    {
        var computer;
        if (type === "PC") 
        {
            computer = new PC();
        }
        else if (type === "Laptop") 
        {
            computer = new Laptop();
        }
        else if (type === "Server") 
        {
            computer = new Server();
        }
        computer.type = type;
        computer.say = function () 
        {
            console.log(this.type + ": Price " + this.price + " Rs");
        }

        return computer;
    }
}
var PC = function () 
{
    this.price = "20000";
};

var Laptop = function () 
{
    this.price = "30000";
};
var Server = function () 
{
    this.price = "90000";
};
class FactoryDesignPattern
{ 
run() 
{
    var computers = [];
    var factory = new Factory();
    computers.push(factory.createComputer("PC"));
    computers.push(factory.createComputer("Laptop"));
    computers.push(factory.createComputer("Server"));
    for (var i = 0; i < computers.length; i++) 
    {
        computers[i].say();
    }
}
}

//create object of class
var f = new FactoryDesignPattern();
f.run();