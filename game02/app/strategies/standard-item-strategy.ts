import { Item } from "../models/Item"
import { ItemUpdateStrategy } from "./ItemUpdate"

export class StandardItemStrategy extends ItemUpdateStrategy {
  updateQuality(item: Item): void {
      this.decreaseQuality(item)
      this.decreaseSellIn(item)
      
      if (item.sellIn < 0) {
          this.decreaseQuality(item)
      }
  }
}
