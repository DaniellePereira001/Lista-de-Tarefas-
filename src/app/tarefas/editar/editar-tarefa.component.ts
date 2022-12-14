import { Component, OnInit, ViewChild } from '@angular/core';

import { NgForm,} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { TarefaService, Tarefa} from '../shared'

@Component({
  selector: 'app-editar-tarefa',
  templateUrl: './editar-tarefa.component.html',
  styleUrls: ['./editar-tarefa.component.css']
})
export class EditarTarefaComponent implements OnInit {

  @ViewChild('fromTarefa', { static: true}) fromTarefa: NgForm;
  tarefa: Tarefa;

  constructor(
    private tarefaService: TarefaService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.tarefa = this.tarefaService.buscarPorId(id);
  }

  atualizar(): void {
    if (this.fromTarefa.form.valid){
      this.tarefaService.atualizar(this.tarefa);
      this.router.navigate(['/tarefa'])
    }
  }


}
