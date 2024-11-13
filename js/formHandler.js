import { createProduct } from './api.js';

const form = document.querySelector('#product-form');
const nameInput = document.querySelector('#product-name');
const priceInput = document.querySelector('#product-price');
const imageUrlInput = document.querySelector('#product-image-url');
const imageError = document.querySelector('#image-error'); // Elemento de erro para exibir

if (form) {
  form.addEventListener('submit', async (event) => {
    event.preventDefault(); // Evita o recarregamento da página

    const name = nameInput.value.trim();
    let price = priceInput.value.trim().replace(',', '.'); // Substitui vírgula por ponto
    price = parseFloat(price); // Converte para número

    const image = imageUrlInput.value.trim();

    // Validação do link da imagem
    const isValidImage = /\.(png|jpe?g)$/i.test(image); // Verifica se o link termina com .png ou .jpg

    if (!isValidImage) {
      imageError.style.display = "block";  // Exibe o erro
      return;  // Interrompe a execução do código
    } else {
      imageError.style.display = "none";  // Esconde o erro
    }

    const newProduct = { name, price, image };

    try {
      await createProduct(newProduct);  // Envia para a API
      form.reset();  // Reseta o formulário após sucesso
    } catch (error) {
      console.error('Erro ao criar o produto:', error);
    }
  });

  const clearButton = document.querySelector('#clear-button');
  clearButton.addEventListener('click', () => {
    form.reset();
    imageError.style.display = "none";  // Esconde o erro ao limpar o formulário
  });
} else {
  console.error('O formulário não foi encontrado.');
}
