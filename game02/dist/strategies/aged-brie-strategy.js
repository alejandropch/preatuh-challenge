"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AgedBrieStrategy = void 0;
const ItemUpdate_1 = require("./ItemUpdate");
class AgedBrieStrategy extends ItemUpdate_1.ItemUpdateStrategy {
    updateQuality(item) {
        this.increaseQuality(item);
        this.decreaseSellIn(item);
        if (item.sellIn < 0) {
            this.increaseQuality(item);
        }
    }
}
exports.AgedBrieStrategy = AgedBrieStrategy;
//# sourceMappingURL=aged-brie-strategy.js.map