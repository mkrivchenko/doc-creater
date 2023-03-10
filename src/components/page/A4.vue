<template>
    <div class="work-place">
        <div class="A4" v-if="documentVariant === 'gaz'">
            <TemplateContractGaz 
                :DataContract="dataContract">
            </TemplateContractGaz>
        </div>

        <div class="A4" v-if="documentVariant === 'gaz'" >
            <TemplateTechnicalConditionGaz 
                :DataContract="dataContract">
            </TemplateTechnicalConditionGaz>
        </div>

        <div class="A4" v-if="documentVariant === 'additional'" >
            <TemplateAdditionalGaz 
                :DataContract="dataContract">
            </TemplateAdditionalGaz>
        </div>

        <div class="A4" v-if="documentVariant === 'connect'">
            <TemplateContractConnect 
                :DataContract="dataContract">
            </TemplateContractConnect>
        </div>
        
        <div class="A4 page-break-left" v-if="documentVariant === 'connect'" >
            <TemplateTechnicalConditionConnect 
                :DataContract="dataContract">
            </TemplateTechnicalConditionConnect>
        </div>

        <div class="A4" v-if="documentVariant === 'act'">
            <TemplateActReadiness
                :DataContract="dataContract"
                :actData="actData"

                :Boiler="boiler"
                :Counter="counter">
            </TemplateActReadiness>
        </div>
		
        <div class="A4" v-if="documentVariant === 'act'">
            <TemplateActConnect
                :DataContract="dataContract"
                :actData="actData"

                :Boiler="boiler"
                :Counter="counter">
            </TemplateActConnect>
        </div>
        
        <div class="page-break"></div>
    </div>
</template>

<script lang="ts">
import TemplateTechnicalConditionGaz from '../Templates/gaz/TemplateTechnicalConditionGaz.vue';
import TemplateContractGaz from '@/components/Templates/gaz/TemplateContractGaz.vue'
import TemplateContractConnect from '../Templates/connect/TemplateContractConnect.vue';
import TemplateTechnicalConditionConnect from '../Templates/connect/TemplateTechnicalConditionConnect.vue';
import TemplateActReadiness from '../Templates/acts/TemplateActReadiness.vue';
import TemplateActConnect from '../Templates/acts/TemplateActConnect.vue';
import TemplateAdditionalGaz from '../Templates/gaz/TemplateAdditionalGaz.vue';

import { defineComponent, PropType } from 'vue';

import { DataContract } from '@/model/dataContract';
import { Act } from '@/model/act.model';

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
        dataContract: {
            type: Object as PropType<DataContract>
        },
        actData: {
            type: Object as PropType<Act>
        },
        documentVariant: {
            type: String,
            // require: true,
        },
        boiler: {
            type: String,
            default: () => {
                ""
            }
        },
        counter: {
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