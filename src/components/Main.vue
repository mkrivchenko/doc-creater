<template>
    <NavMenu 
        :DocumentVariant="Variant"
        @get-variant="getVariant"
    />
    <main class="main">
        <SettingFields 
            :DataContract="DataContract"
            :actData="actData"

            :PersonList="PersonList" 
            :ContractInfoList="ContractInfoList" 
            :ContractsList="ContractsList"
            @my-event="selectItem"
            @get-contracts="getContracts"
            @select-boiler="selectBoiler"
            @select-counter="selectCounter"
        />
        <aside>
        </aside>
        <A4 
            :DataContract="DataContract"
            :actData="actData"

            :PersonList="PersonList" 
            :ContractInfoList="ContractInfoList"
            :DocumentVariant="Variant"  
            :Boiler="Boiler"
            :Counter="Counter"
        />
        <aside>
        </aside>
    </main>
</template>


<script lang="ts">
import SettingFields from '@/components/SettingFields.vue';
import Person from './Person.vue';
import A4 from './A4.vue';
import NavMenu from './NavMenu.vue';

import { defineComponent } from 'vue';
import { DataContract } from '@/model/DataContract';
import { Act } from '@/model/Act';

export default defineComponent ({
    components: { SettingFields, Person, A4, NavMenu },  
    data() {
        return {
            DataContract: new DataContract(),
            actData: new Act(),
            PersonList: [
                {id: '1', title: 'ФИО', data: 'Иванов Иван Иванович'},
                {id: '2', title: 'Серия паспорта', data: '0101'},
                {id: '3', title: 'Номер паспорта', data: '100234'},
                {id: '4', title: 'Дата выдачи', data: '21.01.2021'},
                {id: '5', title: 'Орган выдачи', data: 'МВД'},
                {id: '6', title: 'Телефон', data: '79949944949'},
                {id: '7', title: 'Адрес проживания', data: 'Смоленское'}
            ],
            ContractInfoList: [
                {id: '0', title: 'Номер договора', data: '03/21-КЮ'},
                {id: '1', title: 'Адрес', data: 'Населенный пункт, Улица, Дом'},
                {id: '2', title: 'Дата окончания', data: '31.12.2022'},
                {id: '3', title: 'ГРП', data: '«Газоснабжение жилых домов в границах ул. Советская, Сосновая в с. Павловск Павловского района Алтайского края»'},
                {id: '4', title: 'Шифр', data: 'П-21.10.21/1'},
                {id: '5', title: 'Организация проекта', data: 'ООО «Архилайн»'},
                {id: '6', title: 'Дата договора', data: '09.11.2022'},
                {id: '7', title: 'Номер ТУ', data: '0'},
                {id: '8', title: 'Длина', data: '0'},
                {id: '9', title: 'Длина2', data: '0'},                    
            ],
            ContractsList: [
                {id: '0', title: 'Нажми на кнопку', 
                    name: 'Петров Петр Петрович', passportSerial: '0222', passportNumber: '222222', 
                    contractNumber: '2222'},
                {id: '1', title: ' "Создать" ', 
                    name: 'Санов Сан Саныч', passportSerial: '0333', passportNumber: '333333',
                    contractNumber: '3333'},
                {id: '2', title: 'чтобы загрузить список договоров', 
                    name: 'Валеров Валера Валерич', passportSerial: '04444', passportNumber: '444444',
                    contractNumber: '4444'}
            ],
            Boiler: '',
            Counter: '',
            CountList: [],
            Variant: 'gaz',
        }
    },
    methods: {
        selectItem(item) {
            item -= 1;
            const countMetadataItems = 2;
            const countContractItems = 4;
            let dataArray = new Array();


            for (let key in this.ContractsList[item]) {
                dataArray.push(this.ContractsList[item][key]);
            }

            dataArray.splice(0, countMetadataItems);

            let i = 0;
            while (i < dataArray.length - countContractItems) {
                this.PersonList[i].data = dataArray[i];
                i++;
            } 

            let j = 0;
            while (i < dataArray.length) {
                this.ContractInfoList[j].data = dataArray[i]; 
                i++;
                j++;
            } 

            console.log(item);
        },
        getContracts(array) {
            this.ContractsList = new Array;

            array.forEach(elem => {
               this.ContractsList.push(elem);   
            });
            
        },
        getVariant(variant) {
            this.Variant = variant;
            console.log(this.Variant); 
        },
        selectBoiler(boiler) {
            this.Boiler = boiler;
        },
        selectCounter(counter) {
            this.Counter = counter;
        },
        fillFromQuery(data: DataContract) {

        },

    },
	mounted() {

		const searchData = document.location.search;

		if (searchData != '') {
			const contract = new DataContract();
			contract.setFromQuery(searchData);
			// const data = new DataList(searchData);

            for (let key in contract) {
                console.log(key);
                console.log(contract[key]);  
            }

            this.DataContract = contract;
            // this.ContractTest = contract
			// this.getContracts(new Array(contract));
			// this.selectItem(1);
		}

    }
});


</script>

<style>

.g-white-block {
    display: block;
    height: 12pt;
}

</style>