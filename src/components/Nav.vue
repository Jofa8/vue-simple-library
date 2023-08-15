<template>
    <header>
        <nav :class="$style['navbar']">
            <button :class="$style['cart-button']">
                <Cart :count="cartStore.size" />
            </button>
        </nav>
    </header>
</template>

<script setup>
    import { useCartStore } from '../store/cart.js'
    import Cart from './Cart.vue'

    const cartStore = useCartStore()
</script>

<style module>
    .navbar {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 30px 15px 20px 15px;
    }

    .cart-button {
        background: transparent;
        border: none;
        cursor: pointer;
    }
</style>
