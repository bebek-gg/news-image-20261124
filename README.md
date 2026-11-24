# news-image-20261124

[![make.fun · news-image-20261124](https://make.fun/badge/news-image-20261124.svg)](https://make.fun/bounty/news-image-20261124?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261124)
[![rank](https://make.fun/badge/news-image-20261124/bebek-gg/news-image-20261124/rank.svg)](https://make.fun/bounty/news-image-20261124/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261124)
[![reward](https://make.fun/badge/news-image-20261124/bebek-gg/news-image-20261124/reward.svg)](https://make.fun/bounty/news-image-20261124?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261124)

One image summing up the world's news of **Tuesday, 24 November 2026**,
in newspaper front-page style. `main.ts` (Node 22, standard library only)
copies the bundled `entry.png` to the output directory; the same bytes are
written on every run, with no network.

The image names the day prominently — "TUESDAY, 24 NOVEMBER 2026" under
the "WORLD NEWS" masthead — and covers six stories from that day:

- **NVIDIA** — Huang is back: the board reinstates Jensen Huang as CEO; shares jump 31%
- **US–CHINA CHIPS** — the US blacklists Megaspeed, the Singapore firm at the centre of an alleged Nvidia chip-smuggling ring
- **UKRAINE** — Zelensky seeks four-way talks (Ukraine–Russia–US–Europe); Kyiv says its drones hit a Russian warship off Libya
- **KOREA** — Russian jets enter South Korea's air zone; island residents ordered to shelter as Seoul scrambles jets
- **CHINA** — an official surnamed Ma is sentenced to death for spying for a foreign country
- **CLIMATE** — COP31 ends in deadlock, with no deal on fossil fuels

Every word is rendered with PIL (DejaVu Sans); the four small
illustrations (chip, container ship, talks table, fighter jet) are simple
geometric symbols drawn in code — no photographs of real people, events or
places, and no AI-generated imagery. The image is 1024×1024 PNG, under 1 MiB.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
# writes out/entry.png
```
