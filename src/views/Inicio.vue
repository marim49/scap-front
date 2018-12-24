<template>
<section class="container">
    <div>
        <app-logo/>
        <h1 class="title">
            SCAP
        </h1>
        <h2 class="subtitle">
            <b>S</b>oftware
            <b>C</b>lassroom
            <b>A</b>ssignment
            <b>P</b>roblem
        </h2>
    </div>
</section>
</template>

<script>
import AppLogo from '@/components/AppLogo'

export default {
    components: {
        AppLogo
    }
}
</script>

<style lang="scss" scoped>
.container {
    width: 100%;
    min-height: 90vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
}

.title {
    font-family: "Righteous", "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    /* 1 */
    display: block;
    font-weight: 300;
    font-size: 100px;
    color: #35495e;
    letter-spacing: 1px;
}

.subtitle {
    font-weight: 300;
    font-size: 42px;
    color: #526488;
    word-spacing: 5px;
    padding-bottom: 15px;
}

.links {
    padding-top: 15px;
}
</style>
