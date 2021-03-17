import { BaseComponent } from "../component.js";

export class NoteComponent extends BaseComponent<HTMLElement> {
  constructor(title: string, description: string) {
    super(`
      <section class="note">
        <h2 class="note__title"></h2>
        <p class="note__desc"></p>
      </section>`);

    const titleElement = this.element.querySelector(
      ".note__title"
    )! as HTMLHeadingElement;
    titleElement.textContent = title;

    const descElement = this.element.querySelector(
      ".note__desc"
    )! as HTMLParagraphElement;
    descElement.textContent = description;
  }
}
