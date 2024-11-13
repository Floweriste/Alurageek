const baseURL = "http://localhost:3000/products";

async function getProducts() {
  try {
    const response = await fetch(baseURL);
    if (!response.ok) throw new Error("Erro ao buscar produtos");
    return await response.json();
  } catch (error) {
    console.error("Erro na requisição GET:", error);
  }
}

async function createProduct(productData) {
  try {
    const response = await fetch(baseURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(productData)
    });
    if (!response.ok) throw new Error("Erro ao criar produto");
    return await response.json();
  } catch (error) {
    console.error("Erro na requisição POST:", error);
  }
}

async function deleteProduct(productId) {
  try {
    const response = await fetch(`${baseURL}/${productId}`, {
      method: "DELETE",
    });
    if (!response.ok) throw new Error("Erro ao excluir o produto");
    return true;
  } catch (error) {
    console.error("Erro na requisição DELETE:", error);
    return false;
  }
}

export { getProducts, createProduct, deleteProduct };
