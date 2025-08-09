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
class JekyllImgPrefixPlugin extends obsidian_1.Plugin {
    onload() {
        return __awaiter(this, void 0, void 0, function* () {
            this.registerMarkdownPostProcessor((element) => {
                const images = element.querySelectorAll('img');
                images.forEach(img => {
                    var _a, _b;
                    const src = img.getAttribute('src');
                    if (src && src.startsWith('jekyll-img:')) {
                        const relativePath = src.replace('jekyll-img:', '').replace(/^\/+/, '');
                        // Get base path if possible (desktop only)
                        const basePath = ((_b = (_a = this.app.vault.adapter).getBasePath) === null || _b === void 0 ? void 0 : _b.call(_a)) || '';
                        // Construct absolute file URL
                        const vaultPath = basePath ? `${basePath}/${relativePath}` : relativePath;
                        const fileUrl = basePath ? `file://${vaultPath}` : relativePath;
                        img.setAttribute('src', fileUrl);
                    }
                });
            });
        });
    }
}
exports.default = JekyllImgPrefixPlugin;
