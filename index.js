import { display } from 'mvdom';

class HelloView {
    constructor(userName){
        this.userName = userName;
    }
    create(opts){
        return `<div class='HelloView'>
      <h1>Hello ${this.userName}. Here your todos:<h2>
      <todo-list></todo-list>
    </div>`;
    }
}

display(new HelloWorld('John'), 'body'); // by default will append last ('last') to body

// or to empty the parent (here 'body') container
display(new HelloWorld('John'), 'body', 'empty');