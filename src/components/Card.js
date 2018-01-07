import React from 'react';
import { View } from 'react-native';

const Card = (props) => {
return (
  <View style={styles.containerStyle}>
  {props.children}
  </View>
);
};
const styles = {
  containerStyle: {
    borderWidth: 2,
    borderRadius: 4,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 4,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10
  }
};

export default Card;
