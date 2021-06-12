import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';

import { ListService } from '../list.service';
declare var Swal: any;
const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 1500,
  timerProgressBar: true,
  didOpen: (toast: any) => {
    toast.addEventListener('mouseenter', Swal.stopTimer)
    toast.addEventListener('mouseleave', Swal.resumeTimer)
  }
})

@Component({
  selector: 'app-editlist',
  templateUrl: './editlist.component.html',
  styleUrls: ['./editlist.component.css']
})
export class EditListComponent implements OnInit {
  formData = {id:"", name : "",age: "",country : "",position: "",wage: "111111111111111"};
  id:any = this.route.snapshot.paramMap.get('id');
  constructor(private route: ActivatedRoute,private listService:ListService,private router: Router) { }

  ngOnInit(): void {
    
    this.getProduct();

  }

  getProduct(){

    
    this.listService.getList(this.id).subscribe(
      (data:any) => {

        if(data){
          this.formData = data[0];
        }else{
          Toast.fire({
            icon: 'error',
            title: 'No Record Found'
          });
          this.router.navigate(['/list']);
        }
        
        
      }
    )


    
  }

  updateFormData(){

    if(this.validateForm()){
      this.listService.updateFormData(this.formData).subscribe(
        (data:any) => {
          // console.log(data);
          Toast.fire({
            icon: 'success',
            title: 'Record Successfully Updated'
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
