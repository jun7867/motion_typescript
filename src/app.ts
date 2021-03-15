import { ImageComponent } from "./components/page/item/image.js";
import { PageComponent } from "./components/page/page.js";
class App {
  private readonly page: PageComponent;
  constructor(appRoot: HTMLElement) {
    this.page = new PageComponent();
    this.page.attachTo(appRoot);

    const image = new ImageComponent(
      "Temp Image Title",
      "https://picsum.photos/600/300"
    );
    image.attachTo(appRoot, "beforeend");
  }
}

// querySelector는 null이 될 수도 있다. 하지만 확실히 존재하기 때문에 Type Assertion을 사용한다.
new App(document.querySelector(".document")! as HTMLElement);
