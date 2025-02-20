import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'receipt-app-blank',
  webDir: 'www',
  plugins: {
    CapacitorHttp: {
      enabled: true,
    },
    Browser: {
      customScheme: 'receiptapp'
    },
    App: {
      deepLinkSchema: 'receiptapp', // 🔥 Imposta il protocollo del deep link
      deepLinkHost: 'tabs'
    }
  },
  server: {
    iosScheme: 'http',
    androidScheme: 'http'
  },
  cordova: {},
  ios: {
    scheme: 'receiptapp', // Add this for iOS
  },
  android: {
    allowMixedContent: true,
  },
};

export default config;
