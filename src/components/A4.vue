<template>
    <div class="work-place">
        <div class="A4">
            <TemplateContractGaz v-if="DocumentVariant === 'gaz'"
                :PersonList="PersonList"
                :ContractInfoList="ContractInfoList">
            </TemplateContractGaz>
        </div>

        <div class="A4">
            <TemplateTechnicalConditionGaz v-if="DocumentVariant === 'gaz'" 
                :PersonList="PersonList" 
                :ContractInfoList="ContractInfoList">
            </TemplateTechnicalConditionGaz>
        </div>
        <div class="page-break"></div>
    </div>
</template>

<script>
import TemplateTechnicalConditionGaz from './Templates/TemplateTechnicalConditionGaz.vue';
import TemplateContractGaz from '@/components/Templates/TemplateContractGaz.vue'

export default {
    components: {  
        TemplateTechnicalConditionGaz,
        TemplateContractGaz },
    props: {
        PersonList: {
            type: Array,
            require: true
        },
        ContractInfoList: {
            type: Array,
            require: true
        },
        DocumentVariant: {
            type: String,
            require: true,
        },
    },
}
</script>

<style>

.edit-highlighting {
    background-color: beige;
}

.work-place {
    padding: 40px 0px;
}

@media print {
    .print {
        display: block;
    }

    .work-place {
    padding: 0px;
}
}

</style>