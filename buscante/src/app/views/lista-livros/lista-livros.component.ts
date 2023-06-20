import { Observable, Subscription, catchError, debounceTime, filter, map, of, switchMap, tap, throwError } from 'rxjs';
import { Component, OnDestroy } from '@angular/core';
import { LivroService } from 'src/app/service/livro.service';
import { Item, Livro, LivrosResultado } from 'src/app/models/interfaces';
import { LivroVolumeInfo } from 'src/app/models/livroVolumeInfo';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-lista-livros',
  templateUrl: './lista-livros.component.html',
  styleUrls: ['./lista-livros.component.css']
})
export class ListaLivrosComponent {

  livro: LivroVolumeInfo;
  listaLivros: LivroVolumeInfo[];
  campoBusca = new FormControl()
  mensagemErro: string;
  livrosResultado: LivrosResultado;
  // subscription: Subscription;

  livrosEncontrados$ = this.campoBusca.valueChanges
    .pipe(
      debounceTime(1000),
      filter(valorDigitado => valorDigitado.length > 3),
      tap(() => console.log('Fluxo inicial')),
      switchMap((valorDigitado) => this.service.buscar(valorDigitado)),
      tap(() => console.log('Requisições ao servidor')),
      map(resultado => this.livrosResultado = resultado),
      map(resultado => resultado.items ?? []),
      map((items) => this.livrosResultadoParaLivros(items)),
      catchError(erro => {
        console.log(erro)
        return of();
        // return throwError(() => new Error(this.mensagemErro = 'Ops, ocorreu um erro. Recarregue a aplicação!'))
    })
  );

  totalDeLivros$ = this.campoBusca.valueChanges
    .pipe(
        debounceTime(300),
        filter((valorDigitado) => valorDigitado.length >= 3),
        tap(() => console.log('Fluxo inicial')),
        switchMap((valorDigitado) => this.service.buscar(valorDigitado)),
        map(resultado => this.livrosResultado = resultado),
        catchError(erro => {
            console.log(erro)
            return of()
        })
    )

  constructor(
    private service: LivroService
  ) { }

  // buscarLivros() {
  //   this.subscription = this.service.buscar(this.campoBusca).subscribe({
  //     next: (items) => this.listaLivros = this.livrosResultadoParaLivros(items),
  //     error: erro => console.log(erro),
  //     complete: () => console.log('finished'),
  //   })
  // }

  livrosResultadoParaLivros(items: Item[]): LivroVolumeInfo[] {
    return items.map(item => {
      return new LivroVolumeInfo(item)
    })
  }

  // ngOnDestroy() {
  //   this.subscription.unsubscribe();
  // }
}



