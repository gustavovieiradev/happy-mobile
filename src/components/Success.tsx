import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import successImg from '../images/image-success.png';

interface ISuccessProps {
  title: string;
  description: string;
}

export default function Success({title, description}: ISuccessProps) {
  return (
    <View style={styles.container}>
      <Image source={successImg} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
      <RectButton style={styles.button}>
        <Text style={styles.buttonText}>Ok</Text>
      </RectButton>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#39CC83',
  },
  title: {
    color: '#fff',
    fontSize: 40,
    fontFamily: 'Nunito_800ExtraBold',
  },
  description: {
    marginTop: 18,
    color: '#fff',
    fontSize: 20,
    fontFamily: 'Nunito_600SemiBold',
  },
  button: {
    backgroundColor: '#19C06D',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 20,
    paddingRight: 20,
    height: 56,
    marginTop: 24,
  },
  buttonText: {
    color: '#fff',
    fontFamily: 'Nunito_800ExtraBold',
    fontSize: 16,
  }
})