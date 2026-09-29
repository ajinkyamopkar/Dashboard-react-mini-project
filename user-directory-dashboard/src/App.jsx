import { Suspense, lazy, useCallback, useDeferredValue, useMemo, useState } from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import UserGrid from './components/UserGrid';
import SkeletonGrid from './components/SkeletonGrid';
import StatusMessage from './components/StatusMessage';
import { useUsers } from './hooks/useUsers';
import { filterUsers } from './utils/userUtils';


/* use Lazyloading  here */
const UserModal = lazy(() => import('./components/UserModal'));

export default function App() {
  const { users, status, retry } = useUsers();
  const [query, setQuery] = useState('');
  const [selectedUser, setSelectedUser] = useState(null);
  const [modalRequested, setModalRequested] = useState(false);

  const deferredQuery = useDeferredValue(query);
  const visibleUsers = useMemo(
    () => filterUsers(users, deferredQuery),
    [users, deferredQuery],
  );

  const handleSelect = useCallback((user) => {
    setModalRequested(true);
    setSelectedUser(user);
  }, []);
  const handleClose = useCallback(() => setSelectedUser(null), []);

  return (
    <>
      <Header total={users.length} visible={visibleUsers.length} />

      <main className="tw-bg-paper tw-min-h-screen tw-pb-16">
        <div className="container">
          <section className="tw-py-6" aria-label="Search">
            <div className="row">
              <div className="col-12 col-lg-8 col-xl-6">
                <SearchBar value={query} onChange={setQuery} />
              </div>
            </div>
          </section>

          <section aria-label="People">
            {status === 'loading' && <SkeletonGrid />}

            {status === 'error' && (
              <StatusMessage
                tone="error"
                title="Couldn't load the directory"
                actionLabel="Try again"
                onAction={retry}
              >
                Check your internet connection and try again.
              </StatusMessage>
            )}

            {status === 'success' && visibleUsers.length === 0 && (
              <StatusMessage
                title="No one matches search"
                actionLabel="Clear search"
                onAction={() => setQuery('')}
              >
                Try a Different Name or Email
              </StatusMessage>
            )}

            {status === 'success' && visibleUsers.length > 0 && (
              <UserGrid users={visibleUsers} onSelect={handleSelect} />
            )}
          </section>
        </div>
      </main>

      {modalRequested && (
        <Suspense fallback={null}>
          <UserModal user={selectedUser} onClose={handleClose} />
        </Suspense>
      )}
    </>
  );
}
