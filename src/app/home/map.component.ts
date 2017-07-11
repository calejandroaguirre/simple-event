import { Component } from "@angular/core";

@Component({
    selector: 'event-map',
    templateUrl: './map.component.html'
})
export class MapComponent {
    lat: number = 28.766573;
    lng: number = -106.141464;
    zoom: number = 14;
}