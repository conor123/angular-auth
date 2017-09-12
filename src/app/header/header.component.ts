import { Component } from '@angular/core';

import { AppComponent } from '../app.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  private title: string;
  constructor(appComponent: AppComponent){
    this.title = appComponent.title;
  }
  setData(){}
  getData(){}
}
