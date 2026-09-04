import type { StoredLocalChapterDraft } from '@/storage/writing-storage'

/** 开源版以实际落盘的本地版本为准；兼容旧稿仅有远端版本的情况。 */
export const workflowContentVersion = (draft: StoredLocalChapterDraft | null | undefined): number =>
  Number(draft?.localVersion || draft?.remoteVersion || draft?.baseRemoteVersion || 0)

/** 已落盘正文（包括作者主动清空的正文）优先于任务旧断点。 */
export const workflowResumeText = (draft: StoredLocalChapterDraft | null, checkpointText: string): string =>
  draft && !draft.workflowPreview ? draft.textContent : checkpointText
