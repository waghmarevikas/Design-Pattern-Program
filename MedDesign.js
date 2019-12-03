



var Participant = function(name)
 {
    this.name = name;
    this.chatroom = null;
};
 
Participant.prototype = 
{
    send: function(message, to) {
        this.chatroom.send(message, this, to);
    },
    receive: function(message, from) {
        log.add(from.name + " to " + this.name + ": " + message);
    }
};
 
var Chatroom = function()
 {
    var participants = {};
 
    return {
 
        register: function(participant) 
        {
            participants[participant.name] = participant;
            participant.chatroom = this;
        },
 
        send: function(message, from, to) 
        {
            if (to) 
            {              
                 // single message
                to.receive(message, from);    
            } 
            else 
            {                       
                // broadcast message
                for (key in participants) 
                {   
                    if (participants[key] !== from) 
                    {
                        participants[key].receive(message, from);
                    }
                }
            }
        }
    };
};
 
// log helper
 
var log = (function() 
{
    var log = "";
 
    return {
        add: function(msg)
         { log += msg + "\n"; },
        show: function() 
        { console.log(log + ' '+log + '') }
    }
})();
 
class chat 
{ 
run() 
{
    var vikas = new Participant("vikas");
    var manoj = new Participant("manoj");
    var deepak = new Participant("deepak");
    var aditya = new Participant("aditya");
 
    var chatroom = new Chatroom();
    chatroom.register(vikas);
    chatroom.register(manoj);
    chatroom.register(deepak);
    chatroom.register(aditya);
 
    vikas.send("All you need is Job.");
    vikas.send("where are you manoj.");
    manoj.send("Hey, no need to broadcast", vikas);
    deepak.send("Ha, I heard that!");
    aditya.send("deepak, what do you think?", deepak);
 
    log.show();
}
}
var ch = new chat();
ch.run();