<script lang="ts" setup>
import type { FUniver, Univer } from '@univerjs/presets';

import { onBeforeUnmount, onMounted, ref } from 'vue';

import { Page } from '@vben/common-ui';

import { UniverDocsCorePreset } from '@univerjs/preset-docs-core';
import UniverPresetDocsCoreZhCN from '@univerjs/preset-docs-core/locales/zh-CN';
import { createUniver, LocaleType, mergeLocales } from '@univerjs/presets';

import '@univerjs/preset-docs-core/lib/index.css';

const container = ref<HTMLElement | null>(null);
let univerInstance: null | Univer = null;
let univerAPIInstance: FUniver | null = null;

onMounted(() => {
  const { univer, univerAPI } = createUniver({
    locale: LocaleType.ZH_CN,
    locales: {
      [LocaleType.ZH_CN]: mergeLocales(UniverPresetDocsCoreZhCN),
    },
    presets: [
      UniverDocsCorePreset({
        container: container.value as HTMLElement,
      }),
    ],
  });
  univerAPI.createUniverDoc({});
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
    description="Univer Docs 使用测试"
    title="Univer Docs"
    auto-content-height
  >
    <div ref="container" style="height: 100%"></div>
  </Page>
</template>
