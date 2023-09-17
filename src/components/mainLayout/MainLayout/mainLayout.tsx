import React, { FC } from 'react';
import { Link, Outlet, useNavigation } from 'react-router-dom';

export type MainLayoutProps = NonNullable<unknown>;

export const MainLayout: FC<MainLayoutProps> = () => {
  const navigation = useNavigation();
  return (
    <div>
      <h1>Darts</h1>
      <div style={{ position: 'fixed', top: 0, right: 0 }}>
        {navigation.state !== 'idle' && <p>Navigation in progress...</p>}
      </div>

      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/exercise'>Exercise</Link>
          </li>
        </ul>
      </nav>

      <hr />

      <Outlet />
    </div>
  );
};
