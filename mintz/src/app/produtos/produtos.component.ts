import { Component } from '@angular/core';
import { IProduto } from '../produtos';
import { ProdutosService } from '../produtos.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent {
  produtos: IProduto[] | undefined;

  constructor(
    private produtosService: ProdutosService,
    private route: ActivatedRoute
  ){}

  ngOnInit(): void{
    const produtos = this.produtosService.getAll();
    //Sempre que notar uma mudança no query parameter, receberá a descrição digitada na barra de busca
    this.route.queryParamMap.subscribe(params => {
      //Pega a descrição digitada e converte para letras minúsculas
      const descricao = params.get("descricao")?.toLowerCase();

      //Verifica se o produto digitado está presente na lista de produtos
      if(descricao){
        this.produtos = produtos.filter(produto => produto.descricao.toLowerCase().includes(descricao));
        return;
      }

      //Se não estiver no filtro, o atributo produtos recebe toda a lista de produtos
      this.produtos = produtos;
    });
  }
}
