<template> 
    <table class="table1">
        <caption>
            <span class="bold">
                Реквизиты сторон           
            </span>  
        </caption>
        <tbody>
            <tr>
                <td>
                    <span class="bold">
                        Исполнитель
                    </span>
                </td>
                <td>
                    <span class="bold">
                        Заявитель
                    </span>
                </td>
                <td v-if="Quantity === 3">
                    <span class="bold">
                        Единый оператор газификации или региональный оператор газификации
                    </span>
                </td>
            </tr>
            <tr>
                <td>
                    <span class="str-margin bold">
                        ООО «Сибгаз-Эксплуатация»
                    </span>
                    <span class="str-margin">
                        Адрес местонахождения и направления почтовой корреспонденции: 
                    </span>
                    <span class="str-margin">
                        656043, г. Барнаул, ул. Никитина, 67-203,
                    </span>
                    <span class="str-margin">
                        тел: (3852) 63-17-80, 63-54-23,
                    </span> 
                    <span class="str-margin">
                        e-mail: sibgaz-exp@yandex.ru
                    </span> 
                    <span class="str-margin"> 
                        Банковские реквизиты: <br>
                        ИНН 2225140681,<br>КПП 222501001,<br> 
                        Р/С: 40702810602000000114, <br>
                        К/С: 30101810200000000604,  <br>
                        БИК 040173604 в отделении №8644 Сбербанка России г.&nbsp;Барнаул
                    </span>
                </td>
                <td>
                    <span class="str-margin bold edit-highlighting">
                        {{ PersonList[0].content }}
                    </span>
                    <span class="str-margin edit-highlighting">
                        Адрес: {{ContractInfoList[1].content}}
                    </span>
                    <span class="str-margin edit-highlighting">
                        Тел: {{PersonList[5].content}}
                    </span>
                    <span class="str-margin edit-highlighting">
                        Паспорт: 
                        {{ PersonList[1].content }}
                        {{ PersonList[2].content }}
                    </span>
                    <span class="str-margin edit-highlighting">
                        Выдан: {{ PersonList[3].content}} {{ PersonList[4].content}}
                    </span>
                    <span class="str-margin edit-highlighting">
                        Адрес проживания: {{ PersonList[6].content}}
                    </span>
                </td>
                <td v-if="Quantity === 3">
                    <span class="str-margin bold">
                        ООО «Газпром газификация»
                    </span>
                    <span class="str-margin"> 
                        Адрес местонахождения и направления почтовой корреспонденции: 197110, г. Санкт-Петербург, ул. Набережная адмирала Лазарева, д. 24, лит. А, помещ. 918,
                    </span>
                    <span class="str-margin"> 
                        тел.+7 (812) 609-55-55,
                    </span> 
                    <span class="str-margin"> 
                        электронная почта: info@gzf.mrgeng.ru
                    </span>
                    <span class="str-margin">
                        Банковские реквизиты: ГПБ(АО) «Северо-Западный»<br>
                        Р/С:40702810200150006423,<br> 
                        К/С:30101810200000000827,<br>
                        БИК 044030827,<br>
                    </span>
                    <span class="str-margin">
                        АО «АБ» «РОССИЯ»<br>
                        Р/С:40702810200000009930,<br>
                        К/С:30101810800000000861, БИК 044030861<br>
                    </span>    
                    ИНН 7813655197,КПП 783011001    
                    
                    

                </td>
            </tr>
            <tr>
                <td>
                    Исполнитель:<br>
                    Директор<br>
                    ______________(Осипова Т.С.)<br>
                    М.П.
                </td>
                <td>
                    <br>
                    <br>
                    ______________(<span class="edit-highlighting">{{ createString(PersonList[0].content) }}</span>)<br>
                    <span class="g-white-block"></span>
                </td>
                <td v-if="Quantity === 3">
                    ЕОГ:<br>
                    Заместитель директора филиала по строительству и инвестициям<br>
                    ______________(Волохова Е.В.)<br>
                    М.П.
                </td>
            </tr>
        </tbody>        
    </table>
</template>

<script>



export default {
    props: {
        PersonList: {
            type: Array,
            require: true
        },
        ContractInfoList: {
            type: Array,
            require: true
        },
        Quantity: {
            type: Number,
        },
    },
    methods: {
        createString(str) {
            let arrayOfStr = str.split(' ');
            let newStr = arrayOfStr[0] + ' ';
            let i = 1;
            while (i < arrayOfStr.length)
            {
                newStr = newStr + arrayOfStr[i].slice(0, 1) + '.'; 
                i++;
            };
            return newStr;
        }   
    }
}

</script>

<style scoped lang="less">

@import '@/style/_table-base-style.less';

table {
    display: table;
    border-spacing: 0pt 10pt;
    width: 100%;
    row-gap: 10pt;
    table-layout: fixed;
}

caption {
    margin-top: 10pt;
    text-align: left;
}

td {
    padding: 0 10pt 0 0;
    vertical-align: top;
}

tr:last-of-type td{
    vertical-align: bottom;
}

span.str-margin {
    display: block;
    margin-bottom: 2pt;
}

.bold {
    font-weight: bold;
}

</style>


