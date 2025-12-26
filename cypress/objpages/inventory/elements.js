import { remove } from "cypress/types/lodash"

export const elements = {
    addToCart: (itemNome) => `[data-test="add-to-cart-${itemNome}"]`,
    removeFromCart: (itemNome) => `[data-test="remove-${transform(itemNome)}"]`
}

function transform(texto) {
    return texto.replaceAll('','-').toLowerCase()
}