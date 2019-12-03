import { Component, OnInit, EventEmitter, Output} from '@angular/core';
import { FirebaseService } from '../service/firebase.service';
import {Client} from '../model/client.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private router: Router, public firebaseService: FirebaseService) { 
    
  }
  addForm: FormGroup;
  @Output()
  createUsercontact = new EventEmitter<Client>();

 dateRegex = /[12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])/;
 numRegex = /^0|[1-9]\d*$/;
  ngOnInit() {
    this.addForm = this.formBuilder.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      edad: ['', [Validators.required,Validators.pattern(this.numRegex)]],
      fecNac: ['', [Validators.required, Validators.pattern(this.dateRegex)]]
    });
  }

  isInvalid(name: string) {
    const control = this.addForm.get(name);
    return control.invalid && control.dirty;
  }

  isDateInvalid(name: string) {
    const control = this.addForm.get(name);
    return control.invalid && control.dirty;
  }
  isNumericInvalid(name: string) {
    const control = this.addForm.get(name);
    return control.invalid && control.dirty;
  }
  onSubmit() {
    console.log(this.addForm.value)
    if (this.addForm.invalid) {
      return;
    }
    this.firebaseService.addUser(this.addForm.value);
    this.router.navigate(['']);
  }

}
