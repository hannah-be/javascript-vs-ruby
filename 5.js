/*

Challenges:
1. Add a `removeItem(item)` method
2. Add a `sortItems()` method to sort alphabetically

*/
class ShoppingList {
  constructor() {
    this.items = []
  }

  addItem(item) {
    this.items.push(item)
  }
  
  removeItem(item) {
    // Find index of item to remove
    var i = this.items.indexOf(item);
    // If the item's index doesn't equal -1 (i.e. the item is on the list) then remove it
    if (i != -1) {
      this.items.splice(i, 1);
    } else {
      console.log(`There is no ${item} on the list`)
    }
  }

  sortItems() {
    // Use the inbuilt sort() function to sort through in alphabetical order
    this.items.sort()
  }

  displayItems() {
    this.items.forEach((item, index) => {
      console.log(`${index+1}. ${item}`)
    })
  }
}

list = new ShoppingList
list.addItem('Milk')
list.addItem('Orange juice')
list.addItem('Cheese')
list.addItem('Peanuts')
list.addItem('Half a dozen onions')

list.displayItems()

list.removeItem('Milk')
list.sortItems()
list.displayItems()
