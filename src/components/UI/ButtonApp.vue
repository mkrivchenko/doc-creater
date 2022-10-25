<template>

    <button>
        <slot></slot>
    </button>
    
</template>

<script>

export default {
    name: 'ButtonApp'
}

</script>


<style lang="less">

@import '@/style/_var-library.less';

button {
    padding: 10px;
    margin: 15px 0px;
    border: 0;
    border-radius: 15px;

    background-color: @main-yellow-color;
    color: @main-graf-color;

    &:hover {
        background-color: @second-yellow-color;        
    }

    &:active {
        background-color: @main-yellow-color;
    }
}

</style>