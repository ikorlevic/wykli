class Header{
    constructor(data){
        this.data = data
    }
    create(){
        return `<h2>Header</h2>`;
    }
    init(){
        var view = this; // best practice
        view.el;
    }
}
module.exports = Header;