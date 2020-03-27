import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-notificacion',
  templateUrl: './notificacion.component.html',
  styleUrls: ['./notificacion.component.scss']
})
export class NotificacionComponent implements OnInit {
@Input()titulo:string;
  constructor(private activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }
  closeModal(){
    this.activeModal.close();
  }
}
