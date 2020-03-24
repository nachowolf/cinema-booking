export class seats{

    private rows: number;
    private columns: number;

    constructor(rows:number, columns: number){
        this.columns = columns;
        this.rows = rows;
    }

     getAllSeats(){
         let aSeats = []
         for(let y = 0; y < this.rows; ++y){
             for(let x = 0; x < this.columns; ++x){
                  aSeats.push({'seat row' : y, 'seat column' : x})
             }
         }
         console.log("here -> " + aSeats)
         return aSeats;
     }
}