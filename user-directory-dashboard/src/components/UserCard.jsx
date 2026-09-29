import { memo } from 'react';
import Avatar from './Avatar';

function UserCard({ user, index, onSelect }) {
  return (
    <article
      className="card-enter tw-h-full"
      style={{ '--stagger': `${Math.min(index, 9) * 45}ms` }}
    >
      <button
        type="button"
        onClick={() => onSelect(user)}
        aria-haspopup="dialog"
        className="tw-group tw-flex tw-h-full tw-w-full tw-flex-col tw-gap-4 tw-rounded-2xl tw-border tw-border-slate-200 tw-bg-white tw-p-5 tw-text-left tw-shadow-card tw-transition tw-duration-200 hover:-tw-translate-y-0.5 hover:tw-bg-[aliceblue] hover:tw-border-brand/40 hover:tw-shadow-lift focus-visible:tw-outline-none focus-visible:tw-ring-4 focus-visible:tw-ring-brand/30"  >
        <div className="tw-flex tw-items-center tw-gap-3">
          <Avatar name={user.name} />
          <div className="tw-min-w-0">
            <h2 className="tw-m-0 tw-truncate tw-text-lg tw-font-semibold tw-text-ink group-hover:tw-text-brand">
              {user.name}
            </h2>
            <p className="tw-m-0 tw-truncate tw-text-sm tw-text-slate-500">
              {user.email}
            </p>
          </div>
        </div>

        <dl className="tw-m-0 tw-grid tw-grid-cols-2 tw-gap-3 tw-border-t tw-border-slate-100 tw-pt-4 tw-text-sm">
          <div className="tw-min-w-0">
            <dt className="tw-text-xs tw-font-medium tw-text-slate-400">Company</dt>
            <dd className="tw-m-0 tw-truncate tw-font-medium tw-text-slate-700">
              {user.company.name}
            </dd>
          </div>
          <div className="tw-min-w-0">
            <dt className="tw-text-xs tw-font-medium tw-text-slate-400">City</dt>
            <dd className="tw-m-0 tw-truncate tw-font-medium tw-text-slate-700">
              {user.address.city}
            </dd>
          </div>
        </dl>
      </button>
    </article>
  );
}

export default memo(UserCard);
