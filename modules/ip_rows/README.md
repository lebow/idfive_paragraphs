# idfive Paragraphs Rows

Paragraphs integration of the silc grid library for use in idfive
client projects:

 - [silc accordions](https://github.com/nickrigby/silc-grid)

This module contains Paragraphs widgets, for 1, 2, 3 and 4 column gridded rows.

You may edit the following per row:
 - Breakpoint of column (all rows)
 - Split ratio (two column row only)

This module contains markup only (no js or css), those should
be provided in the client theme, loaded via the
idfive Component Library:

 - [idfive Component Library](https://bitbucket.org/idfivellc/idfive-component-library)
 - [idfive Component Library D8 Theme](https://bitbucket.org/idfivellc/idfive-component-library-d8-theme)

## Markup Overrides

- You may override paragraphs templates by copying them into the client theme.
- You may override hooks by copying into client .theme, and
modifying hook name/etc.
