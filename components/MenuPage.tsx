import { View, Text, StyleSheet } from "react-native";

import MenuItem from "./MenuItem";

function MenuPage() {
  return (
    <View style={styles.background}>
      <View style={styles.menuItemRow}>
        <MenuItem itemName="Ham Sandwich" itemPrice="16.00" />
        <MenuItem itemName="Tuna Sandwich" itemPrice="21.00" />
        <MenuItem itemName="Steak Sandwich" itemPrice="21.00" />
        <MenuItem itemName="Cheese Burger" itemPrice="16.00" />
        <MenuItem itemName="Bacon Burger" itemPrice="16.00" />
      </View>
      <View style={styles.menuItemRow}>
        <MenuItem itemName="Veggie Sandwich" itemPrice="9.00" />
        <MenuItem itemName="Cheese Veggie Sandwich" itemPrice="11.00" />
        <MenuItem itemName="Grilled Cheese" itemPrice="12.00" />
        <MenuItem itemName="Hotdog" itemPrice="12.00" />
        <MenuItem itemName="BLT" itemPrice="16.00" />
      </View>
    </View>
  );
}

export default MenuPage;

const styles = StyleSheet.create({
  background: {
    backgroundColor: "black",
    width: 624
  },
  menuItemRow: {
    flexDirection: "row",
    justifyContent: "center",
  },
});
