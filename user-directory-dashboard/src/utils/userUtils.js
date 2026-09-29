export function indexUsers(users) {
  return users.map((user) => ({
    ...user,
    searchText: `${user.name} ${user.email}`.toLowerCase(),
  }));
}

export function filterUsers(users, query) {
  const q = query.trim().toLowerCase();
  if (!q) return users;
  return users.filter((user) => user.searchText.includes(q));
}

export function getInitials(name) {
  return name
    .split(' ')
    .filter((part) => part && !part.endsWith('.'))
    .slice(0, 2)
    .map((part) => part[0].toUpperCase())
    .join('');
}
