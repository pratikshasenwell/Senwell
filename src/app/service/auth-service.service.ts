import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  docDownloadUrl$ = new BehaviorSubject({ url: "" })
  constructor(private firestore: AngularFirestore, private angularFireStorage: AngularFireStorage) { }
  SaveCandidateData(candidatedata: any) {
    debugger

    this.firestore.collection('employee').doc().set({ candidatedata })
  }
  UploadCandidateFile(file: any) {
    const filePath = `/uploads/${file.target.files[0].name}`;
    const storageRef = this.angularFireStorage.ref(filePath);
    const uploadTask = this.angularFireStorage.upload(filePath, file);
    
    let url = storageRef.getDownloadURL().subscribe(data => {
      this.docDownloadUrl$.next(data)
    })

  }
}
