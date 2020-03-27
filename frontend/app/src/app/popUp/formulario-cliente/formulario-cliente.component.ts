import { Component, OnInit, Input } from '@angular/core';
import {ClientesService} from '../../services/clientes.service';
import { FormControl, Validators, FormBuilder, FormGroup } from '@angular/forms';
import {NotificacionComponent} from '../../popUp/notificacion/notificacion.component';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {ClienteDTO} from '../../DTO/cliente-dto'
import {Cliente} from '../../model/cliente';
@Component({
  selector: 'app-formulario-cliente',
  templateUrl: './formulario-cliente.component.html',
  styleUrls: ['./formulario-cliente.component.scss']
})
export class FormularioClienteComponent implements OnInit {
@Input() titulo:string;
@Input() editar:boolean;
@Input() editCliente:Cliente;

forma: FormGroup; 
  nombre:string;
  apellido:string;
  email:string;
  id:number;
  constructor(private clienteService:ClientesService,private modalService: NgbModal,private fb: FormBuilder,private activeModal: NgbActiveModal) { 
    this.forma=new FormGroup({
      'nombre':new FormControl('',[Validators.required,
                                  Validators.minLength(3)]),
      'apellido':new FormControl('',[Validators.required,
                                  Validators.minLength(3)]),
      'email':new FormControl('',[Validators.required,
        Validators.pattern('[a-zA-Z0-9_.+-]+@[gG][mM][aA][iI][lL]+.[cC][oO][mM]') && Validators.pattern('[a-zA-Z0-9_.+-]+@[sS][dD][cC]+.[cC][oO][mM]+.[aA][rR]')
                                ]),
      });
  }

  ngOnInit(): void {
    console.log(this.titulo);
  console.log(this.editar);
    if(this.editar){
      console.log("cliente edit",this.editCliente.id);
      this.nombre = this.editCliente.nombre;
      console.log(this.nombre);
      this.apellido = this.editCliente.apellido;
      console.log(this.apellido);
      this.email = this.editCliente.email;
      console.log(this.email);    
      this.id=this.editCliente.id;
      console.log(this.id);
      
      
      } 
  
  }
  
  closeModal(){
    this.activeModal.close();
  }

  agregarCliente(){
    console.log("entre al formulario");
      
        const cliente = new ClienteDTO();        
        cliente.apellido = this.apellido;
        console.log(this.apellido);
        cliente.nombre = this.nombre;
        console.log(this.apellido);
        cliente.email=this.email;
        console.log(this.email);
        console.log(cliente);
        
       this.clienteService.agregarCliente(cliente).subscribe((resp) => { 
         
        console.log(resp);
        let id = resp;
       
          }); this.closeModal();
            const modalref = this.modalService.open(NotificacionComponent);
           modalref.componentInstance.titulo = 'El proyecto se ha agregado exitosamente.';  
    }
    editarCliente(){
      console.log(this.editCliente.id);
      const editeCliente=new ClienteDTO();
      editeCliente.nombre=this.nombre;
      editeCliente.apellido=this.apellido;
      editeCliente.email=this.email;
      this.clienteService.editarCliente(this.id,editeCliente).subscribe(data=>{
        console.log(data);
        const modalref = this.modalService.open(NotificacionComponent);
        modalref.componentInstance.titulo = 'El proyecto se ha editado exitosamente.';
        this.closeModal();  
      })
    }
  
  
}
