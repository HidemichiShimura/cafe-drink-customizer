import { PageLayout, CustomizeMain } from '@/components'
import { backend } from '@/repositories'

const CustomDrinkContainer = ({ customDrink, options }) => {
  if (!customDrink || !Array.isArray(options)) return null

  const optionNames = customDrink.optionIds?.map(
    (oId) => options.find((o) => o.id === oId)?.option_name,
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

export const getStaticProps = async ({ params }) => {
  const { id } = params
  const customDrink = await backend.customDrinks.fetchCustomDrink(id)
  const options = await backend.options.fetchOptions()

  return {
    props: { customDrink, options },
  }
}

export async function getStaticPaths() {
  const data = await backend.customDrinks.fetchCustomDrinks()

  const paths = data.map((d) => ({
    params: { id: d.id },
  }))

  return { paths, fallback: false }
}

export default CustomDrinkContainer
