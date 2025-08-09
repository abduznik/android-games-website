"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const obsidian_1 = require("obsidian");
class JekyllPreviewImagePlugin extends obsidian_1.Plugin {
    onload() {
        return __awaiter(this, void 0, void 0, function* () {
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
        });
    }
}
exports.default = JekyllPreviewImagePlugin;
