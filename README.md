# Typegres & Cap'n Web Demo

[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://github.com/codespaces/new?owner=ryanrasti&repo=typegres-capnweb-demo&machine=8core)

**Note on Setup**: It will take ~2 minutes for Codespaces to build the container, install all dependencies, and launch the app preview.

### The Tour

1. The API

- **File**: `src/api.ts`
- **Why**: This is the _entire_ backend. The full context of the system's allowed state transitions & data access, codified as capabilities.

2. The API client (the FE)

- **File**: `src/App.tsx`
- **Why**: A visual layer on top of the API client

3. **The Integration Hacks**

- **File**: `src/do-rpc.ts`: advanced typing of Cap'n Web and Typegres don't play well yet. Added a `doRpc` function that is typesafe (as long as some rules are followed) and doesn't require mangling Typegres types.
- **Also**: Various places in Cap'n Web (`packages/capnweb`) to generalize record/replay callbacks to arbitrary methods beyond just `map`. (Note the changes are vibe-coded hacks to get the PoC working)

### To run locally:

```bash
git submodule update --init --recursive
npm install
npm run
```
