import { Tabs } from 'expo-router';

import { HapticTab } from '@/components/haptic-tab';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarButton: HapticTab,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="house.fill" color={color} />,
        }}
      />
      <Tabs.Screen
        name="calm"
        options={{
          title: 'Calm',
          tabBarIcon: ({ color }) => <Ionicons name="leaf-outline" size={28} color={color} />,
        }}
      />
      <Tabs.Screen
        name="reflect"
        options={{
          title: 'Reflect',
          tabBarIcon: ({ color }) => <Ionicons name="checkmark-circle-outline" size={28} color={color} />,
        }}
      />
      <Tabs.Screen
        name="advocate"
        options={{
          title: 'Advocate',
          tabBarIcon: ({ color }) => <Ionicons name="document-outline" size={28} color={color} />,
        }}
      />
      <Tabs.Screen
        name="grow"
        options={{
          title: 'Grow',
          tabBarIcon: ({ color }) => <Ionicons name="rose-outline" size={28} color={color} />,
        }}
      />
    </Tabs>
    
  );
}
