import { Item } from "./models/Item"
import { ItemNames } from './constants/item-names'
import {
    ItemUpdateStrategy,
    StandardItemStrategy,
    AgedBrieStrategy,
    SulfurasStrategy,
    BackstagePassStrategy,
    ConjuredItemStrategy
} from './strategies'



export class GildedRose {
    private strategies: Map<string, ItemUpdateStrategy>

    constructor(public items: Array<Item> = []) {
        this.strategies = new Map<string, ItemUpdateStrategy>([
            [ItemNames.AGED_BRIE as string, new AgedBrieStrategy() as unknown as ItemUpdateStrategy],
            [ItemNames.BACKSTAGE_PASSES as string, new BackstagePassStrategy() as unknown as ItemUpdateStrategy],
            [ItemNames.SULFURAS as string, new SulfurasStrategy() as unknown as ItemUpdateStrategy],
            [ItemNames.CONJURED as string, new ConjuredItemStrategy() as unknown as ItemUpdateStrategy]
        ])
    }


    private getStrategy(item: Item): ItemUpdateStrategy | StandardItemStrategy{
        if (item.name.startsWith(ItemNames.CONJURED)) {
            return this.strategies.get(ItemNames.CONJURED)!
        }
        return this.strategies.get(item.name) || new StandardItemStrategy()
    }

    updateQuality(): Array<Item> {
        this.items.forEach(item => {
            const strategy = this.getStrategy(item)
            strategy.updateQuality(item)
        })
        return this.items
    }
}
