import { memo } from 'react';
import { getInitials } from '../utils/userUtils';
const Sizes = {
  md: 'tw-h-12 tw-w-12 tw-text-base',
  lg: 'tw-h-16 tw-w-16 tw-text-xl',
};

function Avatar({ name, size = 'md' }) {
  return (
    <span
      aria-hidden="true"
      className={`tw-inline-flex tw-flex-none tw-items-center tw-justify-center tw-rounded-full
         tw-bg-brand-soft tw-font-bold tw-text-brand-dark ${Sizes[size]}`}
    >
      {getInitials(name)}
    </span>
  );
}
export default memo(Avatar);
