import React from 'react'
import renderer from 'react-test-renderer'

import { StateComponent } from "../StateComponent"

it("renders correctly with defaults", () => {
  const button = renderer.create(<StateComponent name="World" enthusiasmLevel={1} />).toJSON()
  expect(button).toMatchSnapshot()
})