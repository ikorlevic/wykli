var handles = require('handlebars');
var mongo = require('mongodb').MongoClient;
var mvdom = require("mvdom");

class Sidebar{
    constructor(data){
        this.data = data
    }
    create(){
        return `<h2>Sidebar</h2>`;
    }
    init(){
        var view = this; // best practice
        view.el;
    }
}