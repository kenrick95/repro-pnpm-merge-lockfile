import { mergeLockfileChanges } from '@pnpm/lockfile.merger';
import { readWantedLockfile } from '@pnpm/lockfile.fs';

async function main() {
  const lockfile1 = await readWantedLockfile('./example-1', {
    ignoreIncompatible: true,
    useGitBranchLockfile: false,
    mergeGitBranchLockfiles: false,
  });
  console.log('lockfile1.overrides', lockfile1.overrides);
  const lockfile2 = await readWantedLockfile('./example-2', {
    ignoreIncompatible: true,
    useGitBranchLockfile: false,
    mergeGitBranchLockfiles: false,
  });
  console.log('lockfile2.overrides', lockfile1.overrides);
  const mergedLockfile = mergeLockfileChanges(lockfile1, lockfile2);
  console.log('mergedLockfile.overrides', mergedLockfile.overrides);
}
main();
