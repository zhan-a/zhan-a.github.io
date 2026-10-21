---
title: "An audit of six candidate trading strategies"
excerpt: "Every trial reported with the defect that invalidated it, and the limit of what the design could ever detect."
collection: portfolio
---

Over five months I tested six candidate trading strategies on dual-listed Kazakh equities. None of them survived. This is the record of how each one failed, written up in full rather than filed away.

## Why write it up

The usual output of a project like this is whichever strategy still looks good at the end. That selection is exactly what makes such results unreliable, and the discarded trials are the information needed to judge the survivor.

## What broke

- **Fills that were never available.** Several signals traded at the first price of the day, where the volume is a few hundred dollars. Requiring a fill that could actually have happened removed most of the apparent edge.
- **Look-ahead between signal and fill.** A cross-listing premium strategy computed its signal and filled at the same closing price. Moving the fill to a price a real order could have reached cut its return sharply, and the version an individual could actually trade, long-only, lost money.
- **A cost model built on a field that is not a price.** An early 526 basis-point spread assumption came from an exchange board field that turned out not to be a quote. Spread estimators built from trade prints put the cost far lower.
- **A screen without a proper correction.** A systematic screen of 253 parameter combinations looked significant before correcting for multiple testing. Its permutation tests are too coarse to settle a strict correction either way, and four of its six tickers turned out to be priced from London and NASDAQ lines rather than from KASE.

## The resolution limit

The more useful result is a bound on what the experiment could ever have detected. At this trade rate, telling a Sharpe ratio of 1 from zero at conventional confidence needs about 40 round trips, roughly eight years of trading. The honest conclusion is not that no edge exists; it is that this design could not have found one.

## Status

The write-up is being revised, and the repository becomes public once it is.
