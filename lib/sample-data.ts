import Colors from "@constants/colors"

export interface MenuItemType {
  name: string
  price: number
  /** Color in HEX representation. */
  color: string
}

export interface OrderItemType {
  menuItem: MenuItemType
  quantity: number
  itemCustomization?: string
}

export const sampleMenuItems: MenuItemType[] = [
  { name: "Fries", price: 5, color: Colors.orange1 },
  { name: "Poutine", price: 7, color: Colors.orange1 },
  { name: "Gravy", price: 1.5, color: Colors.orange1 },
  { name: "Ham Burger", price: 7.5, color: Colors.orange1 },
  { name: "Cheese Burger", price: 8.25, color: Colors.orange1 },
  { name: "Bacon Cheese Burger", price: 10.75, color: Colors.yellow1 },
  { name: "Hotdog", price: 3, color: Colors.yellow1 },
  { name: "Cheese Dog", price: 3.75, color: Colors.yellow1 },
  { name: "Bacon Cheese Dog", price: 6.25, color: Colors.yellow1 },
  { name: "Italian Sausage", price: 7, color: Colors.yellow1 },
  { name: "Polish Sausage", price: 7, color: Colors.green1 },
  { name: "Chicken Fingers", price: 12, color: Colors.green1 },
  { name: "Popcorn Chicken", price: 16, color: Colors.green1 },
  { name: "Pogo", price: 3, color: Colors.green1 },
  { name: "Onion Rings", price: 7, color: Colors.green1 },
  { name: "Chicken Burger", price: 7, color: Colors.green2 },
  { name: "Mozzarella Sticks", price: 8, color: Colors.green2 },
  {
    name: "Deep Fried Cheese Curds",
    price: 10,
    color: Colors.green2,
  },
  { name: "Pop Drink", price: 1.75, color: Colors.green2 },
]

export const sampleOrderItems: OrderItemType[] = [
  { menuItem: sampleMenuItems[3], quantity: 1 },
  { menuItem: sampleMenuItems[4], quantity: 1 },
  { menuItem: sampleMenuItems[5], quantity: 2 },
  { menuItem: sampleMenuItems[17], quantity: 2 },
]
