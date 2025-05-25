const googleAdsAnalyticsService = require('../services/googleAdsAnalyticsService');
const logger = require('../utils/logger');

class GoogleAdsAnalyticsController {
  async getCampaignMetrics(req, res) {
    try {
      const { campaignId } = req.params;
      const { startDate, endDate } = req.query;
      const dateRange = `LAST_${endDate - startDate}_DAYS`;
      
      const metrics = await googleAdsAnalyticsService.getCampaignMetrics(campaignId, dateRange);
      res.json(metrics);
    } catch (error) {
      logger.error('Error in getCampaignMetrics controller:', error);
      res.status(500).json({ error: error.message });
    }
  }

  async getAccountMetrics(req, res) {
    try {
      const { startDate, endDate } = req.query;
      const dateRange = `LAST_${endDate - startDate}_DAYS`;
      
      const metrics = await googleAdsAnalyticsService.getAccountMetrics(dateRange);
      res.json(metrics);
    } catch (error) {
      logger.error('Error in getAccountMetrics controller:', error);
      res.status(500).json({ error: error.message });
    }
  }

  async getKeywordMetrics(req, res) {
    try {
      const { campaignId } = req.params;
      const { startDate, endDate } = req.query;
      const dateRange = `LAST_${endDate - startDate}_DAYS`;
      
      const metrics = await googleAdsAnalyticsService.getKeywordMetrics(campaignId, dateRange);
      res.json(metrics);
    } catch (error) {
      logger.error('Error in getKeywordMetrics controller:', error);
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = new GoogleAdsAnalyticsController(); 