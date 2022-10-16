<template>
    <main class="main">
        <SettingFields :PersonList="PersonList" :ContractList="ContractList" />
        <aside>
        </aside>
        <A4 :inputs="inputs" :PersonList="PersonList" :ContractList="ContractList"/>
        <aside>
        </aside>
    </main>
</template>


<script>
import SettingFields from '@/components/SettingFields.vue';
import Person from './Person.vue';
import A4 from './A4.vue';

export default {
    components: { SettingFields, Person, A4 },  
    data() {
        return {
            PersonList: [
                {id: '1', title: 'ФИО', content: 'Иванов Иван Иванович'},
                {id: '2', title: 'Серия паспорта', content: '0101'},
                {id: '3', title: 'Номер паспорта', content: '100234'},
            ],
            ContractList: [
                {id: '1', title: 'Номер договора', content: '03/21-КЮ'}
            ]
        }
    },
    
}


</script>