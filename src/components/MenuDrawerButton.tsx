import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from 'expo-router';
import { Pressable } from 'react-native';
import { colors } from '../theme';

export default function MenuDrawerButton() {
  const navigation = useNavigation('/') as ReturnType<typeof useNavigation> & { openDrawer: () => void };

  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel="Abrir menu"
      onPress={() => navigation.openDrawer()}
      style={({ pressed }) => ({
        width: 44,
        height: 44,
        marginLeft: 4,
        borderRadius: 22,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: pressed ? colors.yellow : colors.yellowLight,
      })}
    >
      <Ionicons name="menu-outline" size={22} color={colors.ink} />
    </Pressable>
  );
}
