import express from 'express';
import * as Routes from './Routes' ;
import * as CinemaRoutes from './CinemaRoutes';


const app = express();
const port = 3000;
const route =  Routes;
const cr = new CinemaRoutes.CinemaRoutes();

app.get('/', route.home);
app.get('/a', route.yeah);
app.get('/seats', route.seats);

app.get('/cinema', cr.home)



app.listen(port, err => {
  if (err) {
    return console.error(err);
  }
  return console.log(`server is listening on ${port}`);
});