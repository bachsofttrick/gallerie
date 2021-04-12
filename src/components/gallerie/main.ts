import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Gallerie extends Vue {
    public picLinks = ['http://localhost:3000/html/picture/WIN_20210225_11_08_47_Pro.jpg', 'http://localhost:3000/html/thumbnail/WIN_20210115_10_38_31_Pro.jpg'];
    private times = 2;

    public mounted(): void {
        return;
    }

    public multiplySrc(times: number): void {
        for (let i = 0; i < times; i++) {
            this.picLinks = this.picLinks.concat(this.picLinks);
        }
    }
    
    public deleteHalf(): void {
        const halfNumber = Math.round(this.picLinks.length / 2);
        if (halfNumber > 1) this.picLinks = this.picLinks.slice(0, halfNumber);
    }

    public goTop(): void {
        document.documentElement.scrollTop = 0;
    }
}