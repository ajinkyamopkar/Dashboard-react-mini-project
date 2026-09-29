import { memo } from 'react';

function Header({ total, visible }) {
  return (
    <header className="tw-bg-ink tw-text-white">
      <div className="container py-4 py-md-5">
        <h1 className="tw-text-3xl md:tw-text-4xl tw-font-bold tw-tracking-tight tw-mb-2">
          People Directory
        </h1>
        <p className="tw-text-slate-300 tw-mb-0 tw-max-w-xl">
          Find a colleague by name or email. Select anyone to see their full
          contact details.
        </p>
        {total > 0 && (
          <p
            className="tw-mt-3 tw-mb-0 tw-text-sm tw-text-teal-200"
            role="status"
            aria-live="polite"
          >
            Showing {visible} of {total} people
          </p>
        )}
      </div>
    </header>
  );
}

export default memo(Header);
