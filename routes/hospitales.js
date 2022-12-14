/* 
    Hospitales
    Ruta: /api/hospital
*/

const { Router } = require('express');
const { check } = require('express-validator');
const { validarJWT } = require('../middlewares/validar-jwt');
const { getHospitales, crearHospital, actualizarHospital, borrarHospital } = require('../controllers/hospitales');
const { validarCampos } = require('../middlewares/validar-campos');

const router = Router();

router.get( '/', getHospitales );

router.post( '/', [
    validarJWT,
    check('nombre', 'El nombre del hospital es necesario').not().isEmpty(),
    validarCampos
], crearHospital );

router.put( '/:id', [
    check('nombre', 'El nombre del hospital es necesario').not().isEmpty(),
    validarJWT
], actualizarHospital );

router.delete( '/:id', validarJWT, borrarHospital );

module.exports = router;