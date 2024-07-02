import { View, Text, TouchableOpacity, ScrollView, Linking } from 'react-native';
import React, { useState } from 'react';

const Button = ({ label, onPress }: { label: string, onPress: () => void }) => (
  <TouchableOpacity 
    className="m-1 px-4 py-2 bg-stone-800 rounded-md" 
    onPress={onPress}
  >
    <Text className="text-white font-bold">{label}</Text>
  </TouchableOpacity>
);

const renderPosts = (posts: any) => (
  posts.map((post: any, index: number) => (
    <React.Fragment key={index}>
      <View className="border-t border-gray-300" />
      <TouchableOpacity 
        className="p-4 pb-8"
        onPress={() => Linking.openURL(`/${post.slug}`)}
      >
        <Text className="text-2xl font-bold">{post.title}</Text>
        <Text className="text-gray-500">{post.description}</Text>
      </TouchableOpacity>
    </React.Fragment>
  ))
);

export default function TabOneScreen() {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <View className="flex-1 flex-row justify-between">
      <View className="m-12 flex-1">
        <Text className="text-6xl font-bold my-4">Explore</Text>
        <View className="flex-row mb-4">
          <Button label="Carbs" onPress={() => setCurrentIndex(0)} />
          <Button label="Fats" onPress={() => setCurrentIndex(1)} />
          <Button label="Proteins" onPress={() => setCurrentIndex(2)} />
        </View>
        <ScrollView className="flex-1">
          {currentIndex === 0 && renderPosts([
            { title: "Beef Noodle Skillet", description: "The Protein Powerhouse." },
            { title: "Garlic Noodles", description: "Oodles of Noodles." },
            { title: "Mac n' Cheese", description: "Deliciously Decadent." }
          ])}
          {currentIndex === 1 && renderPosts([
            { title: "Braised Short Ribs", description: "Umami to the Max." },
            { title: "Chicken Shallots", description: "Creamy and Wine-ey?" },
            { title: "Honey Mustard Chicken Thighs", description: "Tangy Sweet Perfection." }
          ])}
          {currentIndex === 2 && renderPosts([
            { title: "Panko Tilapia", description: "Great for Fish Tacos!" },
            { title: "Skirt Steak", description: "Panasian Style." },
            { title: "Thai Curry Mussels", description: "Tiny Protein Bombs." }
          ])}
        </ScrollView>
      </View>
    </View>
  );
}
