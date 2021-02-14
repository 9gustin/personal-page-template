import React from 'react';
import { useTranslation } from 'react-i18next';

function Header() {
  const { t } = useTranslation();

  return (
    <header>
      <nav>
        <a href="#">brand</a>
      </nav>
    </header>
  );
}

export default Header;
