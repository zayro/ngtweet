import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { By } from '@angular/platform-browser';

import { DebugElement } from '@angular/core';

import { RouterTestingModule } from '@angular/router/testing';

import { Routes, RouterModule } from '@angular/router';

import { DomSanitizer } from '@angular/platform-browser';

import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { RoutingComponents, AppRoutingModule } from '../../app.routing';

import { FilterPipe } from '../../pipe/filter.pipe';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgPipesModule } from 'ngx-pipes';

import {APP_BASE_HREF} from '@angular/common';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {
  MatBadgeModule,
  MatAutocompleteModule,
  MatBottomSheetModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatFormFieldModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatTreeModule
} from '@angular/material';


import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeComponent, RoutingComponents, FilterPipe ],
      imports: [
        BrowserAnimationsModule,
        HttpClientModule,
        RouterTestingModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        NgPipesModule,
        MatBadgeModule,
        MatAutocompleteModule,
        MatBottomSheetModule,
        MatButtonModule,
        MatButtonToggleModule,
        MatCardModule,
        MatCheckboxModule,
        MatChipsModule,
        MatDatepickerModule,
        MatDialogModule,
        MatDividerModule,
        MatExpansionModule,
        MatGridListModule,
        MatIconModule,
        MatInputModule,
        MatFormFieldModule,
        MatListModule,
        MatMenuModule,
        MatNativeDateModule,
        MatPaginatorModule,
        MatProgressBarModule,
        MatProgressSpinnerModule,
        MatRadioModule,
        MatRippleModule,
        MatSelectModule,
        MatSidenavModule,
        MatSliderModule,
        MatSlideToggleModule,
        MatSnackBarModule,
        MatSortModule,
        MatStepperModule,
        MatTableModule,
        MatTabsModule,
        MatToolbarModule,
        MatTooltipModule,
        MatTreeModule
        ],
        providers: [{provide: APP_BASE_HREF, useValue : '/' }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Testeando componentes inicializados', () => {
    expect(component).toBeTruthy();
  });
});
