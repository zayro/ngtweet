import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent  implements OnInit {

  public show = true;

  public mobile = false;

  constructor(
    breakpointObserver: BreakpointObserver
  ) {

    breakpointObserver
      .observe([Breakpoints.HandsetLandscape, Breakpoints.HandsetPortrait])
      .subscribe(result => {
        if (result.matches) {
          console.log(result);
        }
      });

    const layoutChanges = breakpointObserver.observe('(max-width: 999px)');

    layoutChanges.subscribe(result => {
      if (result.matches) {
        this.mobile = true;
        this.show = false;
      } else {
        this.mobile = false;
        this.show = true;
      }

    });
  }


  HomeSearch = '';

  HomeMultFilter = {};

  ngOnInit() {

  }


  Loadsearch(info) {
    console.log('Loadsearch', info);
    this.HomeSearch = info;
  }

  LoadMultFilter(info) {
    console.log('LoadMultFilter', info);
    this.HomeMultFilter = info;

  }

}
