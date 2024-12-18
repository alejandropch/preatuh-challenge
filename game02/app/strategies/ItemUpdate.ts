import { Item } from "../models/Item"

export abstract class ItemUpdateStrategy {
    protected static readonly MAX_QUALITY = 50
    protected static readonly MIN_QUALITY = 0

    abstract updateQuality(item: Item): void

    protected decreaseQuality(item: Item, amount: number = 1): void {
        item.quality = Math.max(ItemUpdateStrategy.MIN_QUALITY, item.quality - amount)
    }

    protected increaseQuality(item: Item, amount: number = 1): void {
        item.quality = Math.min(ItemUpdateStrategy.MAX_QUALITY, item.quality + amount)
    }

    protected decreaseSellIn(item: Item): void {
        item.sellIn--
    }
}
