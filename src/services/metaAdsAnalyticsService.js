const { account } = require('../config/metaAds');
const logger = require('../utils/logger');

class MetaAdsAnalyticsService {
  async getCampaignMetrics(campaignId, dateRange) {
    try {
      const fields = [
        'campaign_name',
        'impressions',
        'clicks',
        'ctr',
        'cpc',
        'cpm',
        'spend',
        'reach',
        'frequency',
        'actions',
        'action_values',
        'cost_per_action_type',
        'cost_per_conversion',
        'conversions',
        'conversion_rate',
        'conversion_values',
        'cost_per_conversion',
        'cost_per_unique_action_type',
        'cost_per_unique_click',
        'cost_per_unique_conversion',
        'cost_per_unique_inline_link_click',
        'cost_per_unique_inline_post_engagement',
        'cost_per_unique_outbound_click',
        'cost_per_unique_thruplay',
        'cost_per_unique_video_view',
        'engagement_rate_ranking',
        'estimated_ad_recall_rate',
        'estimated_ad_recallers',
        'frequency',
        'inline_link_click_ctr',
        'inline_link_clicks',
        'inline_post_engagement',
        'newsfeed_avg_position',
        'newsfeed_clicks',
        'newsfeed_impressions',
        'objective',
        'outbound_clicks',
        'outbound_clicks_ctr',
        'place_page_name',
        'quality_ranking',
        'quality_score_ectr',
        'quality_score_engagement_rate',
        'quality_score_landing',
        'reach',
        'social_reach',
        'social_impressions',
        'social_spend',
        'spend',
        'total_action_value',
        'total_actions',
        'total_unique_actions',
        'unique_actions',
        'unique_clicks',
        'unique_conversions',
        'unique_ctr',
        'unique_inline_link_click_ctr',
        'unique_inline_link_clicks',
        'unique_inline_post_engagement',
        'unique_link_clicks_ctr',
        'unique_outbound_clicks',
        'unique_outbound_clicks_ctr',
        'unique_video_continuous_2_sec_watched_actions',
        'unique_video_view_15_sec',
        'unique_video_views',
        'video_10_sec_watched_actions',
        'video_15_sec_watched_actions',
        'video_30_sec_watched_actions',
        'video_avg_time_watched_actions',
        'video_continuous_2_sec_watched_actions',
        'video_p25_watched_actions',
        'video_p50_watched_actions',
        'video_p75_watched_actions',
        'video_p95_watched_actions',
        'video_p100_watched_actions',
        'video_play_actions',
        'video_play_curve_actions',
        'video_thruplay_watched_actions',
        'video_time_watched_actions',
        'website_ctr',
        'website_purchase_roas',
        'wish_bid'
      ];

      const params = {
        time_range: dateRange,
        fields: fields
      };

      const campaign = new bizSdk.Campaign(campaignId);
      const insights = await campaign.getInsights(params);
      return insights;
    } catch (error) {
      logger.error('Error fetching Meta Ads campaign metrics:', error);
      throw error;
    }
  }

