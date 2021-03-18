import { Component } from './components/page/component.js';
import { ImageComponent } from './components/page/item/image.js';
import { NoteComponent } from './components/page/item/note.js';
import { TodoComponent } from './components/page/item/todo.js';
import { VideoComponent } from './components/page/item/video.js';
import { Composable, PageComponent } from './components/page/page.js';
class App {
  private readonly page: Component & Composable; // Component중 하나 + Composable으로 구현
  constructor(appRoot: HTMLElement) {
    this.page = new PageComponent();
    this.page.attachTo(appRoot);

    const image = new ImageComponent('Temp Image Title', 'https://picsum.photos/600/300');
    this.page.addChild(image);

    const video = new VideoComponent('Video Title', 'https://youtu.be/T77T-ytINzo');
    this.page.addChild(video);

    const note = new NoteComponent('Note Title', 'Note Desc');
    this.page.addChild(note);

    const todo = new TodoComponent('Todo Title', 'Todo item');
    this.page.addChild(todo);
  }
}

// querySelector는 null이 될 수도 있다. 하지만 확실히 존재하기 때문에 Type Assertion을 사용한다.
new App(document.querySelector('.document')! as HTMLElement);
