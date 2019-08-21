require('handlebars');
require('mongodb');
var mvdom = require("mvdom");

class MainView{
    constructor(data){
        this.data = data;
    }
    create(){
        return "hello"
    }
}

mvdom.display(new MainView('data'),'#main'); // by default will append last ('last') to body
