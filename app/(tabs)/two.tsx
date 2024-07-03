import React, { useState } from 'react';
import { Text, View, Switch } from 'react-native';

export default function TabTwoScreen() {
  const [switch1Value, setSwitch1Value] = useState(false);
  const [switch2Value, setSwitch2Value] = useState(true);
  const [switch3Value, setSwitch3Value] = useState(false);
  const [switch4Value, setSwitch4Value] = useState(false);
  const [switch5Value, setSwitch5Value] = useState(false);

  return (
    <View className='h-screen my-16'>
      <Text className='text-center text-2xl dark:text-stone-100 font-bold p-8 pb-4'>Flip Us!</Text>
      <View className='flex flex-row justify-between items-center px-8 py-2'>
        <Text className='dark:text-stone-400'>Switch 1</Text>
        <Switch value={switch1Value} onValueChange={setSwitch1Value} />
      </View>
      <View className='flex flex-row justify-between items-center px-8 py-2'>
        <Text className='dark:text-stone-400'>Switch 2</Text>
        <Switch value={switch2Value} onValueChange={setSwitch2Value} />
      </View>
      <View className='flex flex-row justify-between items-center px-8 py-2'>
        <Text className='dark:text-stone-400'>Switch 3</Text>
        <Switch value={switch3Value} onValueChange={setSwitch3Value} />
      </View>
      <View className='flex flex-row justify-between items-center px-8 py-2'>
        <Text className='dark:text-stone-400'>Switch 4</Text>
        <Switch value={switch4Value} onValueChange={setSwitch4Value} />
      </View>
      <View className='flex flex-row justify-between items-center px-8 py-2'>
        <Text className='dark:text-stone-400'>Switch 5</Text>
        <Switch value={switch5Value} onValueChange={setSwitch5Value} />
      </View>
    </View>
  );
}