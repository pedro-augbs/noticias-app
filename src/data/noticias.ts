export type CategoriaNoticia = 'tecnologia' | 'esportes';

export interface Noticia {
  id: string;
  categoria: CategoriaNoticia;
  titulo: string;
  resumo: string;
  conteudo: string;
}

export const noticiasPorCategoria: Record<CategoriaNoticia, Noticia[]> = {
  tecnologia: [
    {
      id: 'ia-na-escola',
      categoria: 'tecnologia',
      titulo: 'Escolas testam novas formas de usar inteligência artificial',
      resumo: 'Projetos piloto ajudam professores a preparar atividades e acompanhar o aprendizado.',
      conteudo:
        'Escolas de diferentes regiões começaram a testar ferramentas de inteligência artificial como apoio ao planejamento das aulas. As plataformas sugerem exercícios e adaptam materiais ao ritmo de cada turma.\n\nEducadores continuam responsáveis por revisar as sugestões e acompanhar os alunos. A experiência também inclui orientações sobre privacidade e uso responsável da tecnologia.\n\nOs primeiros resultados serão avaliados ao longo do semestre, com participação de professores, famílias e estudantes.',
    },
    {
      id: 'baterias-duradouras',
      categoria: 'tecnologia',
      titulo: 'Pesquisa avança em baterias mais duradouras',
      resumo: 'Novo método busca ampliar a vida útil de dispositivos e reduzir o descarte de componentes.',
      conteudo:
        'Pesquisadores desenvolveram um processo para reduzir o desgaste de materiais usados em baterias recarregáveis. Em testes de laboratório, as células mantiveram a capacidade por mais ciclos de carga.\n\nA técnica ainda precisa passar por avaliações em escala industrial e por estudos de custo. Especialistas destacam que a durabilidade depende também da forma de fabricação e das condições de uso.\n\nSe chegar ao mercado, o avanço poderá prolongar a vida de eletrônicos e apoiar a reutilização de materiais.',
    },
    {
      id: 'seguranca-digital',
      categoria: 'tecnologia',
      titulo: 'Pequenas empresas reforçam a segurança digital',
      resumo: 'Medidas simples de proteção ganham espaço entre negócios de bairro e prestadores de serviço.',
      conteudo:
        'Pequenos negócios estão adotando autenticação em duas etapas, cópias de segurança e treinamento para suas equipes. Essas medidas ajudam a proteger contas e arquivos contra golpes comuns.\n\nConsultores recomendam começar pelos serviços mais importantes, como e-mail e sistemas financeiros. Senhas únicas e atualizações regulares também reduzem riscos.\n\nA mudança não exige uma estrutura grande: um plano claro de recuperação pode fazer diferença quando um equipamento falha ou uma conta é comprometida.',
    },
  ],
  esportes: [
    {
      id: 'base-feminina',
      categoria: 'esportes',
      titulo: 'Projeto amplia o acesso de meninas ao futebol',
      resumo: 'Iniciativa comunitária oferece treinos gratuitos e apoio escolar em novos bairros.',
      conteudo:
        'Um projeto comunitário abriu novas turmas de futebol para meninas entre oito e dezesseis anos. As atividades acontecem em quadras públicas e incluem acompanhamento escolar durante a semana.\n\nA equipe técnica reúne treinadoras, profissionais de educação física e voluntários. Além dos treinos, as participantes conversam sobre saúde, trabalho em equipe e confiança.\n\nAs inscrições para a próxima etapa serão divulgadas pelas associações locais, que também buscam ampliar a oferta de equipamentos esportivos.',
    },
    {
      id: 'corrida-parques',
      categoria: 'esportes',
      titulo: 'Corridas de rua movimentam parques aos fins de semana',
      resumo: 'Provas locais atraem iniciantes e atletas experientes para percursos de diferentes distâncias.',
      conteudo:
        'Parques municipais receberam um número maior de corredores em provas organizadas por clubes e associações. As etapas oferecem percursos curtos para iniciantes e distâncias maiores para atletas com experiência.\n\nOrganizadores recomendam inscrição antecipada, hidratação e atenção às orientações de trânsito. Equipes de apoio ficam distribuídas ao longo do percurso.\n\nParte dos eventos também promove arrecadação de alimentos e ações de preservação das áreas verdes utilizadas pelas provas.',
    },
    {
      id: 'esporte-adaptado',
      categoria: 'esportes',
      titulo: 'Esporte adaptado ganha novos horários de treinamento',
      resumo: 'Centros esportivos ajustam a programação para receber mais participantes durante a semana.',
      conteudo:
        'Centros esportivos municipais abriram novos horários para modalidades adaptadas. A programação inclui atividades para diferentes idades e níveis de experiência.\n\nProfissionais acompanham as turmas e fazem ajustes nos equipamentos e nas regras quando necessário. A proposta é oferecer um ambiente seguro e acessível para quem está começando.\n\nAs vagas são gratuitas e podem ser consultadas diretamente nos centros participantes, que também informam sobre transporte e acessibilidade do local.',
    },
  ],
};
