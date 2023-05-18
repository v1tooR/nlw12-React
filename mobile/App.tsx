import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
//npm run start
export default function App() {
  return (                               
    <View className='bg-zinc-50 flex-1 items-center justify-center'>
      <Text className='text-zinc-950 font-bold text-5xl'>Olá mundo!</Text>
      <StatusBar style="light" translucent />
    </View>
  );
}

