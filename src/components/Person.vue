<template>

    <p class="paragraph margin-top"><span class="paragraphMargin"></span>
        <span class="edit-highlighting bold ">{{ PersonList[0].data }}</span>, серия <span class="edit-highlighting"> {{ PersonList[1].data }} </span> номер <span class="edit-highlighting">{{ PersonList[2].data }}</span>  дата выдачи <span class="edit-highlighting">{{ passportDate }}</span>,  именуемый (-ая) в дальнейшем заявителем, с другой стороны, и
    </p>

</template>

<script>

export default {
    props: {
        PersonList: {
            type: Array,
            require: true
        }
    }
}
</script>

<style scoped>

.bold {
    font-weight: 700;
}

</style>