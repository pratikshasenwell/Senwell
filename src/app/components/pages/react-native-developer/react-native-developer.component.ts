import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms'
import { AuthServiceService } from './../../../service/auth-service.service'
@Component({
  selector: 'app-react-native-developer',
  templateUrl: './react-native-developer.component.html',
  styleUrls: ['./react-native-developer.component.css']
})
export class ReactNativeDeveloperComponent implements OnInit {

  // this.ReactCandidate=new ReactCandidate({

  // });

  siteKey: string;
  ReactCandidate: FormGroup



  constructor(private formbuilder: FormBuilder, private authService: AuthServiceService) {
    this.ReactCandidate = this.formbuilder.group({
      name: new FormControl('', Validators.required),
      email:new FormControl ('', [Validators.required,Validators.email]),
      company:new FormControl ('', Validators.required),
      ctc: new FormControl('', Validators.required),
      experience:new FormControl ('', Validators.required),
      file:new FormControl ('', Validators.required)

    })

    // Reactforms= new  Reactforms({

    // })
  }

  ngOnInit(): void {
    this.siteKey = '6Lc6gAsbAAAAAIbI2AbvKITD9p7wWyhhaJ14uCO2';
  }
  uploadCandidateCv(event: any) {
    const php = `/react/${event.target.files[0].name}`;
    this.authService.UploadCandidateFile(event,php)
  }
  saveReactcandidate() {
    debugger
    // this.ReactCandidate.patchValue({file:this.authService.docDownloadUrl$.value})
    this.authService.SaveCandidateData({formdata:this.ReactCandidate.value,downloadurl:this.authService.docDownloadUrl$.value})
  }

}
