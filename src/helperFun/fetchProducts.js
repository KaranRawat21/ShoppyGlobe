import axios from "axios";

const fetchProducts = async (url) => {
  try {
    const response = await axios.get(url);
    return { data: response.data.products, error: null };

  } catch (err) {
    return { data: null, error: err }
  }
}

export default fetchProducts;