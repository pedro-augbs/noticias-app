import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router/js-tabs';
import { View } from 'react-native';
import { colors } from '../../theme';

export default function NewsTabs() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        sceneStyle: { backgroundColor: colors.canvas },
        tabBarStyle: {
          backgroundColor: colors.canvas,
          borderTopColor: colors.hairline,
          borderTopWidth: 1,
          height: 76,
          paddingTop: 8,
          paddingBottom: 8,
          elevation: 0,
        },
        tabBarActiveTintColor: colors.ink,
        tabBarInactiveTintColor: colors.muted,
        tabBarLabelStyle: { fontSize: 12, fontWeight: '600' },
      }}
    >
      <Tabs.Screen name="index" options={{ href: null }} />
      <Tabs.Screen
        name="technology"
        options={{
          title: 'Tecnologia',
          tabBarIcon: ({ color, size, focused }) => (
            <View style={{ width: 38, height: 30, borderRadius: 15, alignItems: 'center', justifyContent: 'center', backgroundColor: focused ? colors.yellowLight : 'transparent' }}>
              <Ionicons name="hardware-chip-outline" color={color} size={size} />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="sports"
        options={{
          title: 'Esportes',
          tabBarIcon: ({ color, size, focused }) => (
            <View style={{ width: 38, height: 30, borderRadius: 15, alignItems: 'center', justifyContent: 'center', backgroundColor: focused ? colors.yellowLight : 'transparent' }}>
              <Ionicons name="football-outline" color={color} size={size} />
            </View>
          ),
        }}
      />
    </Tabs>
  );
}
