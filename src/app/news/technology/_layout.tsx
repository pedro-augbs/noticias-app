import { Stack } from 'expo-router/stack';
import MenuDrawerButton from '../../../components/MenuDrawerButton';
import { colors } from '../../../theme';

export const unstable_settings = { anchor: 'index' };

export default function TechnologyStack() {
  return (
    <Stack
      screenOptions={{
        contentStyle: { backgroundColor: colors.canvas },
        headerStyle: { backgroundColor: colors.canvas },
        headerTintColor: colors.ink,
        headerTitleStyle: { color: colors.ink, fontSize: 17, fontWeight: '600' },
        headerShadowVisible: false,
      }}
    >
      <Stack.Screen name="index" options={{ title: 'Notícias', headerLeft: () => <MenuDrawerButton /> }} />
      <Stack.Screen name="[id]" options={{ title: 'Notícia', headerRight: () => <MenuDrawerButton /> }} />
    </Stack>
  );
}
