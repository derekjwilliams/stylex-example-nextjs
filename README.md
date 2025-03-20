# Example Next.js StyleX Project

## Original Code

This is from the excellent code at https://github.com/facebook/stylex/tree/main/examples/example-nextjs

## Motivation

The original code is great, but is part of the larger stylex build, https://github.com/facebook/stylex.  When a user attempts to build the 
example at https://github.com/facebook/stylex/tree/main/examples/example-nextjs they may run into quite a few errors on the build.  This is
primarily due to dependencies in the configuration.

## What I Tried First

I performed a full build of the stylex repo, following the [README](https://github.com/facebook/stylex/blob/main/README.md).  I then navigated to the [next js example](https://github.com/facebook/stylex/tree/main/examples/example-nextjs) and tried a few things, the most obvious being `npm run example:build`, `npm install`, etc..  
Various errors were encountered.

## What This Repo Has Going For It

This repo contains the code from the stylex/examples/example-nextjs but in a standalone state.  


### Changes 

#### Configuration

Changes were made to the configuration files `postcss.config.js`, `next.config.js`.  

#### Test Files

Two of the files (`typetests/theming1.tsx` and `typetests/typetests.ts`) have been completely commented out because they were causing errors when building.

#### Aliases Removed

For example, in `components/Card.tsx`

```diff
-import { globalTokens as $, spacing, text } from '@/app/globalTokens.stylex';
+import { globalTokens as $, spacing, text } from '../app/globalTokens.stylex';
 import { colors } from '@stylexjs/open-props/lib/colors.stylex';
-import { tokens } from '@/app/CardTokens.stylex';
+import { tokens } from '../app/CardTokens.stylex';
```

This is becasue the aliases were throwing errors on build, this is likely an easy fix, but I personally avoid aliases so it was not a high priority for me.