let products = [];
let id = 1;

// funções relacionadas ao produto!

// Create Product
const createProduct = ({name, price, description}) => {
    products.push({id, name, price, description});
    id++;
};

// Show Products
const showProducts = () => {
    return products;
}; 

// Show Product by Id
const showProductById = (id) => {
    let product = products.find((product) => product.id === id);
    return product;
}

// TODO
const deleteProduct = (id) => {
    // TODO
}

module.exports = {
    createProduct,
    showProducts,
    showProductById
}
