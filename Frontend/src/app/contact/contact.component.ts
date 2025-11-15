import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from "../navbar/navbar.component";
import { FooterComponent } from "../footer/footer.component";
import { ContactService } from '../service/contact.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';



@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [NavbarComponent, FooterComponent,HttpClientModule,ReactiveFormsModule   ],
  providers: [ContactService, HttpClient],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
success: boolean = false;

  contactForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    telephone: new FormControl('', Validators.required),
    message: new FormControl('', Validators.required),
  });

  constructor(private contactService: ContactService) {}

  onSubmit() {
  if (this.contactForm.valid) {
    this.contactService.sendMessage(this.contactForm.value).subscribe({
      next: (res) => {
        console.log("Message envoyé", res);

        this.success = true;   // 👉 Affiche le message de succès

        this.contactForm.reset(); // 👉 Vide le formulaire

        // 👉 Cache le message après 4 secondes (optionnel)
        setTimeout(() => {
          this.success = false;
        }, 4000);
      },
      error: (err) => {
        console.error(err);
      }
    });
  }
}

}