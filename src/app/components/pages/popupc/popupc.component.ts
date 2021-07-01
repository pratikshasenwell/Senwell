import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'; 


@Component({
  selector: 'app-popupc',
  templateUrl: './popupc.component.html',
  styleUrls: ['./popupc.component.css']
})
export class PopupcComponent implements OnInit {
  email:string;
  password:string;

  constructor(private route:Router) { }

  ngOnInit(): void {
  }
  // loginuser(){
  //     if(this.email=="hr@senwellsys.com" && this.password=="12345")
  //     {
        
  //       this.route.navigate(['/home']); 
  //       alert("welcome");

  //      }
  //     else
  //     {
        
  //       alert("sorry")

  //     }
     
  
  //   }
  

}
