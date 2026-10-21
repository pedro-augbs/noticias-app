import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { Image, Pressable, ScrollView, Text, View } from 'react-native';
import { colors } from '../theme';

export default function AboutScreen() {
  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      style={{ backgroundColor: colors.canvas }}
      contentContainerStyle={{ padding: 22, paddingBottom: 40, width: '100%', maxWidth: 680, alignSelf: 'center' }}
    >
      <View style={{ gap: 20 }}>
        <View style={{ gap: 8 }}>
          <Text style={{ color: colors.yellowDark, fontSize: 11, fontWeight: '700', letterSpacing: 0.8 }}>SOBRE O PROJETO</Text>
          <Text selectable style={{ color: colors.ink, fontSize: 32, fontWeight: '700', lineHeight: 38, letterSpacing: -0.6 }}>
            Informação boa, sem complicar.
          </Text>
        </View>
        <View style={{ width: '100%', aspectRatio: 1.42, borderRadius: 28, overflow: 'hidden', backgroundColor: colors.surface }}>
          <Image
            source={require('../../assets/sobre-noticias-claro.jpg')}
            accessibilityLabel="Ilustração de um jornal entre cartões coloridos, um chip e uma bola"
            style={{ width: '100%', height: '100%' }}
            resizeMode="cover"
          />
        </View>
        <View style={{ gap: 10 }}>
          <Text selectable style={{ color: colors.ink, fontSize: 19, fontWeight: '600', lineHeight: 27 }}>
            Notícias reúne conteúdo de tecnologia e esportes em um só lugar.
          </Text>
          <Text selectable style={{ color: colors.slate, fontSize: 16, lineHeight: 24 }}>
            Escolha uma categoria, percorra os destaques e abra cada matéria para ler a história completa.
          </Text>
        </View>
        <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 8 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 7, borderRadius: 999, paddingVertical: 8, paddingHorizontal: 12, backgroundColor: colors.tealLight }}>
            <Ionicons name="hardware-chip-outline" size={15} color={colors.ink} accessible={false} />
            <Text style={{ color: colors.ink, fontSize: 13, fontWeight: '600' }}>Tecnologia</Text>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 7, borderRadius: 999, paddingVertical: 8, paddingHorizontal: 12, backgroundColor: colors.rose }}>
            <Ionicons name="football-outline" size={15} color={colors.ink} accessible={false} />
            <Text style={{ color: colors.ink, fontSize: 13, fontWeight: '600' }}>Esportes</Text>
          </View>
        </View>
        <Pressable
          accessibilityRole="button"
          accessibilityLabel="Voltar para Notícias"
          onPress={() => router.replace('/news/technology')}
          style={({ pressed }) => ({
            minHeight: 52,
            paddingHorizontal: 22,
            alignSelf: 'flex-start',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 9,
            borderRadius: 999,
            backgroundColor: pressed ? colors.charcoal : colors.ink,
          })}
        >
          <Text style={{ color: colors.canvas, fontSize: 14, fontWeight: '600' }}>Voltar para Notícias</Text>
          <Ionicons name="arrow-forward" size={17} color={colors.canvas} accessible={false} />
        </Pressable>
      </View>
    </ScrollView>
  );
}
