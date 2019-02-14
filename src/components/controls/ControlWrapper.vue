<template>
<div :class="{'form-group': true, 'has-error': error }">
    <label class="control-label col-md-2">
        {{ label }}
    </label>
    <div class="col-md-7">
        <slot></slot>
        <transition name="fade">
            <div class="form-control-feedback"
                v-if="errorIcon && error">
                <i class="icon-cancel-circle2"></i>
            </div>
        </transition>
    </div>
    <div class="col-md-3">
        <transition name="fade">
            <span class="help-block"
                v-if="error">
                <slot name="error-message"></slot>
            </span>
        </transition>
    </div>
</div>
</template>

<script>
export default {
    props: {
        label: {},
        required: {},
        error: {},
        errorIcon: { default: true }
    }
}
</script>

<style lang="scss" scoped>
.form-control-feedback {
    right: 10px;
}
</style>
