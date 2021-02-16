import React from 'react';

import ISelect, { Option } from './types';
import styles from './styles.module.scss';

function Select({ options, handleChange, value }: ISelect) {
  const onChange = (event: React.FormEvent<HTMLSelectElement>) => {
    handleChange?.(
      options.find(
        (option) => option.value === (event.target as HTMLSelectElement).value
      ) ?? null
    );
  };

  return (
    <select value={value} onChange={onChange} className={styles.select}>
      {React.Children.toArray(
        options.map((option: Option) => (
          <option value={option.value} className={styles.option}>
            {option.name}
          </option>
        ))
      )}
    </select>
  );
}

export default Select;
