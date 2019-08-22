class Toolbar{
    constructor(data){
        this.data = data
    }
    create(){
        return `<h2>Toolbar</h2>`;
    }
    init(){
        var view = this; // best practice
        view.el;
    }
}
module.exports = Toolbar;