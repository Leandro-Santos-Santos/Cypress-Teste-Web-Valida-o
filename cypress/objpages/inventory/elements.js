export const elements = {
    addToCart: (itemNome) => `[data-test="add-to-cart-${itemNome}"]`,
}

function transform(texto) {
    return texto.replaceAll('','-').toLowerCase()
}