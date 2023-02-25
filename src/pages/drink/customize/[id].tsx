import { PageLayout, CustomizeMain } from 'components'
import { backend } from 'repositories'

const CustomDrinkContainer = ({ customDrink, options }: any) => {
  if (!customDrink || !Array.isArray(options)) return null

  const optionNames = customDrink.optionIds?.map(
    (oId: any) => options.find((o) => o.id === oId)?.optionName,
  )

  return (
    <PageLayout>
      <CustomizeMain
        optionNames={optionNames}
        {...customDrink}
      />
    </PageLayout>
  )
}

export const getStaticProps = async ({ params }: any) => {
  const { id } = params
  const customDrink = await backend.customDrinks.fetchCustomDrink(id)
  const options = await backend.options.fetchOptions()

  return {
    props: { customDrink, options },
  }
}

export async function getStaticPaths() {
  const data = await backend.customDrinks.fetchCustomDrinks()

  const paths = data.map((d: any) => ({
    params: { id: d.id },
  }))

  return { paths, fallback: false }
}

export default CustomDrinkContainer
