import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { AuthServiceService } from './../../../service/auth-service.service'

@Component({
  selector: 'app-buisness-development-executive-uk',
  templateUrl: './buisness-development-executive-uk.component.html',
  styleUrls: ['./buisness-development-executive-uk.component.css']
})
export class BuisnessDevelopmentExecutiveUkComponent implements OnInit {

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
