<template>
    <div :class="$style['title-text']">
        <h1 :class="$style['title-text--principal']">Casa del libro</h1>
        <h2 :class="$style['title-text--secondary']">El Espacio de Todas las Letras</h2>
    </div>
</template>

<style module>
    .title-text {
        margin: 25px 0;
        text-align: center;
        text-transform: uppercase;
    }

    .title-text--principal {
        display: inline-block;
        margin-bottom: -10px;
        font-size: 6.5em;
        font-weight: bold;
        background: var(--gradient);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        user-select: none;
        transition: 0.5s;
    }

    .title-text--principal:hover {
        transform: rotate(-3deg);
        scale: 105%;
    }

    .title-text--secondary {
        font-size: 1.5em;
        font-weight: normal;
        color: var(--primary-color);
    }
</style>
