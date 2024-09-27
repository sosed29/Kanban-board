import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Card from '../../components/Card'; 

describe('Компонент Card', () => {
  it('отображаем имя задачи и правильную ссылку', () => {
    const issue = { id: '12345', name: 'Тестовая задача' };

    render(
      <MemoryRouter>
        <Card issue={issue} />
      </MemoryRouter>
    );

    const linkElement = screen.getByText(/Тестовая задача/i);
    expect(linkElement).toBeInTheDocument();
    expect(linkElement.closest('a')).toHaveAttribute('href', '/tasks/12345');
  });
});
