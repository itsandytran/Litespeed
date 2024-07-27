import { FC } from "react"
import {
  GestureResponderEvent,
  Pressable,
  StyleProp,
  Text,
  TextStyle,
  ViewStyle,
} from "react-native"

type ButtonProps = {
  action?: (event: GestureResponderEvent) => void
  buttonStyle?: StyleProp<ViewStyle>
  text: string
  textStyle?: StyleProp<TextStyle>
}

export const Button: FC<ButtonProps> = ({
  action,
  buttonStyle,
  text,
  textStyle,
}) => (
  <Pressable role="button" onPress={action} style={buttonStyle}>
    <Text style={textStyle}>{text}</Text>
  </Pressable>
)

export default Button
