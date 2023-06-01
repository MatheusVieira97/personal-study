import { Router } from '@angular/router';
import { PensamentoService } from './../pensamento.service';
import { Pensamento } from './../pensamento';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { minusculoValidator } from 'src/app/validators/minusculo.validator';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.css']
})
export class CriarPensamentoComponent implements OnInit {

  formulario!: FormGroup;

  constructor(
    private service: PensamentoService,
    private router: Router,
    private FormBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.formulario = this.FormBuilder.group({
      conteudo: ['', Validators.compose([
        Validators.required,
        Validators.pattern(/(.|\s)*\S(.|\s)*/),
        minusculoValidator,
      ])],
      autoria:  ['', Validators.compose([
        Validators.required,
        Validators.minLength(3)
      ])],
      modelo: ['modelo1'],
      favorito: [false],
    })
  }

  criarPensamento() {
    if( this.formulario.valid ) {
      this.service.criar(this.formulario.value).subscribe(() => {
        this.router.navigate(['/listarPensamento'])
      })
    }
  }

  habilitarBotao():string {
    return this.formulario.valid ? 'botao' : 'botao__desabilitado';
  }

  cancelar() {
    this.router.navigate(['/listarPensamento'])
  }

}