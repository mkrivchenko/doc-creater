<template>
    <input 
        type="text" 
        :value="modelValue" 
        @input="$emit('update:modelValue', $event.target.value)" 
    >
</template>

<script>
export default {
    name: 'InputApp',
    props: {
        modelValue: String
    },
    emits: ['update:modelValue']
} 
</script>


<style scoped lang="less">

@import '@/style/_var-library.less';

input {
    min-width: calc(100% - 26px);
    padding: 5px 10px;
    margin: 5px 0px 5px 0px;
    border: 2px solid @main-graf-color;
    border-radius: 10px;
}

</style>
