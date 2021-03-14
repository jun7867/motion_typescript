import { PageComponent } from "./components/page.js";
class App {
  private readonly page: PageComponent;
  constructor(appRoot: HTMLElement) {
    this.page = new PageComponent();
    this.page.attachTo(appRoot);
  }
}

// querySelector는 null이 될 수도 있다. 하지만 확실히 존재하기 때문에 Type Assertion을 사용한다.
new App(document.querySelector(".document")! as HTMLElement);
