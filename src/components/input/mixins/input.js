export const input = {
    props: {
        placeholder: {
            type: String,
            default: ""
        },
        value: {
            type: String,
            default: ""
        }
    },
    data() {
        return {buffer: this.value};
    },
    methods: {
        onInput() {
            this.$emit("input", this.buffer);
        }
    }
};
