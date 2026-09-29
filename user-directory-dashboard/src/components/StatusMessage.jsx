import { memo } from 'react';
function StatusMessage({ title, children, actionLabel, onAction, tone = 'neutral' }) {
  const border = tone === 'error' ? 'tw-border-red-200' : 'tw-border-slate-200';
  return (
    <div
      role={tone === 'error' ? 'alert' : 'status'}
      className={`tw-rounded-2xl tw-border tw-border-dashed ${border} tw-bg-white tw-px-6 tw-py-12 tw-text-center`}
    >
      <h2 className="tw-mb-2 tw-text-xl tw-font-semibold tw-text-ink">{title}</h2>
      <p className="tw-mx-auto tw-mb-0 tw-max-w-md tw-text-slate-500">{children}</p>
      {actionLabel && (
        <button
          type="button"
          onClick={onAction}
          className="tw-mt-5 tw-rounded-lg tw-bg-brand tw-px-5 tw-py-2.5 tw-font-semibold tw-text-white tw-transition hover:tw-bg-brand-dark focus-visible:tw-outline-none focus-visible:tw-ring-4 focus-visible:tw-ring-brand/30"
        >
          {actionLabel}
        </button>
      )}
    </div>
  );
}

export default memo(StatusMessage);
