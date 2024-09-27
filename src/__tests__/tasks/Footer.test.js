import { render, screen } from '@testing-library/react';
import Footer from '../../components/Footer';

describe('Компонент Footer', () => {
  const columns = [
    { title: 'Backlog', issues: [{ id: '1', name: 'Task 1' }] },
    { title: 'Finished', issues: [{ id: '2', name: 'Task 2' }] },
  ];

  it('Отображаем количество активных и завершенных задач', () => {
    render(<Footer columns={columns} />);
    expect(screen.getByText(/Active tasks: 1/i)).toBeInTheDocument();
    expect(screen.getByText(/Finished tasks: 1/i)).toBeInTheDocument();
  });
});