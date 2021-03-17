import { BaseComponent } from "./component.js";

export class PageComponent extends BaseComponent<HTMLUListElement> {
  constructor() {
    // 여기서 super는 extends한 BaseComponent에 constructor. => htmlString 인자가 필요함
    super('<ul class="page">This is PageComponent!</ul>');
  }
}
