var handles = require('handlebars');
var mongo = require('mongodb').MongoClient;
var mvdom = require("mvdom");
const url = 'mongodb://localhost:27017';
var Sidebar = require("./structure/Sidebar");
var Header = require("./structure/Header");
var Toolbar = require("./structure/Toolbar");


class MainView {
    constructor(data){
        this.data = data
    }
    init(){
        var view = this; // best practice
        view.el;
    }
    create(){
        return `<div id="main"><div id="header"></div><div id="sidebar"></div><div id="content"></div><div id="toolbar"></div></div>`;
    }
    postDisplay(){
        var view = this;
        mvdom.display(new Header(),mvdom.first(view.el ,"#header"));
        mvdom.display(new Sidebar(),mvdom.first(view.el ,"#sidebar"));
        mvdom.display(new Toolbar(),mvdom.first(view.el ,"#toolbar"));
    }
}

mvdom.display(new MainView('moj text'),'body','first'); // by default will append last ('last') to body
