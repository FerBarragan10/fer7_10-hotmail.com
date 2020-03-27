import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NotificacionComponent } from './../notificacion/notificacion.component';
import {ClientesService} from '../../services/clientes.service';
@Component({
  selector: 'app-pregunta',
  templateUrl: './pregunta.component.html',
  styleUrls: ['./pregunta.component.scss']
})
export class PreguntaComponent implements OnInit {
  @Input() titulo:string;
  @Input() id:number;
  constructor(private activeModal: NgbActiveModal,private modalService: NgbModal,
    private clienteService:ClientesService) { }

  ngOnInit(): void {
  }
  closeModal(){
    this.activeModal.close();
  }
  eliminarCliente(){
    console.log(this.id);
    this.clienteService.eliminaCliente(this.id).subscribe(data=>{
      console.log(data);
    })
    this.closeModal();
    const modalref = this.modalService.open(NotificacionComponent, { windowClass: 'modal-holder', centered: true })
    modalref.componentInstance.titulo = 'Se ha eliminado el socio correctamente';
  }


}
