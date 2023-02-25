import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    // @ts-expect-error TS(2749): 'Html' refers to a value, but is being used as a t... Remove this comment to see the full error message
    <Html lang='en'>
      // @ts-expect-error TS(2352): Conversion of type 'RegExp' to type 'Head' may be ... Remove this comment to see the full error message
      <Head />
      // @ts-expect-error TS(2304): Cannot find name 'body'.
      <body>
        // @ts-expect-error TS(2749): 'Main' refers to a value, but is being used as a t... Remove this comment to see the full error message
        <Main />
        // @ts-expect-error TS(2362): The left-hand side of an arithmetic operation must... Remove this comment to see the full error message
        <NextScript />
      </body>
    </Html>
  )
}
