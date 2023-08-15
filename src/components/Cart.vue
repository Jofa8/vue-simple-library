<template>
    <div :class="$style['cart']">
        <svg viewBox="0 0 1024 1024" class="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000" width="36px" height="36px">
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
                <path d="M960.1 258.4H245.8l-36.1-169H63.9v44h110.2l26.7 125 100.3 469.9 530 0.4v-44l-494.4-0.3-22.6-105.9H832l128.1-320.1z m-65 44L855.6 401H276.3l-21.1-98.6h639.9zM304.8 534.5L279.7 417h569.5l-47 117.5H304.8z" fill="#172121"></path>
                <path
                    d="M375.6 810.6c28.7 0 52 23.3 52 52s-23.3 52-52 52-52-23.3-52-52 23.3-52 52-52m0-20c-39.7 0-72 32.2-72 72s32.2 72 72 72 72-32.2 72-72-32.3-72-72-72zM732 810.6c28.7 0 52 23.3 52 52s-23.3 52-52 52-52-23.3-52-52 23.3-52 52-52m0-20c-39.7 0-72 32.2-72 72s32.2 72 72 72c39.7 0 72-32.2 72-72s-32.3-72-72-72zM447.5 302.4h16v232.1h-16zM652 302.4h16v232.1h-16z"
                    fill="#172121"
                ></path>
                <path d="M276.3 401l3.4 16-3.4-16z" fill="#172121"></path>
            </g>
        </svg>
        <div :class="$style['cart__count']">{{ count }}</div>
    </div>
</template>

<script setup>
    defineProps({
        count: Number,
    })
</script>

<style module>
    .cart {
        position: relative;
    }

    .cart__count {
        position: absolute;
        top: -3px;
        right: -3px;
        width: 16px;
        height: 16px;
        padding: 2px;
        font-size: 0.8em;
        font-weight: bold;
        color: #fff;
        background-color: #0066ff;
        border-radius: 50%;
    }
</style>
