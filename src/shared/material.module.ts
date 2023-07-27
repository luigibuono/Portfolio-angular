import { NgModule } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatChipsModule} from '@angular/material/chips';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatMenuModule} from '@angular/material/menu';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTableModule} from '@angular/material/table';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {NgIf} from '@angular/common';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { FormsModule } from '@angular/forms';
import {MatProgressBarModule} from '@angular/material/progress-bar';

import { AboutComponent } from 'src/app/components/about/about.component';
import { EducationComponent } from 'src/app/components/education/education.component';
import { ProjectsComponent } from 'src/app/components/projects/projects.component';
import { ContactsComponent } from 'src/app/components/contacts/contacts.component';
import { DashboardComponent } from 'src/app/components/dashboard/dashboard.component';
import { HomeComponent } from 'src/app/components/home/home.component';






@NgModule({
  declarations: [

  AboutComponent,
  EducationComponent,
  ProjectsComponent,
  ContactsComponent,
  DashboardComponent,
  HomeComponent,




],


  imports: [


MatIconModule,
MatButtonModule,
MatChipsModule,
MatCardModule,
MatGridListModule,
MatMenuModule,
MatPaginatorModule,
MatInputModule,
MatFormFieldModule,
MatToolbarModule,
MatTableModule,
MatSidenavModule,
MatListModule,
NgIf,
AppRoutingModule,
FormsModule,
MatProgressBarModule








  ],
  exports : [
    MatIconModule,
    MatButtonModule,
    MatChipsModule,
    MatCardModule,
    MatGridListModule,
    MatMenuModule,
    MatPaginatorModule,
    MatInputModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatTableModule
  ]
 })

 export class MaterialModule {}

