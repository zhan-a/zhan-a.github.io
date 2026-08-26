---
layout: archive
title: "CV"
permalink: /cv/
author_profile: true
redirect_from:
  - /resume
---

{% include base_path %}

Education
======
* **B.Sc. Data Science & Business Analytics**, Kazakh-British Technical University (KBTU), Almaty · 2024 — 2028 (expected)
  * Dual-degree programme with the **University of London** (BSc Economics, Management, Finance and the Social Sciences), under the academic direction of the London School of Economics.
  * Third year. Coursework in statistical inference, machine learning, econometrics, real analysis, and time-series analysis.

Research
======
* **Cross-listed price discovery on the Kazakhstan Stock Exchange** · Independent research · 2026 — present
  * Overnight transmission of foreign price moves into KASE, identified through a natural experiment that holds the venue fixed while varying session overlap: KSPI/NASDAQ (zero overlap) against KZAP and AIRA on the LSE (four-hour overlap).
  * Transmission of β = 0.20 at the open and 0.27 intraday across 590 sessions, with roughly 81% of the drift completing inside the first 30 minutes.
  * Robustness across FX construction, sub-period regimes, placebo pairs, and an out-of-sample split. The economic conclusion is negative: the effect is a measurement, not an exploitable one.

* **Full-trial audit of candidate strategies on dual-listed Kazakh equities** · Independent research · 2026
  * Every trial reported rather than the surviving ones. A lookahead defect reduced an apparent +31%/yr to ~2.6%; a bias audit moved a Sharpe of 2.63 to 0.60; a systematic screen of 253 parameter combinations produced **none surviving Bonferroni correction**.
  * Derived the resolution limit of the design itself — the effect size below which this data cannot separate skill from noise.

* **Reproduction of Ledoit–Wolf covariance shrinkage, with a Jagannathan–Ma extension** · Independent research · 2026 — present
  * From-scratch implementation agreeing with scikit-learn to 8×10⁻¹⁵ and validated against the analytic PRIAL benchmark; 32 tests, verified by mutation testing.
  * Extension examining constraint-implied shrinkage in constrained minimum-variance portfolios.

* **Market-data assembly and validation for KASE** · Independent research · 2026
  * Acquisition, validation and documentation of a one-minute bar archive spanning 24 instruments, 2015–2026.
  * Two findings about the exchange's public board feed: a quoted-spread field that is not a price — a persistently crossed book that proved to be a field-semantics error rather than a venue characteristic — and a feed frozen at prior-day values.

Awards
======
* **2026** — **1st place**, [RESNA Student Design Competition](https://www.resna.org/), for *Kozha*. Co-lead.

Projects
======
* **Kozha — open-source sign-language translator** (2025 — present) · Co-lead
  * Real-time Kazakh and Russian sign-language translation built on HamNoSys/SiGML. 1st place, RESNA Student Design Competition 2026.

* **Conformal prediction for volatility models** (2025 — 2026)
  * Conformal-prediction testing pipeline for GARCH- and HAR-family volatility models, comparing empirical coverage and interval efficiency across market regimes.

Technical
======
* **Python** — NumPy, pandas, scikit-learn, statsmodels, matplotlib; pytest, mutation testing
* **Statistics** — statistical inference, time-series analysis, multiple-testing correction, bootstrap and power analysis
* **Tools** — git, LaTeX

Languages
======
* Kazakh (native)
* Russian (fluent)
* English (fluent)

Contact
======
* [zhanamankeldy@gmail.com](mailto:zhanamankeldy@gmail.com)
* [github.com/zhan-a](https://github.com/zhan-a)
* [LinkedIn](https://www.linkedin.com/in/zhan-amankeldy-64a9002a5/)
