<template>

    <p class="paragraph margin-top"><span class="paragraphMargin"></span>
        <b>{{ person[0].content }}</b>, серия {{ person[1].content }}  номер {{ person[2].content }}  дата выдачи {{ passportDate }},  именуемый (-ая) в дальнейшем заявителем, с другой стороны, и
    </p>

</template>

<script>

export default {
    props: {
        person: {
            type: Array,
            require: true
        }
    }
}
</script>