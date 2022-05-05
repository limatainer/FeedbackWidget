import bugImageUrl from '../assets/Figmoji/Bug.svg'
import ideaImageUrl from '../assets/Figmoji/Idea.svg'
import thoughtImageUrl from '../assets/Figmoji/Thought.svg'

export const feedbackTypes = {
  BUG: {
    title: 'Problema',
    image: {
      source: bugImageUrl,
      alt: 'Imagem de um inseto'
    },
  },
  IDEA: {
    title: 'Ideia',
    image: {
      source: ideaImageUrl,
      alt: 'Imagem de uma lampada'
    },
  },
  OTHER: {
    title: 'Outro',
    image: {
      source: thoughtImageUrl,
      alt: 'Imagem de um balão pensamento'
    },
  },
}

/*Para pegar os tipos dos objetos e considerando que os tipos de feedback que eu tenho estão sendo representados
por suas chaves tão eu consigo tipar meu state de tipo para trabalhar eles na funcao onClick*/
export type FeedbackType = keyof typeof feedbackTypes;
