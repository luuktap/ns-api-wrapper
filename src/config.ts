export interface AppConfig {
  nsApiBaseUrl: string;
  nsSubscriptionKey: string;
}

// todo: validate config

export const config: AppConfig = {
  nsApiBaseUrl: process.env.NS_API_BASE_URL,
  nsSubscriptionKey: process.env.NS_SUBSCRIPTION_KEY,
};
