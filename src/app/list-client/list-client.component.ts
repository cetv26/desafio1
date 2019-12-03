import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../service/firebase.service';
import { Router, Params } from '@angular/router';



@Component({
  selector: 'app-list-client',
  templateUrl: './list-client.component.html',
  styleUrls: ['./list-client.component.css']
})
export class ListClientComponent implements OnInit {
  items: Array<any>;
  constructor(
    public firebaseService: FirebaseService,
    private router: Router
  ) { }

  ngOnInit() {
    this.firebaseService.getClients()
    .subscribe(result => {
      console.log(result)
      this.items = result;
      this.items.forEach( (item, index) => {
          console.log(item.payload.doc.data().name)
      });
    })
  }


  getMuerte(item: string) {
    try{
    return (parseInt(item.split("-")[0])+75) + item.substr(4);
    }catch {

    }
  }

}
