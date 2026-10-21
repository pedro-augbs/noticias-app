import { Ionicons } from '@expo/vector-icons';
import { Drawer } from 'expo-router/drawer';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import MenuDrawerButton from '../components/MenuDrawerButton';
import { colors } from '../theme';

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1, backgroundColor: colors.canvas }} edges={['left', 'right']}>
        <StatusBar style="dark" />
        <Drawer
          screenOptions={{
            headerShown: false,
            drawerStyle: { backgroundColor: colors.canvas, width: 300 },
            drawerActiveTintColor: colors.ink,
            drawerActiveBackgroundColor: colors.yellowLight,
            drawerInactiveTintColor: colors.slate,
            drawerItemStyle: { borderRadius: 16, marginHorizontal: 12 },
            drawerLabelStyle: { fontSize: 15, fontWeight: '600' },
            drawerContentStyle: { paddingTop: 12 },
            sceneStyle: { backgroundColor: colors.canvas },
          }}
        >
          <Drawer.Screen name="index" options={{ drawerItemStyle: { display: 'none' } }} />
          <Drawer.Screen
            name="news"
            options={{
              drawerLabel: 'Notícias',
              title: 'Notícias',
              drawerIcon: ({ color, size }) => <Ionicons name="newspaper-outline" color={color} size={size} />,
            }}
          />
          <Drawer.Screen
            name="about"
            options={{
              drawerLabel: 'Sobre',
              title: 'Sobre',
              headerShown: true,
              headerStyle: { backgroundColor: colors.canvas },
              headerTintColor: colors.ink,
              headerTitleStyle: { color: colors.ink, fontSize: 17, fontWeight: '600' },
              headerShadowVisible: false,
              headerLeft: () => <MenuDrawerButton />,
              drawerIcon: ({ color, size }) => <Ionicons name="information-circle-outline" color={color} size={size} />,
            }}
          />
        </Drawer>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
