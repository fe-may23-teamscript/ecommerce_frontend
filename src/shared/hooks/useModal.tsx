import React, { PropsWithChildren, useRef } from 'react';
import cn from 'classnames';
import { useOutsideClick } from './useOutsideClick';
import {
  useAppDispatch,
  useAppSelector,
} from '../../app/providers/store/lib/redux-hooks';
import {
  selectUser,
  toggleFirst,
  toggleModal,
} from '../../app/providers/store/slices/userSlice';

export const Modal: React.FC<PropsWithChildren> = ({ children }) => {
  const { modal, first } = useAppSelector(selectUser);
  const dispatch = useAppDispatch();

  console.log(modal);

  const dropdownRef = useRef<HTMLDivElement>(null);

  useOutsideClick(dropdownRef, () => {
    if (first) {
      dispatch(toggleFirst(false));
    } else {
      dispatch(toggleModal(false));
      dispatch(toggleFirst(true));
    }
  });

  return modal ? (
    <div className={cn('modal', { active: modal })}>
      <div ref={dropdownRef} className={cn('modal_content', { active: modal })}>
        {children}
      </div>
    </div>
  ) : null;
};
