import { Routes } from '@angular/router';
import {UserList} from './feateures/user-management/user-list/user-list';
import {ProductList} from './feateures/product-management/product-list/product-list';
export const routes: Routes = [
  {path:'users', component: UserList},
  {path:'products', component: ProductList},
  {path:'', redirectTo: 'products',pathMatch:'full'},
];
