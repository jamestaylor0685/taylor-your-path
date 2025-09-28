import { Image } from 'expo-image';
import { Pressable, StyleSheet } from 'react-native';

import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Ionicons } from '@expo/vector-icons';
import { Link } from 'expo-router';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#F5D9CC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Calm Nest</ThemedText>
      </ThemedView>
      <ThemedView style={styles.optionsContainer}>
        <ThemedView style={[styles.optionButton, styles.calmButton]}>  
          <Link href="/calm" asChild>
            <Pressable style={styles.optionPressable}>
                <Ionicons
                  name="leaf-outline"
                  size={24}
                  color="#000000"
              />
              <ThemedView style={styles.optionTextContainer}>
                <ThemedText type="subtitle">Calm</ThemedText>
                <ThemedText type="default">Square Breathing</ThemedText>
                <ThemedText type="default">Affirmations</ThemedText>
                <ThemedText type="default">Add your own</ThemedText>
              </ThemedView>
            </Pressable>
          </Link>
        </ThemedView>
        <ThemedView style={[styles.optionButton, styles.reflectButton]}>
          <Link href="/reflect" asChild>
            <Pressable style={styles.optionPressable}>
              <Ionicons
                name="checkmark-circle-outline"
                size={24}
                color="#000000"
              />
              <ThemedView style={styles.optionTextContainer}>
                <ThemedText type="subtitle">Reflect</ThemedText>
                <ThemedText type="default">Daily Self Reflection</ThemedText>
                <ThemedText type="default">Journal</ThemedText>
                <ThemedText type="default">Daily Wins Tracker</ThemedText>
              </ThemedView>
            </Pressable>
          </Link>
        </ThemedView>
        <ThemedView style={[styles.optionButton, styles.advocateButton]}>
          <Link href="/advocate" asChild>
            <Pressable style={styles.optionPressable}>
              <Ionicons
                name="document-outline"
                size={24}
                color="#000000"
              />
              <ThemedView style={styles.optionTextContainer}>
                <ThemedText type="subtitle">Advocate</ThemedText>
                <ThemedText type="default">Downloadable Worksheets</ThemedText>
                <ThemedText type="default">Parenting Strengths Quiz</ThemedText>
                <ThemedText type="default">Executive Functioning Quiz</ThemedText>
              </ThemedView>
            </Pressable>
          </Link>
        </ThemedView> 
        <ThemedView style={[styles.optionButton, styles.growButton]}>
          <Link href="/grow" asChild>
            <Pressable style={styles.optionPressable}>
              <Ionicons
                name="rose-outline"
                size={24}
                color="#000000"
              />
              <ThemedView style={styles.optionTextContainer}>
                <ThemedText type="subtitle">Grow</ThemedText>
                <ThemedText type="default">Micro Coaching Videos</ThemedText>
                <ThemedText type="default">Self-Care Reminders</ThemedText>
              </ThemedView>
            </Pressable>
          </Link>
        </ThemedView>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  optionsContainer: {
    gap: 8,
    marginBottom: 8,
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  optionButton: {
    flexDirection: 'column',
    flexGrow: 1,
    flexBasis: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
    gap: 8,
    backgroundColor: 'rgba(245, 217, 204, 0.3)',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0)',
    textAlign: 'center',
  },
  optionPressable: {
    width: '100%',
    flexDirection: 'column',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    gap: 8,
  },
  optionTextContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    backgroundColor: 'transparent',
  },
  calmButton: {
    backgroundColor: 'rgba(194, 155, 182, 0.3)',
  },
  reflectButton: {
    backgroundColor: 'rgba(245, 204, 232, 0.3)',
  },
  advocateButton: {
    backgroundColor: 'rgba(245, 217, 204, 0.3)',
  },
  growButton: {
    backgroundColor: 'rgba(217, 204, 245, 0.3)',
  },
});
