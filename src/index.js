require('dotenv').config();
const express = require('express');
const winston = require('winston');
const googleAdsRoutes = require('./routes/googleAdsRoutes');
const metaAdsRoutes = require('./routes/metaAdsRoutes');
const googleAdsAnalyticsRoutes = require('./routes/googleAdsAnalyticsRoutes');
const metaAdsAnalyticsRoutes = require('./routes/metaAdsAnalyticsRoutes');
const logger = require('./utils/logger');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/google-ads', googleAdsRoutes);
app.use('/api/meta-ads', metaAdsRoutes);
app.use('/api/google-ads/analytics', googleAdsAnalyticsRoutes);
app.use('/api/meta-ads/analytics', metaAdsAnalyticsRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  logger.error(err.stack);
  res.status(500).json({
    status: 'error',
    message: 'Something went wrong!',
    error: process.env.NODE_ENV === 'development' ? err.message : undefined
  });
});

// Start server
app.listen(PORT, () => {
  logger.info(`Server is running on port ${PORT}`);
}); 