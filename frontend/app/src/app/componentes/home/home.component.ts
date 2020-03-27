import { Component, OnInit } from '@angular/core';
import { ClientesService } from './../../services/clientes.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PreguntaComponent} from './../../popUp/pregunta/pregunta.component';
import {FormularioClienteComponent} from './../../popUp/formulario-cliente/formulario-cliente.component';
import {Cliente} from '../../model/cliente';
import { ClienteDTO } from 'src/app/DTO/cliente-dto';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  clientes:any[]=[];
  constructor(private clienteService:ClientesService,private modalService: NgbModal) { }

  ngOnInit() {
    this.getClientes();
  }
  getClientes(){
    this.clienteService.getClientes().subscribe((data:any)=>{
      console.log(data);
      this.clientes=data;
    })
  }
  eliminarCliente(id:number){
    console.log(id);
    const modalref = this.modalService.open(PreguntaComponent, { windowClass: 'modal-holder', centered: true })
    modalref.componentInstance.titulo = 'Esta seguro que desea eliminar este socio?';
    modalref.componentInstance.id =id;
    modalref.result
    .then(data => {
      this.getClientes();
    });
  }
  editarCliente(cliente:ClienteDTO){
    const modalref = this.modalService.open(FormularioClienteComponent, { windowClass: 'modal-holder', centered: true })
    modalref.componentInstance.titulo = 'Editar cliente';
    modalref.componentInstance.editar = true;
    modalref.componentInstance.editCliente= cliente;
    modalref.result
    .then(data => {
      this.getClientes();
  });

  }  
  nuevoCliente(){
    console.log("formulario");
    const modalref = this.modalService.open(FormularioClienteComponent, { windowClass: 'modal-holder', centered: true })
    modalref.componentInstance.titulo = 'Nuevo cliente';
    modalref.result
    .then(data => {
      this.getClientes();
    });
  }
}  
