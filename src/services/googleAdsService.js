const { customer } = require('../config/googleAds');
const logger = require('../utils/logger');

class GoogleAdsService {
  async listCampaigns() {
    try {
      const query = `
        SELECT
          campaign.id,
          campaign.name,
          campaign.status,
          campaign.start_date,
          campaign.end_date,
          campaign.budget_amount_micros
        FROM campaign
        ORDER BY campaign.id DESC
      `;

      const response = await customer.query(query);
      return response;
    } catch (error) {
      logger.error('Error listing Google Ads campaigns:', error);
      throw error;
    }
  }

  async createCampaign(campaignData) {
    try {
      const campaign = {
        name: campaignData.name,
        status: campaignData.status || 'ENABLED',
        advertising_channel_type: campaignData.channelType || 'SEARCH',
        campaign_budget: campaignData.budget,
        start_date: campaignData.startDate,
        end_date: campaignData.endDate,
      };

      const response = await customer.campaigns.create(campaign);
      return response;
    } catch (error) {
      logger.error('Error creating Google Ads campaign:', error);
      throw error;
    }
  }

  async updateCampaign(campaignId, campaignData) {
    try {
      const campaign = {
        id: campaignId,
        ...campaignData
      };

      const response = await customer.campaigns.update(campaign);
      return response;
    } catch (error) {
      logger.error('Error updating Google Ads campaign:', error);
      throw error;
    }
  }

  async deleteCampaign(campaignId) {
    try {
      const response = await customer.campaigns.delete(campaignId);
      return response;
    } catch (error) {
      logger.error('Error deleting Google Ads campaign:', error);
      throw error;
    }
  }
}

module.exports = new GoogleAdsService(); 