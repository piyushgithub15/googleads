const { customer } = require('../config/googleAds');
const logger = require('../utils/logger');

class GoogleAdsAnalyticsService {
  async getCampaignMetrics(campaignId, dateRange) {
    try {
      const query = `
        SELECT
          campaign.id,
          campaign.name,
          metrics.impressions,
          metrics.clicks,
          metrics.ctr,
          metrics.average_cpc,
          metrics.cost_micros,
          metrics.conversions,
          metrics.cost_per_conversion,
          metrics.conversions_from_interactions_rate,
          metrics.average_cost,
          metrics.average_position,
          metrics.search_impression_share,
          metrics.search_rank_lost_impression_share,
          metrics.search_exact_match_impression_share,
          metrics.search_budget_lost_impression_share,
          metrics.search_top_impression_share,
          metrics.video_views,
          metrics.video_view_rate,
          metrics.video_quartile_p25_rate,
          metrics.video_quartile_p50_rate,
          metrics.video_quartile_p75_rate,
          metrics.video_quartile_p100_rate,
          metrics.all_conversions,
          metrics.all_conversions_value,
          metrics.all_conversions_rate,
          metrics.all_conversions_from_interactions_rate,
          metrics.all_conversions_value_per_cost,
          metrics.average_page_views,
          metrics.average_time_on_site,
          metrics.bounce_rate,
          segments.date
        FROM campaign
        WHERE campaign.id = ${campaignId}
        AND segments.date DURING ${dateRange}
      `;

      const response = await customer.query(query);
      return response;
    } catch (error) {
      logger.error('Error fetching Google Ads campaign metrics:', error);
      throw error;
    }
  }

  async getAccountMetrics(dateRange) {
    try {
      const query = `
        SELECT
          customer.id,
          metrics.impressions,
          metrics.clicks,
          metrics.ctr,
          metrics.average_cpc,
          metrics.cost_micros,
          metrics.conversions,
          metrics.cost_per_conversion,
          metrics.conversions_from_interactions_rate,
          metrics.average_cost,
          metrics.average_position,
          metrics.search_impression_share,
          metrics.search_rank_lost_impression_share,
          metrics.search_exact_match_impression_share,
          metrics.search_budget_lost_impression_share,
          metrics.search_top_impression_share,
          metrics.video_views,
          metrics.video_view_rate,
          metrics.video_quartile_p25_rate,
          metrics.video_quartile_p50_rate,
          metrics.video_quartile_p75_rate,
          metrics.video_quartile_p100_rate,
          metrics.all_conversions,
          metrics.all_conversions_value,
          metrics.all_conversions_rate,
          metrics.all_conversions_from_interactions_rate,
          metrics.all_conversions_value_per_cost,
          metrics.average_page_views,
          metrics.average_time_on_site,
          metrics.bounce_rate,
          segments.date
        FROM customer
        WHERE segments.date DURING ${dateRange}
      `;

      const response = await customer.query(query);
      return response;
    } catch (error) {
      logger.error('Error fetching Google Ads account metrics:', error);
      throw error;
    }
  }

  async getKeywordMetrics(campaignId, dateRange) {
    try {
      const query = `
        SELECT
          keyword_view.keyword.text,
          metrics.impressions,
          metrics.clicks,
          metrics.ctr,
          metrics.average_cpc,
          metrics.cost_micros,
          metrics.conversions,
          metrics.cost_per_conversion,
          metrics.conversions_from_interactions_rate,
          metrics.average_position,
          metrics.search_impression_share,
          metrics.search_rank_lost_impression_share,
          metrics.search_exact_match_impression_share,
          metrics.search_budget_lost_impression_share,
          metrics.search_top_impression_share,
          segments.date
        FROM keyword_view
        WHERE campaign.id = ${campaignId}
        AND segments.date DURING ${dateRange}
      `;

      const response = await customer.query(query);
      return response;
    } catch (error) {
      logger.error('Error fetching Google Ads keyword metrics:', error);
      throw error;
    }
  }
}

module.exports = new GoogleAdsAnalyticsService(); 