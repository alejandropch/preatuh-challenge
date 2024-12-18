"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GildedRose = void 0;
const item_names_1 = require("./constants/item-names");
const strategies_1 = require("./strategies");
class GildedRose {
    constructor(items = []) {
        this.items = items;
        this.strategies = new Map([
            [item_names_1.ItemNames.AGED_BRIE, new strategies_1.AgedBrieStrategy()],
            [item_names_1.ItemNames.BACKSTAGE_PASSES, new strategies_1.BackstagePassStrategy()],
            [item_names_1.ItemNames.SULFURAS, new strategies_1.SulfurasStrategy()],
            [item_names_1.ItemNames.CONJURED, new strategies_1.ConjuredItemStrategy()]
        ]);
    }
    getStrategy(item) {
        if (item.name.startsWith(item_names_1.ItemNames.CONJURED)) {
            return this.strategies.get(item_names_1.ItemNames.CONJURED);
        }
        return this.strategies.get(item.name) || new strategies_1.StandardItemStrategy();
    }
    updateQuality() {
        this.items.forEach(item => {
            const strategy = this.getStrategy(item);
            strategy.updateQuality(item);
        });
        return this.items;
    }
}
exports.GildedRose = GildedRose;
//# sourceMappingURL=gilded-rose.js.map