import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-voyage',
  imports: [NavbarComponent, FooterComponent],
  templateUrl: './voyage.component.html',
  styleUrl: './voyage.component.css'
})
export class VoyageComponent {

}
