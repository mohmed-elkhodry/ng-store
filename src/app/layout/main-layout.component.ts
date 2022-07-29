import { UiService } from './../shared/services/ui.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit {

  constructor(public uiSer: UiService) { }

  ngOnInit(): void {
  }

}
