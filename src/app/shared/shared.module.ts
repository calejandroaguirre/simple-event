import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { MenuComponent } from "./menu.component";
import { FooterComponent } from "./footer.component";

@NgModule({
    declarations: [
        MenuComponent,
        FooterComponent
    ],
    imports: [CommonModule],
    exports: [
        CommonModule,
        FormsModule,
        MenuComponent,
        FooterComponent
    ]
})
export class SharedModule { }