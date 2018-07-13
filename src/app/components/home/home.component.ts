import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
// import * as  publicoJson from '../data/public.json';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent  implements OnInit {

  public publico: any[];
  public privado: any[];

  constructor(private http: HttpClient) {
    this.http.get('./assets/data/public.json').subscribe((res: any) => this.publico = res);

    this.http.get('./assets/data/private.json').subscribe((res: any) => this.privado = res);
}

  ngOnInit() {

  }


}
