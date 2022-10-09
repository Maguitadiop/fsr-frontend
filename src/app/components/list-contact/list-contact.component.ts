import { Component, OnInit } from '@angular/core';
import { Observable,Subject } from "rxjs";  
import { ContactService } from 'src/app/services/contact.service';
  
import {FormControl,FormGroup,Validators} from '@angular/forms';  
import { Contact } from 'src/app/models/contact.model';

@Component({
  selector: 'app-list-contact',
  templateUrl: './list-contact.component.html',
  styleUrls: ['./list-contact.component.css']
})
export class ListContactComponent implements OnInit {

  constructor(private contactService:ContactService) { }

  contacts: any[] = [];
  ngOnInit(): void {
    this.contactService.getContactList().subscribe(data =>{
      this.contacts = data;
    })
  }

}
