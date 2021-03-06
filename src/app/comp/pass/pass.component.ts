import { Component, OnInit } from '@angular/core';
import { PassDataService} from '../../services/pass-data.service';
import {PassModel} from '../../models/passModel';
import {MatFormFieldControl} from '@angular/material';

@Component({
  selector: 'app-pass',
  templateUrl: './pass.component.html',
  styleUrls: ['./pass.component.scss']
})
export class PassComponent implements OnInit {
  passData: PassModel[];
  panelOpenState = false;
  item: PassModel = {
    outlet: '',
    username: '',
    password: '',
    hint: ''
  };
  constructor(private passDbService: PassDataService) { }

  ngOnInit() {
    this.passDbService.getData().subscribe(data => {
      this.passData = data;
    });
  }

  onSubmit(event, item) {
    if (this.item.outlet !== '' && this.item.password !== '') {
      this.passDbService.addItem(this.item);
      this.item.outlet = '';
      this.item.password = '';
      this.item.username = '';
      this.item.hint = '';
    }
  }

  removeCred(event, item) {
    this.passDbService.removeItem(item);
  }

}
