import { Component, OnInit, isDevMode } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.scss']
})
export class RootComponent implements OnInit {

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
        'almundo',
        sanitizer.bypassSecurityTrustResourceUrl('../../../assets/icons/logo-almundo.svg'));
  }


  ngOnInit() {

    if (isDevMode()) {
      console.log('👋 Development!');
    } else {
      console.log('💪 Production!');
    }
  }

}
