import { Component, Prop, Vue } from 'vue-property-decorator';
import axios from 'axios';

@Component
export default class Gallerie extends Vue {
    private picLinks: string[] = [];
    private count = 0;

    public mounted(): void {
        // Lazy load images at the bottom
        window.onscroll = () => {
            if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
                this.count += 10;
                this.getPictures(this.count);
            }
        };
        this.getPictures(this.count);
    }

    public getPictures(count: number): void {
        axios.get('http://localhost:3000/testcam', {params: {skip: this.count}}).then((value) => {
            for (let i = 0; i < value.data.data.length; i++) {
                value.data.data[i] = 'http://localhost:3000/resi/' + value.data.data[i];
                this.picLinks.push(value.data.data[i]);
            }
        });
    }

    public goTop(): void {
        document.documentElement.scrollTop = 0;
    }
}