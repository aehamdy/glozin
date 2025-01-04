async function fetchData(endpoint, setState) {
  try {
    const response = await fetch(`https://dummyjson.com/products/category/${endpoint}`);
    const data = await response.json();

    setState(data.products || []);

  } catch(err) {
    console.error("Error fetching data: ", err);
  }
}

export default fetchData;