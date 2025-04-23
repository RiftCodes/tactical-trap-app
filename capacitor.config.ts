import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  // appId: 'com.tacticaltraps.bluetooth.lock',
  appId: 'com.tacticaltraps.bluetooth.lock_1',
  appName: 'Tactical Traps BLE Lock',
  webDir: 'www',
  bundledWebRuntime: false,
  plugins: {
    SplashScreen: {
      androidSplashResourceName: 'screen',
      launchAutoHide: false,
    },
  },
};

export default config;
