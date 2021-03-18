import { BaseComponent, Component } from './component.js';

export interface Composable {
  addChild(child: Component): void;
}

export class PageItemComponent extends BaseComponent<HTMLElement> implements Composable {
  constructor() {
    super(`<li class="page-item">
            <section class="page-item__body"></section>
            <div class="page-item__controls">
                <button class="close">&times;</button>
            </div>
            </li>`);
  }
  // child를 container에 붙이기.
  addChild(child: Component) {
    const container = this.element.querySelector('.page-item__body')! as HTMLElement;
    child.attachTo(container);
  }
}
export class PageComponent extends BaseComponent<HTMLUListElement> implements Composable {
  constructor() {
    // 여기서 super는 extends한 BaseComponent에 constructor. => htmlString 인자가 필요함
    super('<ul class="page"></ul>');
  }

  /**
   * 인자로 받는 Component를 pageItemComponent로 감싸는 method
   */
  addChild(section: Component) {
    const item = new PageItemComponent();
    item.addChild(section);
    item.attachTo(this.element, 'beforeend');
  }
}
