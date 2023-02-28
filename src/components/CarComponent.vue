<template>
    <v-container :style="cssNastavitve">
        <span v-my-focus-directive>{{ computedIndex }}</span>
        {{ name }}
        {{ displacement }}
        {{ speed }}
        <span v-my-other-directive>{{ oprema }}</span>
        <CustomButton></CustomButton>
        <slot></slot>
    </v-container>
</template>

<script>
export default {
    data () {
        return {
            bind: false,
        }
    },
    props: {
        name: {
            type: String,
            required: true,
            validator: s => s.length > 10
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
                color: this.styles.color || 'saddlebrown',
            }
        }
    },
    watch: {
        // oprema (val) {
        //     console.log("⚛watch~ val:", val);
        // worse default solution
        // }
        oprema: {
            // better solution
            deep: true,
            handler (val) {
                console.log('The list of colours has changed!', val);
            }
        },
        computedIndex (val) {
            console.log("⚛ ~ val:", val);
        },

    },
    mounted () {
        console.log("⚛ ~ vm.$props:", this.$props);
        const c = { ...this.$props }
        console.log("⚛ ~ c:", c);
    },
    directives: {
        'my-other-directive': {
            inserted: function (el) {
                el.style.color = 'darkkhaki';
            }
        }
    }
}
</script>

<style scoped>
:global(#app) {
    /* background: peachpuff; */
}
</style>