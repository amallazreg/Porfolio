import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-agence-immobiliere',
  imports: [NavbarComponent, FooterComponent],
  templateUrl: './agence-immobiliere.component.html',
  styleUrl: './agence-immobiliere.component.css'
})
export class AgenceImmobiliereComponent {

}
