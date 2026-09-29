import React from 'react';
import { View } from 'react-native';
import { styles } from './AppLayout.styles';


function AppLayout({ children }) {
  return (
    <View style={styles.shell}>
      <View style={styles.app}>{children}</View>
    </View>
  );
}


export default AppLayout;
