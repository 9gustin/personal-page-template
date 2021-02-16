import React from 'react';
import Select from '../Select';
import { THEMES } from './constants';

function ThemeToggler() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const changeTheme = (theme: any) => console.log(theme);

  return (
    <Select
      options={THEMES}
      value={THEMES[0].value}
      handleChange={changeTheme}
    />
  );
}

export default ThemeToggler;
