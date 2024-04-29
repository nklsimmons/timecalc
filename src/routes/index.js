var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  // ex.
  // /?start[]=02-26-2024&end[]=03-24-2024&start[]=04-05-2024&end[]=05-05-2024&start[]=05-11-2024&end[]=05-18-2024

  const nIntervals = req.query.start.length;
  
  const diffArray = [];

  for (let i=0; i<nIntervals; i++) {
    const start = req.query.start[i];
    const end = req.query.end[i];

    const startDate = new Date(start);
    const endDate = new Date(end);

    const diffInMilliseconds = endDate - startDate;
    const diffInDays = diffInMilliseconds / 86400000;

    diffArray.push(diffInDays);
  }
  
  res.json({
    "input": req.query, 
    "diffs": diffArray,
    "diffSum": diffArray.reduce((partial, a) => partial + a, 0)
  });
});

module.exports = router;
