"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SulfurasStrategy = void 0;
const ItemUpdate_1 = require("./ItemUpdate");
class SulfurasStrategy extends ItemUpdate_1.ItemUpdateStrategy {
    updateQuality(item) {
        // no need of performing any action, since sulfura never changes
    }
}
exports.SulfurasStrategy = SulfurasStrategy;
//# sourceMappingURL=sulfuras-strategy.js.map