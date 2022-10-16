<template>

    <label for="date-conteract-input"> 
        {{ item.title }}:
    </label>

    <input 
        name="date-conteract-input" 
        type="text"  
        :value="modelValue" 
        @input="$emit('update:modelValue', $event.target.value)" 
    />

</template>


<script>

export default {
    props: {
        modelValue: String,
        item: {
            type: Object
        }
    },
    emits: ['update:modelValue']
} 

</script>
