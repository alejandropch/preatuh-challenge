"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConjuredItemStrategy = void 0;
const ItemUpdate_1 = require("./ItemUpdate");
class ConjuredItemStrategy extends ItemUpdate_1.ItemUpdateStrategy {
    updateQuality(item) {
        this.decreaseQuality(item, 2);
        this.decreaseSellIn(item);
        if (item.sellIn < 0) {
            this.decreaseQuality(item, 2);
        }
    }
}
exports.ConjuredItemStrategy = ConjuredItemStrategy;
//# sourceMappingURL=conjured-item-strategy.js.map