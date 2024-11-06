import { StyleSheet, Text } from "react-native"
import textStyles from "@constants/textStyles"
import ReanimatedSwipeable from "react-native-gesture-handler/ReanimatedSwipeable"
import { GestureHandlerRootView } from "react-native-gesture-handler"
import Reanimated, {
  SharedValue,
  useAnimatedStyle,
} from "react-native-reanimated"

export type SwipeableListItemProps = {
    itemName: string
}

/**
 * The SwipeableListItem component displays a list item that can be swiped to reveal additional actions.
 * It includes a reanimated swipeable component and a reanimated view that displays the additional actions.
 * The additional actions are displayed on the right side of the list item.
 * TODO: Consider adding a left swipe action.
 * @param itemName - The name of the list item
 * @returns A SwipeableListItem component
 */
const SwipeableListItem = ({ itemName }: SwipeableListItemProps) => {
  return (
    <GestureHandlerRootView>
      <ReanimatedSwipeable
        containerStyle={styles.swipeable}
        friction={2}
        enableTrackpadTwoFingerGesture
        rightThreshold={40}
        renderRightActions={RightAction}
      >
        <Text style={textStyles.regular}>{itemName}</Text>
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
  rightAction: { width: 100, backgroundColor: "red" },
  separator: {
    width: "100%",
    borderTopWidth: 1,
  },
  swipeable: {
    //height: 50,
    backgroundColor: "papayawhip",
    //alignItems: "center",
  },
})

export default SwipeableListItem