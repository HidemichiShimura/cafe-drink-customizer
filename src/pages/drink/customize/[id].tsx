import { FC } from 'react'
import { PageLayout, CustomizeMain } from 'components'
import { FBClientCustomDrink } from 'fb/types/customDrinks.type'
import { FBClientOption } from 'fb/types/options.type'
import { backend } from 'repositories'

interface CustomDrinkContainerProps {
  customDrink: FBClientCustomDrink | undefined
  options: FBClientOption[] | undefined
}

const CustomDrinkContainer: FC<CustomDrinkContainerProps> = ({
  customDrink,
  options,
}) => {
  if (!customDrink || !Array.isArray(options)) return null

  const optionNames = customDrink.optionIds
    .map((oId) => options.find((o: FBClientOption) => o.id === oId)?.optionName)
    .filter((v) => v) as string[]

  return (
    <PageLayout>
      <CustomizeMain
        optionNames={optionNames}
        {...customDrink}
      />
    </PageLayout>
  )
}

export const getStaticProps = async ({
  params,
}: {
  params: { id: string | undefined }
}) => {
  const { id } = params

  // Error fallback
  if (!id) {
    return {
      props: { customDrink: undefined, options: undefined },
    }
  }

  const customDrink = await backend.customDrinks.fetchCustomDrink(id)
  const options = await backend.options.fetchOptions()

  return {
    props: { customDrink, options },
  }
}

export async function getStaticPaths() {
  const data = await backend.customDrinks.fetchCustomDrinks()

  const paths = data.map((d) => ({
    params: { id: d?.id },
  }))

  return { paths, fallback: false }
}

export default CustomDrinkContainer
