require('handlebars');
require('mongodb');
var mvdom = require("mvdom");

class MainView{
    create(){
        return "hello"
    }
}

mvdom.display(new MainWiew(), 'main'); // by default will append last ('last') to body
