import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TransListComponent } from './trans-list/trans-list.component';
import { RegisterComponent } from './register/register.component';
import { NavLinkComponent } from './nav-link/nav-link.component';
import { ModuleComponent } from './module/module.component';
import { CompanyComponent } from './company/company.component';
import { ModuleFilterPipe } from './module-filter.pipe';
import { AttributeMasterComponent } from './attribute-master/attribute-master.component';
import { AttributeDetailsComponent } from './attribute-details/attribute-details.component';
import { AttributePageComponent } from './attribute-page/attribute-page.component';
import { ChartsModule } from 'ng2-charts';
import { LandingComponent } from './landing/landing.component';

import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SidebarComponent,
    NavbarComponent,
    HomeComponent,
    TransListComponent,
    RegisterComponent,
    NavLinkComponent,
    ModuleComponent,
    CompanyComponent,
    ModuleFilterPipe,
    AttributeMasterComponent,
    AttributeDetailsComponent,
    AttributePageComponent,
    LandingComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ChartsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
