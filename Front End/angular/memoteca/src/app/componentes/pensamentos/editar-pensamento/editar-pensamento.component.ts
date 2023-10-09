import { Router, ActivatedRoute } from '@angular/router';
import { PensamentoService } from './../pensamento.service';
import { Pensamento } from './../pensamento';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { minusculoValidator } from 'src/app/validators/minusculo.validator';

@Component({
  selector: 'app-editar-pensamento',
  templateUrl: './editar-pensamento.component.html',
  styleUrls: ['./editar-pensamento.component.css']
})
export class EditarPensamentoComponent implements OnInit {

  formulario!: FormGroup;

  constructor(
    private service: PensamentoService,
    private router: Router,
    private route: ActivatedRoute,
    private FormBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.service.buscarPorId(parseInt(id!)).subscribe((pensamento) => {
      this.formulario = this.FormBuilder.group({
        id: [pensamento.id],
        conteudo: [pensamento.conteudo,
          Validators.compose([
          Validators.required,
          Validators.pattern(/(.|\s)*\S(.|\s)*/),
          minusculoValidator,
        ])],
        autoria:  [pensamento.autoria,
          Validators.compose([
          Validators.required,
          Validators.minLength(3)
        ])],
        modelo: [pensamento.modelo],
        favorito: [pensamento.favorito],
      })
    })
  }

  editarPensamento() {
    this.service.editar(this.formulario.value).subscribe(() => {
      this.router.navigate(['/listarPensamento'])
    })
  }

  habilitarBotao():string {
    return this.formulario.valid ? 'botao' : 'botao__desabilitado';
  }

  cancelar() {
    this.router.navigate(['/listarPensamento'])
  }

}
