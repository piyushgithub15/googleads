# Ads Automation Platform

This repository contains a Node.js application for programmatically managing Google Ads and Meta (Facebook) Ads campaigns.

## Prerequisites

- Node.js (v14 or higher)
- npm (Node Package Manager)
- Google Ads API access
- Meta Business Manager account
- Meta Developer account

## Setup Instructions

### 1. Clone the Repository
```bash
git clone <repository-url>
cd ads-automation
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Environment Setup

Create a `.env` file in the root directory with the following variables:

```env
# Google Ads Configuration
GOOGLE_ADS_CLIENT_ID=your_client_id
GOOGLE_ADS_CLIENT_SECRET=your_client_secret
GOOGLE_ADS_DEVELOPER_TOKEN=your_developer_token
GOOGLE_ADS_REFRESH_TOKEN=your_refresh_token
GOOGLE_ADS_LOGIN_CUSTOMER_ID=your_customer_id

# Meta Ads Configuration
META_APP_ID=your_app_id
META_APP_SECRET=your_app_secret
META_ACCESS_TOKEN=your_access_token
META_ACCOUNT_ID=your_account_id
```

### 4. Google Ads API Setup

1. Go to the [Google Ads API Center](https://ads.google.com/apis)
2. Create a new project
3. Enable the Google Ads API
4. Create OAuth 2.0 credentials
5. Download the client configuration file
6. Set up a developer token

### 5. Meta Ads API Setup

1. Go to [Meta for Developers](https://developers.facebook.com/)
2. Create a new app
3. Add the Marketing API product
4. Generate an access token
5. Set up the necessary permissions

## Project Structure

```
ads-automation/
├── src/
│   ├── config/
│   │   ├── googleAds.js
│   │   └── metaAds.js
│   ├── services/
│   │   ├── googleAdsService.js
│   │   ├── metaAdsService.js
│   │   ├── googleAdsAnalyticsService.js
│   │   └── metaAdsAnalyticsService.js
│   ├── controllers/
│   │   ├── googleAdsController.js
│   │   ├── metaAdsController.js
│   │   ├── googleAdsAnalyticsController.js
│   │   └── metaAdsAnalyticsController.js
│   ├── routes/
│   │   ├── googleAdsRoutes.js
│   │   ├── metaAdsRoutes.js
│   │   ├── googleAdsAnalyticsRoutes.js
│   │   └── metaAdsAnalyticsRoutes.js
│   ├── utils/
│   │   ├── logger.js
│   │   └── helpers.js
│   └── index.js
├── tests/
│   ├── googleAds.test.js
│   └── metaAds.test.js
├── .env
├── .gitignore
├── package.json
└── README.md
```

## Usage

### Starting the Application

```bash
npm start
```

### Available Endpoints

#### Campaign Management

##### Google Ads
- `GET /api/google-ads/campaigns` - List all campaigns
- `POST /api/google-ads/campaigns` - Create a new campaign
- `PUT /api/google-ads/campaigns/:id` - Update a campaign
- `DELETE /api/google-ads/campaigns/:id` - Delete a campaign

##### Meta Ads
- `GET /api/meta-ads/campaigns` - List all campaigns
- `POST /api/meta-ads/campaigns` - Create a new campaign
- `PUT /api/meta-ads/campaigns/:id` - Update a campaign
- `DELETE /api/meta-ads/campaigns/:id` - Delete a campaign

#### Analytics APIs

##### Google Ads Analytics
- `GET /api/google-ads/analytics/campaigns/:campaignId/metrics` - Get campaign metrics
  - Query Parameters:
    - `startDate` (YYYY-MM-DD)
    - `endDate` (YYYY-MM-DD)
  - Returns:
    - Basic metrics (impressions, clicks, CTR)
    - Cost metrics (CPC, CPM, total cost)
    - Conversion metrics (conversions, conversion rate)
    - Quality metrics (quality score, impression share)
    - Video metrics (views, view rate, completion rates)
    - Engagement metrics (page views, time on site)

- `GET /api/google-ads/analytics/account/metrics` - Get account-level metrics
  - Query Parameters:
    - `startDate` (YYYY-MM-DD)
    - `endDate` (YYYY-MM-DD)
  - Returns: Same metrics as campaign level, but aggregated for the entire account

- `GET /api/google-ads/analytics/campaigns/:campaignId/keywords/metrics` - Get keyword-level metrics
  - Query Parameters:
    - `startDate` (YYYY-MM-DD)
    - `endDate` (YYYY-MM-DD)
  - Returns:
    - Keyword performance metrics
    - Search impression share
    - Quality scores
    - Cost and conversion data

##### Meta Ads Analytics
- `GET /api/meta-ads/analytics/campaigns/:campaignId/metrics` - Get campaign metrics
  - Query Parameters:
    - `startDate` (YYYY-MM-DD)
    - `endDate` (YYYY-MM-DD)
  - Returns:
    - Basic metrics (impressions, clicks, CTR)
    - Cost metrics (CPC, CPM, spend)
    - Conversion metrics (conversions, conversion rate)
    - Engagement metrics (reach, frequency)
    - Video metrics (views, watch time)
    - Quality metrics (quality ranking)
    - Social metrics (social reach, impressions)

- `GET /api/meta-ads/analytics/account/metrics` - Get account-level metrics
  - Query Parameters:
    - `startDate` (YYYY-MM-DD)
    - `endDate` (YYYY-MM-DD)
  - Returns: Same metrics as campaign level, but aggregated for the entire account

- `GET /api/meta-ads/analytics/adsets/:adSetId/metrics` - Get ad set metrics
  - Query Parameters:
    - `startDate` (YYYY-MM-DD)
    - `endDate` (YYYY-MM-DD)
  - Returns:
    - Ad set performance metrics
    - Audience insights
    - Placement performance
    - Cost and conversion data

### Example API Calls

```bash
# Get Google Ads campaign metrics for the last 30 days
curl "http://localhost:3000/api/google-ads/analytics/campaigns/123456789/metrics?startDate=2024-01-01&endDate=2024-01-31"

# Get Meta Ads account metrics for a specific date range
curl "http://localhost:3000/api/meta-ads/analytics/account/metrics?startDate=2024-01-01&endDate=2024-01-31"

# Get Google Ads keyword metrics
curl "http://localhost:3000/api/google-ads/analytics/campaigns/123456789/keywords/metrics?startDate=2024-01-01&endDate=2024-01-31"

# Get Meta Ads ad set metrics
curl "http://localhost:3000/api/meta-ads/analytics/adsets/123456789/metrics?startDate=2024-01-01&endDate=2024-01-31"
```

## Testing

Run the test suite:

```bash
npm test
```

## Error Handling

The application includes comprehensive error handling and logging. All errors are logged using Winston logger and appropriate HTTP status codes are returned.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details. # googleads
