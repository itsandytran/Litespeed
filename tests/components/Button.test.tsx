import "@testing-library/react-native/extend-expect"
import { render, screen, userEvent } from "@testing-library/react-native"

import Button from "@components/common/Button"

describe("<Button />", () => {
  const buttonText = "Test"
  const component = <Button text={buttonText} />

  it('has a role of "button"', () => {
    render(component)
    const button = screen.root
    expect(button).not.toBeUndefined()
    expect(button).toHaveProp("role", "button")
  })

  it("contains a text", () => {
    render(component)
    const button = screen.getByRole("button")
    expect(button).toHaveTextContent(buttonText)
  })

  it("performs the action when pressed", async () => {
    jest.useFakeTimers()
    const action = jest.fn()
    const component = <Button action={action} text={buttonText} />
    render(component)

    const button = screen.getByRole("button")
    const user = userEvent.setup()
    await user.press(button)

    expect(action).toHaveBeenCalledTimes(1)
  })
})
