
import { animate, state, style, transition, trigger } from '@angular/animations';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';

import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AuthServiceService } from './../../../service/auth-service.service';
import{ DataSource } from '@angular/cdk/collections'
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],

})

export class DashboardComponent {
  usersInfo: any = []
  usersRowInfo: any = []
  searchText=''
  p:number=1;
  //   constructor(private AuthServiceService: AuthServiceService) {}

  studentdeatils={
    name:'',
    Email:'',
  }


  coffeeOrders: any;
  employee$ = this.AuthServiceService.getCoffeeOrders()
  //globaldata=this.



  deleteOrder(data) {

    this.AuthServiceService.deleteCoffeeOrder(data.id);
  }
  downloaddocument(url) {
    window.open(url);

  }
  addstudentdata(){
    this.AuthServiceService.addstudentdata(this.studentdeatils);
  }
  displayedColumns:string[]=['name','Email'];
  DataSource=new StudentDataSource(this.AuthServiceService)






 constructor(private AuthServiceService: AuthServiceService, private afs:AngularFirestore) {

   }

  }
  export class StudentDataSource extends DataSource <any>
  {
    constructor(private AuthServiceService:AuthServiceService)
    {
      super()
    }
    connect()
    {
      return this.AuthServiceService.getstudents();
    }
    disconnect(){

    }
  }



