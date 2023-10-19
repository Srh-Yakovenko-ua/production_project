import { fireEvent, screen } from '@testing-library/react';
import { ComponentRender } from 'shared/lib/tests/componentRender/ComponentRender';
import { Sidebar } from './Sidebar';

describe('Button', () => {
  test('id sidebar', () => {
    ComponentRender(<Sidebar />);
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  });

  test('sidebar toggle', () => {
    ComponentRender(<Sidebar />);
    const toggleBtn = screen.getByTestId('sidebar-toggle');
    fireEvent.click(toggleBtn);
    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
  });
});
