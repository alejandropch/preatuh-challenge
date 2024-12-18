import { Item } from "../models/Item"
import { ItemUpdateStrategy } from "./ItemUpdate"

export class AgedBrieStrategy extends ItemUpdateStrategy {
  updateQuality(item: Item): void {
      this.increaseQuality(item)
      this.decreaseSellIn(item)
      
      if (item.sellIn < 0) {
          this.increaseQuality(item)
      }
  }
}
