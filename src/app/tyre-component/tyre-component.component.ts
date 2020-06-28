import { Component, OnInit } from '@angular/core';
import { TyreService } from '../tyre.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tyre-component',
  templateUrl: './tyre-component.component.html',
  styleUrls: ['./tyre-component.component.css']
})
export class TyreComponentComponent implements OnInit {

  makeBy: string = "";
  response: any;
  constructor(private http:HttpClient) { 
  }

  ngOnInit(): void {
  }

  searchByMake()
  {
    console.log(this.makeBy);
    this.response = this.http.get("http://localhost:8080/getByMakeBy?makeBy=" + this.makeBy)
    .subscribe((response) => {
        this.response = response;
        console.log("Success", this.response);
      },
      (error)=>{
        console.log("error", error)
      }
    );

  }
    

}
