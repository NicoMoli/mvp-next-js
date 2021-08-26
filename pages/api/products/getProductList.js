import products from "../../../product/mock.json"

const getProducts = async (req, res) => {
  try {
    const responseData = {
      products: await products,
    }

    res.status(200).json(responseData)
  } catch (e) {
    console.log(e)
    res.status(404).json("NOT FOUND")
  }
}

export default getProducts
