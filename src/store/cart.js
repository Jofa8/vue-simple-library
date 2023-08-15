import { defineStore } from 'pinia'
import { success, warning, error } from '../funtions/notify.js'

export const useCartStore = defineStore('cart', {
    state: () => ({
        cartContent: {},
    }),

    getters: {
        size() {
            return Object.keys(this.cartContent).reduce((accum, id) => {
                return accum + this.cartContent[id]
            }, 0)
        },
    },

    actions: {
        add(book) {
            this.cartContent[book.ISBN] ? (this.cartContent[book.ISBN] += 1) : (this.cartContent[book.ISBN] = 1)
            success('Libro añadido', `El libro ${book.title} se ha añadido al carro exitosamente`)
        },
        remove(book) {
            if (!this.cartContent[book.ISBN]) {
                warning('Advertencia', `El libro ${book.title} no tiene unidades en el carro`)
                return
            }

            this.cartContent[book.ISBN] -= 1
            error('Libro eliminado', `El libro ${book.title} se ha eliminado del carro exitosamente`)

            if (this.cartContent[book.ISBN] === 0) {
                delete this.cartContent[book.ISBN]
            }
        },
    },

    persist: {
        storage: localStorage,
        paths: ['cartContent'],
    },
})
