import { Component, OnInit, Input, HostListener, Output, EventEmitter } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material';


import { HttpData } from '../../../services/http-data.service';

import { Icon } from '../../class/icon';

import { Funtions } from '../../class/funciones';

// interface
export interface LoadData {
  data: string;
  status: boolean;
}

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent extends Icon implements OnInit {

  @Input() search: string;
  @Input() MultFilter: any;
  @Input() show: boolean;
  @Input() mobile: boolean;

  dataSource: any;

  funciones = new Funtions();

  public IconMenu = 'arrow_drop_down';

  constructor(
    iconRegistry: MatIconRegistry,
    sanitizer: DomSanitizer,
    private api: HttpData
  ) {
    super(iconRegistry, sanitizer);
  }


  getData() {
    // try some HTTP request:
    this.api.get('/admin/getAll/hoteles').subscribe(
      (response: LoadData) => {
        this.dataSource = response.data;
      },
      err => {
        console.error('Error occured.', err);
      }
    );
  }


  ngOnInit() {
    this.getData();
  }



}
