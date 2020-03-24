// export class Routes {
 import * as se from './seats';
    

     export function home(req, res){
       return res.json( [{'status' : "Success",
          'data' : "Hello World"
    }])

    }

    export function yeah(req, res){
        return res.json(
            {
                'status' : "success",
                'data'   : "hell yeah"
            })
    }

    export function seats(req, res){
        let seats = new se.seats(2, 4);
        res.json({
            'status' : 'success',
            'data'   : seats.getAllSeats()
        })
    }
    


// }