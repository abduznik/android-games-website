import { Plugin, MarkdownPostProcessorContext } from 'obsidian';

export default class JekyllPreviewImagePlugin extends Plugin {
  async onload() {
    this.registerMarkdownPostProcessor((element, context) => {
      const images = element.querySelectorAll('img');
      images.forEach(img => {
        const src = img.getAttribute('src');
        if (src && src.includes('{{') && src.includes('relative_url')) {
          // Extract the actual path inside the Liquid tag
          const match = src.match(/{{\s*"(.*?)"\s*\|\s*relative_url\s*}}/);
          if (match && match[1]) {
            // Replace src with vault relative path for preview
            const newSrc = match[1].replace(/^\/+/, ''); // remove leading slash
            img.setAttribute('src', newSrc);
          }
        }
      });
    });
  }
}
