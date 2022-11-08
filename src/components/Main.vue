<template>
    <NavMenu 
        :DocumentVariant="DocumentVariant"
        @get-variant="getVariant"
    />
    <main class="main">
        <SettingFields 
            :PersonList="PersonList" 
            :ContractInfoList="ContractInfoList" 
            :ContractsList="ContractsList"
            @my-event="selectItem"
            @get-contracts="getContracts"
        />
        <aside>
        </aside>
        <A4 
            :PersonList="PersonList" 
            :ContractInfoList="ContractInfoList"
            :DocumentVariant="Variant"
            
        />
        <aside>
        </aside>
    </main>
</template>


<script>
import SettingFields from '@/components/SettingFields.vue';
import Person from './Person.vue';
import A4 from './A4.vue';
import NavMenu from './NavMenu.vue';

import { snipMe } from '../../public/js/printA4';

export default {
    components: { SettingFields, Person, A4, NavMenu },  
    data() {
        return {
            PersonList: [
                {id: '1', title: 'ФИО', content: 'Иванов Иван Иванович'},
                {id: '2', title: 'Серия паспорта', content: '0101'},
                {id: '3', title: 'Номер паспорта', content: '100234'},
                {id: '4', title: 'Дата выдачи', content: '21.01.2021'},
                {id: '5', title: 'Орган выдачи', content: 'МВД'},
                {id: '6', title: 'Телефон', content: '79949944949'},
                {id: '7', title: 'Адрес проживания', content: 'Смоленское'}
            ],
            ContractInfoList: [
                {id: '1', title: 'Номер договора', content: '03/21-КЮ'},
                {id: '2', title: 'Адрес', content: 'Населенный пункт, Улица, Дом'},
                {id: '3', title: 'Дата окончания', content: '31.12.2022'},
                {id: '4', title: 'ГРП', content: '«Газоснабжение жилых домов в границах ул. Советская, Сосновая в с. Павловск Павловского района Алтайского края»'},                
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
            Variant: '',
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

            console.log(dataArray);
            dataArray.splice(0, countMetadataItems);
            console.log(dataArray);

            let i = 0;
            while (i < dataArray.length - countContractItems) {
                this.PersonList[i].content = dataArray[i];
                i++;
            } 

            let j = 0;
            while (i < dataArray.length) {
                this.ContractInfoList[j].content = dataArray[i]; 
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
            
            $(document).ready(function() {
            $('.A4').each(function() {
                snipMe.call(this);
            });
            });
        }
    }
}


</script>

<style>

.g-white-block {
    display: block;
    height: 12pt;
}

</style>