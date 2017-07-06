import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
    moduleId: module.id,
    selector: 'event-menu',
    templateUrl: './menu.component.html'
})
export class MenuComponent {
    public menuActive: string = '';

    toogleMenu(): void {
        if(this.menuActive == 'active')
            this.menuActive = '';
        else
            this.menuActive = 'active';
        
    }
}