---
title: "Kozha: open-source speech-to-sign translation"
excerpt: "Translates speech and text into 3D sign-language animation. 1st place, RESNA Student Design Competition, 2026."
collection: portfolio
---

**Kozha** is an open-source pipeline that translates speech and text into 3D sign-language animation, so that spoken content becomes accessible to deaf and hard-of-hearing people. I co-lead the student team that built it, and it won **1st place** at the [RESNA Student Design Competition](https://www.resna.org/) in 2026.

## Why this project

Most existing translation tools rely on pre-recorded video dictionaries with limited vocabulary. Generating signs from a notation instead means the system is not limited to the words someone has filmed.

## How it works

Speech is transcribed to text, parsed with spaCy, encoded in the HamNoSys notation for signs, serialised to SiGML, and rendered by a 3D signing avatar. British Sign Language has the most complete sign database; American, German and other sign languages have varying coverage.

## Status

Active. Live demo at [kozha-translate.com](https://kozha-translate.com), with a browser extension; code at [github.com/zhan-a/Kozha](https://github.com/zhan-a/Kozha).
