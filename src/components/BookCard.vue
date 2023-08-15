<template>
    <div :class="$style['card__container']">
        <div :class="$style['card__image-container']">
            <img :class="$style['card__img']" :src="book.cover" :alt="book.title" />
            <div :class="$style['card__tag']">
                <span>{{ book.genre }}</span>
            </div>
        </div>
        <h1 :class="$style['card__title']">{{ book.title }}</h1>
        <div :class="$style['card__buttons']">
            <button :class="$style['card__button']" @click="cartStore.remove(book)">-</button>
            <p v-if="!cartStore.cartContent[book.ISBN]">0</p>
            <p v-else>{{ cartStore.cartContent[book.ISBN] }}</p>
            <button :class="$style['card__button']" @click="cartStore.add(book)">+</button>
        </div>
    </div>
</template>

<script setup>
    import { useCartStore } from '../store/cart.js'

    defineProps({
        book: Object,
    })

    const cartStore = useCartStore()
</script>

<style module>
    .card__container {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }

    .card__image-container {
        position: relative;
    }

    .card__img {
        height: 450px;
        width: 300px;
        border-radius: 5px;
    }

    .card__tag {
        position: absolute;
        top: 10px;
        right: 10px;
        background-color: #0066ff;
        padding: 2px 10px;
        border-radius: 3px;
        color: #fff;
        text-align: center;
        font-size: 0.85em;
    }

    .card__title {
        font-size: 1.25em;
        margin: 8px 0px;
        color: var(--primary-color);
    }

    .card__buttons {
        display: flex;
        align-items: center;
        gap: 25px;
    }

    .card__button {
        font-size: 16px;
        border: 1px solid var(--primary-color);
        border-radius: 50%;
        cursor: pointer;
        width: 30px;
        height: 30px;
        background-color: #fff;
        transition: 0.3s;
    }

    .card__button:hover {
        scale: 115%;
        background-color: #ea52f8;
    }
</style>
