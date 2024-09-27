import dataMock from '../../components/mockData'; 

describe('Модуль dataMock', () => {
  it('содержит 4 колонки', () => {
    expect(dataMock).toHaveLength(4); // проверяем что в dataMock 4 колонки
  });

  it('проверяет структуру первой колонки', () => {
    const backlogColumn = dataMock[0];
    
    // проверяем заголовок первой колонки
    expect(backlogColumn.title).toBe('Backlog');
    
    // проверяем, что у колонки есть массив задач
    expect(Array.isArray(backlogColumn.issues)).toBe(true);
    
    // проверяем, что количество задач в колонке соответствует ожидаемому
    expect(backlogColumn.issues).toHaveLength(2);
    
    // проверяем первую задачу в колонке
    expect(backlogColumn.issues[0]).toEqual({
      id: '12345',
      name: 'Login page – performance issues'
    });
  });

  it('проверяет, что каждая колонка содержит задачи', () => {
    dataMock.forEach((column) => {
      expect(column.issues).toBeInstanceOf(Array); // у каждой колонки должен быть массив issues
      expect(column.issues.length).toBeGreaterThan(0); // массив задач не пуст
    });
  });

  it('проверяет последнюю колонку (Finished)', () => {
    const finishedColumn = dataMock[3];
    
    expect(finishedColumn.title).toBe('Finished');
    expect(finishedColumn.issues).toHaveLength(2);
    expect(finishedColumn.issues[0].name).toBe('Main page – performance issues');
  });
});
