import { StatusBar } from 'expo-status-bar';
import { ImageBackground } from 'react-native';
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
  } from '@expo-google-fonts/roboto'

import {
    BaiJamjuree_700Bold,
  } from '@expo-google-fonts/bai-jamjuree'

import blurBg from './src/assets/bg-blur.png'
//npm run start
export default function App() {
  const [hasLoadedFonts] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
    BaiJamjuree_700Bold,
  }); // Um objeto que vai armazenar as informações de cada uma das fonts

  if(!hasLoadedFonts){
    return null
  }

  return (                               
    <ImageBackground 
      source={blurBg} 
      className='bg-gray-900 flex-1 items-center relative'
      imageStyle={{position: 'absolute', left: '-100%'}}
    > 
      <StatusBar style="light" translucent />
    </ImageBackground>
  );
}{/** propriedade que permite inserir imagens dentro do display */}

