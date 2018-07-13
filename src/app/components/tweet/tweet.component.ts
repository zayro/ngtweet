import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tweet',
  templateUrl: './tweet.component.html',
  styleUrls: ['./tweet.component.scss']
})
export class TweetComponent implements OnInit {

  constructor() { }
  @Input() keyPublic: any;
  @Input() keyPrivate: any;

  public order = 'id_str';

  ngOnInit() {
  }

}
