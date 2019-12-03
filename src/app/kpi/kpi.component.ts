import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../service/firebase.service';
import { Router, Params } from '@angular/router';
@Component({
  selector: 'app-kpi',
  templateUrl: './kpi.component.html',
  styleUrls: ['./kpi.component.css']
})
export class KpiComponent implements OnInit {
 promedio = 0
 sd = 0
 total = 0
 constructor(
  public firebaseService: FirebaseService,
  private router: Router
) { }

  ngOnInit() {
    this.firebaseService.getClients()
    .subscribe(result => {
      result.forEach( (item, index) => {
          if(parseFloat(item.payload.doc.data()['edad'])){
            this.promedio +=parseFloat(item.payload.doc.data()['edad']);
            this.total++;
          }
      });
      this.promedio = this.promedio/this.total;

      result.forEach( (item, index) => {
        
        if(parseFloat(item.payload.doc.data()['edad'])){
          this.sd +=(parseFloat(item.payload.doc.data()['edad'])-this.promedio)*(parseFloat(item.payload.doc.data()['edad'])-this.promedio);
        }
        
    });

    this.sd =Math.sqrt(this.sd/this.total);

    })
  }

}
