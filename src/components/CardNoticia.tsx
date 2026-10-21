import { Ionicons } from '@expo/vector-icons';
import { Link, type Href } from 'expo-router';
import { Pressable, Text, View } from 'react-native';
import type { Noticia } from '../data/noticias';
import { colors } from '../theme';

export default function CardNoticia({
  noticia,
  href,
  featured = false,
}: {
  noticia: Noticia;
  href: Href;
  featured?: boolean;
}) {
  const tecnologia = noticia.categoria === 'tecnologia';
  const icon = tecnologia ? 'hardware-chip-outline' : 'football-outline';
  const tint = tecnologia ? colors.tealLight : colors.rose;

  return (
    <Link href={href} asChild>
      <Pressable
        accessibilityRole="link"
        accessibilityLabel={`${noticia.titulo}. ${noticia.resumo}`}
        accessibilityHint="Abre a notícia completa"
        style={({ pressed }) => ({
          backgroundColor: featured ? (tecnologia ? colors.yellowLight : colors.coralLight) : colors.canvas,
          borderColor: featured ? 'transparent' : colors.hairline,
          borderWidth: 1,
          borderRadius: featured ? 28 : 22,
          padding: featured ? 16 : 14,
          gap: featured ? 16 : 0,
          opacity: pressed ? 0.78 : 1,
        })}
      >
        {featured ? (
          <>
            <View
              accessible={false}
              style={{
                height: 150,
                borderRadius: 20,
                backgroundColor: tint,
                overflow: 'hidden',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <View style={{ position: 'absolute', width: 120, height: 120, borderRadius: 60, backgroundColor: tecnologia ? colors.yellow : colors.coral, opacity: 0.6, top: -55, right: -10 }} />
              <View style={{ position: 'absolute', width: 72, height: 72, borderRadius: 22, backgroundColor: tecnologia ? colors.rose : colors.yellow, bottom: -24, left: 22, transform: [{ rotate: '-16deg' }] }} />
              <View style={{
                width: 174,
                height: 112,
                padding: 13,
                backgroundColor: colors.canvas,
                borderColor: colors.hairline,
                borderWidth: 1,
                borderRadius: 16,
                transform: [{ rotate: '-3deg' }],
                shadowColor: colors.ink,
                shadowOpacity: 0.1,
                shadowRadius: 12,
                shadowOffset: { width: 0, height: 6 },
                elevation: 3,
              }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 6, marginBottom: 10 }}>
                  <View style={{ width: 8, height: 8, borderRadius: 4, backgroundColor: colors.yellowDeep }} />
                  <View style={{ height: 5, width: 73, borderRadius: 3, backgroundColor: colors.hairline }} />
                </View>
                <View style={{ flex: 1, borderRadius: 10, backgroundColor: tint, alignItems: 'center', justifyContent: 'center' }}>
                  <Ionicons name={icon} size={42} color={colors.ink} accessible={false} />
                </View>
              </View>
              <View style={{ position: 'absolute', top: 17, right: 30, width: 44, height: 44, borderRadius: 15, backgroundColor: colors.canvas, alignItems: 'center', justifyContent: 'center', transform: [{ rotate: '9deg' }] }}>
                <Ionicons name="sparkles-outline" size={22} color={colors.ink} accessible={false} />
              </View>
            </View>
            <View style={{ gap: 10 }}>
              <Text selectable style={{ color: colors.ink, fontSize: 23, fontWeight: '700', lineHeight: 29, letterSpacing: -0.4 }}>
                {noticia.titulo}
              </Text>
              <Text selectable style={{ color: colors.charcoal, fontSize: 15, lineHeight: 22 }}>
                {noticia.resumo}
              </Text>
              <View style={{ flexDirection: 'row', alignItems: 'center', alignSelf: 'flex-start', gap: 8, marginTop: 2, paddingVertical: 10, paddingHorizontal: 16, borderRadius: 999, backgroundColor: colors.ink }}>
                <Text style={{ color: colors.canvas, fontSize: 13, fontWeight: '600' }}>Ler notícia</Text>
                <Ionicons name="arrow-forward" size={16} color={colors.canvas} accessible={false} />
              </View>
            </View>
          </>
        ) : (
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12, minHeight: 84 }}>
            <View style={{ width: 46, height: 46, borderRadius: 16, backgroundColor: tint, alignItems: 'center', justifyContent: 'center' }}>
              <Ionicons name={icon} size={22} color={colors.ink} accessible={false} />
            </View>
            <View style={{ flex: 1, gap: 5 }}>
              <Text selectable numberOfLines={2} style={{ color: colors.ink, fontSize: 17, fontWeight: '600', lineHeight: 22 }}>
                {noticia.titulo}
              </Text>
              <Text selectable numberOfLines={2} style={{ color: colors.slate, fontSize: 14, lineHeight: 20 }}>
                {noticia.resumo}
              </Text>
            </View>
            <View style={{ width: 30, height: 30, borderRadius: 15, backgroundColor: colors.surface, alignItems: 'center', justifyContent: 'center' }}>
              <Ionicons name="arrow-forward-outline" size={16} color={colors.ink} accessible={false} />
            </View>
          </View>
        )}
      </Pressable>
    </Link>
  );
}
