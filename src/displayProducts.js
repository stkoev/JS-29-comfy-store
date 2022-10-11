import { formatPrice } from "./utils.js";
import { addToCart } from "./cart/setupCart.js";

const display = (products, element) => {
  element.innerHTML = products
    .map((product) => {
      const { id, name, image, price } = product;
      return `
        <!-- single product -->
        <article class="product">
            <div class="product-container">
            <img
                src="${image}"
                class="product-img img"
                alt="${name}"
            />
            <!-- product icons -->
            <div class="product-icons">
                <a href="product.html?id=${id}" class="product-icon"
                ><i class="fas fa-search"></i
                ></a>
                <button class="product-cart-btn product-icon" data-id="${id}">
                <i class="fas fa-shopping-cart"></i>
                </button>
            </div>
            </div>
            <footer>
            <p class="product-name">${name}</p>
            <h4 class="product-price">$${price / 100}</h4>
            </footer>
        </article>
        <!-- end of single product -->
    `;
    })
    .join("");
};

export default display;
