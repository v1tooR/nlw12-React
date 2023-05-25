import { StatusBar } from 'expo-status-bar';
import { ImageBackground, View, Text, TouchableOpacity } from 'react-native';
import { styled } from 'nativewind';
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
  } from '@expo-google-fonts/roboto'

import {
    BaiJamjuree_700Bold,
  } from '@expo-google-fonts/bai-jamjuree'

import blurBg from './src/assets/bg-blur.png'
import Stripes from './src/assets/stripes.svg'
import NLWLogo from './src/assets/nlw-spacetime-logo.svg'
//o pacote SVG transform faz com que o a imagem SVG se transforme em um component
const StyledStripes = styled(Stripes) //recebe um componente
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
      className='bg-gray-900 px-8 py-10 flex-1 items-center relative'
      imageStyle={{position: 'absolute', left: '-100%'}}
    > 
      <StyledStripes className='absolute left-2'/>

      <View className='flex-1 items-center justify-center gap-6'>
        <NLWLogo/>
        <View className='space-y-2'>
          <Text className='text-2xl font-title text-center leading-tight text-gray-50'>
            Sua cápsula do tempo
          </Text>
          <Text className='text-center font-body text-base leading-relaxed text-gray-100'>
            Colecione momentos marcantes da sua jornada e compartilhe (se quiser) com o mundo!
          </Text>
        </View>
        <TouchableOpacity
          activeOpacity={0.7}
          className='rounded-full bg-green-500 px-5 py-2'
        >
          <Text className='font-alt text-sm uppercase text-black'>Cadastrar lembrança</Text>
        </TouchableOpacity>
      </View>

      <Text className='text-center font-body text-sm leading-relaxed text-gray-200 '>
        Feito com 💜 no NLW da Rocketseat
      </Text>

      <StatusBar style="light" translucent />
    </ImageBackground>
  );
}{/** propriedade que permite inserir imagens dentro do display */}

