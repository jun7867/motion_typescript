import { BaseComponent } from "./../component.js";

export class VideoComponent extends BaseComponent<HTMLElement> {
  constructor(title: string, url: string) {
    super(`
        <section class="video">
            <div class="video__player">
            <iframe class="video__iframe" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
            </iframe>
            <h2 class="video__title"></h2>
            </div>
        </section>`);

    const videoElement = this.element.querySelector(
      ".video__iframe"
    )! as HTMLIFrameElement;
    videoElement.src = this.convertToEmbeddedURL(url); // 어떤 url이든 iframe을 위한 Id가 필요함-> videoId 추출
    const titleElement = this.element.querySelector(
      ".video__title"
    )! as HTMLHeadingElement;
    titleElement.textContent = title;
  }

  // 정규표현식 Regex -> ID만 추출
  // Input
  // 1) https://youtu.be/T77T-ytINzo
  // 2) youtube.com/watch?v=T77T-ytINzo
  // Output => https://www.youtube.com/embed/T77T-ytINzo
  private convertToEmbeddedURL(url: string): string {
    const regExp = /^(?:https?:\/\/)?(?:www\.)?(?:(?:youtube.com\/(?:(?:watch\?v=)|(?:embed\/))([a-zA-Z0-9-]{11}))|(?:youtu.be\/([a-zA-Z0-9-]{11})))/;
    const match = url.match(regExp);

    const videoId = match ? match[1] || match[2] : undefined;
    if (videoId) {
      return `https://www.youtube.com/embed/${videoId}`;
    }
    return url;
  }
}
