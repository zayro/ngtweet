import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import * as Md from '@angular/material';
import { NgPipesModule } from 'ng-pipes';
import { FilterPipe } from './pipe/filter.pipe';
import { OrderModule } from 'ngx-order-pipe'; // <- import OrderModule

import { AppRoutingModule, RoutingComponents } from './app-routing.module';
import { RootComponent } from './components/root/root.component';

@NgModule({
  declarations: [
    RootComponent,
    RoutingComponents,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    OrderModule,
    NgPipesModule,
    Md.MatAutocompleteModule,
    Md.MatBadgeModule,
    Md.MatBottomSheetModule,
    Md.MatButtonModule,
    Md.MatButtonToggleModule,
    Md.MatCardModule,
    Md.MatCheckboxModule,
    Md.MatChipsModule,
    Md.MatStepperModule,
    Md.MatDatepickerModule,
    Md.MatDialogModule,
    Md.MatDividerModule,
    Md.MatExpansionModule,
    Md.MatFormFieldModule,
    Md.MatGridListModule,
    Md.MatIconModule,
    Md.MatInputModule,
    Md.MatListModule,
    Md.MatMenuModule,
    Md.MatNativeDateModule,
    Md.MatPaginatorModule,
    Md.MatProgressBarModule,
    Md.MatProgressSpinnerModule,
    Md.MatRadioModule,
    Md.MatRippleModule,
    Md.MatSelectModule,
    Md.MatSidenavModule,
    Md.MatSliderModule,
    Md.MatSlideToggleModule,
    Md.MatSnackBarModule,
    Md.MatSortModule,
    Md.MatTableModule,
    Md.MatTabsModule,
    Md.MatToolbarModule,
    Md.MatTooltipModule,
    Md.MatTreeModule,
  ],
  providers: [],
  bootstrap: [RootComponent],
  entryComponents: [RoutingComponents]
})
export class AppModule { }
