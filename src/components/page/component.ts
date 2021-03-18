export interface Component {
  attachTo(parent: HTMLElement, position?: InsertPosition): void;
  removeFrom(parent: HTMLElement): void;
}

/**
 * Encapsulate the HTML element creation
 */
export class BaseComponent<T extends HTMLElement> implements Component {
  // 외부에서 접근 불가능
  protected readonly element: T;

  constructor(htmlString: string) {
    const template = document.createElement('template');
    template.innerHTML = htmlString;
    this.element = template.content.firstElementChild! as T;
  }

  attachTo(parent: HTMLElement, position: InsertPosition = 'afterbegin') {
    // insertAdjacentElement는 position에 Element 추가.
    parent.insertAdjacentElement(position, this.element);
  }

  removeFrom(parent: HTMLElement) {
    if (parent !== this.element.parentElement) {
      throw new Error('Parent mismatch!');
    }
    parent.removeChild(this.element);
  }
}
