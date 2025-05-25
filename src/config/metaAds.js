const bizSdk = require('facebook-nodejs-business-sdk');

const api = bizSdk.FacebookAdsApi.init(process.env.META_ACCESS_TOKEN);
const account = new bizSdk.AdAccount(process.env.META_ACCOUNT_ID);

module.exports = {
  api,
  account
}; 