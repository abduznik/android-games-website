"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const obsidian_1 = require("obsidian");
class LiquidHtmlImgRewritePlugin extends obsidian_1.Plugin {
    onload() {
        this.registerMarkdownPostProcessor((element) => {
            const images = element.querySelectorAll('img');
            images.forEach(img => {
                const src = img.getAttribute('src');
                if (src) {
                    // Match Liquid syntax: {{ "/path" | relative_url }}
                    const match = src.match(/\{\{\s*"(.*?)"\s*\|\s*relative_url\s*\}\}/);
                    if (match && match[1]) {
                        // Remove leading slash for vault-relative path
                        const cleanPath = match[1].replace(/^\/+/, '');
                        console.log(`Rewriting image src from '${src}' to '${cleanPath}'`);
                        img.setAttribute('src', cleanPath);
                    }
                }
            });
        });
    }
}
exports.default = LiquidHtmlImgRewritePlugin;
