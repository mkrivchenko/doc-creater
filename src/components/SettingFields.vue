<template>
    <aside class="settings">
        <form class="fixed">
            
            <h3>данные клиента</h3>
            
            <Input 
                v-for="item in DataContract.person"
                :item="item"
            />
            
            <h3>данные договора</h3>

            <Input 
                v-for="item in DataContract.contract"
                :item="item"
            />

            <h3>характеристики газопроводов</h3>

            <Input 
                v-for="item in actData"
                :item="item"
            />
            <!-- <Input 
                v-for="item in PersonList"
                :item="item"
            /> -->

            <h3>Оборудование</h3>

            <!-- <Input 
                v-for="item in ContractInfoList"
                :item="item"    
            /> -->

            <select name="" @change="selectBoiler">
                <option value=""></option>
                <option value="Protherm 24кВт">Protherm 24кВт</option>
                <option value="Protherm 12кВт">Protherm 12кВт</option>
                <option value="Kiturami 24кВт">Kiturami 24кВт</option>
                <option value="Kentansu 24кВт">Kentansu 24кВт</option>
                <option value="Bugatti Verte 24кВт">Bugatti Verte 24кВт</option>
                <option value="Bocsh 24кВт">Bocsh 24кВт</option>
                <option value="Baxi 24кВт">Baxi 24кВт</option>
                <option value="Baxi 31кВт">Baxi 31кВт</option>
                <option value="Navien 16кВт">Navien 16кВт</option>
                <option value="Navien 24кВт">Navien 24кВт</option>
                <option value="Immergas 24кВт">Immergas 24кВт</option>
                <option value="Лемакс 12,5кВт">Лемакс 12,5кВт</option>
                <option value="Лемакс 15,5кВт">Лемакс 15,5кВт</option>
                
            </select>

            <select name="" @change="selectCounter">
                <option value=""></option>
                <option value="Сигнал СГБ-G4">Сигнал СГБ-G4</option>
                <option value="Элехант СГБ-4">Элехант СГБ-4</option>
                <option value="Вектор М4.0 LRG 1">Вектор М4.0 LRG 1</option>
                <option value="Гранд 6ТК">Гранд 6ТК</option>
                <option value="Бетар СГБМ-4">Бетар СГБМ-4</option>
                <option value="Скайметр СГВ-VM-G4">Скайметр СГВ-VM-G4</option>
                <option value="Газдевайс NPM G4">Газдевайс NPM G4</option>
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
            
            <div>
                <select multiple class="select"
                    @click="selectItem"> 
                    <option 
                        v-for="item in ContractsList" 
                        :value="item.id"
                        >
                        {{item.title}}
                    </option>
                </select>
            </div>
           
        </form>   
    </aside>
</template>

<script>

import { Act } from '@/model/Act';
import { DataContract } from '@/model/DataContract';
import { defineComponent } from 'vue';
import Input from './Input.vue';

export default defineComponent({
    components: { Input },
    props: {
        actData: {
            type: Act,
            require: true
        },
        DataContract: {
            type: DataContract
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
            const contractNum = this.DataContract.contract.contractNumber;
            console.log(contractNum);
            document.title = contractNum; 
            // .slice(0, contractNum.indexOf('/'));
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
    bottom: 0;
    position: fixed;
    overflow-y: auto;
    height: 90%;
    
    display: flex;
    flex-direction: column;
    align-items: stretch;
    margin: 10px 0 10px 10px;
    padding-right: 10px;
    
    &::-webkit-scrollbar {
        width: 10px;
    }

    &::-webkit-scrollbar-track {
        background: @second-blue-color; 
        border: 1px solid @second-blue-color;    
        border-radius: 20px;
    }

    &::-webkit-scrollbar-thumb {
        background-color: @second-blue-color;    /* цвет бегунка */
        border-radius: 20px;       /* округлось бегунка */
        border: 3px solid @main-yellow-color;  /* отступ вокруг бегунка */
    }
}

h3 {
    font-variant: small-caps;
    font-size: 20px;
}

.select {
    width: 100%;
    height: 100%;
}

</style>