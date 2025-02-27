import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ProductComponent } from './pages/product/product.component';
import { ServicesComponent } from './pages/services/services.component';

export const routes: Routes = [
    { path:'', component: HomeComponent , pathMatch: 'full' },
    { path:'about', component: AboutComponent },
    { path:'contact', component: ContactComponent },
    { path:'product', component: ProductComponent },
    { path:'services', component: ServicesComponent },
];
