import express from 'express';
import * as Routes from './Routes' ;


const app = express();
const port = 3000;
const route =  Routes;

app.get('/', route.home);
app.get('/a', route.yeah);
app.get('/seats', route.seats);



app.listen(port, err => {
  if (err) {
    return console.error(err);
  }
  return console.log(`server is listening on ${port}`);
});