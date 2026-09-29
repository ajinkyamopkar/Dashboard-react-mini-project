import { memo } from 'react';

/** Placeholder cards shown while data loads, so the layout doesn't jump. */
function SkeletonGrid({ count = 6 }) {
  return (
    <div className="row g-3 g-lg-4" aria-hidden="true">
      {Array.from({ length: count }, (_, i) => (
        <div key={i} className="col-12 col-md-6 col-xl-4">
          <div className="tw-h-[152px] tw-rounded-2xl tw-border tw-border-slate-200 tw-bg-white tw-p-5">
            <div className="tw-flex tw-items-center tw-gap-3">
              <div className="skeleton tw-h-12 tw-w-12 tw-rounded-full" />
              <div className="tw-flex-1">
                <div className="skeleton tw-mb-2 tw-h-4 tw-w-2/3 tw-rounded" />
                <div className="skeleton tw-h-3 tw-w-1/2 tw-rounded" />
              </div>
            </div>
            <div className="skeleton tw-mt-6 tw-h-3 tw-w-full tw-rounded" />
          </div>
        </div>
      ))}
    </div>
  );
}

export default memo(SkeletonGrid);
