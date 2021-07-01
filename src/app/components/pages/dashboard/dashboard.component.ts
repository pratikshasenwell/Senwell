
import { animate, state, style, transition, trigger } from '@angular/animations';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';

import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AuthServiceService } from './../../../service/auth-service.service';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],

})
export class DashboardComponent {

  constructor(private AuthServiceService: AuthServiceService) {}


  coffeeOrders: any;
  employee$ = this.AuthServiceService.getCoffeeOrders()

  
  deleteOrder(data) {
    
    this.AuthServiceService.deleteCoffeeOrder(data.id);
  }
  downloaddocument(url){
    window.open(url);

  }
  
  


 

}
