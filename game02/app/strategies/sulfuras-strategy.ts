import { Item } from "../models/Item"
import { ItemUpdateStrategy } from "./ItemUpdate"

export class SulfurasStrategy extends ItemUpdateStrategy {
  updateQuality(item: Item): void {
      // no need of performing any action, since sulfura never changes
  }
}
