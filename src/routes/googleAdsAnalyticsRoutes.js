const express = require('express');
const router = express.Router();
const googleAdsAnalyticsController = require('../controllers/googleAdsAnalyticsController');

router.get('/campaigns/:campaignId/metrics', googleAdsAnalyticsController.getCampaignMetrics);
router.get('/account/metrics', googleAdsAnalyticsController.getAccountMetrics);
router.get('/campaigns/:campaignId/keywords/metrics', googleAdsAnalyticsController.getKeywordMetrics);

module.exports = router; 