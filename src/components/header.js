import React from 'react';

import { Text, View } from 'react-native';

const Header = (props) => {
  return (
    <View style={styles.viewStyle}>
    <Text style={styles.textStyle}>{props.headerText}</Text>
    </View>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: '#f0ffff',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    shadowColor: '#F0F',
    shadowOffset: { width: 0, height: 100 },
    shadowOpacity: 0.9,
    elevation: 20,

  },
  textStyle: {
    fontSize: 30
  }
};

export default Header;

//const { textStyle, viewStyle } = styles;
