import Colors from "@constants/colors"

export interface MenuItemType {
  name: string
  price: number
  /** Color in HEX representation. */
  color: string
  customizatioinOptions?: ItemCustomizationOption[]
}

export interface OrderItemType {
  menuItem: MenuItemType
  quantity: number
  customizationOptions?: ItemCustomizationOption[]
}

export interface ItemCustomizationOption extends MenuItemType {}

export const sampleMenuCategories = [
  "Burgers",
  "Drinks",
  "Desserts",
  "Breakfast",
]

export const SampleCustomizationOptions: {
  [key: string]: ItemCustomizationOption
} = {
  lettuce: { name: "Lettuce", price: 0.5, color: Colors.yellow1 },
  bacon: { name: "Bacon", price: 2, color: Colors.yellow1 },
  tomatoes: { name: "Tomatoes", price: 1.2, color: Colors.orange1 },
  extraCheese: { name: "Extra cheese", price: 1.5, color: Colors.orange1 },
  mustard: { name: "Mustard", price: 0.5, color: Colors.yellow1 },
  ketchup: { name: "Ketchup", price: 0.5, color: Colors.red1 },
  pickles: { name: "Pickles", price: 0.5, color: Colors.green1 },
  relish: { name: "Relish", price: 0.5, color: Colors.green1 },
  salt: { name: "Salt", price: 0.2, color: Colors.gray1 },
  vinegar: { name: "Vinegar", price: 0.2, color: Colors.yellow1 },
}

const burgersCustomizationOptions: ItemCustomizationOption[] = [
  SampleCustomizationOptions.lettuce,
  SampleCustomizationOptions.bacon,
  SampleCustomizationOptions.tomatoes,
  SampleCustomizationOptions.extraCheese,
  SampleCustomizationOptions.pickles,
]

export const SampleMenuItems: {
  [key: string]: MenuItemType
} = {
  fries: {
    name: "Fries",
    price: 5,
    color: Colors.orange1,
    customizatioinOptions: [
      SampleCustomizationOptions.ketchup,
      SampleCustomizationOptions.salt,
    ],
  },
  poutine: {
    name: "Poutine",
    price: 7,
    color: Colors.orange1,
    customizatioinOptions: [SampleCustomizationOptions.extraCheese],
  },
  gravy: {
    name: "Gravy",
    price: 1.5,
    color: Colors.orange1,
  },
  hamBurger: {
    name: "Ham Burger",
    price: 7.5,
    color: Colors.orange1,
    customizatioinOptions: burgersCustomizationOptions,
  },
  cheeseBurger: {
    name: "Cheese Burger",
    price: 8.25,
    color: Colors.orange1,
    customizatioinOptions: burgersCustomizationOptions,
  },
  baconCheeseBurger: {
    name: "Bacon Cheese Burger",
    price: 10.75,
    color: Colors.yellow1,
    customizatioinOptions: burgersCustomizationOptions,
  },
  hotdog: {
    name: "Hotdog",
    price: 3,
    color: Colors.yellow1,
    customizatioinOptions: [
      SampleCustomizationOptions.ketchup,
      SampleCustomizationOptions.mustard,
    ]
  },
  cheeseDog: {
    name: "Cheese Dog",
    price: 3.75,
    color: Colors.yellow1,
    customizatioinOptions: [
      SampleCustomizationOptions.ketchup,
      SampleCustomizationOptions.mustard,
    ]
  },
  baconCheeseDog: {
    name: "Bacon Cheese Dog",
    price: 6.25,
    color: Colors.yellow1,
    customizatioinOptions: [
      SampleCustomizationOptions.ketchup,
      SampleCustomizationOptions.mustard,
    ]
  },
  italianSausage: {
    name: "Italian Sausage",
    price: 7,
    color: Colors.yellow1,
  },
  polishSausage: {
    name: "Polish Sausage",
    price: 7,
    color: Colors.green1,
  },
  chickenFingers: {
    name: "Chicken Fingers",
    price: 12,
    color: Colors.green1,
  },
  popcornChicken: {
    name: "Popcorn Chicken",
    price: 16,
    color: Colors.green1,
  },
  pogo: {
    name: "Pogo",
    price: 3,
    color: Colors.green1,
  },
  onionRings: {
    name: "Onion Rings",
    price: 7,
    color: Colors.green1,
  },
  chickenBurger: {
    name: "Chicken Burger",
    price: 7,
    color: Colors.green2,
    customizatioinOptions: burgersCustomizationOptions,
  },
  mozzarellaSticks: {
    name: "Mozzarella Sticks",
    price: 8,
    color: Colors.green2,
  },
  deepFriedCheeseCurds: {
    name: "Deep Fried Cheese Curds",
    price: 10,
    color: Colors.green2,
  },
  popDrink: {
    name: "Pop Drink",
    price: 1.75,
    color: Colors.green2,
  },
}

export const SampleOrderItems: {
  [key: string]: OrderItemType
} = {
  hamBurger: {
    menuItem: SampleMenuItems.hamBurger,
    quantity: 1,
    customizationOptions: [],
  },
  cheeseBurger: {
    menuItem: SampleMenuItems.cheeseBurger,
    quantity: 1,
    customizationOptions: [SampleCustomizationOptions.tomatoes],
  },
  baconCheeseBurger: {
    menuItem: SampleMenuItems.baconCheeseBurger,
    quantity: 2,
    customizationOptions: [
      SampleCustomizationOptions.tomatoes,
      SampleCustomizationOptions.ketchup,
    ],
  },
  deepFriedCheeseCurds: {
    menuItem: SampleMenuItems.deepFriedCheeseCurds,
    quantity: 2,
    customizationOptions: [],
  },
}

export const sampleCustomizationOptions: ItemCustomizationOption[] = [
  SampleCustomizationOptions.lettuce,
  SampleCustomizationOptions.bacon,
  SampleCustomizationOptions.tomatoes,
  SampleCustomizationOptions.extraCheese,
  SampleCustomizationOptions.mustard,
  SampleCustomizationOptions.ketchup,
  SampleCustomizationOptions.pickles,
  SampleCustomizationOptions.relish,
  SampleCustomizationOptions.salt,
  SampleCustomizationOptions.vinegar,
]

export const sampleMenuItems: MenuItemType[] = [
  SampleMenuItems.fries,
  SampleMenuItems.poutine,
  SampleMenuItems.gravy,
  SampleMenuItems.hamBurger,
  SampleMenuItems.cheeseBurger,
  SampleMenuItems.baconCheeseBurger,
  SampleMenuItems.hotdog,
  SampleMenuItems.cheeseDog,
  SampleMenuItems.baconCheeseDog,
  SampleMenuItems.italianSausage,
  SampleMenuItems.polishSausage,
  SampleMenuItems.chickenFingers,
  SampleMenuItems.popcornChicken,
  SampleMenuItems.pogo,
  SampleMenuItems.onionRings,
  SampleMenuItems.chickenBurger,
  SampleMenuItems.mozzarellaSticks,
  SampleMenuItems.deepFriedCheeseCurds,
  SampleMenuItems.popDrink,
]

export const sampleOrderItems: OrderItemType[] = [
  SampleOrderItems.hamBurger,
  SampleOrderItems.cheeseBurger,
  SampleOrderItems.baconCheeseBurger,
  SampleOrderItems.deepFriedCheeseCurds,
]
