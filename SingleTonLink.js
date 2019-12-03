/**
 * Purpose to create single object using Singleton design Pattern
 */

class Language
{
    constructor(data)
    {
        if(Language.exist)
        {
            return Language.instance;
        }
        this.data=data;
        Language.instance=this;
        Language.exist=true;
        return this;
    }
    get_data()
    {
        return this.data;
    }
    set_data(data)
    {
        this.data=data;
    }
}

//create object of class and initialize value it.
var java = new Language('Java');
console.log(java.get_data());

var c = new Language('C++');
console.log(c.get_data());

var database = new Language('mysql');
console.log(database.get_data())