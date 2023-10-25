import { useState, useRef } from 'react';
import cn from 'classnames';
import './Dropdown.scss';
import { useOutsideClick } from 'shared/hooks/useOutsideClick';
import { ReactComponent as ArrowUp } from 'assets/icons/arrow-up.svg';
import { ReactComponent as ArrowDown } from 'assets/icons/arrow-down.svg';

export interface IDropdown<T> {
  options: T[];
  selectedOption?: T;
  onSelect: (value: T) => void;
}

export function Dropdown<T>(props: IDropdown<T>) {
  const { options, selectedOption, onSelect } = props;
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
        {isActive ? (
          <ArrowDown className="dropdown-icon" />
        ) : (
          <ArrowUp className="dropdown-icon" />
        )}
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
                onSelect(option);
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
