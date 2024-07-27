import "@testing-library/react-native/extend-expect"
import { render, screen } from "@testing-library/react-native"

import ItemCustomization from "@components/ItemCustomization"

describe("<ItemCustomization />", () => {
  const itemName = "Test Item"
  const component = (
    <ItemCustomization itemName={itemName} options={[]} visible={true} />
  )

  it("shows the name of the item being customized", () => {
    render(component)
    const view = screen.root
    expect(view).not.toBeUndefined()
    expect(view).toHaveTextContent(itemName, { exact: false })
  })

  it("is not shown by default", () => {
    render(<ItemCustomization itemName={itemName} options={[]} />)
    const view = screen.root
    expect(view).not.toBeUndefined()
    expect(view).not.toBeVisible()
  })

  it("is shown when specified", () => {
    render(component)
    const view = screen.root
    expect(view).not.toBeUndefined()
    expect(view).toBeVisible()
  })

  it('has an "OK" button', () => {
    render(component)
    const okButton = screen.getByRole("button")
    expect(okButton).toBeVisible()
  })
})
