
import { useState } from 'react';
import { View, Text, TouchableOpacity, Dimensions, StyleSheet, Animated } from 'react-native';

const screenWidth = Dimensions.get('window').width;

export default function HomeScreen() {

  const [progress] = useState(new Animated.Value(0));

  const [progressPercentage, setProgressPercentage] = useState(0);


  const handlePress = () => {

    const newProgress = Math.min(progressPercentage + 15, 100);

    Animated.timing(progress, {
      toValue: newProgress / 100,
      duration: 200,
      useNativeDriver: false,
    }).start();
      setProgressPercentage(newProgress);

  }

  return (<View style={styles.container}>

    <Text>Lamour Lorsen</Text>
    <View style={styles.progressContainer}>
      <Animated.View
        style={[styles.progressBar,
        {
          width: progress.interpolate({
            inputRange: [0, 1],
            outputRange: [0, screenWidth - 40]
          })
        }
        ]} />

    </View>
    <Text>Appuyer pour remplir la barre le plus vite possible</Text>
    <TouchableOpacity style={styles.btnRed}
     onPress={handlePress} 
     disabled={progressPercentage===100}>
      <Text>Appuyer pour chanter</Text>

    </TouchableOpacity>



  </View>);

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    paddingVertical: 40, alignItems: 'center',
    gap: 60,
  },
  title: {
    fontSize: 26,
    fontWeight: '700',
    color: '#333',
    textAlign: 'center',
  },

  progressContainer: {
    width: screenWidth - 40,
    height: 56,
    backgroundColor: '#ccc',
    borderWidth: 2,
    overflow: 'hidden',
  },
  progressBar: {
    height: '100%',
    backgroundColor: 'green',
  },
  btnRed: {
    backgroundColor: "#ff4d4d",
    width: screenWidth - 40,
    height: 56,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
   
  },
  btnTextWhite: { color: '#fff', fontSize: 20, fontWeight: '600', }, percentageText: { fontSize: 22, fontWeight: 'bold', color: '#333', },
});