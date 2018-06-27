import { Component, OnInit } from '@angular/core';

//import { DATAService } from '../d-ata.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  itemcount =  4;

  btnv = 'dd butt';
  gt = ' ';

  g = [];

  constructor(){}// private _DATA: DATAService) { }

  ngOnInit() {
    this.itemcount = this.g.length;
  //  this._DATA.go.subscribe(res => this.g = res);
    // this._DATA.changeg(this.g);
  }

  additem() {
    this.g.push(this.gt);
    this.gt = '';
    this.itemcount = this.g.length;
   // this._DATA.changeg(this.g);
  }

  removei(i) {
    this.g.splice(i, 1);
    // this._DATA.changeg(this.g);
  }

}
