import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Column from '../../components/Column';

const mockColumns = [
  {
    title: 'Backlog',
    issues: [
      { id: '12345', name: 'Test Issue 1' },
      { id: '12346', name: 'Test Issue 2' }
    ]
  },
  {
    title: 'Ready',
    issues: []
  },
  {
    title: 'In Progress',
    issues: []
  },
  {
    title: 'Finished',
    issues: []
  }
];

const mockSetColumns = jest.fn();

describe('Column компонент', () => {
  it('отображаем заголовок ', () => {
    render(
      <MemoryRouter>
        <Column column={mockColumns[0]} columns={mockColumns} setColumns={mockSetColumns} />
      </MemoryRouter>
    );

    expect(screen.getByText('Backlog')).toBeInTheDocument();
    expect(screen.getByText('Test Issue 1')).toBeInTheDocument();
    expect(screen.getByText('Test Issue 2')).toBeInTheDocument();
  });

  it('добавляем новую задачу', () => {
    render(
      <MemoryRouter>
        <Column column={mockColumns[0]} columns={mockColumns} setColumns={mockSetColumns} />
      </MemoryRouter>
    );

    fireEvent.click(screen.getByText('+ Add card'));
    fireEvent.change(screen.getByPlaceholderText(''), { target: { value: 'New Task' } });
    fireEvent.click(screen.getByText('Submit'));

    expect(mockSetColumns).toHaveBeenCalled(); 
  });
});
