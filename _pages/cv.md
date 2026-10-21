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
* **Dual degree in Data Science and Business Analytics**, Almaty · 2024 to 2028 (expected)
  * BSc of the **University of London**, under the academic direction of the London School of Economics, taught in English at the Kazakh-British Technical University (KBTU), alongside KBTU's own bachelor's degree.
  * First-year University of London examinations: all marks in the **First-class band** (70+).
  * Coursework this year: Abstract Mathematics (proofs and introductory analysis), Distribution Theory, Statistical Inference, Elements of Econometrics, Business Analytics.

Research
======
* **Ledoit–Wolf covariance shrinkage: reproduction and extension** · Independent research · 2026
  * Reproduced the Ledoit–Wolf (2004) Monte Carlo study from the formulas, validated against scikit-learn's implementation and against the paper's analytic benchmark. 260 automated tests; every table regenerates byte-for-byte from committed code.
  * Extension to Jagannathan and Ma (2003): recovered the covariance matrix implied by a long-only constraint at each monthly rebalance over 565 months of Fama–French industry portfolios. The constraint's adjustment lines up with shrinkage toward the identity, not toward constant correlation.
  * Write-up being finalised; repository to be made public.

* **Cross-listed price discovery on the Kazakhstan Stock Exchange** · Independent research · 2026
  * How foreign price moves reach KASE overnight, identified by holding the venue fixed and varying session overlap: Kaspi.kz on NASDAQ, with no overlap, against Kazatomprom and Air Astana in London, with four hours.
  * After foreign moves of 2% or more, about 81% of the day's KASE move is in place half an hour after the open. A measurement of how information travels, not a trading opportunity.

* **Audit of candidate trading strategies on dual-listed Kazakh equities** · Independent research · 2026
  * Six candidate strategies, every trial reported with the defect that invalidated it: opening prices that could not be traded in size, look-ahead between signal and fill, and a cost model built on a field that is not a price.
  * Power analysis: at this trade rate, telling a Sharpe ratio of 1 from zero needs about 40 round trips, roughly eight years of trading.

* **KASE market data: assembly and validation** · Independent research · 2026
  * A one-minute bar archive for 24 instruments, 2015 to 2026, with the validation that makes it usable, including a time-zone change that shifted every timestamp by an hour.
  * Showed that the exchange's public board feed serves the previous session's values, not a live book.

Awards and competitions
======
* **2026**: **1st place**, [RESNA Student Design Competition](https://www.resna.org/), for *Kozha*. Co-lead.
* **2025**: ICPC Kazakhstan qualifier and regional contest.

Projects
======
* **Kozha: open-source speech-to-sign translation** · Co-lead · 2025 to present
  * Translates speech and text into 3D sign-language animation through the HamNoSys notation and SiGML, with a live demo at [kozha-translate.com](https://kozha-translate.com) and a browser extension.

* **Conformal prediction for volatility models** · 2025 to 2026, earlier work
  * Split and adaptive conformal intervals around GARCH- and HAR-family forecasts; adaptive conformal reduced the autocorrelation of coverage violations relative to split conformal across five equities.

Technical
======
* **Python**: NumPy, SciPy, pandas, scikit-learn, statsmodels, CVXPY, matplotlib, pytest
* **Other**: C++, git, GitHub Actions, LaTeX
* **Statistics**: shrinkage estimation, Monte Carlo design, HAC inference, bootstrap and permutation tests, multiple-testing correction, power analysis

Languages
======
* Kazakh and Russian (native)
* English (fluent)

Contact
======
* [zhanamankeldy@gmail.com](mailto:zhanamankeldy@gmail.com)
* [github.com/zhan-a](https://github.com/zhan-a)
* [LinkedIn](https://www.linkedin.com/in/zhan-amankeldy-64a9002a5/)
