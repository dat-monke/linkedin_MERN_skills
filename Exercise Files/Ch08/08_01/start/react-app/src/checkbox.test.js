import { Checkbox } from "./checkbox"
import { fireEvent, render } from "@testing-library/react"

test("Selecting the checkbox should change value to true", () => {
    const { getByLabelText } = render(<Checkbox />)
    // If you do not put a /i then it only cares about the word match not case
    const checkbox = getByLabelText(/not checked/i)
    fireEvent.click(checkbox)
    expect(checkbox.checked).toEqual(true)
})