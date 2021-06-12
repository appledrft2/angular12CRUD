import { Component, OnInit } from '@angular/core';
import { ListService } from '../list.service';
declare var $: any;
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
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  public employees:any = [];

  constructor(private listService:ListService) { }

  ngOnInit(): void {

    this.getList();
  }

  getList(){

    $('#datatable').DataTable().destroy();
    this.listService.getAllList().subscribe(
      (data:any) => {

        this.employees = data;
        
      }
    )

    this.table();
    
  }
  table(){
    
    setTimeout(()=>{
      $('#datatable').DataTable();
    }, 500);
    
  }

  onDelete(data:any){
    

    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result:any) => {
      if (result.isConfirmed) {

        this.listService.deleteFormData(data.id).subscribe(
          (data:any) => {
            console.log(data);

            this.getList();
          }
        );

        Toast.fire({
          icon: 'success',
          title: 'Record Successfully Deleted'
        });

      }
    });

    

  }


}
