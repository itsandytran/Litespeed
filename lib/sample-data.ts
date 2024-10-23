import Colors from "@constants/colors"

export interface MenuItemType {
  name   : string
  price  : number
  color  : string // formatted in HEX representation
  addOns?: AddOnType[]
}

export interface OrderItemType {
  menuItem: MenuItemType
  quantity: number
  customizationOptions?: AddOnType[]
}

export interface AddOnType {
  name : string
  price: number
}

export const AddOns: {
  [key: string]: AddOnType
} = {
  lettuce: { name: "Iceberg Lettuce", price: 0 },
  bacon: { name: "Canadian Bacon", price: 2 },
  tomatoes: { name: "Roma Tomatoes", price: 0 },
  extraCheese: { name: "Extra Cheese", price: 1.5 },
  pickles: { name: "Pickled Cucumbers", price: 0.5 },
  onions: {name: "Caramelized Onions", price: 0.5},
  relish: { name: "Relish", price: 0 },
  mustard: { name: "Mustard", price: 0 },
  ketchup: { name: "House Ketchup", price: 0 },
  mayonnaise: { name: "Mayo", price: 0},
  salt: { name: "Salt", price: 0 },
  vinegar: { name: "Vinegar", price: 0 },
}

export const MenuItems: {
  [key: string]: MenuItemType
} = {
  fries: {
    name: "Fries",
    price: 5,
    color: Colors.sample_yellow,
    addOns: [
      AddOns.ketchup,
      AddOns.salt,
      AddOns.vinegar,
    ],
  },
  poutine: {
    name: "Poutine",
    price: 7,
    color: Colors.sample_yellow,
    addOns: [AddOns.extraCheese],
  },
  gravy: {
    name: "Gravy",
    price: 1.5,
    color: Colors.sample_yellow,
  },
  hamBurger: {
    name: "Ham Burger",
    price: 7.5,
    color: Colors.sample_yellow,
    addOns: [
      AddOns.lettuce,
      AddOns.bacon,
      AddOns.tomatoes,
      AddOns.pickles,
      AddOns.onions,
      AddOns.mustard,
      AddOns.ketchup,
      AddOns.relish,
      AddOns.mayonnaise,
    ],
  },
  cheeseBurger: {
    name: "Cheese Burger",
    price: 8.25,
    color: Colors.sample_yellow,
    addOns: [
      AddOns.lettuce,
      AddOns.bacon,
      AddOns.tomatoes,
      AddOns.pickles,
      AddOns.onions,
      AddOns.mustard,
      AddOns.ketchup,
      AddOns.relish,
      AddOns.mayonnaise,
    ],
  },
  baconCheeseBurger: {
    name: "Bacon Cheese Burger",
    price: 10.75,
    color: Colors.sample_orange,
    addOns: [
      AddOns.lettuce,
      AddOns.bacon,
      AddOns.tomatoes,
      AddOns.pickles,
      AddOns.onions,
      AddOns.mustard,
      AddOns.ketchup,
      AddOns.relish,
      AddOns.mayonnaise,
    ],
  },
  hotdog: {
    name: "Hotdog",
    price: 3,
    color: Colors.sample_orange,
    addOns: [
      AddOns.ketchup,
      AddOns.mustard,
      AddOns.mayonnaise,
      AddOns.relish,
      AddOns.onions,
      AddOns.pickles,
    ]
  },
  cheeseDog: {
    name: "Cheese Dog",
    price: 3.75,
    color: Colors.sample_orange,
    addOns: [
      AddOns.ketchup,
      AddOns.mustard,
      AddOns.mayonnaise,
      AddOns.relish,
      AddOns.onions,
      AddOns.pickles,
    ]
  },
  baconCheeseDog: {
    name: "Bacon Cheese Dog",
    price: 6.25,
    color: Colors.sample_orange,
    addOns: [
      AddOns.ketchup,
      AddOns.mustard,
      AddOns.mayonnaise,
      AddOns.relish,
      AddOns.onions,
      AddOns.pickles,
    ]
  },
  italianSausage: {
    name: "Italian Sausage",
    price: 7,
    color: Colors.sample_orange,
  },
  polishSausage: {
    name: "Polish Sausage",
    price: 7,
    color: Colors.sample_red,
  },
  chickenFingers: {
    name: "Chicken Fingers",
    price: 12,
    color: Colors.sample_red,
  },
  popcornChicken: {
    name: "Popcorn Chicken",
    price: 16,
    color: Colors.sample_red,
  },
  pogo: {
    name: "Pogo",
    price: 3,
    color: Colors.sample_red,
  },
  onionRings: {
    name: "Onion Rings",
    price: 7,
    color: Colors.sample_red,
  },
  chickenBurger: {
    name: "Chicken Burger",
    price: 7,
    color: Colors.sample_green,
  },
  mozzarellaSticks: {
    name: "Mozzarella Sticks",
    price: 8,
    color: Colors.sample_green,
  },
  deepFriedCheeseCurds: {
    name: "Deep Fried Cheese Curds",
    price: 10,
    color: Colors.sample_green,
  },
  popDrink: {
    name: "Pop Drink",
    price: 1.75,
    color: Colors.sample_green,
  },
}

export const SampleOrderItems: {
  [key: string]: OrderItemType
} = {
  hamBurger: {
    menuItem: MenuItems.hamBurger,
    quantity: 1,
    customizationOptions: [],
  },
  cheeseBurger: {
    menuItem: MenuItems.cheeseBurger,
    quantity: 1,
    customizationOptions: [AddOns.tomatoes],
  },
  baconCheeseBurger: {
    menuItem: MenuItems.baconCheeseBurger,
    quantity: 2,
    customizationOptions: [
      AddOns.tomatoes,
      AddOns.ketchup,
    ],
  },
  deepFriedCheeseCurds: {
    menuItem: MenuItems.deepFriedCheeseCurds,
    quantity: 2,
    customizationOptions: [],
  },
}

export const categories = [
  "Fries and Burgers",
  "Dessert",
  "Drinks",
  "Breakfast"
]

export const sampleAddOns: AddOnType[] = [
  AddOns.lettuce,
  AddOns.bacon,
  AddOns.tomatoes,
  AddOns.extraCheese,
  AddOns.mustard,
  AddOns.ketchup,
  AddOns.pickles,
  AddOns.relish,
  AddOns.salt,
  AddOns.vinegar,
]

export const sampleMenuItems: MenuItemType[] = [
  MenuItems.fries,
  MenuItems.poutine,
  MenuItems.gravy,
  MenuItems.hamBurger,
  MenuItems.cheeseBurger,
  MenuItems.baconCheeseBurger,
  MenuItems.hotdog,
  MenuItems.cheeseDog,
  MenuItems.baconCheeseDog,
  MenuItems.italianSausage,
  MenuItems.polishSausage,
  MenuItems.chickenFingers,
  MenuItems.popcornChicken,
  MenuItems.pogo,
  MenuItems.onionRings,
  MenuItems.chickenBurger,
  MenuItems.mozzarellaSticks,
  MenuItems.deepFriedCheeseCurds,
  MenuItems.popDrink,
]

export const sampleOrderItems: OrderItemType[] = [
  SampleOrderItems.hamBurger,
  SampleOrderItems.cheeseBurger,
  SampleOrderItems.baconCheeseBurger,
  SampleOrderItems.deepFriedCheeseCurds,
]
