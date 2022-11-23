<template>

    <label for="date-conteract-input" class="input-field"> 
        {{ item.title }}:
        <InputApp 
            v-model="item.data" 
        />
    </label>

</template>


<script>

export default {
    props: {
        item: {
            type: Object
        }
    },
    emits: ['update:modelValue']
} 

</script>

<style lang="less">



.input-field {
    display: flex;
    flex-direction: column;
}

</style>