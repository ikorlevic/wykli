require('handlebars');
require('mongodb');
import { display, remove, View } from "mvdom";

class MainView implements View{
    id!: 'main';
    name!: 'main';
    el!: 'div';

    constructor(data){
        this.data = data;
    },
    create(){
        return '<div id="main"></div>'
    }
}

display(new MainView('data'),'body','first'); // by default will append last ('last') to body
