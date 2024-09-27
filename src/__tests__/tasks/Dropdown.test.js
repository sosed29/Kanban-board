import { render, screen, fireEvent } from '@testing-library/react';
import Dropdown from '../../components/Dropdown';

describe('Компонент Dropdown', () => {
  const tasks = [
    { id: '12345', name: 'Login page – performance issues' },
    { id: '12346', name: 'Sprint bugfix' },
  ];
  const handleSelectTask = jest.fn();
  const onMoveTask = jest.fn();

  it('Отображаем задачи в выпадающем списке', () => {
    render(<Dropdown tasks={tasks} handleSelectTask={handleSelectTask} onMoveTask={onMoveTask} />);
    
    expect(screen.getByText(/Login page – performance issues/i)).toBeInTheDocument();
    expect(screen.getByText(/Sprint bugfix/i)).toBeInTheDocument();
  });

  it('Вызываем функции при выборе задачи', () => {
    render(<Dropdown tasks={tasks} handleSelectTask={handleSelectTask} onMoveTask={onMoveTask} />);
    
    fireEvent.change(screen.getByRole('combobox'), { target: { value: '12345' } });
    expect(handleSelectTask).toHaveBeenCalledWith('12345');
    expect(onMoveTask).toHaveBeenCalledWith('12345');
  });
});