  async getAccountMetrics(dateRange) {
    try {
      const fields = [
        'account_name',
        'impressions',
        'clicks',
        'ctr',
        'cpc',
        'cpm',
        'spend',
        'reach',
        'frequency',
        'actions',
        'action_values',
        'cost_per_action_type',
        'cost_per_conversion',
        'conversions',
        'conversion_rate',
        'conversion_values',
        'cost_per_conversion',
        'cost_per_unique_action_type',
        'cost_per_unique_click',
        'cost_per_unique_conversion',
        'cost_per_unique_inline_link_click',
        'cost_per_unique_inline_post_engagement',
        'cost_per_unique_outbound_click',
        'cost_per_unique_thruplay',
        'cost_per_unique_video_view',
        'engagement_rate_ranking',
        'estimated_ad_recall_rate',
        'estimated_ad_recallers',
        'frequency',
        'inline_link_click_ctr',
        'inline_link_clicks',
        'inline_post_engagement',
        'newsfeed_avg_position',
        'newsfeed_clicks',
        'newsfeed_impressions',
        'objective',
        'outbound_clicks',
        'outbound_clicks_ctr',
        'place_page_name',
        'quality_ranking',
        'quality_score_ectr',
        'quality_score_engagement_rate',
        'quality_score_landing',
        'reach',
        'social_reach',
        'social_impressions',
        'social_spend',
        'spend',
        'total_action_value',
        'total_actions',
        'total_unique_actions',
        'unique_actions',
        'unique_clicks',
        'unique_conversions',
        'unique_ctr',
        'unique_inline_link_click_ctr',
        'unique_inline_link_clicks',
        'unique_inline_post_engagement',
        'unique_link_clicks_ctr',
        'unique_outbound_clicks',
        'unique_outbound_clicks_ctr',
        'unique_video_continuous_2_sec_watched_actions',
        'unique_video_view_15_sec',
        'unique_video_views',
        'video_10_sec_watched_actions',
        'video_15_sec_watched_actions',
        'video_30_sec_watched_actions',
        'video_avg_time_watched_actions',
        'video_continuous_2_sec_watched_actions',
        'video_p25_watched_actions',
        'video_p50_watched_actions',
        'video_p75_watched_actions',
        'video_p95_watched_actions',
        'video_p100_watched_actions',
        'video_play_actions',
        'video_play_curve_actions',
        'video_thruplay_watched_actions',
        'video_time_watched_actions',
        'website_ctr',
        'website_purchase_roas',
        'wish_bid'
      ];

      const params = {
        time_range: dateRange,
        fields: fields
      };

      const insights = await account.getInsights(params);
      return insights;
    } catch (error) {
      logger.error('Error fetching Meta Ads account metrics:', error);
      throw error;
    }
  }

  async getAdSetMetrics(adSetId, dateRange) {
    try {
      const fields = [
        'adset_name',
        'impressions',
        'clicks',
        'ctr',
        'cpc',
        'cpm',
        'spend',
        'reach',
        'frequency',
        'actions',
        'action_values',
        'cost_per_action_type',
        'cost_per_conversion',
        'conversions',
        'conversion_rate',
        'conversion_values',
        'cost_per_conversion',
        'cost_per_unique_action_type',
        'cost_per_unique_click',
        'cost_per_unique_conversion',
        'cost_per_unique_inline_link_click',
        'cost_per_unique_inline_post_engagement',
        'cost_per_unique_outbound_click',
        'cost_per_unique_thruplay',
        'cost_per_unique_video_view',
        'engagement_rate_ranking',
        'estimated_ad_recall_rate',
        'estimated_ad_recallers',
        'frequency',
        'inline_link_click_ctr',
        'inline_link_clicks',
        'inline_post_engagement',
        'newsfeed_avg_position',
        'newsfeed_clicks',
        'newsfeed_impressions',
        'objective',
        'outbound_clicks',
        'outbound_clicks_ctr',
        'place_page_name',
        'quality_ranking',
        'quality_score_ectr',
        'quality_score_engagement_rate',
        'quality_score_landing',
        'reach',
        'social_reach',
        'social_impressions',
        'social_spend',
        'spend',
        'total_action_value',
        'total_actions',
        'total_unique_actions',
        'unique_actions',
        'unique_clicks',
        'unique_conversions',
        'unique_ctr',
        'unique_inline_link_click_ctr',
        'unique_inline_link_clicks',
        'unique_inline_post_engagement',
        'unique_link_clicks_ctr',
        'unique_outbound_clicks',
        'unique_outbound_clicks_ctr',
        'unique_video_continuous_2_sec_watched_actions',
        'unique_video_view_15_sec',
        'unique_video_views',
        'video_10_sec_watched_actions',
        'video_15_sec_watched_actions',
        'video_30_sec_watched_actions',
        'video_avg_time_watched_actions',
        'video_continuous_2_sec_watched_actions',
        'video_p25_watched_actions',
        'video_p50_watched_actions',
        'video_p75_watched_actions',
        'video_p95_watched_actions',
        'video_p100_watched_actions',
        'video_play_actions',
        'video_play_curve_actions',
        'video_thruplay_watched_actions',
        'video_time_watched_actions',
        'website_ctr',
        'website_purchase_roas',
        'wish_bid'
      ];

      const params = {
        time_range: dateRange,
        fields: fields
      };

      const adSet = new bizSdk.AdSet(adSetId);
      const insights = await adSet.getInsights(params);
      return insights;
    } catch (error) {
      logger.error('Error fetching Meta Ads ad set metrics:', error);
      throw error;
    }
  }
}

module.exports = new MetaAdsAnalyticsService(); 