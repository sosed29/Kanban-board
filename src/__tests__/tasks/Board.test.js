import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Board from '../../components/Board';

describe('Компонент Board', () => {
  it('отображает колонки с данными', () => {
    //  данные колонок
    const mockColumns = [
      { title: 'Backlog', issues: [] },
      { title: 'Ready', issues: [] },
      { title: 'In Progress', issues: [] },
      { title: 'Finished', issues: [] },
    ];

    //  функцию setColumns
    const mockSetColumns = jest.fn();

    render(
      <MemoryRouter>
        <Board columns={mockColumns} setColumns={mockSetColumns} />
      </MemoryRouter>
    );

    // проверяем наличие заголовков колонок
    const backlogTitle = screen.getByRole('heading', { name: /Backlog/i });
    const readyTitle = screen.getByRole('heading', { name: /Ready/i });
    const inProgressTitle = screen.getByRole('heading', { name: /In Progress/i });
    const finishedTitle = screen.getByRole('heading', { name: /Finished/i });

    expect(backlogTitle).toBeInTheDocument();
    expect(readyTitle).toBeInTheDocument();
    expect(inProgressTitle).toBeInTheDocument();
    expect(finishedTitle).toBeInTheDocument();
  });
});
