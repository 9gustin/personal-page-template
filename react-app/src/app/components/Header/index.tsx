import React from 'react';
import { useTranslation } from 'react-i18next';
import Brand from '../Brand';
import ThemeToggler from '../ThemeToggler';

function Header() {
  const { t } = useTranslation();

  return (
    <header>
      <nav>
        <span>
          <Brand />
        </span>
        <ul>
          <li>
            <a href="#">a</a>
          </li>
          <li>Link2</li>
          <li>Link3</li>
        </ul>
        <ThemeToggler />
      </nav>
    </header>
  );
}

export default Header;
