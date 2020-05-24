export class Historico {
  linha: number;
  aportes: number;
  jurosMes: number;
  jurosAcumulados: number;
  montante: number;

  constructor(
    linha: number,
    aportes: number,
    jurosMes: number,
    jurosAcumulados: number,
    montante: number
  ){
    this.linha = linha;
    this.aportes = aportes;
    this.jurosMes = jurosMes;
    this.jurosAcumulados = jurosAcumulados;
    this.montante = montante;
  }
}
