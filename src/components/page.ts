export class PageComponent {
  private element: HTMLUListElement;
  constructor() {
    this.element = document.createElement("ul");
    this.element.setAttribute("class", "page");
    this.element.textContent = "This is PageComponent";
  }

  // InsertPosition은 4가지 union type이 있고 어디에 추가할 수 있는지 지정 가능.
  attachTo(parent: HTMLElement, position: InsertPosition = "afterbegin") {
    // insertAdjacentElement는 position에 Element 추가.
    parent.insertAdjacentElement(position, this.element);
  }
}
