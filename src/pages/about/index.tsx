import Head from 'next/head'

import {
  AboutSectionLayout,
  LinkButton,
  PageLayout,
  SectionTypeList,
  AboutAppDescription,
  CustomizeMain,
// @ts-expect-error TS(2307): Cannot find module 'components' or its correspondi... Remove this comment to see the full error message
} from 'components'

const About = () => {
  // Non-customized drink
  const IconName = 'pumpkin'
  const DrinkName = 'Hocus Pocus Latte'
  const Description =
    'It’s not Halloween without the Sanderson sisters! To order up this spooky treat, start with a Venti Iced Pumpkin Spice Latte, add two pumps of white mocha sauce and two pumps of apple brown sugar syrup and finish with extra caramel drizzle and cinnamon dolce topping.'
  const OptionNames = [
    'Hocus Pocus Latte',
    'white mocha sauce',
    'apple brown sugar syrup',
    'caramel drizzle',
    'cinnamon dolce',
  ]

  // Customized drink
  const CstmTitleDescription =
    'You can name a drink, add or remove options, and leave comments.Share your original drink with your friends!'
  const CstmDrinkName = 'My Pumplin Fav...'
  const CstmDescription =
    'I added “chocolate sauce” to Hocus Pocus Latte. The chocolate sauce makes Hocus Pocus Latte better to me!'
  const CstmOptionNames = [...OptionNames, 'chocolate sauce']

  return (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <>
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Head>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <title>Create Next App</title>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <meta
          name='description'
          content='Generated by create next app'
        />
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1'
        />
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <link
          rel='icon'
          href='/favicon.ico'
        />
      </Head>

      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <main>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <PageLayout>
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <AboutAppDescription />
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <AboutSectionLayout title='Choose from three type of section'>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <SectionTypeList />
          </AboutSectionLayout>

          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <AboutSectionLayout title='Find your drink'>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <CustomizeMain
              iconName={IconName}
              title={DrinkName}
              description={Description}
              optionNames={OptionNames}
            />
          </AboutSectionLayout>

          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <AboutSectionLayout
            title='Customize your drink'
            description={CstmTitleDescription}
          >
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <CustomizeMain
              iconName={IconName}
              title={CstmDrinkName}
              description={CstmDescription}
              optionNames={CstmOptionNames}
            />
          </AboutSectionLayout>

          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <AboutSectionLayout title='Can’t wait to start?'>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <LinkButton
              buttonContent={'Get started'}
              link={'/'}
            />
          </AboutSectionLayout>
        </PageLayout>
      </main>
    </>
  )
}

export default About
