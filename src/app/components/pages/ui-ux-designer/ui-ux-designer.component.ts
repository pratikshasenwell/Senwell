import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { AuthServiceService } from './../../../service/auth-service.service'

@Component({
  selector: 'app-ui-ux-designer',
  templateUrl: './ui-ux-designer.component.html',
  styleUrls: ['./ui-ux-designer.component.css']
})
export class UiUxDesignerComponent implements OnInit {

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
    const php = `/UI/${event.target.files[0].name}`;
    this.authService.UploadCandidateFile(event,php)
   }
  saveReactcandidate() {
    debugger
    // this.ReactCandidate.patchValue({file:this.authService.docDownloadUrl$.value})
    this.authService.SaveCandidateData({formdata:this.ReactCandidate.value,downloadurl:this.authService.docDownloadUrl$.value})
  }

}
