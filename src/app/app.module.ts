import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FruitsComponent } from './components/fruits/fruits.component';
import { DataDisplayComponent } from './data-display/data-display.component';
import { DataEntryComponent } from './data-entry/data-entry.component';
import { ItemListComponent } from './item-list/item-list.component';
import { ItemsListComponent } from './items-list/items-list.component';
import { CartListComponent } from './cart-list/cart-list.component';

@NgModule({
  declarations: [
    AppComponent,
    FruitsComponent,
    DataDisplayComponent,
    DataEntryComponent,
    ItemListComponent,
    ItemsListComponent,
    CartListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
