<template>
    <div class="work-place">
        <div class="A4" v-if="DocumentVariant === 'gaz'">
            <TemplateContractGaz 
                :PersonList="PersonList"
                :ContractInfoList="ContractInfoList">
            </TemplateContractGaz>
        </div>

        <div class="A4" v-if="DocumentVariant === 'gaz'" >
            <TemplateTechnicalConditionGaz 
                :PersonList="PersonList" 
                :ContractInfoList="ContractInfoList">
            </TemplateTechnicalConditionGaz>
        </div>

        <div class="A4" v-if="DocumentVariant === 'connect'">
            <TemplateContractConnect 
                :PersonList="PersonList"
                :ContractInfoList="ContractInfoList">
            </TemplateContractConnect>
        </div>
        
        <div class="A4 page-break-left" v-if="DocumentVariant === 'connect'" >
            <TemplateTechnicalConditionConnect 
                :PersonList="PersonList" 
                :ContractInfoList="ContractInfoList">
            </TemplateTechnicalConditionConnect>
        </div>

        <div class="A4" v-if="DocumentVariant === 'act'">
            <TemplateActReadiness
                :PersonList="PersonList" 
                :ContractInfoList="ContractInfoList"
                :Boiler="Boiler"
                :Counter="Counter">
            </TemplateActReadiness>
        </div>
		
        <div class="A4" v-if="DocumentVariant === 'act'">
            <TemplateActConnect
                :PersonList="PersonList" 
                :ContractInfoList="ContractInfoList"
                :Boiler="Boiler"
                :Counter="Counter">
            </TemplateActConnect>
        </div>
        
        <div class="page-break"></div>
    </div>
</template>

<script>
import TemplateTechnicalConditionGaz from './Templates/TemplateTechnicalConditionGaz.vue';
import TemplateContractGaz from '@/components/Templates/TemplateContractGaz.vue'
import TemplateContractConnect from './Templates/TemplateContractConnect.vue';
import TemplateTechnicalConditionConnect from './Templates/TemplateTechnicalConditionConnect.vue';
import TemplateActReadiness from './Templates/TemplateActReadiness.vue';
import TemplateActConnect from './Templates/TemplateActConnect.vue';

export default {
    components: {
    TemplateTechnicalConditionGaz,
    TemplateContractGaz,
    TemplateContractConnect,
    TemplateTechnicalConditionConnect,
    TemplateActReadiness,
    TemplateActConnect
},
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
        Boiler: "",
        Counter: "",
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

    .page-break-left {
        display: block;
        /* page-break-before: right; */
        page-break-after: recto;   
    }
}

</style>