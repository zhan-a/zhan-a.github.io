---
title: "Ledoit–Wolf covariance shrinkage — reproduction and extension"
excerpt: "From-scratch shrinkage estimation validated against the analytic risk benchmark, extended toward constraint-implied shrinkage."
collection: portfolio
---

A from-scratch reproduction of the Ledoit–Wolf (2004) shrinkage estimator for large covariance matrices, followed by an extension to the constraint-implied shrinkage that portfolio weight constraints impose without anyone asking for it.

## Why reproduce it

Shrinkage is the standard answer to the fact that a sample covariance matrix is a poor estimator when the number of assets approaches the number of observations — the regime almost every real portfolio problem lives in. The estimator is widely used and widely re-implemented, which makes it a good target: there is a published analytic benchmark to check against, so correctness is decidable rather than a matter of opinion.

## Validation

The implementation agrees with scikit-learn's to 8×10⁻¹⁵, but agreement with another implementation is weak evidence — both could be wrong in the same way. The stronger check is the analytic percentage relative improvement in average loss, which the estimator's theory predicts independently of any code. The test suite has 32 tests, verified by mutation testing: deliberately injected bugs must be caught, or the tests aren't doing their job.

## Extension

Jagannathan and Ma showed that imposing no-short-sale constraints on a minimum-variance portfolio is equivalent to shrinking the covariance matrix in a particular way — the constraint does implicitly what shrinkage does explicitly. The extension extracts that implied shrinkage from the constrained problem's optimality conditions and compares it against the estimator chosen deliberately.

## Status

In progress. Simulation grids and the loss surfaces across dimension-to-sample ratios are the remaining work.
