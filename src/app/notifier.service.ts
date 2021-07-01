import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class NotifierService {

  constructor(private snackBar:MatSnackBar) { }
  shownotification()
  {
    this.snackBar.open('notification message','Button Text',{
      duration:5000

    })
  }
}

