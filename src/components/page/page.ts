import { BaseComponent, Component } from './component.js';

export interface Composable {
  addChild(child: Component): void;
}

type OnCloseListener = () => void;

export class PageItemComponent extends BaseComponent<HTMLElement> implements Composable {
  private closeListener?: OnCloseListener;
  constructor() {
    super(`<li class="page-item">
            <section class="page-item__body"></section>
            <div class="page-item__controls">
                <button class="close">&times;</button>
            </div>
            </li>`);
    const closeBtn = this.element.querySelector('.close')! as HTMLButtonElement;
    closeBtn.onclick = () => {
      // closeListener가 있으면 ~ closeListener() 실행
      this.closeListener && this.closeListener();
    };
  }
  // child를 container에 붙이기.
  addChild(child: Component) {
    const container = this.element.querySelector('.page-item__body')! as HTMLElement;
    child.attachTo(container);
  }

  setOnCloseListener(listener: OnCloseListener) {
    this.closeListener = listener;
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
    item.setOnCloseListener(() => {
      // listener 등록
      item.removeFrom(this.element);
    });
  }
}
