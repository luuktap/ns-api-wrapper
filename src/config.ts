export interface AppConfig {
  nsSubscriptionKey: string;
}

// todo: validate config

export const config: AppConfig = {
  nsSubscriptionKey: process.env.NS_SUBSCRIPTION_KEY,
};
