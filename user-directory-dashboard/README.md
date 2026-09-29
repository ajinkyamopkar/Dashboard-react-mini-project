# People Directory Dashboard

A responsive user directory built with **React 18**, **Bootstrap 5** and **Tailwind CSS 3**.
It loads people from [JSONPlaceholder](https://jsonplaceholder.typicode.com/users), lets you
search by name or email as you type, and opens a modal with full details on click.

- Live demo: `<add your deployed URL>`
- Repository: `<add your GitHub URL>`

## Run locally

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build in /dist
npm run preview    # serve the production build
```

Requires Node 18+.

## Bootstrap vs. Tailwind

Bootstrap handles **structure**: the `container` / `row` / `col-*` grid and the Modal component
(its show/hide, backdrop, focus trap and Esc handling). Tailwind handles **appearance** inside those
pieces: typography, colours, spacing, hover/focus states and card styling. To keep them from clashing,
Tailwind uses a `tw-` class prefix and has its own reset (`preflight`) turned off, so Bootstrap's Reboot
is the only reset; there is no `!important` anywhere.

## Project structure

```
src/
├── components/   Header, SearchBar, UserGrid, UserCard, UserModal,
│                 Avatar, SkeletonGrid, StatusMessage
├── hooks/        useUsers.js       (fetch + loading/error/retry)
├── utils/        userUtils.js      (search index, filter, initials)
├── styles/       tailwind.css, animations.css (custom entry animation)
├── App.jsx       state + composition
└── main.jsx      entry point and CSS import order
```

## Performance notes

- Modal + Bootstrap JS are **code-split** with `React.lazy` and only load on the first click.
- Only Bootstrap's Modal plugin is imported, not the full JS bundle.
- Search text is **indexed once** on load; filtering is a single `includes` per user.
- `useDeferredValue` keeps the input responsive; `useMemo`, `useCallback` and `React.memo`
  stop unchanged cards from re-rendering while typing.
- Tailwind only ships the classes used (content scanning), React is in its own cacheable chunk.
- Fetch is cancelled with `AbortController` on unmount; skeleton cards prevent layout shift.
- `prefers-reduced-motion` is respected for animations.

## Accessibility

Semantic `header` / `main` / `section` / `article` / `address` / `dl` tags, a labelled search input,
cards that are real `<button>`s (keyboard + screen reader friendly), a modal with `role="dialog"`,
`aria-modal`, `aria-labelledby`, focus trapping and focus return, and a live results counter.

## Deploy

Vercel / Netlify: import the repo, build command `npm run build`, output directory `dist`.
