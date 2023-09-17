import React, { FC } from 'react';
import { Link, Outlet, useNavigation } from 'react-router-dom';
import './mainLayout.scss';

export type MainLayoutProps = NonNullable<unknown>;

export const MainLayout: FC<MainLayoutProps> = () => {
  const navigation = useNavigation();
  return (
    <div className='main-layout-wrapper'>
      <div className='header'>
        <div className='logo-side'>
          <h1>Darts</h1>
        </div>
        <div className='nav-side'>
          {navigation.state !== 'idle' ? (
            <div style={{ position: 'fixed', top: 0, right: 0 }}>
              <p>Navigation in progress...</p>
            </div>
          ) : (
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
          )}
        </div>
      </div>

      <hr />

      <Outlet />
    </div>
  );
};
