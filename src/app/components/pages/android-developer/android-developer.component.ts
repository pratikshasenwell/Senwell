import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { AuthServiceService } from './../../../service/auth-service.service'


@Component({
  selector: 'app-android-developer',
  templateUrl: './android-developer.component.html',
  styleUrls: ['./android-developer.component.css']
})
export class AndroidDeveloperComponent implements OnInit {
  ReactCandidate: FormGroup

  constructor(private formbuilder: FormBuilder, private authService: AuthServiceService) {
    this.ReactCandidate = this.formbuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      company: ['', Validators.required],
      ctc: ['', Validators.required],
      experience: ['', Validators.required],
      file: ['', Validators.required]

    })
  }

  ngOnInit(): void {
   
  }
  uploadCandidateCv(event: any) {
    const php = `/android-developer/${event.target.files[0].name}`;
    this.authService.UploadCandidateFile(event,php)
  }
  saveReactcandidate() {
    debugger
    // this.ReactCandidate.patchValue({file:this.authService.docDownloadUrl$.value})
    this.authService.SaveCandidateData({formdata:this.ReactCandidate.value,downloadurl:this.authService.docDownloadUrl$.value})
  }

}
