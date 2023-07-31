const express = require('express');
const router = express.Router();

const contactController = require('../controllers/control')
router.get('/contacto', (req, res) => {
  const asesor = {
    nombre: '',
    celular: '',
    email: '',
  };
  const asesor2 = {
    nombre2: '',
    celular2: '',
  };
  res.json({ asesor, asesor2 });
});

router.post('/usuario', contactController.create)
module.exports = router;