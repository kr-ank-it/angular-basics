import { Routes } from '@angular/router';
import {Login} from './login/login';
import {Signup} from './signup/signup';
import {PageNotFound} from './page-not-found/page-not-found';
import {App} from './app';
import {Home} from './home/home';
import {Profile} from './profile/profile';
import {UsersList} from './users-list/users-list';
import {UserDetails} from './user-details/user-details';
import {Products} from './products/products';

export const routes: Routes = [
  {path: '', component:Home },
  {path:'login', component:Login },
  {path:'signup', component: Signup},
  {path:'profile', component:Profile},
  {path:'userslist', component:UsersList},
  {path:'userdetails/:id/:name/:email', component:UserDetails},
  {path:'products', component:Products},
  {path:'**', component:PageNotFound}
];
