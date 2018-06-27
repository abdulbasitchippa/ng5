import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router} from '@angular/router';
// import { DATAService } from '../d-ata.service';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  g: any;

  constructor(private route: ActivatedRoute, private router: Router){// , private _DATA: DATAService) {
    this.route.params.subscribe(res => console.log(res.id));
  }

  ngOnInit() {
//  this._DATA.go.subscribe(res => this.g = res);
  }

  sndmehome() {
    this.router.navigate(['']);
  }

}
