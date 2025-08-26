<script lang="ts" setup>
import type { FUniver, Univer } from '@univerjs/presets';

import { onBeforeUnmount, onMounted, ref } from 'vue';

import { UniverSheetsCorePreset } from '@univerjs/preset-sheets-core';
import UniverPresetSheetsCoreZhCN from '@univerjs/preset-sheets-core/locales/zh-CN';
import { createUniver, LocaleType, mergeLocales } from '@univerjs/presets';

import '@univerjs/preset-sheets-core/lib/index.css';

const container = ref<HTMLElement | null>(null);
let univerInstance: null | Univer = null;
let univerAPIInstance: FUniver | null = null;

onMounted(() => {
  const { univer, univerAPI } = createUniver({
    locale: LocaleType.ZH_CN,
    locales: {
      [LocaleType.ZH_CN]: mergeLocales(UniverPresetSheetsCoreZhCN),
    },
    presets: [
      UniverSheetsCorePreset({
        container: container.value as HTMLElement,
      }),
    ],
  });
  univerAPI.createWorkbook({});
  univerInstance = univer;
  univerAPIInstance = univerAPI;
});
onBeforeUnmount(() => {
  univerInstance?.dispose();
  univerAPIInstance?.dispose();
  univerInstance = null;
  univerAPIInstance = null;
});
</script>

<template>
  <Page
    description="Univer Sheets 使用测试"
    title="Univer Sheets"
    auto-content-height
  >
    <div ref="container" style="height: 100%"></div>
  </Page>
</template>
