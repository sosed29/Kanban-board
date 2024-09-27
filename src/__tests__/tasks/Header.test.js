import { render, screen } from '@testing-library/react';
import Header from '../../components/Header';

describe('Компонент Header', () => {
  it('отображаем заголовок', () => {
    render(<Header />);
    expect(screen.getByRole('heading', { name: /Awesome Kanban Board/i })).toBeInTheDocument();
  });
});