import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-centre-medical',
  imports: [NavbarComponent, FooterComponent],
  templateUrl: './centre-medical.component.html',
  styleUrl: './centre-medical.component.css'
})
export class CentreMedicalComponent {

}
