---
title: "Ledoit–Wolf covariance shrinkage: reproduction and extension"
excerpt: "A from-scratch reproduction validated two independent ways, and an extension measuring the shrinkage a long-only constraint imposes."
collection: portfolio
---

A from-scratch reproduction of the Ledoit–Wolf (2004) shrinkage estimator for large covariance matrices, followed by an extension to the shrinkage that portfolio weight constraints impose without anyone asking for it.

## Why reproduce it

A sample covariance matrix is a poor estimator when the number of assets approaches the number of observations, which is the regime most real portfolio problems live in. Shrinkage is the standard answer. The paper publishes an analytic benchmark, so whether a reproduction is correct can be decided rather than argued.

## Validation

Agreement with scikit-learn's implementation is weak evidence on its own, since two implementations can share a mistake. The stronger check is the paper's analytic percentage relative improvement in average loss, which the theory predicts independently of any code and which separates a bug from Monte Carlo noise. The suite runs 260 automated tests, and every table in the write-up regenerates byte-for-byte from committed code in a clean clone.

## Extension

Jagannathan and Ma (2003) showed that a no-short-sale constraint on a minimum-variance portfolio acts like shrinking the covariance matrix. The extension recovers that implied covariance from the constrained problem's optimality conditions at every monthly rebalance, over 565 months of Fama–French industry portfolios, and asks which shrinkage target the adjustment resembles. It lines up closely with shrinkage toward the identity matrix and hardly at all with shrinkage toward constant correlation: the constraint behaves like shrinkage toward one particular target, not toward a target in general.

## Status

Code complete and validated in September 2026. The write-up is being finalised, and the repository becomes public once it is.
