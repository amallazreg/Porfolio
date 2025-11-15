import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
import { VoyageComponent } from './voyage/voyage.component';
import { AgenceImmobiliereComponent } from './agence-immobiliere/agence-immobiliere.component';
import { FormulairesDynamiquesComponent } from './formulaires-dynamiques/formulaires-dynamiques.component';
import { CentreMedicalComponent } from './centre-medical/centre-medical.component';

export const routes: Routes = [

      { path: 'home', component: HomePageComponent },
      {path : 'about', component : AboutComponent},
      {path : 'projets', component : ProjectsComponent},
      {path : 'contact', component : ContactComponent},
      {path : 'simulateurVoyage', component : VoyageComponent},
      {path : 'centreMedical', component :  CentreMedicalComponent},
      {path : 'agenceImmobiliere', component : AgenceImmobiliereComponent},
      {path : 'formulairesDynamiques', component : FormulairesDynamiquesComponent},



    { path: '', redirectTo: 'home', pathMatch: 'full' },


];
