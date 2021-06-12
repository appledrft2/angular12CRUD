import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

import { ListService } from '../list.service';

declare var Swal: any;
const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 2000,
  timerProgressBar: true,
  didOpen: (toast: any) => {
    toast.addEventListener('mouseenter', Swal.stopTimer)
    toast.addEventListener('mouseleave', Swal.resumeTimer)
  }
})

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddListComponent implements OnInit {
  formData = {name : "",age: "",country : "",position: "",wage: ""};

  constructor(private listService:ListService,private router: Router) { }

  ngOnInit(): void {

  
  }

  addFormData(){

    if(this.validateForm()){
      this.listService.addFormData(this.formData).subscribe(
        (data:any) => {
          console.log(data);
          Toast.fire({
            icon: 'success',
            title: data.message
          });
          this.router.navigate(['/list']);


        }
      );
    }

 
  }

  validateForm(){
    if(this.formData.name != '' && this.formData.age != '' && this.formData.country != '' && this.formData.position != ''  && this.formData.wage != '' ){
      return true;
    }else{
      Toast.fire({
        icon: 'error',
        title: 'Please fill in required fields.'
      })
      return false;
    }
  }



}
