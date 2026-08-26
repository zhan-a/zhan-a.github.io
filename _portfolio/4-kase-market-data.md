---
title: "KASE market data — assembly, validation, and two field-semantics findings"
excerpt: "Building a minute-bar archive for a market with no research dataset, and discovering what the exchange's public feed actually publishes."
collection: portfolio
---

There is no ready-made research dataset for the Kazakhstan Stock Exchange. This project assembles one: a one-minute bar archive covering 24 instruments from 2015 to 2026, together with the validation work that makes it trustworthy. The contribution is assembly, validation and documentation — not acquisition, and not access to anything unavailable to anyone else.

## The correctness work

Most of the effort went into defects that produce plausible-looking wrong data rather than obvious errors:

- an exclusive end-date convention silently dropping the final day of every request
- reversed field ordering in the returned bars
- empty payloads returned instead of an explicit truncation signal
- a one-hour shift introduced by Kazakhstan's 2024 timezone change, caught only because the implied session open jumped from 12:29 to 11:29 on exactly that date

The last one is the reason the validation exists. Nothing in the data looked wrong; the times were internally consistent and simply an hour off.

## Two findings about the public board feed

**A quoted-spread field that is not a price.** The order book appeared crossed in 88.7% of snapshots — bid above ask, which should be impossible. Four tests established that the field is not what its name suggests: the midpoint divided by the prior close falls in a narrow band around one, 100% of 448 executed trades fall inside that band, the values never change intraday across 1,103 snapshots, and they reset at the open. The generalisable lesson is the useful part: a persistently crossed book is prima facie a field-semantics error, not a venue quirk.

**A feed frozen at prior-day values.** A related check found the feed serving prior-session data, which refuted an earlier interpretation of the same field that had been built into the project. Finding this invalidated a result I had already written up.
