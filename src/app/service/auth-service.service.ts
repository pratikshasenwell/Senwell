import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { BehaviorSubject } from 'rxjs';


//import { AngularFireList, AngularFireDatabase } from '@angular/fire/database';


@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  docDownloadUrl$ = new BehaviorSubject({ url: "" })
  downloadDocument: any;
  constructor(
    private firestore: AngularFirestore,
    private angularFireStorage: AngularFireStorage
  ) {
  }
  //employeeList:AngularFireList<any>


  SaveCandidateData(candidatedata: any) {
    debugger

    this.firestore.collection('employee').doc().set({ candidatedata })
  }
  UploadCandidateFile(file: any, filePath: any) {
    const storageRef = this.angularFireStorage.ref(filePath);
    const uploadTask = this.angularFireStorage.upload(filePath, file.target.files[0]);
    setTimeout(() => {
      let url = storageRef.getDownloadURL().subscribe(data => {
        this.docDownloadUrl$.next(data)
      })
    }, 3000)

  }

  
  getCoffeeOrders() {
    return this.firestore.collection("employee").valueChanges({ idField: "id" });
  // this.firestore.collection("employee").valueChanges({ idField: "id" });

  }

  deleteCoffeeOrder(data) {
    return this.firestore.collection("employee").doc(data).delete();

  }
  downloaddocument(doc){
    window.open(doc);

  }
  viewdocument(url){
    window.open(url);
  }
}






