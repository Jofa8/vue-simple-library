<template>
    <div :class="$style['books-container']">
        <ul v-if="booksStore.filteredBooks.length > 0" :class="$style['books-container__ul']">
            <li v-for="(book, index) in booksStore.filteredBooks" :key="index">
                <BookCard :book="book" />
            </li>
        </ul>
        <div v-else :class="$style['no-books-container']">
            <p :class="$style['no-books-container__text']">No hay libros disponibles</p>
        </div>
    </div>
</template>

<script setup>
    import { useBooksStore } from '../store/books.js'

    import BookCard from './BookCard.vue'

    const booksStore = useBooksStore()
</script>

<style module>
    .books-container {
        margin: 50px 0;
    }

    .books-container__ul {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        row-gap: 100px;
        list-style: none;
    }

    .no-books-container {
        min-height: 300px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .no-books-container__text {
        font-size: 22px;
        text-align: center;
        text-transform: uppercase;
        letter-spacing: 5px;
        color: var(--primary-color);
    }
</style>
