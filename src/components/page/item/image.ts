export class ImageComponent {
  private element: HTMLElement;
  constructor(title: string, url: string) {
    const template = document.createElement("template");
    template.innerHTML = `
      <section class="image">
        <div class="image__holder">
            <img class="image__thumbnail">
            <p class="image__title"></p>
        </div>
      </section>  
    `;
    // 사용자에게 입력받은 데이터를 바로 innerHTML에 사용하는 것은 위험하다.
    // 틀만 만들어 두고 필요한 것만 추가하는 형식으로 진행.
    this.element = template.content.firstElementChild! as HTMLElement;

    const imageElement = this.element.querySelector(
      ".image__thumbnail"
    )! as HTMLImageElement;
    imageElement.src = url;
    imageElement.alt = title;

    const titleElement = this.element.querySelector(
      ".image__title"
    )! as HTMLParagraphElement;
    titleElement.textContent = title;
  }

  // InsertPosition은 4가지 union type이 있고 어디에 추가할 수 있는지 지정 가능.
  attachTo(parent: HTMLElement, position: InsertPosition = "afterbegin") {
    // insertAdjacentElement는 position에 Element 추가.
    parent.insertAdjacentElement(position, this.element);
  }
}
