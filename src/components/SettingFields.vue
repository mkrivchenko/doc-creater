<template>
    <aside class="settings">
        <form class="fixed">
            
            <h3>данные клиента</h3>

            <Input 
                v-for="item in PersonList"
                :item="item"
            />

            <h3>данные договора</h3>

            <Input 
                v-for="item in ContractInfoList"
                :item="item"    
            />
            
            <ButtonApp @click.prevent="getContractsAsync">
                Загрузить список
            </ButtonApp>

            <ButtonApp @click.prevent="toPrint">
                Печать
            </ButtonApp>

            <select multiple class="select"
                @click="selectItem"> 
                <option 
                    v-for="item in ContractsList" 
                    :value="item.id"
                    >
                    {{item.title}}
                </option>
            </select>

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
        ContractInfoList: {
            type: Array
        },
        ContractsList: {
            type: Array
        } 
    },
    emits: ['myEvent', 'getContracts'],
    methods: {
        selectItem(event) {
            this.Contract = event.target.value;
            this.$emit('myEvent', this.Contract);
            
        },
        async getContractsAsync(event) {
            let response = await fetch("http://192.168.1.150:888/prod/hs/bot-api/pregasification");
            let json;
            this.ContractsOut = new Array();
            if (response.ok) {
                json = await response.json();
                this.ContractsOut = json.PreGasificationContracts;
            }
            this.$emit('getContracts', this.ContractsOut) 
        },
        toPrint() {
            const contractNum = this.ContractInfoList[0].content;
            console.log(contractNum);
            document.title = contractNum.slice(0, contractNum.indexOf('/'));
            window.print();
            document.title = 'document';
        }
    },
    data() {
        return {
            Contract: '',
            ContractsOut: {
                type: Array
            }
        }
    }
}

</script>


<style lang="less">

@import '@/style/_var-library.less';

.select {
    width: 300px;
    height: 300px;
}

.settings {
    
    min-width: 25%;
    background-color: @main-blue-color;
    color: @light-default-color;

    font-family: Arial, Helvetica, sans-serif;
    font-weight: 600;
    font-size: 14px;
    
}

.fixed {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    margin: 10px;
    
}

h3 {
    font-variant: small-caps;
    font-size: 20px;
}

.select {
    width: 100%;
}

</style>