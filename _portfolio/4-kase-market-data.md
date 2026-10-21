---
title: "KASE market data: assembly, validation, and a day-late feed"
excerpt: "Building a minute-bar archive for a market with no research dataset, and finding out what the exchange's public feed actually publishes."
collection: portfolio
---

There is no ready-made research dataset for the Kazakhstan Stock Exchange. This project assembles one: a one-minute bar archive covering 24 instruments from 2015 to 2026, together with the validation work that makes it trustworthy. The contribution is assembly, validation and documentation, not access to anything unavailable to anyone else.

## The correctness work

Most of the effort went into defects that produce plausible-looking wrong data rather than obvious errors:

- an exclusive end-date convention silently dropping the final day of every request
- reversed field ordering in the returned bars
- empty payloads returned instead of an explicit truncation signal
- a one-hour shift introduced by Kazakhstan's 2024 time-zone change, caught only because the implied session open jumped from 12:29 to 11:29 on exactly that date

The last one is the reason the validation exists. Nothing in the data looked wrong; the times were internally consistent and simply an hour off.

## The public board feed is a day late

The exchange's public board feed serves the previous session's values, not a live book. Finding this refuted an interpretation of its quote fields that I had already written up. The general lesson is the useful part: when a feed shows something impossible, such as a book that stays crossed with the bid above the ask, check what the fields mean before treating it as a fact about the market.

## Status

The write-up is being finalised, and the code becomes public once it is.
