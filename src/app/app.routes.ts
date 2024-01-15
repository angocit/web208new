import { Routes } from '@angular/router';
import { HomeComponentComponent } from './home-component/home-component.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

export const routes: Routes = [
    {path: '', component: HomeComponentComponent},
    {path: 'product-detail/:id', component: ProductDetailComponent}
];
