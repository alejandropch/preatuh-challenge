"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemUpdateStrategy = void 0;
class ItemUpdateStrategy {
    decreaseQuality(item, amount = 1) {
        item.quality = Math.max(ItemUpdateStrategy.MIN_QUALITY, item.quality - amount);
    }
    increaseQuality(item, amount = 1) {
        item.quality = Math.min(ItemUpdateStrategy.MAX_QUALITY, item.quality + amount);
    }
    decreaseSellIn(item) {
        item.sellIn--;
    }
}
exports.ItemUpdateStrategy = ItemUpdateStrategy;
ItemUpdateStrategy.MAX_QUALITY = 50;
ItemUpdateStrategy.MIN_QUALITY = 0;
//# sourceMappingURL=ItemUpdate.js.map