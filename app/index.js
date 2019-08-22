require('handlebars');
require('mongodb');
import { display, remove, View } from "mvdom";

class MainView implements View{
    constructor(data){
        this.data = data
    },
    init(){
        var view = this; // best practice
        view.el;
    },
    create(){
        return '<div id="main">${this.data}</div>'
    }
}

display(new MainView('data'),'body','first'); // by default will append last ('last') to body
