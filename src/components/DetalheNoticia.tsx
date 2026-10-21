import { Ionicons } from '@expo/vector-icons';
import { router, useLocalSearchParams, useNavigation } from 'expo-router';
import { useEffect } from 'react';
import { Pressable, ScrollView, Text, View } from 'react-native';
import { noticiasPorCategoria, type CategoriaNoticia } from '../data/noticias';
import { colors } from '../theme';

export default function DetalheNoticia({ categoria }: { categoria: CategoriaNoticia }) {
  const { id } = useLocalSearchParams<{ id: string }>();
  const noticia = noticiasPorCategoria[categoria].find((item) => item.id === id);
  const navigation = useNavigation();
  const lista = categoria === 'tecnologia' ? '/news/technology' : '/news/sports';
  const nomeCategoria = categoria === 'tecnologia' ? 'Tecnologia' : 'Esportes';

  useEffect(() => {
    navigation.setOptions({ title: noticia?.titulo ?? 'Notícia indisponível' });
  }, [navigation, noticia?.titulo]);

  if (!noticia) {
    return (
      <View style={{ flex: 1, padding: 24, justifyContent: 'center', backgroundColor: colors.canvas }}>
        <View style={{ width: '100%', maxWidth: 560, alignSelf: 'center', gap: 16 }}>
          <Text selectable style={{ color: colors.ink, fontSize: 24, fontWeight: '700' }}>Notícia indisponível</Text>
          <Text style={{ color: colors.slate, fontSize: 16, lineHeight: 24 }}>Este conteúdo não está mais nesta lista.</Text>
          <Pressable
            accessibilityRole="button"
            accessibilityLabel={`Voltar para notícias de ${nomeCategoria}`}
            onPress={() => router.replace(lista)}
            style={({ pressed }) => ({ minHeight: 48, paddingHorizontal: 22, borderRadius: 999, alignSelf: 'flex-start', flexDirection: 'row', alignItems: 'center', gap: 8, backgroundColor: pressed ? colors.charcoal : colors.ink })}
          >
            <Ionicons name="arrow-back" size={17} color={colors.canvas} accessible={false} />
            <Text style={{ color: colors.canvas, fontSize: 14, fontWeight: '600' }}>Voltar para {nomeCategoria}</Text>
          </Pressable>
        </View>
      </View>
    );
  }

  const tecnologia = noticia.categoria === 'tecnologia';

  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      style={{ backgroundColor: colors.canvas }}
      contentContainerStyle={{ paddingHorizontal: 22, paddingTop: 20, paddingBottom: 48, width: '100%', maxWidth: 740, alignSelf: 'center' }}
    >
      <View style={{ gap: 22 }}>
        <View style={{ alignSelf: 'flex-start', flexDirection: 'row', alignItems: 'center', gap: 7, borderRadius: 999, paddingVertical: 7, paddingHorizontal: 12, backgroundColor: tecnologia ? colors.tealLight : colors.rose }}>
          <Ionicons name={tecnologia ? 'hardware-chip-outline' : 'football-outline'} size={15} color={colors.ink} accessible={false} />
          <Text style={{ color: colors.ink, fontSize: 12, fontWeight: '700' }}>{nomeCategoria}</Text>
        </View>
        <Text selectable style={{ color: colors.ink, fontSize: 31, fontWeight: '700', lineHeight: 38, letterSpacing: -0.7 }}>
          {noticia.titulo}
        </Text>
        <View style={{ padding: 18, borderRadius: 22, backgroundColor: colors.surface, gap: 8 }}>
          <Text style={{ color: colors.muted, fontSize: 11, fontWeight: '700', letterSpacing: 0.7 }}>EM POUCAS PALAVRAS</Text>
          <Text selectable style={{ color: colors.slate, fontSize: 16, lineHeight: 25 }}>{noticia.resumo}</Text>
        </View>
        <View style={{ width: 42, height: 4, borderRadius: 2, backgroundColor: colors.yellowDeep }} />
        <View style={{ gap: 20 }}>
          {noticia.conteudo.split('\n\n').map((paragrafo, index) => (
            <Text key={`${noticia.id}-${index}`} selectable style={{ color: colors.charcoal, fontSize: 17, lineHeight: 28 }}>
              {paragrafo}
            </Text>
          ))}
        </View>
        <Pressable
          accessibilityRole="button"
          accessibilityLabel={`Voltar para notícias de ${nomeCategoria}`}
          onPress={() => router.replace(lista)}
          style={({ pressed }) => ({ minHeight: 48, paddingHorizontal: 22, borderRadius: 999, alignSelf: 'flex-start', flexDirection: 'row', alignItems: 'center', gap: 8, backgroundColor: pressed ? colors.charcoal : colors.ink })}
        >
          <Ionicons name="arrow-back" size={17} color={colors.canvas} accessible={false} />
          <Text style={{ color: colors.canvas, fontSize: 14, fontWeight: '600' }}>Voltar para notícias</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}
