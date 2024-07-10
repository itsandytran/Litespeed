import { View, Text, StyleSheet } from "react-native";

type MenuItemProps = {
  itemName: string;
  itemPrice: string;
};

const MenuItem = (props: MenuItemProps) => {
  return (
    <View style={styles.button}>
      <View style={styles.itemName}>
        <Text style={styles.itemNameText}>{props.itemName}</Text>
      </View>
      <Text style={styles.itemPriceText}>{props.itemPrice}</Text>
    </View>
  );
};

export default MenuItem;

const styles = StyleSheet.create({
  button: {
    height: 130,
    width: 120,
    borderRadius: 7,
    padding: 10,
    margin: 2,
    backgroundColor: "#6D9496",
  },
  itemName: {
    flex: 1,
  },
  itemNameText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
  itemPriceText: {
    fontSize: 12,
    color: "white",
    textAlign: "right",
  },
});
