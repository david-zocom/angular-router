import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { UnicornListComponent } from './unicorn-list/unicorn-list.component';
import { UnicornAccessoriesComponent } from './unicorn-accessories/unicorn-accessories.component';

const routes: Routes = [
	{ path: 'pimpMyUnicorn', component: UnicornAccessoriesComponent },
	{ path: 'sparkle', component: UnicornListComponent },
	{ path: '', component: MainComponent },
	{ path: '404', component: MainComponent },
	{ path: '**', redirectTo: '404' }
];

@NgModule({
	  imports: [RouterModule.forRoot(routes)],
	  exports: [RouterModule]
})
export class AppRoutingModule { }
