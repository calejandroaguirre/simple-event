import { Component, OnInit } from "@angular/core";

import { IInvitation } from "interfaces/invitation";
import { HeaderService } from "./header.service";

@Component({
    selector: 'event-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
    invitations: IInvitation[];
    errorMessage: string;
    images: string[] = [
        './assets/img/moana-compressor.jpg',
        './assets/img/El-bautizo.jpg'
    ]
    config: Object = {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        spaceBetween: 30,
        autoplay: 5000,
        autoplayDisableOnInteraction: false,
        loop: true
    }

    constructor(private _headerService: HeaderService) { }

    ngOnInit(): void {
        // this._headerService.getInvitations()
        //     .subscribe(
        //     invitations => this.invitations = invitations,
        //     error => this.errorMessage = <any>error);
    }
}