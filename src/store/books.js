import { defineStore } from 'pinia'
import booksData from '../mocks/booksData.js'

export const useBooksStore = defineStore('books', {
    state: () => ({
        avaibleBooks: [],
        filteredBooks: [],
    }),

    getters: {
        allBooksFilters() {
            return [
                ...new Set(
                    this.avaibleBooks.map((book) => {
                        return book.genre
                    })
                ),
            ]
        },
    },

    actions: {
        async getBooks() {
            this.avaibleBooks = booksData.library.map((bookObject) => {
                return bookObject.book
            })
            this.filteredBooks = this.avaibleBooks
        },
        filteredAllBooks(selectedGenre, maxPages) {
            if (selectedGenre === 'Todos') {
                this.filteredBooks = this.avaibleBooks.filter((book) => book.pages >= maxPages)
            } else {
                this.filteredBooks = this.avaibleBooks.filter((book) => book.genre === selectedGenre && book.pages >= maxPages)
            }
        },
    },
})
