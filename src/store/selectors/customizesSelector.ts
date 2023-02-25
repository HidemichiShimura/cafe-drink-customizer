import { selector } from 'recoil'
// @ts-expect-error TS(2307): Cannot find module 'repositories' or its correspon... Remove this comment to see the full error message
import { backend } from 'repositories'

export const customizesSelector = selector({
  key: 'customizesSelector',
  get: () => {},
})
