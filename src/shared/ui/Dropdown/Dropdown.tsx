import { useState, useRef } from 'react';
import cn from 'classnames';
import './Dropdown.scss';
import { useOutsideClick } from 'shared/hooks/useOutsideClick';
import { ReactComponent as ArrowUp } from 'shared/assets/ArrowUp-Icon.svg';
import { ReactComponent as ArrowDown } from 'shared/assets/ArrowDown-Icon.svg';

export interface IDropdown<T> {
  options: T[];
  selectedOption?: T;
}

export function Dropdown<T>(props: IDropdown<T>) {
  const { options, selectedOption } = props;

  const [selectedValue, setSelectedValue] = useState<T>(
    selectedOption || options[0],
  );
  const [isActive, setIsActive] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);

  useOutsideClick(dropdownRef, () => setIsActive(false));

  return (
    <div
      ref={dropdownRef}
      className={cn('dropdown', {
        ['dropdown-active']: isActive,
      })}
    >
      <div
        className={cn('dropdown-selector', {})}
        onClick={() => setIsActive(!isActive)}
      >
        {`${selectedValue}`}
        {isActive ? <ArrowDown /> : <ArrowUp />}
      </div>

      {isActive && (
        <div className={cn('dropdown-content', {})}>
          {options.map((option, index) => (
            <div
              className={cn('dropdown-option', {})}
              key={`${option}${index}`}
              onClick={() => {
                setSelectedValue(option);
                setIsActive(false);
              }}
            >
              {`${option}`}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
