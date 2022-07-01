import React from "react";
import { StyleSheet, View, Text } from 'react-native';


export const Todo = ({todo}) => {

  return(
    <View style={styles.todo}>
      <Text style={styles.text}>{todo.title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  todo: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderWidth: 1,
    borderColor: '#eee',
    borderRadius: 5,
    marginBottom: 10,
  },
  text: {
    color: 'red',
  }
});
