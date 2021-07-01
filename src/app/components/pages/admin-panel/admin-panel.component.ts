import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { Router } from '@angular/router';
import { MyserviceService } from '../../../myservice.service';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css'],
  providers: [MyserviceService]
})
export class AdminPanelComponent {
  
 
  constructor(private service: MyserviceService,  private routes: Router) { }
  
  msg;
    ngOnInit() {
    }
    check(uname: string, p : string)
    {
      var output = this.service.checkusernameandpassword(uname, p);
      if(output == true)
      {
        this.routes.navigate(['/Dashboard']);
      }
      else{
  this.msg ='Invalid username or password';
      }
    }
    signin: FormGroup = new FormGroup({
      email: new FormControl('', [Validators.email, Validators.required ]),
     password: new FormControl('', [Validators.required, Validators.min(6) ])
    });
    hide = true;
     }  
  
  
//   constructor(private route:Router) { }
//    loginuser(formdata:any){
//     debugger

//     if(formdata.value.email==="hr@senwellsys.com" && formdata.value.password==="12345")
//     {
      
//       alert("welcome");
//       this.route.navigate(['/Dashboard']); 
  
//      }
//     else
//     {
     
//       alert("sorry")

//     }
   

//    }

//  signin: FormGroup = new FormGroup({
//    email: new FormControl('', [Validators.email, Validators.required ]),
//   password: new FormControl('', [Validators.required, Validators.min(6) ])
//  });
//  hide = true;
//   }  



