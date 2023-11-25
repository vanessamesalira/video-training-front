// CardView.test.tsx
import { render, screen } from '@testing-library/react';
import CardView from '../../../Components/CardView';

const mockMovie = {
  title: 'Mock Movie',
  description: 'This is a mock movie',
  cover_uri: 'mock-image-url.jpg',
};

test('renders CardView component with movie data', () => {
  render(<CardView movie={mockMovie} />);

  // Verifica se o título do filme está renderizado
  // const titleElement = screen.getByText(/Mock Movie/i);
  // expect(titleElement).toBeInTheDocument();

  // Verifica se a descrição do filme está renderizada
  // const descriptionElement = screen.getByText(/This is a mock movie/i);
  // expect(descriptionElement).toBeInTheDocument();

  // Você pode adicionar mais verificações conforme necessário para outros elementos do componente
});
