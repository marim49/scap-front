<template>
<!-- Page header -->
<div>
    <br>
    <br>
    <div class="page-header page-header-default">
    <div class="page-header-content">
        <div class="page-title">
            <h4>
                <i class="icon-arrow-left52 position-left"
                    @click="$router.go(-1)"></i>
                <slot></slot>
            </h4>
        </div>
        <div class="heading-elements">
            <slot name="heading-elements"></slot>
        </div>
    </div>
</div>
</div>
<!-- /page header -->
</template>
<style lang="scss" scoped>
.icon-arrow-left52 {
    cursor: pointer;
}
</style>
