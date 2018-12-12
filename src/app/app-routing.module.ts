import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';
import { AllComponent } from './all/all.component';
import { SingleComponent } from './single/single.component';
import { FavComponent } from './fav/fav.component';
import { ErrorComponent } from './error/error.component';


const routes: Routes = [

{ path: '',
  component: LoginComponent },
{ path: 'user',
  component: UserComponent,
  children:[
    { path: '',
      component: HomeComponent },
      { path: 'all',
      component: AllComponent},
    { path: 'single',
      component: SingleComponent,
    },
    { path: 'fav',
      component: FavComponent}
  ]},
{ path: 'admin',
  component: AdminComponent },
{ path: "**",
  component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
