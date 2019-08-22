require('handlebars');
require('mongodb');
var mvdom = require("mvdom");

class MainView implements View{
    constructor(data){
        this.data = data
    }
    init(){
        var view = this; // best practice
        view.el;
    }
    create(){
        return '<div id="main">${this.data}</div>'
    }
}

mvdom.display(new MainView('data'),'body','first'); // by default will append last ('last') to body
