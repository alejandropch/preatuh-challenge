import { Item } from "../models/Item"
import { ItemUpdateStrategy } from "./ItemUpdate"

export class ConjuredItemStrategy extends ItemUpdateStrategy {
    updateQuality(item: Item): void {
        this.decreaseQuality(item, 2)
        this.decreaseSellIn(item)
        
        if (item.sellIn < 0) {
            this.decreaseQuality(item, 2)
        }
    }
}