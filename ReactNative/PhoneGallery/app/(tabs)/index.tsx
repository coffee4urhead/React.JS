import { Image, StyleSheet, Platform, View, Text, Button, Pressable, Modal, StatusBar } from 'react-native';
import { useState } from "react"
import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

const imageSplash = require("../../assets/images/splash-icon.png");

export default function HomeScreen() {
  const [isPressed, setPressStatus] = useState(false);

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }>
        <StatusBar backgroundColor={"lightgreen"} barStyle={"dark-content"}/>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Welcome! brother hello from the outside!</ThemedText>
        <HelloWave />
      </ThemedView>
      <View className='subtitles' style={styles.subtitles}>
        <Text>Hello from the other side!!!!!!: ADELLLE!</Text>
        <Image className='image-splash' style={styles.imageSplash} source={imageSplash}></Image>
        <Pressable onPress={() => console.log("Pressed the mobile image")}>
        <Image className='image-splash' style={styles.imageSplash} source={{ uri: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTbipgznOMNlaltymK2xIUnyuBiwT2Gl293XCUH_s-ZznpcbXDo" }}></Image>
        <Button title='Press to log' color={"blue"} onPress={() => setPressStatus(true)} />
        
        {/* presentationStyle is only for iOS */}

        <Modal
        style={styles.modalStyle}
        visible={isPressed}
        onRequestClose={() => setPressStatus(false)}
        animationType='slide'
        presentationStyle='pageSheet'>
          <View>
            <Text>Attention you pressed me</Text>
            <Button title='close modal' color={"red"} onPress={() => setPressStatus(false)}></Button>
          </View>
        </Modal>
        </Pressable>

        <Pressable>
          <Text onPress={() => console.log("Text pressed")} onLongPress={() => console.log("Stop pressing hard on the text")}>Pressable text</Text>
        </Pressable>
      </View>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 1: Try it</ThemedText>
        <ThemedText>
          Edit <ThemedText type="defaultSemiBold">app/(tabs)/index.tsx</ThemedText> to see changes.
          Press{' '}
          <ThemedText type="defaultSemiBold">
            {Platform.select({
              ios: 'cmd + d',
              android: 'cmd + m',
              web: 'F12'
            })}
          </ThemedText>{' '}
          to open developer tools.
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 2: Explore</ThemedText>
        <ThemedText>
          Tap the Explore tab to learn more about what's included in this starter app.
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 3: Get a fresh start</ThemedText>
        <ThemedText>
          When you're ready, run{' '}
          <ThemedText type="defaultSemiBold">npm run reset-project</ThemedText> to get a fresh{' '}
          <ThemedText type="defaultSemiBold">app</ThemedText> directory. This will move the current{' '}
          <ThemedText type="defaultSemiBold">app</ThemedText> to{' '}
          <ThemedText type="defaultSemiBold">app-example</ThemedText>.
        </ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  subtitles: {
    backgroundColor: "yellow",
    color: 'purple',
    fontFamily: 'Papyrus sans-serif',
    fontSize: 22,
    padding: 10,
    width: '100%',
  },
  imageSplash: {
    width: 200,
    height: 200,
    resizeMode: "cover",
    borderRadius: 12,
  },
  modalStyle: {
    width: 300,
    height: 200,
    backgroundColor: "beige",
    textAlign: "center",
    fontStyle: "italic",
  }
});
