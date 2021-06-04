import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { AuthServiceService } from './../../../service/auth-service.service'

@Component({
  selector: 'app-php-developer',
  templateUrl: './php-developer.component.html',
  styleUrls: ['./php-developer.component.css']
})
export class PhpDeveloperComponent implements OnInit {
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
    // 
    this.authService.UploadCandidateFile(event)
  }
  saveReactcandidate() {
    debugger
    // this.ReactCandidate.patchValue({file:this.authService.docDownloadUrl$.value})
    this.authService.SaveCandidateData({formdata:this.ReactCandidate.value,downloadurl:this.authService.docDownloadUrl$.value})
  }

}
