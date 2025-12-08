import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Header } from '../components/Header';
import { colors } from '../theme';

export interface ScreenOptions {
  title?: string;
  topBarLeft?: (React.ReactNode | ((props: any) => React.ReactNode))[];
  topBarRight?: (React.ReactNode | ((props: any) => React.ReactNode))[];
  headerShown?: boolean;
  backgroundColor?: string;
}

/**
 * Higher-order component that wraps a screen with a custom header
 * 
 * @example
 * export default screen(HomeScreen, {
 *   title: 'Inicio',
 *   topBarLeft: [(props) => closeButton(props.navigation)],
 *   topBarRight: [notificationButton(() => {}), helpButton(() => {})]
 * });
 */
export function screen<P extends object>(
  Component: React.ComponentType<P>,
  options: ScreenOptions = {}
): React.ComponentType<P> {
  const {
    title,
    topBarLeft = [],
    topBarRight = [],
    headerShown = true,
    backgroundColor,
  } = options;

  return function ScreenWithHeader(props: P) {
    // Render buttons, calling functions if needed
    const renderButtons = (buttons: (React.ReactNode | ((props: any) => React.ReactNode))[]) => {
      return buttons.map((button, index) => 
        typeof button === 'function' ? button(props) : button
      );
    };

    return (
      <View style={styles.container}>
        {headerShown && (
          <Header
            title={title}
            leftButtons={renderButtons(topBarLeft)}
            rightButtons={renderButtons(topBarRight)}
            backgroundColor={backgroundColor}
          />
        )}
        <View style={styles.content}>
          <Component {...props} />
        </View>
      </View>
    );
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background.default,
  },
  content: {
    flex: 1,
  },
});
