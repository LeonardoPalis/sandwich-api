const express = require('express')
const app = express()
let bodyParser = require('body-parser')
import ingredientsService from './services/IngredientService';

app.use(function(req, res, next) { res.header('Access-Control-Allow-Origin', '*'); res.header('Access-Control-Allow-Origin', '*');  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, x-access-token'); next(); });
app.use(bodyParser.json());
app.use(express.static('build'));

app.get('/api/v1/ingredients', function (req, res) {
  ingredientsService.fullValues().then((data)=>{
    res.send(data);
  });


})

let port = process.env.PORT || 4000;

app.set('port', port);

app.listen(4000, function () {
  console.log('Listening on port ' + port);
})
