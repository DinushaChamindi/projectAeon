import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';

const Calculator = () => {
  const [firstNo, onChangeFirstNo] = useState('');
  const [secondNo, onChangeSecondNo] = useState('');
  const [total, setTotal] = useState(Number);

  const getTotal = () => {
    if (!Number.isNaN(Number(firstNo)) && !Number.isNaN(Number(secondNo))) {
      let sum = Number(firstNo) + Number(secondNo);
      setTotal(sum);
    } else {
      Alert.alert('invalid no');
      onChangeFirstNo('');
      onChangeSecondNo('');
      setTotal(0);
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Adding Two Numbers</Text>
      <TextInput
        style={styles.textInput}
        onChangeText={onChangeFirstNo}
        value={firstNo}
        placeholder="First Number"
        keyboardType="numeric"></TextInput>
      <TextInput
        style={styles.textInput}
        onChangeText={onChangeSecondNo}
        value={secondNo}
        placeholder="Second Number"
        keyboardType="numeric"></TextInput>
      <TouchableOpacity onPress={getTotal} style={styles.button}>
        <Text style={styles.buttonText}>Add two Numbers</Text>
      </TouchableOpacity>

      <Text style={styles.total}>Total : {total}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 64,
    marginHorizontal: 24,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  textInput: {
    borderColor: '#d8e1eb',
    borderWidth: 1,
    borderRadius: 4,
    maxWidth: 200,
    width: '100%',
    padding: 8,
    marginBottom: 8,
  },
  button: {
    backgroundColor: '#d8e1eb',
    borderRadius: 4,
    maxWidth: 200,
    width: '100%',
    padding: 8,
    marginTop: 16,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  total: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 16,
  },
});

export default Calculator;
