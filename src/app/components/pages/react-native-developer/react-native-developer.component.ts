import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { AuthServiceService } from './../../../service/auth-service.service'
@Component({
  selector: 'app-react-native-developer',
  templateUrl: './react-native-developer.component.html',
  styleUrls: ['./react-native-developer.component.css']
})
export class ReactNativeDeveloperComponent implements OnInit {

  siteKey: string;
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
    this.siteKey = '6Lc6gAsbAAAAAIbI2AbvKITD9p7wWyhhaJ14uCO2';
  }
  uploadCandidateCv(event: any) {
    // 
    this.authService.UploadCandidateFile(event).subscribe(url => {
      this.ReactCandidate.get('file').setValue(url)
    })
  }
  saveReactcandidate() {
    this.authService.SaveCandidateData(this.ReactCandidate.value)
  }

}
