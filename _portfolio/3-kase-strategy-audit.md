---
title: "A full-trial audit of six candidate strategies"
excerpt: "Every trial reported, every defect found, and the resolution limit of the test itself. Nothing survived."
collection: portfolio
---

Over five months I tested six candidate trading strategies on dual-listed Kazakh equities. None of them work. This is the record of how each one failed, published in full rather than filed away.

## Why publish it

The usual output of a project like this is whichever strategy still looks good at the end. That selection is exactly what makes such results unreliable, and the discarded trials are the information needed to judge the survivor. So all of them are here, with the defect that killed each one.

## What broke

| Claim | Defect | After correction |
|---|---|---|
| +31%/yr premium strategy | Lookahead in the signal construction | ~2.6% |
| Sharpe 2.63 on a premium trade | Same-close fills; 9 of 10 trades inside one 7-month regime | Sharpe 0.60 |
| Systematic screen, several significant | No multiple-testing correction | **0 of 253 survive Bonferroni** |
| 526 bp quoted spread cost model | Derived from a board field that is not a price | Estimated at 24–47 bp, two estimators disagreeing twofold |

One correction made a strategy look *better* than it had before. It was still rejected, because it still wasn't significant.

## The resolution limit

The more useful result is a bound on what the experiment could ever have detected. Given the trade rate and the sample, distinguishing a Sharpe of 1.0 from zero at conventional confidence needs roughly 41 round trips — about eight years of trading at this frequency. The surviving strategy's Sharpe is 0.30 with a standard error of 0.66, so its confidence interval comfortably contains zero, and a lower-confidence-bound Kelly sizing is exactly zero. The honest conclusion is not that no edge exists; it is that this design could not have found one.
