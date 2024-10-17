import { fireEvent, render, screen } from '@testing-library/react';
import PostComment from '.';

const comments = [
  { id: 1, comment: "Bala demais fi" },
  { id: 2, comment: "Forte" }
];

describe('Teste para o componente PostComment', () => {
  it('Deve renderizar o componente corretamente', () => {
    render(<PostComment />);
    expect(screen.getByText('Comentar')).toBeInTheDocument();
  });

  test('Must add two comments', () => {
    const { debug } = render(<PostComment />);

    // Simula a adição de dois comentários
    for (let i = 0; i < comments.length; i++) {
      const textArea = screen.getByRole('textbox');

      // Atualiza corretamente o valor do textarea com diferentes comentários
      fireEvent.change(textArea, { target: { value: comments[i].comment } });

      // Simula o clique no botão para adicionar o comentário
      fireEvent.click(screen.getByTestId('btn-add-comment'));
    }

    // Verifica se dois comentários foram renderizados no DOM
    const renderedComments = screen.getAllByRole('listitem'); // Usamos o 'li' como base

    debug()
    // Verifica se o número de elementos renderizados é igual ao número de comentários
    expect(renderedComments).toHaveLength(comments.length);
  });
});
