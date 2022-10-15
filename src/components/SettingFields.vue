<template>
    <aside class="settings">
        <form class="fixed">
            
            <Input 
                v-for="input in inputs"
                :item="input"
                v-model="input.content"
            />
            
        </form>   
    </aside>
</template>

<script>

import Input from './Input.vue';

export default {
    components: { Input },
    props: {
        data: {
            type: Object,
        },
        inputs: {
            type: Array
        }
    }
}

</script>