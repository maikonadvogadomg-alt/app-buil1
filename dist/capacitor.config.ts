/** @type {import('@capacitor/cli').CapacitorConfig} */
const config = {
  appId: 'com.habit.grid.tracker.meulegale1.replit.app',
  appName: 'APK Builder',
  webDir: 'dist',
  server: { androidScheme: 'https', cleartext: false },
  android: { buildOptions: { releaseType: 'APK' } },
  plugins: { SplashScreen: { launchShowDuration: 0 } },
};
module.exports = config;
