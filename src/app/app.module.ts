import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { UnicornListComponent } from './unicorn-list/unicorn-list.component';
import { UnicornAccessoriesComponent } from './unicorn-accessories/unicorn-accessories.component';

// const routes: Routes = [
// 	{ path: '', component: null }
// ];

@NgModule({
	declarations: [
		AppComponent,
		MainComponent,
		UnicornListComponent,
		UnicornAccessoriesComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule
		// , RouterModule.forRoot(routes)
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
