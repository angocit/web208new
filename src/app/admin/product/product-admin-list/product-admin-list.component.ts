import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ConfirmationService, MessageService, ConfirmEventType } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { ConfirmDialogModule } from 'primeng/confirmdialog'; 

@Component({
  selector: 'app-product-admin-list',
  standalone: true,
  imports: [ToastModule,ConfirmDialogModule],
  templateUrl: './product-admin-list.component.html',
  styleUrl: './product-admin-list.component.css',
  providers: [ConfirmationService, MessageService]
})
export class ProductAdminListComponent {
    constructor(private http:HttpClient,private confirmationService: ConfirmationService, private messageService: MessageService){}
    products:any;
    ngOnInit(){
      this.getAllProduct();
    }
    getAllProduct(){
        this.http.get('http://localhost:3000/products').subscribe((response)=>{
         this.products = response;
        });
    }
    handleDelProduct(pid:any,event: Event){
      // console.log('sdfsdfds');
      this.confirmationService.confirm({
        target: event.target as EventTarget,
        message: 'Are you sure that you want to proceed?',
        header: 'Confirmation',
        icon: 'pi pi-exclamation-triangle',
        acceptIcon:"none",
        rejectIcon:"none",
        rejectButtonStyleClass:"p-button-text",
        accept: () => {
          this.http.delete('http://localhost:3000/products/'+pid).subscribe((response)=>{
            this.products = response;
            this.getAllProduct();
            this.messageService.add({ severity: 'info', summary: 'Confirmed', detail: 'Bạn đã xóa thành công' });
          });             
        },
        reject: () => {
            this.messageService.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
        }
    });
      // // -------------------
      // if (confirm('Bạn muốn xóa sản phẩm này?')){
      
      // }       
    }
}
