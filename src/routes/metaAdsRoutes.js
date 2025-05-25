const express = require('express');
const router = express.Router();
const metaAdsController = require('../controllers/metaAdsController');

router.get('/campaigns', metaAdsController.listCampaigns);
router.post('/campaigns', metaAdsController.createCampaign);
router.put('/campaigns/:id', metaAdsController.updateCampaign);
router.delete('/campaigns/:id', metaAdsController.deleteCampaign);

module.exports = router; 