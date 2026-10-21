import { Ionicons } from '@expo/vector-icons';
import { useRef, useState } from 'react';
import { FlatList, Pressable, Text, useWindowDimensions, View } from 'react-native';
import CardNoticia from './CardNoticia';
import { noticiasPorCategoria, type CategoriaNoticia, type Noticia } from '../data/noticias';
import { colors } from '../theme';

export default function ListaNoticias({ categoria }: { categoria: CategoriaNoticia }) {
  const rota = categoria === 'tecnologia' ? 'technology' : 'sports';
  const tecnologia = categoria === 'tecnologia';
  const titulo = tecnologia ? 'Tecnologia' : 'Esportes';
  const descricao = tecnologia
    ? 'Ideias e descobertas para entender o que vem por aí.'
    : 'Histórias, iniciativas e novidades dentro e fora de campo.';
  const noticias = noticiasPorCategoria[categoria];
  const [destaqueIndex, setDestaqueIndex] = useState(0);
  const carrossel = useRef<FlatList<Noticia> | null>(null);
  const larguraTela = useWindowDimensions().width;
  const larguraSlide = Math.max(220, Math.min(larguraTela - 36, 644));
  const restantes = noticias.filter((_, index) => index !== destaqueIndex);

  const mostrarSlide = (index: number) => {
    const proximo = (index + noticias.length) % noticias.length;
    carrossel.current?.scrollToOffset({ offset: proximo * larguraSlide, animated: true });
    setDestaqueIndex(proximo);
  };

  const header = (
    <View style={{ paddingTop: 10, paddingBottom: 20, gap: 16 }}>
      <View style={{ gap: 8 }}>
        <Text style={{ color: colors.yellowDark, fontSize: 11, fontWeight: '700', letterSpacing: 0.8 }}>
          SEU RADAR DE LEITURA
        </Text>
        <Text selectable style={{ color: colors.ink, fontSize: 34, fontWeight: '700', lineHeight: 40, letterSpacing: -0.8 }}>
          {titulo}
        </Text>
        <Text style={{ color: colors.slate, fontSize: 16, lineHeight: 23 }}>{descricao}</Text>
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
        <Text style={{ color: colors.ink, fontSize: 20, fontWeight: '700' }}>Em destaque</Text>
        <Text accessibilityLiveRegion="polite" style={{ color: colors.muted, fontSize: 12, fontWeight: '600' }}>
          {String(destaqueIndex + 1).padStart(2, '0')} / {String(noticias.length).padStart(2, '0')}
        </Text>
      </View>
      <FlatList
        ref={carrossel}
        data={noticias}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        keyExtractor={(noticia) => noticia.id}
        style={{ width: '100%' }}
        onScroll={(event) => {
          const indice = Math.max(0, Math.min(noticias.length - 1, Math.round(event.nativeEvent.contentOffset.x / larguraSlide)));
          setDestaqueIndex((atual) => (atual === indice ? atual : indice));
        }}
        scrollEventThrottle={16}
        renderItem={({ item }) => (
          <View style={{ width: larguraSlide }}>
            <CardNoticia noticia={item} href={`/news/${rota}/${item.id}`} featured />
          </View>
        )}
      />
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
        <Pressable
          accessibilityRole="button"
          accessibilityLabel="Notícia em destaque anterior"
          onPress={() => mostrarSlide(destaqueIndex - 1)}
          style={({ pressed }) => ({ width: 44, height: 44, borderRadius: 22, alignItems: 'center', justifyContent: 'center', backgroundColor: pressed ? colors.yellowLight : colors.surface })}
        >
          <Ionicons name="arrow-back" size={18} color={colors.ink} accessible={false} />
        </Pressable>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          {noticias.map((noticia, index) => (
            <Pressable
              key={noticia.id}
              accessibilityRole="button"
              accessibilityLabel={`Mostrar destaque ${index + 1}: ${noticia.titulo}`}
              accessibilityState={{ selected: index === destaqueIndex }}
              onPress={() => mostrarSlide(index)}
              style={{ width: 40, height: 44, alignItems: 'center', justifyContent: 'center' }}
            >
              <View style={{ width: index === destaqueIndex ? 18 : 7, height: 7, borderRadius: 4, backgroundColor: index === destaqueIndex ? colors.yellowDeep : colors.muted }} />
            </Pressable>
          ))}
        </View>
        <Pressable
          accessibilityRole="button"
          accessibilityLabel="Próxima notícia em destaque"
          onPress={() => mostrarSlide(destaqueIndex + 1)}
          style={({ pressed }) => ({ width: 44, height: 44, borderRadius: 22, alignItems: 'center', justifyContent: 'center', backgroundColor: pressed ? colors.yellowLight : colors.surface })}
        >
          <Ionicons name="arrow-forward" size={18} color={colors.ink} accessible={false} />
        </Pressable>
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 2, paddingTop: 2 }}>
        <Text style={{ color: colors.ink, fontSize: 18, fontWeight: '700' }}>Mais para você</Text>
        <Text style={{ color: colors.muted, fontSize: 12 }}>{String(restantes.length).padStart(2, '0')} matérias</Text>
      </View>
    </View>
  );

  return (
    <FlatList
      data={restantes}
      extraData={destaqueIndex}
      keyExtractor={(noticia) => noticia.id}
      renderItem={({ item }) => <CardNoticia noticia={item} href={`/news/${rota}/${item.id}`} />}
      contentInsetAdjustmentBehavior="automatic"
      style={{ backgroundColor: colors.canvas }}
      contentContainerStyle={{ paddingHorizontal: 18, paddingTop: 10, paddingBottom: 28, width: '100%', maxWidth: 680, alignSelf: 'center' }}
      ListHeaderComponent={header}
      ItemSeparatorComponent={() => <View style={{ height: 14 }} />}
    />
  );
}
