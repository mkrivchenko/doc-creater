<template>
    <aside class="settings">
        <form class="fixed">
            
            <h3>данные клиента</h3>
            
            <Input 
                v-for="item in ContractTest.person"
                :item="item"
            />
            
            <Input 
                v-for="item in ContractTest"
                :item="item"
            />
            <!-- <Input 
                v-for="item in PersonList"
                :item="item"
            /> -->

            <h3>данные договора</h3>

            <Input 
                v-for="item in ContractInfoList"
                :item="item"    
            />

            <select name="" @change="selectBoiler">
                <option value=""></option>
                <option value="Protherm 24кВт">Protherm 24кВт</option>
                <option value="Kiturami 24кВт">Kiturami 24кВт</option>
                <option value="Bugatti Verte 24кВт">Bugatti Verte 24кВт</option>
                <option value="Bocsh 24кВт">Bocsh 24кВт</option>
                <option value="Baxi 24кВт">Baxi 24кВт</option>
                <option value="Navien 16кВт">Navien 16кВт</option>
            </select>

            <select name="" @change="selectCounter">
                <option value=""></option>
                <option value="Сигнал СГБ-G4">Сигнал СГБ-G4</option>
                <option value="Элехант СГБ-4">Элехант СГБ-4</option>
                <option value="Вектор М4.0 LRG 1">Вектор М4.0 LRG 1</option>
                <option value="Гранд 6ТК">Гранд 6ТК</option>
                <option value="Бетар СГБМ-4">Бетар СГБМ-4</option>
            </select>
            
            <ButtonApp @click.prevent="getContractsAsync">
                Загрузить список
            </ButtonApp>
            <ButtonApp @click.prevent="getGRPContractsAsync">
                Загрузить ГРП 6
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

import { ContractGaz } from '@/model/ContractGaz';
import { TitleData } from '@/model/TitleData';
import { defineComponent } from 'vue';
import Input from './Input.vue';

export default defineComponent({
    components: { Input },
    props: {
        ContractTest: {
            type: ContractGaz
        },
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
    emits: ['myEvent', 'getContracts', 'selectBoiler', 'inputValue'],
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
                this.ContractsOut = json.PreGasificationContracts
                console.log(this.ContractsOut);
            }
            this.$emit('getContracts', this.ContractsOut) 
        },
        async getGRPContractsAsync(event) {
            let response = await fetch("http://192.168.1.150:888/prod/hs/bot-api/grp/6");
            let json;
            this.ContractsOut = new Array();
            if (response.ok) {
                json = await response.json();
                this.ContractsOut = json.Contracts;
            }
            this.$emit('getContracts', this.ContractsOut) 
        },
        toPrint() {
            const contractNum = this.ContractInfoList[0].content;
            console.log(contractNum);
            document.title = contractNum.slice(0, contractNum.indexOf('/'));
            window.print();
            document.title = 'document';
        },
        selectBoiler(event) {
            this.$emit('selectBoiler', event.target.value); 
        },
        selectCounter(e) {
            this.$emit('selectCounter', e.target.value); 
        },
        inputValue(e) {
            this.$emit('inputValue', e.target.value); 
        },
    },
    data() {
        return {
            Contract: '',
            ContractsOut: {
                type: Array
            }
        }
    },
});

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