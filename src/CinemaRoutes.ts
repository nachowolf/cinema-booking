export class CinemaRoutes{

    constructor(){}

    home(req, res){
        res.json(
            {
            'status' : 'success',
            'data'   : 'connected to home'
    })
    }
}