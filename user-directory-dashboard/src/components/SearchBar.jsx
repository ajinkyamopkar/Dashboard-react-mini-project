import { memo, useId } from 'react';

function SearchBar({ value, onChange }) {
  const id = useId();

  return (
    <div className="tw-relative">
      <label htmlFor={id} className="tw-sr-only">
        Search People Name and Email
      </label>
      <svg
        className="tw-absolute tw-left-4 tw-top-1/2 -tw-translate-y-1/2 
        tw-text-slate-400 tw-pointer-events-none"
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        aria-hidden="true"
      >
        <circle cx="11" cy="11" r="7" />
        <path d="m20 20-3.5-3.5" />
      </svg>
      <input
        id={id}
        type="search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search by Name and email"
        autoComplete="off"
        className="tw-w-full tw-rounded-xl tw-border tw-border-black tw-bg-white tw-py-3 tw-pl-11 tw-pr-4 tw-text-base tw-font-semibold tw-text-ink tw-shadow-card placeholder:tw-text-slate-400 focus:tw-outline-none focus:tw-ring-0"
      />
    </div>
  );
}

export default memo(SearchBar);
