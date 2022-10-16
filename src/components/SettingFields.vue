<template>
    <aside class="settings">
        <form class="fixed">
            
            <h3>Данные клиента</h3>

            <Input 
                v-for="item in PersonList"
                :item="item"
                v-model="item.content"
            />

            <h3>Данные договора</h3>

            <Input 
                v-for="item in ContractList"
                :item="item"
                v-model="item.content"
            />
            
        </form>   
    </aside>
</template>

<script>

import Input from './Input.vue';

export default {
    components: { Input },
    props: {
        PersonList: {
            type: Array
        },
        ContractList: {
            type: Array
        }
    }
}

</script>