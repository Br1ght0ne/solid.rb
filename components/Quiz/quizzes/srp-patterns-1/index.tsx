import { IQuiz } from '../IQuiz'

const quiz: IQuiz = {
  name: 'srp-patterns-1',
  question: 'Чем полезен приём «Выделение класса»?',
  variants: [
    {
      text: 'Позволяет определиться с назначением каждого создаваемого или выделяемого класса'
    },
    {
      text: 'Позволяет найти классы со слишком большим количеством ответственностей',
      description:
        'Эьтот приём — уже инструмент исправления подобной ошибки, определить неоправданно большое количество назначений необходимо до применения «Выделения класса»'
    },
    {
      text: 'Позволяет сократить количество ответственностей каждого класса до одной'
    }
  ],
  meta: {
    correctAnswers: [0, 2]
  }
}

export default quiz
