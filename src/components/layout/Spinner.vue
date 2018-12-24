<template>
<div class="loading-screen"
    v-if="loading">
    <div class="middle-panel">
        <div class="outer">
            <div class="middle">
                <div class="inner">
                    <div class="spinner">
                        <div class="double-bounce1"></div>
                        <div class="double-bounce2"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    computed: mapGetters(['loading']),
}
</script>

<style lang="scss" scoped>
$spinner-width: 250px;

.loading-screen {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: black;
    opacity: 0.3;
    z-index: 9999;
}

.middle-panel {
    position: absolute;
    // border: 1px solid red;
    top: 50px;
    left: 260px;
    bottom: 0;
    right: 0;
}

.outer {
    display: table;
    position: absolute;
    width: 100%;
    height: 100%;
}

.middle {
    display: table-cell;
    vertical-align: middle;
}

.inner {
    // border: 1px solid red;
    margin-left: auto;
    margin-right: auto;
    width: $spinner-width;
    /*whatever width you want*/
}

.spinner {
    width: $spinner-width;
    height: $spinner-width;

    position: relative;
    margin: 100px auto;
}

.double-bounce1,
.double-bounce2 {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: #333;
    opacity: 0.6;
    position: absolute;
    top: 0;
    left: 0;

    -webkit-animation: sk-bounce 2.0s infinite ease-in-out;
    animation: sk-bounce 2.0s infinite ease-in-out;
}

.double-bounce2 {
    -webkit-animation-delay: -1.0s;
    animation-delay: -1.0s;
}

@-webkit-keyframes sk-bounce {
    0%,
    100% {
        -webkit-transform: scale(0.0);
    }
    50% {
        -webkit-transform: scale(1.0);
    }
}

@keyframes sk-bounce {
    0%,
    100% {
        transform: scale(0.0);
        -webkit-transform: scale(0.0);
    }
    50% {
        transform: scale(1.0);
        -webkit-transform: scale(1.0);
    }
}
</style>
