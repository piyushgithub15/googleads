const metaAdsAnalyticsService = require('../services/metaAdsAnalyticsService');
const logger = require('../utils/logger');

class MetaAdsAnalyticsController {
  async getCampaignMetrics(req, res) {
    try {
      const { campaignId } = req.params;
      const { startDate, endDate } = req.query;
      const dateRange = {
        since: startDate,
        until: endDate
      };
      
      const metrics = await metaAdsAnalyticsService.getCampaignMetrics(campaignId, dateRange);
      res.json(metrics);
    } catch (error) {
      logger.error('Error in getCampaignMetrics controller:', error);
      res.status(500).json({ error: error.message });
    }
  }

  async getAccountMetrics(req, res) {
    try {
      const { startDate, endDate } = req.query;
      const dateRange = {
        since: startDate,
        until: endDate
      };
      
      const metrics = await metaAdsAnalyticsService.getAccountMetrics(dateRange);
      res.json(metrics);
    } catch (error) {
      logger.error('Error in getAccountMetrics controller:', error);
      res.status(500).json({ error: error.message });
    }
  }

  async getAdSetMetrics(req, res) {
    try {
      const { adSetId } = req.params;
      const { startDate, endDate } = req.query;
      const dateRange = {
        since: startDate,
        until: endDate
      };
      
      const metrics = await metaAdsAnalyticsService.getAdSetMetrics(adSetId, dateRange);
      res.json(metrics);
    } catch (error) {
      logger.error('Error in getAdSetMetrics controller:', error);
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = new MetaAdsAnalyticsController(); 