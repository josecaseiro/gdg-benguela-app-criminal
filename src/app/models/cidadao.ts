export class Cidadao {
    constructor(
        public nome:string,
        public idade:number,
        public sexo:string,
        public id:string | null = null,
    ) {
        
    }
}