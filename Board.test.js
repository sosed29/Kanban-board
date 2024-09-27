import React from 'react';
import { render, screen } from '@testing-library/react';
import Board from './Board';
import Column from './Column';
import Header from './Header';
import Footer from './Footer';

describe('Board', () => {
  it('renders correctly', () => {
    render(<Board />);
    expect(screen.getByText('Backlog')).toBeInTheDocument();
    expect(screen.getByText('Ready')).toBeInTheDocument();
    expect(screen.getByText('In Progress')).toBeInTheDocument();
    expect(screen.getByText('Finished')).toBeInTheDocument();
  });
});

describe('Column', () => {
  it('renders correctly', () => {
    render(<Column column={dataMock[0]} columns={dataMock} setColumns={() => {}} />);
    expect(screen.getByText('Backlog')).toBeInTheDocument();
    expect(screen.getByText('Login page – performance issues')).toBeInTheDocument();
    expect(screen.getByText('Sprint bugfix')).toBeInTheDocument();
  });
});

describe('Header', () => {
  it('renders correctly', () => {
    render(<Header />);
    expect(screen.getByText('Kanban Board')).toBeInTheDocument();
  });
});

describe('Footer', () => {
  it('renders correctly', () => {
    render(<Footer columns={dataMock} />);
    expect(screen.getByText('Total issues: 8')).toBeInTheDocument();
  });
});
