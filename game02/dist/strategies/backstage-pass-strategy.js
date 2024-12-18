"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BackstagePassStrategy = void 0;
const ItemUpdate_1 = require("./ItemUpdate");
class BackstagePassStrategy extends ItemUpdate_1.ItemUpdateStrategy {
    updateQuality(item) {
        this.increaseQuality(item);
        if (item.sellIn <= 10) {
            this.increaseQuality(item);
        }
        if (item.sellIn <= 5) {
            this.increaseQuality(item);
        }
        this.decreaseSellIn(item);
        if (item.sellIn < 0) {
            item.quality = 0;
        }
    }
}
exports.BackstagePassStrategy = BackstagePassStrategy;
//# sourceMappingURL=backstage-pass-strategy.js.map