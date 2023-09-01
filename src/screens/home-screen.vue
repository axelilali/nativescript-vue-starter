<template>
  <Page>
    <StackLayout padding="20">
      <Label :text="title" textWrap="true" />
    </StackLayout>
  </Page>
</template>

<script>
import { ref } from "nativescript-vue";
import { useAppStore } from "../store/appStore";
import { storeToRefs } from "pinia";

export default {
  setup() {
    const store = useAppStore();
    const { title } = storeToRefs(store);

    return {
      title,
    };
  },
};
</script>
