import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Gallerie extends Vue {
    public picLinks = ['http://localhost:3000/html/picture/WIN_20210115_10_38_31_Pro.jpg', 'http://localhost:3000/html/thumbnail/WIN_20210115_10_38_31_Pro.jpg'];
    public mounted() {
        console.log(this.picLinks);
    }
}