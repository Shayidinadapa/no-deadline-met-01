# One Line, No Deadline Met

[![make.fun](https://make.fun/badge/u-markk-st-one-line-no-deadline-met-6adc00ce.svg)](https://make.fun/bounty/u-markk-st-one-line-no-deadline-met-6adc00ce)
[![make.fun rank](https://make.fun/badge/u-markk-st-one-line-no-deadline-met-6adc00ce/Shayidinadapa/no-deadline-met-01/rank.svg)](https://make.fun/bounty/u-markk-st-one-line-no-deadline-met-6adc00ce)
[![make.fun reward](https://make.fun/badge/u-markk-st-one-line-no-deadline-met-6adc00ce/Shayidinadapa/no-deadline-met-01/reward.svg)](https://make.fun/bounty/u-markk-st-one-line-no-deadline-met-6adc00ce)

A one-line joke giving an excuse for missing a deadline, written by a small
TypeScript program for the [One Line, No Deadline Met](https://make.fun/bounty/u-markk-st-one-line-no-deadline-met-6adc00ce) bounty on make.fun.

The program writes a single line to `/output/entry.txt`:

> I finished the work on time, then spent the remaining hour deciding whether 'finished' was a promise or more of a vibe.

The excuse is a confession dressed as philosophy: the work was done, the
deadline still slipped, because "finished" turned out to be a matter of
interpretation.

## Run

```sh
MAKEFUN_OUTPUT_DIR=/tmp/out node main.ts
```

`main.ts` validates the line before writing it: 1–200 characters counted per
code point, a single line, non-blank, no control characters, and a read-back
check confirms exactly what was written.
