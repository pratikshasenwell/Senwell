import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms'
import { AuthServiceService } from './../../../service/auth-service.service'
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { PopupcComponent } from '../popupc/popupc.component';
interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-ios-developer',
  templateUrl: './ios-developer.component.html',
  styleUrls: ['./ios-developer.component.css']
})
export class IosDeveloperComponent implements OnInit {
  email = new FormControl('', [Validators.required, Validators.email]);
  ReactCandidate: FormGroup;

  foods: Food[] = [
    {value: 'Fresher', viewValue: 'Fresher'},
    {value: '1-2 year', viewValue: '1-2 year'},
    {value: '2-3 year', viewValue: '2-3 year'},
    {value: '3-4 year', viewValue: '3-4 year'},
    {value: '4-5 year', viewValue: '4-5 year'},
    {value: '5+  year', viewValue: '5+  year'},

  ];
  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  fileInfo: string;
// registerForm: FormGroup;
//ReactCandidate: FormGroup
submitted = false;
City: any = ['1 year', '2 year', '3 year', '4 year','5+ year']

constructor(private fb: FormBuilder, private authService: AuthServiceService,public dialog: MatDialog,private http: HttpClient) {

this.ReactCandidate = this.fb.group({

  name: ['',Validators.required,],

  Email: ['',[Validators.required, Validators.email]],

  Company: ['',Validators.required,],

  CTC: ['',Validators.required,],
  dropDown: ['',Validators.required,],
  
  file: ['', [Validators.required]],
    
});






 }
openDialog() {
    this.dialog.open(PopupcComponent);
  }
  



  


ngOnInit() {

}

getsf(){
  return this.ReactCandidate.controls;
}
   
onFileChange(event) {

  if (event.target.files.length > 0) {
    const file = event.target.files[0];
    this.ReactCandidate.patchValue({
      fileSource: file
    });
  }
}
   
submit(data){
  const formData = new FormData();
  formData.append('file', this.ReactCandidate.get('fileSource').value);
    console.log(data)
}



onFileSelect(input: HTMLInputElement): void {

  function formatBytes(bytes: number): string {
    const UNITS = ['Bytes', 'kB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
    const factor = 1024;
    let index = 0;

    while (bytes >= factor) {
      bytes /= factor;
      index++;
    }

    return `${parseFloat(bytes.toFixed(2))} ${UNITS[index]}`;
  }

  const file = input.files[0];
  this.fileInfo = `${file.name} (${formatBytes(file.size)})`;
}



get f() { return this.ReactCandidate.controls; }
 
  
 
onSubmit(): void {
    this.submitted = true;

    // stop here if form is invalid
    if (this.ReactCandidate.invalid) {
        return;
    }

    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.ReactCandidate.value))
}

uploadCandidateCv(event: any) {
    const php = `/ios-developers/${event.target.files[0].name}`;
    this.authService.UploadCandidateFile(event,php)
  }
  saveReactcandidate() {
    this.openDialog()
    this.authService.SaveCandidateData({formdata:this.ReactCandidate.value,downloadurl:this.authService.docDownloadUrl$.value})
  }

}
