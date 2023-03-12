<template>
    <div class="work-place">
        <div class="A4" v-if="globalStore.documentVariant === DocumentVariant.contractGaz">
            <TemplateContractGaz 
                :DataContract="dataContract"
            />
        </div>

        <div class="A4" v-if="globalStore.documentVariant === DocumentVariant.contractGaz">
            <TemplateTechnicalConditionGaz 
                :DataContract="dataContract"
            />
        </div>

        <div class="A4" v-if="globalStore.documentVariant === DocumentVariant.additional">
            <TemplateAdditionalGaz 
                :DataContract="dataContract"
            />
        </div>

        <div class="A4" v-if="globalStore.documentVariant === DocumentVariant.contractConnect">
            <TemplateContractConnect 
                :DataContract="dataContract"
            />
        </div>
        
        <div class="A4 page-break-left" v-if="globalStore.documentVariant === DocumentVariant.contractConnect">
            <TemplateTechnicalConditionConnect 
                :DataContract="dataContract"
            />
        </div>

        <div class="A4" v-if="globalStore.documentVariant === DocumentVariant.act">
            <TemplateActReadiness
                :DataContract="dataContract"
                :actData="actData"

                :Boiler="boiler"
                :Counter="counter"
            />
        </div>
		
        <div class="A4" v-if="globalStore.documentVariant === DocumentVariant.act">
            <TemplateActConnect
                :DataContract="dataContract"
                :actData="actData"

                :Boiler="boiler"
                :Counter="counter"
            />
        </div>

        <div class="A4" v-if="globalStore.documentVariant === DocumentVariant.claim">
            <TemplateClaim/>
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
import TemplateClaim from '../Templates/claims/TemplateClaim.vue';

import { defineComponent, PropType } from 'vue';

import { DataContract } from '@/model/dataContract';
import { Act } from '@/model/act.model';
import { mapStores } from 'pinia';
import { useGlobalStore, DocumentVariant } from '@/stores/global.store';

export default defineComponent({
    components: {
        TemplateTechnicalConditionGaz,
        TemplateContractGaz,
        TemplateContractConnect,
        TemplateTechnicalConditionConnect,
        TemplateActReadiness,
        TemplateActConnect,
        TemplateAdditionalGaz,
        TemplateClaim,
    },
    computed: {
        ...mapStores(useGlobalStore),
    },
    props: {
        dataContract: {
            type: Object as PropType<DataContract>
        },
        actData: {
            type: Object as PropType<Act>
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
    data () {
        return {
            DocumentVariant: DocumentVariant
        }
    }
});
</script>

<style>

.edit-highlighting {
    background-color: beige;
}

.work-place {
    padding: 80px 0px;
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