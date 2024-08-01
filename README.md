# Repro for @pnpm/lockfile.merger issue

Env:

```
$ node --version
v18.20.3
$ pnpm --version
9.6.0
```

Setup:

```
$ pnpm install --frozen-lockfile
```

Repro:

```
$ node index.js
lockfile1.overrides { '@pnpm/lockfile.fs': '1.0.0' }
lockfile2.overrides { '@pnpm/lockfile.fs': '1.0.0' }
mergedLockfile.overrides undefined
```
