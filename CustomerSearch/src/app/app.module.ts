import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerSearchComponent } from '../app/customer-search/customer-search.component';
import { SearchPipePipe } from './search-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CustomerSearchComponent,
    SearchPipePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
