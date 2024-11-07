import { StyleSheet, Text, View } from "react-native"
import textStyles from "@constants/textStyles"
import ReanimatedSwipeable from "react-native-gesture-handler/ReanimatedSwipeable"
import { GestureHandlerRootView } from "react-native-gesture-handler"
import Reanimated, {
  SharedValue,
  useAnimatedStyle,
} from "react-native-reanimated"
import Colors from "@constants/colors"

export type SwipeableListItemProps = {
    itemName: string
    itemPrice: number
}

/**
 * The SwipeableListItem component displays a list item that can be swiped to reveal additional actions.
 * It includes a reanimated swipeable component and a reanimated view that displays the additional actions.
 * The additional actions are displayed on the right side of the list item.
 * TODO: Consider adding a left swipe action.
 * @param itemName - The name of the list item
 * @returns A SwipeableListItem component
 */
const SwipeableListItem = ({ itemName, itemPrice }: SwipeableListItemProps) => {
  return (
    <GestureHandlerRootView>
      <ReanimatedSwipeable
        friction={2}
        enableTrackpadTwoFingerGesture
        rightThreshold={40}
        renderRightActions={RightAction}
      >
        <View style={styles.underlinedRow}>
          <View style={styles.itemColumn}>
            <Text style={textStyles.regular}>{itemName}</Text>
          </View>
          <View style={styles.priceColumn}>
            <Text style={textStyles.regular}>{itemPrice.toFixed(2)}</Text>
          </View>

        </View>
      </ReanimatedSwipeable>
    </GestureHandlerRootView>
  )
}

function RightAction(prog: SharedValue<number>, drag: SharedValue<number>) {
  const styleAnimation = useAnimatedStyle(() => {
    console.log("showRightProgress:", prog.value)
    console.log("appliedTranslation:", drag.value)

    return {
      transform: [{ translateX: drag.value + 100 }],
    }
  })

  return (
    <Reanimated.View style={styleAnimation}>
      <Text style={[styles.rightAction, textStyles.regular]}>Delete</Text>
    </Reanimated.View>
  )
}

const styles = StyleSheet.create({
  rightAction: { 
    backgroundColor: Colors.sample_red,
    paddingHorizontal: 16,
   },
  separator: {
    width: "100%",
    borderTopWidth: 1,
  },
  itemColumn: {
    width: "70%",
  },
  priceColumn: {
    width: "30%",
    justifyContent: "flex-end",
    flexDirection: "row",
  },
  underlinedRow: {
    flexDirection: "row",
    paddingBottom: 4,
    marginBottom: 4,
    borderBottomColor: "#D2D2D2",
    borderBottomWidth: 0.5,
  },
})

export default SwipeableListItem