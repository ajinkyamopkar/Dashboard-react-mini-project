/**
 * Pre-compute one lowercase "haystack" string per user, once, when data
 * arrives. Filtering then costs a single `includes` per user per keystroke
 * instead of two `toLowerCase()` calls per user per keystroke.
 */
export function indexUsers(users) {
  return users.map((user) => ({
    ...user,
    searchText: `${user.name} ${user.email}`.toLowerCase(),
  }));
}

/** Case-insensitive filter on name or email. Empty query returns everything. */
export function filterUsers(users, query) {
  const q = query.trim().toLowerCase();
  if (!q) return users;
  return users.filter((user) => user.searchText.includes(q));
}

/** "Leanne Graham" -> "LG". Skips honorifics like "Mrs." */
export function getInitials(name) {
  return name
    .split(' ')
    .filter((part) => part && !part.endsWith('.'))
    .slice(0, 2)
    .map((part) => part[0].toUpperCase())
    .join('');
}
