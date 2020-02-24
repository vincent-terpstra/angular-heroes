import { OnInit, Component, OnDestroy, Input, ViewChild, ComponentFactoryResolver, HostListener } from "@angular/core";
import { AdDirective } from './ad.directive';
import { AdItem }       from './ad-item'
import { AdComponent  } from './ad.component';

@Component({
    selector: 'app-ad-banner',
    template:
        `<div class="ad-banner-example">
            <h3>Advertisements</h3>
            <ng-template ad-host></ng-template>
        </div>`,
})

export class AdBannerComponent implements OnInit, OnDestroy {
    @Input() ads: AdItem[];
    currentAdIndex = -1;

    @ViewChild(AdDirective, {static: true})  adHost: AdDirective;
     interval: any;

     constructor(private componentFactoryResolver: ComponentFactoryResolver){}

    ngOnInit(): void {
        this.loadComponent();
        this.resume();
    }

    ngOnDestroy(): void {
        this.pause();
    }

    loadComponent(){
        this.currentAdIndex = (this.currentAdIndex+ 1)% this.ads.length;

        const adItem = this.ads[this.currentAdIndex];
        const componentFactory = this.componentFactoryResolver.resolveComponentFactory(adItem.component);
        const viewContainerRef = this.adHost.viewContainerRef;
        viewContainerRef.clear();

        const componentRef = viewContainerRef.createComponent(componentFactory);
        (<AdComponent>componentRef.instance).data = adItem.data;
    }

    @HostListener('mouseenter')
    pause(){
        clearInterval(this.interval);
    }

    @HostListener('mouseleave')
    resume(){
        this.pause();
        this.interval = setInterval(()=>{ this.loadComponent();}, 3000);
    }
}