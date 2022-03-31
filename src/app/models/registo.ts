export class Registo {
    constructor(
        public cidadao_id:string,
        public descricao:string,
        public inicio_pena:string,
        public termino_pena:string,
        public id:string | null = null,
    ) {
        
    }
}