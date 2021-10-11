const express = require('express');
const router = express.Router();

const airlineRoutes = require('./airline.routes');
const passengerRoutes = require('./passenger.routes');

router.use('/airlines',airlineRoutes);
router.use('/passenger',passengerRoutes);

module.exports = router;
