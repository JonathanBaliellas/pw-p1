import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CarrinhoService } from '../carrinho.service';
import { IProdutoCarrinho } from '../produtos';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent {
  itensCarrinho: IProdutoCarrinho[] = [];
  total: number = 0.00;

  constructor(
    public carrinhoService: CarrinhoService,
    private router: Router
  ){}

  ngOnInit():void{
    this.consultarCarrinho();
    this.calcularTotal();
  }

  removerItem(itemId: number){
    this.carrinhoService.removerCarrinho(itemId);
    this.consultarCarrinho();
    this.calcularTotal();
  }

  calcularTotal(){
    this.total = this.itensCarrinho.reduce((prev, curr) => prev + (curr.preco * curr.quantidade), 0);
  }

  consultarCarrinho(){
    this.itensCarrinho = this.carrinhoService.obterCarrinho();
  }

  atualizarCarrinho(){
    this.carrinhoService.atualizarCarrinho();
  }

  comprar(){
    alert('Obrigado pela compra!');
    this.carrinhoService.limparCarrinho();
    this.router.navigate(['produtos']);
  }

  limparCarrinho(){
    this.carrinhoService.limparCarrinho();
    this.consultarCarrinho();
  }
}
