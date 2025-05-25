const express = require('express');
const router = express.Router();
const metaAdsAnalyticsController = require('../controllers/metaAdsAnalyticsController');

router.get('/campaigns/:campaignId/metrics', metaAdsAnalyticsController.getCampaignMetrics);
router.get('/account/metrics', metaAdsAnalyticsController.getAccountMetrics);
router.get('/adsets/:adSetId/metrics', metaAdsAnalyticsController.getAdSetMetrics);

module.exports = router; 