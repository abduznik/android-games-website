import { Plugin } from 'obsidian';

export default class JekyllImgPrefixPlugin extends Plugin {
  async onload() {
    this.registerMarkdownPostProcessor((element) => {
      const images = element.querySelectorAll('img');
      images.forEach(img => {
        const src = img.getAttribute('src');
        if (src && src.startsWith('jekyll-img:')) {
          const relativePath = src.replace('jekyll-img:', '').replace(/^\/+/, '');

          // Get base path if possible (desktop only)
          const basePath = (this.app.vault.adapter as any).getBasePath?.() || '';

          // Construct absolute file URL
          const vaultPath = basePath ? `${basePath}/${relativePath}` : relativePath;
          const fileUrl = basePath ? `file://${vaultPath}` : relativePath;

          img.setAttribute('src', fileUrl);
        }
      });
    });
  }
}
