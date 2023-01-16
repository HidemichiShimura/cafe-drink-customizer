import { backend } from '@/repositories'

// no businesslogics
const CustomDrink = ({ customDrink }) => (
  <div>
    {customDrink &&
      Object.keys(customDrink).map((c) => (
        <div key={c}>
          {c} {'=>'} {customDrink[c]}
        </div>
      ))}
  </div>
)

export const getStaticProps = async ({ params }) => {
  const { id } = params
  const customDrink = await backend.customDrinks.fetchCustomDrink(id)
  return {
    props: { customDrink },
  }
}

export async function getStaticPaths() {
  const data = await backend.customDrinks.fetchCustomDrinks()

  const paths = data.map((d) => ({
    params: { id: d.id },
  }))

  return { paths, fallback: false }
}

export default CustomDrink
