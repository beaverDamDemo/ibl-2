<template>
    <v-container :style="cssNastavitve">
        {{ computedIndex }}
        {{ name }}
        {{ displacement }}
        {{ speed }}
        {{ oprema }}
    </v-container>
</template>

<script>
export default {
    data () {
        return {

        }
    },
    props: {
        'name': {
            type: String,
            required: true
        },
        'displacement': {
            type: String,
            required: true
        },
        'speed': {
            type: String,
            required: true
        },
        'index': {
            type: Number,
            required: true
        },
        'styles': {
            type: Object,
            required: true
        },
        oprema: {
            type: Array,
        }
    },
    computed: {
        computedIndex () {
            return this.index + 1;
        },
        cssNastavitve () {
            return {
                fontWeight: this.styles.fontWeight,
                color: this.styles.color || 'moccasin',
            }
        }
    },
    watch: {
        oprema (val) {
            console.log("⚛watch~ val:", val);

        }
    },
    mounted () {

    }
}
</script>