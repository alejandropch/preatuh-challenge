"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StandardItemStrategy = void 0;
const ItemUpdate_1 = require("./ItemUpdate");
class StandardItemStrategy extends ItemUpdate_1.ItemUpdateStrategy {
    updateQuality(item) {
        this.decreaseQuality(item);
        this.decreaseSellIn(item);
        if (item.sellIn < 0) {
            this.decreaseQuality(item);
        }
    }
}
exports.StandardItemStrategy = StandardItemStrategy;
//# sourceMappingURL=standard-item-strategy.js.map