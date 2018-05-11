var express = require('express');
var bodyparser = require('body-parser');
var cors = require('cors');
var app = express();

app.use(cors());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({
  extended: true
}));

var Curriculums = [{
  id: 1,
  curriculum: 'CoE'
}, {
  id: 2,
  curriculum: 'TE'
}, {
  id: 3,
  curriculum: 'FIS'
}];

app.route('/api/curriculums')
  .get((req, res) => {
    res.send(Curriculums)
  })

  .post((req, res) => {
    var newcurriculum = req.body.curriculum;
    Curriculums.push({
      id: Curriculums.length + 1,
      curriculum: newcurriculum
    });
    res.send(Curriculums);
  })

app.delete('/api/curriculums/:curriculum_id', (req, res) => {
  var id = req.params.curriculum_id;
  for (var i = 0; i < Curriculums.length; i++) {
    if (Curriculums[i].id == id)
      Curriculums.splice(i, 1)
  }
  res.send(Curriculums);
});

app.listen(8000)
console.log('Listen in Port 8000')
