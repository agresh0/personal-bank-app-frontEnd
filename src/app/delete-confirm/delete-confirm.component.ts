import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-delete-confirm',
  templateUrl: './delete-confirm.component.html',
  styleUrls: ['./delete-confirm.component.css']
})
export class DeleteConfirmComponent implements OnInit {

  // to recive values from parent use input in child
 @Input() item:string | undefined
 @Input () serverMsg:string | undefined

//  onCancel is a user defined event
// to send values from child to parent
@Output() onCancel = new EventEmitter

@Output () onDelete = new EventEmitter


  constructor() { }

  ngOnInit(): void {
  }

  // cancel function
  cancel(){
    // occur the onCancel event here using emit()
    this.onCancel.emit()
    
  }

  deleteChild(){
    let deleteConfirm = true
    this.onDelete.emit([this.item,deleteConfirm])
  }

}
