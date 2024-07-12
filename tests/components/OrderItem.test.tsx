import "@testing-library/react-native/extend-expect"
import { render, screen } from "@testing-library/react-native"
import { OrderItem } from "@components/OrderItem"

it('shows "Hello world"', () => {
  render(<OrderItem />)
  const view = screen.getByRole("text")
  expect(view).toHaveTextContent("Hello world")
})
