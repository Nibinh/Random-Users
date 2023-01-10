import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-randompage',
  templateUrl: './randompage.component.html',
  styleUrls: ['./randompage.component.css']
})
export class RandompageComponent implements OnInit{

  contacts:any
  user:any

  constructor(private api:ApiService){}

  ngOnInit(): void {
    this.userGet()
  }

  userGet(){
    this.api.apiCall()
    .subscribe((data:any)=>{
      this.contacts=data.users
      this.randomUsers()
    })
  }

  randomUsers(){
    var index= Math.floor(Math.random() * this.contacts.length)+1
    this.user=this.contacts[index]
  }
  
  refresh(){
    this.randomUsers()
  }



}
