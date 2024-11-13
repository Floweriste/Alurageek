import { getProducts, deleteProduct } from './api.js';

const productsContainer = document.querySelector('#product-list');

function createProductCardHTML(product) {
  const price = isNaN(product.price) ? 0 : product.price; 
  const imageUrl = product.image || product.imageUrl || 'default-image-path.png'; 

  return `
    <div class="product-card" data-product-id="${product.id}">
      <img src="${imageUrl}" alt="${product.name}" class="product-image">
      <div class="product-info">
        <h3 class="product-name">${product.name}</h3>
        <p class="product-price">$${price.toFixed(2)}</p>
        <button class="delete-button" data-product-id="${product.id}">X</button>
      </div>
    </div>
  `;
}

async function renderProducts() {
  try {
    const products = await getProducts();
    productsContainer.innerHTML = '';
    products.forEach(product => {
      const productHTML = createProductCardHTML(product);
      productsContainer.innerHTML += productHTML;
    });

    
    document.querySelectorAll('.delete-button').forEach(button => {
      button.addEventListener('click', async (event) => {
        const productId = event.target.getAttribute('data-product-id');
        const isDeleted = await deleteProduct(productId);
        if (isDeleted) {
          renderProducts(); 
        }
      });
    });
  } catch (error) {
    console.error("Erro ao renderizar produtos:", error);
  }
}


document.addEventListener('DOMContentLoaded', () => {
  renderProducts();
});
