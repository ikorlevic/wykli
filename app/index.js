require('handlebars');
require('mongodb');
var mvdom = require("mvdom");

class MainView{
    constructor(data){
        this.data = data;
    }
    create(){
        return '<div id="main"></div>'
    }
}

mvdom.display(new MainView('data'),'body','first'); // by default will append last ('last') to body
