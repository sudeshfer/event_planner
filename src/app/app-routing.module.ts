import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogHomeComponent } from './blog-home/blog-home.component';
import { BlogComponent } from './blog/blog.component';
import { CustomerRegistrationComponent } from './customer-registration/customer-registration.component';
import { DecorationComponent } from './decoration/decoration.component';
import { EntertainingComponent } from './entertaining/entertaining.component';
import { HomeComponent } from './home/home.component';
import { HospitalityComponent } from './hospitality/hospitality.component';
import { LoginComponent } from './login/login.component';
import { PhotographyComponent } from './photography/photography.component';
import { SupplierRegistrationComponent } from './supplier-registration/supplier-registration.component';
import { SupprofileComponent } from './supprofile/supprofile.component';
import { TransportationComponent } from './transportation/transportation.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'Login', component: LoginComponent},
  {path: 'Blog', component: BlogComponent},
  {path: 'Blog/Page', component: BlogHomeComponent},
  {path: 'SupplierRegistration', component: SupplierRegistrationComponent},
  {path: 'CustomerRegistration', component: CustomerRegistrationComponent},
  {path:'userprofile', component:UserProfileComponent},
  {path:'supprofile', component:SupprofileComponent},
  {path:'hospitality', component:HospitalityComponent},
  {path:'entertaining', component:EntertainingComponent},
  {path:'transportation', component:TransportationComponent},
  {path:'decoration', component:DecorationComponent},
  {path:'photography', component:PhotographyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
