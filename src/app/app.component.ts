import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  myForm: FormGroup;
  data : any;
  url : string = 'https://jsonplaceholder.typicode.com/posts';
  
  constructor(private fb:FormBuilder, private http:HttpClient ){
    this.myForm = this.fb.group({
      email:['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      role:['', Validators.required],
      aboutU:['',[Validators.required, Validators.minLength(25)]]
    });
  }
  
  ngOnInit(){
    this.fetchData();
  }
  
  fetchData(){
    this.http.get(this.url).subscribe((rest)=>{
      this.data = rest;
    }
    );
  }
  onSubmit(data) {
    //alert(data.email);
    //alert(this.myForm.controls.role.value);
    //alert(this.myForm.get('aboutU').value);
    alert(this.myForm.valid);
  }
}
