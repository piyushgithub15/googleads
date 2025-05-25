const express = require('express');
const router = express.Router();
const googleAdsController = require('../controllers/googleAdsController');

router.get('/campaigns', googleAdsController.listCampaigns);
router.post('/campaigns', googleAdsController.createCampaign);
router.put('/campaigns/:id', googleAdsController.updateCampaign);
router.delete('/campaigns/:id', googleAdsController.deleteCampaign);

module.exports = router; 