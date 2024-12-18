import { Item } from "../models/Item"
import { ItemUpdateStrategy } from "./ItemUpdate"

export class BackstagePassStrategy extends ItemUpdateStrategy {
  updateQuality(item: Item): void {
      this.increaseQuality(item)
      
      if (item.sellIn <= 10) {
          this.increaseQuality(item)
      }
      
      if (item.sellIn <= 5) {
          this.increaseQuality(item)
      }
      
      this.decreaseSellIn(item)
      
      if (item.sellIn < 0) {
          item.quality = 0
      }
  }
}
