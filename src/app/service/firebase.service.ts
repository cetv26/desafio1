import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import {Client} from '../model/client.model';
@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(public db: AngularFirestore) {}


  getClients(){
    return this.db.collection('clients').snapshotChanges();
  }

  addUser(client: Client) {
    return this.db.collection('clients').add(client);
  }

}