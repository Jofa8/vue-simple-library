<template>
    <div :class="$style['filters__container']">
        <div :class="$style['filters__left']">
            <label :class="$style['filters__left__range']">Paginas min: {{ minPages }}</label>
            <input :class="$style['filters__left__input']" type="range" min="1" max="800" v-model="minPages" />
        </div>
        <div>
            <select :class="$style['filters__genre-filter']" v-model="genre">
                <option value="Todos">Todos</option>
                <option v-for="(filter, index) in booksStore.allBooksFilters" :key="index" :value="filter">
                    {{ filter }}
                </option>
            </select>
        </div>
    </div>
</template>

<script setup>
    import { ref, watchEffect } from 'vue'
    import { useBooksStore } from '../store/books.js'

    const booksStore = useBooksStore()

    const genre = ref('Todos')
    const minPages = ref(1)

    watchEffect(() => booksStore.filteredAllBooks(genre.value, minPages.value))
</script>

<style module>
    .filters__container {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0px 50px;
    }

    .filters__left {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        gap: 5px;
    }

    .filters__left__range {
        color: var(--primary-color);
    }

    .filters__left__input {
        -webkit-appearance: none;
        height: 7px;
        border-radius: 5px;
        background-image: var(--gradient);
        accent-color: #0066ff;
    }

    .filters__genre-filter {
        border: 1px solid var(--primary-color);
        font-size: 16px;
        padding: 5px 10px;
        color: var(--primary-color);
        background: var(--gradient);
    }
</style>
