<template>

    <p class="paragraph margin-top"><span class="paragraphMargin"></span>
        <b>{{ PersonList[0].content }}</b>, серия {{ PersonList[1].content }}  номер {{ PersonList[2].content }}  дата выдачи {{ passportDate }},  именуемый (-ая) в дальнейшем заявителем, с другой стороны, и
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