<template>
    <div class="work-place">
        <div class="A4" v-if="DocumentVariant === 'gaz'">
            <TemplateContractGaz 
                :DataContract="DataContract"
                :PersonList="PersonList"
                :ContractInfoList="ContractInfoList">
            </TemplateContractGaz>
        </div>

        <div class="A4" v-if="DocumentVariant === 'gaz'" >
            <TemplateTechnicalConditionGaz 
                :DataContract="DataContract"
                :PersonList="PersonList" 
                :ContractInfoList="ContractInfoList">
            </TemplateTechnicalConditionGaz>
        </div>

        <div class="A4" v-if="DocumentVariant === 'additional'" >
            <TemplateAdditionalGaz 
                :DataContract="DataContract"
                :PersonList="PersonList" 
                :ContractInfoList="ContractInfoList">
            </TemplateAdditionalGaz>
        </div>

        <div class="A4" v-if="DocumentVariant === 'connect'">
            <TemplateContractConnect 
                :DataContract="DataContract"
                :PersonList="PersonList"
                :ContractInfoList="ContractInfoList">
            </TemplateContractConnect>
        </div>
        
        <div class="A4 page-break-left" v-if="DocumentVariant === 'connect'" >
            <TemplateTechnicalConditionConnect 
                :DataContract="DataContract"
                :PersonList="PersonList" 
                :ContractInfoList="ContractInfoList">
            </TemplateTechnicalConditionConnect>
        </div>

        <div class="A4" v-if="DocumentVariant === 'act'">
            <TemplateActReadiness
                :DataContract="DataContract"
                :actData="actData"

                :PersonList="PersonList" 
                :ContractInfoList="ContractInfoList"
                :Boiler="Boiler"
                :Counter="Counter">
            </TemplateActReadiness>
        </div>
		
        <div class="A4" v-if="DocumentVariant === 'act'">
            <TemplateActConnect
                :DataContract="DataContract"
                :actData="actData"

                :PersonList="PersonList" 
                :ContractInfoList="ContractInfoList"
                :Boiler="Boiler"
                :Counter="Counter">
            </TemplateActConnect>
        </div>
        
        <div class="page-break"></div>
    </div>
</template>

<script lang="ts">
import TemplateTechnicalConditionGaz from './Templates/TemplateTechnicalConditionGaz.vue';
import TemplateContractGaz from '@/components/Templates/TemplateContractGaz.vue'
import TemplateContractConnect from './Templates/TemplateContractConnect.vue';
import TemplateTechnicalConditionConnect from './Templates/TemplateTechnicalConditionConnect.vue';
import TemplateActReadiness from './Templates/TemplateActReadiness.vue';
import TemplateActConnect from './Templates/TemplateActConnect.vue';
import TemplateAdditionalGaz from './Templates/TemplateAdditionalGaz.vue';

import { defineComponent, PropType } from 'vue';

import { DataContract } from '@/model/DataContract';
import { Act } from '@/model/Act';

export default defineComponent({
    components: {
    TemplateTechnicalConditionGaz,
    TemplateContractGaz,
    TemplateContractConnect,
    TemplateTechnicalConditionConnect,
    TemplateActReadiness,
    TemplateActConnect,
    TemplateAdditionalGaz,
},
    props: {
        DataContract: {
            type: Object as PropType<DataContract>
        },
        actData: {
            type: Object as PropType<Act>
        },
        PersonList: {
            type: Array,
            // require: true
        },
        ContractInfoList: {
            type: Array,
            // require: true
        },
        DocumentVariant: {
            type: String,
            // require: true,
        },
        Boiler: {
            type: String,
            default: () => {
                ""
            }
        },
        Counter: {
            type: String,
            default: () => {
                ""
            }
        },
    },
});
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