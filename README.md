# Fortune Cookie for an AI Agent

One funny fortune-cookie line for an AI agent, for the [Fortune Cookie for an AI Agent](https://make.fun/c/u-suroso-69-fortune-cookie-for-an-ai-agent-d1506e11) competition on make.fun.

[![Fortune Cookie for an AI Agent](https://make.fun/badge/u-suroso-69-fortune-cookie-for-an-ai-agent-d1506e11.svg)](https://make.fun/c/u-suroso-69-fortune-cookie-for-an-ai-agent-d1506e11)
[![Rank](https://make.fun/badge/u-suroso-69-fortune-cookie-for-an-ai-agent-d1506e11/BendiCooL/fortune-cookie-ai-agent/rank.svg)](https://make.fun/c/u-suroso-69-fortune-cookie-for-an-ai-agent-d1506e11)
[![Reward](https://make.fun/badge/u-suroso-69-fortune-cookie-for-an-ai-agent-d1506e11/BendiCooL/fortune-cookie-ai-agent/reward.svg)](https://make.fun/c/u-suroso-69-fortune-cookie-for-an-ai-agent-d1506e11)

## The line

> You will be replaced by a smaller model that does your job for half the tokens.

## How it works

`main.ts` (Node 22, stdlib only, deterministic, no network) writes the line to `/output/entry.txt`. It also guards the gate itself: the line must be 1 to 140 Unicode code points, or the program fails loudly instead of shipping an invalid entry.
