import { useEffect, useRef, useState } from 'react';
import Modal from 'bootstrap/js/dist/modal';
import Avatar from './Avatar';

function DetailRow({ label, children }) {
  return (
    <div className="tw-py-3 tw-border-b tw-border-slate-100 last:tw-border-b-0">
      <dt className="tw-text-md tw-font-medium tw-text-black-400">{label}</dt>
      <dd className="tw-m-0 tw-mt-1 tw-text-slate-800">{children}</dd>
    </div>
  );
}

export default function UserModal({ user, onClose }) {
  const modalRef = useRef(null);
  const instanceRef = useRef(null);
  const openerRef = useRef(null); // element to return focus to on close
  const onCloseRef = useRef(onClose);
  onCloseRef.current = onClose;
  const [displayed, setDisplayed] = useState(user);
  useEffect(() => {
    if (user) setDisplayed(user);
  }, [user]);
  useEffect(() => {
    const el = modalRef.current;
    instanceRef.current = new Modal(el);

    const handleHidden = () => {
      if (!document.querySelector('.modal.show')) {
        document.body.style.removeProperty('overflow');
        document.body.style.removeProperty('padding-right');
      }
      onCloseRef.current();
      openerRef.current?.focus?.();
    };
    el.addEventListener('hidden.bs.modal', handleHidden);

    return () => {
      el.removeEventListener('hidden.bs.modal', handleHidden);
      instanceRef.current.dispose();
    };
  }, []);
  useEffect(() => {
    const timer = setTimeout(() => {
      const modal = instanceRef.current;
      if (user) {
        openerRef.current = document.activeElement;
        modal.show();
      } else {
        modal.hide();
      }
    }, 0);
    return () => clearTimeout(timer);
  }, [user]);

  const { address, company } = displayed ?? {};

  return (
    <div
      ref={modalRef}
      className="modal fade"
      tabIndex="-1"
      role="dialog"
      aria-modal="true"
      aria-labelledby="user-modal-title"
    >
      <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg">
        <div className="modal-content tw-rounded-2xl tw-border-0 tw-shadow-lift">
          {displayed && (
            <>
              <header className="modal-header tw-bg-ink tw-items-start tw-gap-4 tw-border-slate-100 tw-p-5">
                <Avatar name={displayed.name} size="lg" />
                <div className="tw-flex-1 tw-min-w-0">
                  <h2 id="user-modal-title" className="modal-title tw-text-2xl tw-font-bold tw-text-ink text-white">
                    {displayed.name}
                  </h2>
                  <p className="tw-m-0 tw-text-slate-500 text-white">
                    @{displayed.username} · {company.name}
                  </p>
                </div>
                <button type="button" className="btn-close tw-bg-white focus:tw-outline-none focus:tw-ring-0" data-bs-dismiss="modal" aria-label="Close" />
              </header>

              <div className="modal-body tw-p-5">
                <div className="row g-4">
                  <section className="col-12 col-md-6" aria-labelledby="contact-heading">
                    <h3 id="contact-heading" className="tw-mb-1 tw-text-base tw-font-semibold tw-text-brand-dark">
                      Contact
                    </h3>
                    <dl className="tw-m-0">
                      <DetailRow label="Email">
                        <a className="tw-text-brand-dark hover:tw-underline" href={`mailto:${displayed.email}`}>
                          {displayed.email}
                        </a>
                      </DetailRow>
                      <DetailRow label="Phone">
                        <a className="tw-text-brand-dark hover:tw-underline" href={`tel:${displayed.phone.split(' x')[0]}`}>
                          {displayed.phone}
                        </a>
                      </DetailRow>
                      <DetailRow label="Website">
                        <a
                          className="tw-text-brand-dark hover:tw-underline"
                          href={`https://${displayed.website}`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {displayed.website}
                        </a>
                      </DetailRow>
                    </dl>
                  </section>

                  <section className="col-12 col-md-6" aria-labelledby="address-heading">
                    <h3 id="address-heading" className="tw-mb-1 tw-text-base tw-font-semibold tw-text-brand-dark">
                      Address
                    </h3>
                    <dl className="tw-m-0">
                      <DetailRow label="Street">
                        <address className="tw-m-0 tw-not-italic">
                          {address.suite}, {address.street}
                        </address>
                      </DetailRow>
                      <DetailRow label="City">
                        {address.city}, {address.zipcode}
                      </DetailRow>
                    </dl>
                  </section>

                  <section className="col-12" aria-labelledby="company-heading">
                    <h3 id="company-heading" className="tw-mb-1 tw-text-base tw-font-semibold tw-text-brand-dark">
                      Company
                    </h3>
                    <p className="tw-m-0 tw-font-medium tw-text-slate-800">{company.name}</p>
                    <p className="tw-m-0 tw-text-slate-500">{company.catchPhrase}</p>
                  </section>
                </div>
              </div>

              <footer className="modal-footer tw-border-slate-100">
                <button
                  type="button"
                  data-bs-dismiss="modal"
                  className="border-0 tw-rounded-lg tw-bg-ink tw-px-5 tw-py-2 tw-font-semibold tw-text-white tw-transition hover:tw-bg-slate-700 focus-visible:tw-outline-none focus-visible:tw-ring-4 focus-visible:tw-ring-ink/30"
                >
                  Close
                </button>
              </footer>
            </>
          )}
        </div>
      </div>
    </div>
  );
}