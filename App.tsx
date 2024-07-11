import React from 'react';
import type { PropsWithChildren } from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import TwoSum from './pages/answers/question3';
import NavBar from './pages/answers/navbar';
import Calculator from './pages/answers/calculator';
type SectionProps = PropsWithChildren<{
  title: string;
}>;

console.log(TwoSum([2, 7, 11, 15], 9));
console.log(TwoSum([2, 3, 4], 6));
console.log(TwoSum([-1, 0], -1));

function App(): React.JSX.Element {
  return (
    <SafeAreaView>
      <View>
        <NavBar />
        <Calculator />
      </View>
    </SafeAreaView>
  );
}

export default App;
