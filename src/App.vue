<template>
    <Nav />
    <main>
        <Title />
        <BookFilters />
        <BookList />
    </main>
    <notifications />
</template>

<script setup>
    import { useBooksStore } from './store/books.js'

    import Nav from './components/Nav.vue'
    import Title from './components/Title.vue'
    import BookFilters from './components/BookFilters.vue'
    import BookList from './components/BookList.vue'

    const booksStore = useBooksStore()
    booksStore.getBooks()
</script>
