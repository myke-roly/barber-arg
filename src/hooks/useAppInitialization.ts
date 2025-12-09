import { useCallback, useEffect, useState } from 'react';
import * as Splash from 'expo-splash-screen';

// Keep the splash screen visible while we fetch resources
Splash.preventAutoHideAsync();

export const useAppInitialization = () => {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        // Pre-load fonts, make any API calls you need to do here
        await new Promise(resolve => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        // Tell the application to render
        setIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    // With CustomSplashScreen, we don't strictly *need* to hide native splash here 
    // because CustomSplashScreen does it on mount. 
  }, [isReady]);

  return { isReady, onLayoutRootView };
};
