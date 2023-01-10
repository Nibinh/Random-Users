import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{

allContacts:any

  constructor(private api:ApiService){}

  ngOnInit(): void {
      this.api.apiCall()
      .subscribe((data:any)=>{
        console.log(data.users)
        this.allContacts=data.users
      })
  }

}
