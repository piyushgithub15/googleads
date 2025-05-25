const { account } = require('../config/metaAds');
const logger = require('../utils/logger');

class MetaAdsService {
  async listCampaigns() {
    try {
      const campaigns = await account.getCampaigns(
        ['id', 'name', 'status', 'start_time', 'stop_time', 'daily_budget']
      );
      return campaigns;
    } catch (error) {
      logger.error('Error listing Meta Ads campaigns:', error);
      throw error;
    }
  }

  async createCampaign(campaignData) {
    try {
      const campaign = new bizSdk.Campaign(account.id);
      campaign.name = campaignData.name;
      campaign.status = campaignData.status || 'ACTIVE';
      campaign.objective = campaignData.objective || 'LINK_CLICKS';
      campaign.special_ad_categories = campaignData.specialAdCategories || [];

      const response = await campaign.create();
      return response;
    } catch (error) {
      logger.error('Error creating Meta Ads campaign:', error);
      throw error;
    }
  }

  async updateCampaign(campaignId, campaignData) {
    try {
      const campaign = new bizSdk.Campaign(campaignId);
      Object.assign(campaign, campaignData);
      const response = await campaign.update();
      return response;
    } catch (error) {
      logger.error('Error updating Meta Ads campaign:', error);
      throw error;
    }
  }

  async deleteCampaign(campaignId) {
    try {
      const campaign = new bizSdk.Campaign(campaignId);
      const response = await campaign.delete();
      return response;
    } catch (error) {
      logger.error('Error deleting Meta Ads campaign:', error);
      throw error;
    }
  }
}

module.exports = new MetaAdsService(); 