import { Component, OnInit, Input } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';
import { Historico } from './../../classes/historico';

@Component({
  templateUrl: './juros-compostos.component.html',
  styleUrls: ['./juros-compostos.component.css']
})
export class JurosCompostosComponent implements OnInit {
  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: Highcharts.Options = {
    series: [{
      data: [1, 2, 3],
      type: 'line',
    }]
  };

  @Input() data = [];

  inicial = 1000;
  aporteMensal = 100;
  jurosMensal = 0.6;
  quantidadeMeses = 12;
  jurosAnual;
  quantidadeAnos = 1;

  valorTotal;
  somaJuros;
  somaAplicacoes;
  matrix: Historico[];

  constructor(
  ) { }

  ngOnInit(): void {
    this.jurosAnual = this.decimal2((Math.pow(this.jurosMensal / 100 + 1, 12) - 1) * 100);
    this.calculaJurosCompostos();

    HC_exporting(Highcharts);
    }


  decimal2(valor){
    return parseFloat(parseFloat(valor).toFixed(2));
  }

  calculaMeses(){
    this.quantidadeMeses = this.quantidadeAnos * 12;
    this.calculaJurosCompostos();
  }

  calculaAnos(){
    const valor = this.quantidadeMeses / 12;
    console.log(valor);
    this.quantidadeAnos = this.decimal2(valor);
    this.calculaJurosCompostos();
  }

  calculaJurosMensal(){
    this.jurosMensal = this.decimal2((Math.pow(this.jurosAnual / 100 + 1, 1 / 12) - 1) * 100);
  }

  calculaJurosCompostos(){
    this.matrix = new Array();
    let jurosAcumulado = 0;
    let totalAcumulado = this.inicial + 0;
    this.matrix.push(new Historico(0, this.inicial, 0, jurosAcumulado, totalAcumulado));

    let aporteTotal = this.inicial + 0;
    const jurosMensal = this.jurosMensal / 100;
    for (let i = 1; i <= this.quantidadeMeses; i++){
      const juros = totalAcumulado * jurosMensal;
      totalAcumulado += juros + this.aporteMensal;
      aporteTotal += this.aporteMensal;
      jurosAcumulado = totalAcumulado - aporteTotal;

      this.matrix.push(new Historico(i, aporteTotal, juros, jurosAcumulado, totalAcumulado));
    }
    const ultimoRegistro = this.matrix[this.matrix.length - 1];
    this.valorTotal = ultimoRegistro.montante;
    this.somaAplicacoes = ultimoRegistro.aportes;
    this.somaJuros = ultimoRegistro.jurosAcumulados;

    console.log(this.matrix);
  }



}
