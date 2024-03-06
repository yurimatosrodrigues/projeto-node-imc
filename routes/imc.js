var express = require('express');
var router = express.Router();

router.post('/calculate', function(req, res, next) {
    var imc = calculateImc(req.body.weight, req.body.height);        
    var imcTranslated = translateImc(imc);

    res.json({
        height: req.body.height,
        weight: req.body.weight,
        imc: imc,
        imcDescription: imcTranslated
    });
});


function calculateImc(weight, height){
    return weight / (height * height);
}

function translateImc(imc) {
    if (imc < 18.5) return 'magreza';
    if (imc < 24.9) return 'normal';
    if (imc < 30.0) return 'sobrepeso';
    else return 'obesidade';
}

module.exports = router;