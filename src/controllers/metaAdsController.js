const metaAdsService = require('../services/metaAdsService');
const logger = require('../utils/logger');

class MetaAdsController {
  async listCampaigns(req, res) {
    try {
      const campaigns = await metaAdsService.listCampaigns();
      res.json(campaigns);
    } catch (error) {
      logger.error('Error in listCampaigns controller:', error);
      res.status(500).json({ error: error.message });
    }
  }

  async createCampaign(req, res) {
    try {
      const campaign = await metaAdsService.createCampaign(req.body);
      res.status(201).json(campaign);
    } catch (error) {
      logger.error('Error in createCampaign controller:', error);
      res.status(500).json({ error: error.message });
    }
  }

  async updateCampaign(req, res) {
    try {
      const { id } = req.params;
      const campaign = await metaAdsService.updateCampaign(id, req.body);
      res.json(campaign);
    } catch (error) {
      logger.error('Error in updateCampaign controller:', error);
      res.status(500).json({ error: error.message });
    }
  }

  async deleteCampaign(req, res) {
    try {
      const { id } = req.params;
      await metaAdsService.deleteCampaign(id);
      res.status(204).send();
    } catch (error) {
      logger.error('Error in deleteCampaign controller:', error);
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = new MetaAdsController(); 