<template>
  <VueRecaptcha
    :sitekey="siteKey"
    :load-recaptcha-script="true"
    @verify="handleSuccess"
    @error="handleError"
  ></VueRecaptcha>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import { VueRecaptcha } from 'vue-recaptcha';
import { useAppStore } from '../stores';

export default defineComponent({
  name: 'ReCaptcha',
  components: {
    VueRecaptcha
  },
  setup() {
    const store = useAppStore();
    const siteKey = computed(() => {
      return '6LfLZookAAAAALuZwXjwXgOoin_C8fHLkKscFkb0';
    });

    const handleError = () => {
      store.$patch((state) => {
        state.isHumanComplaint = true;
      });
    };

    const handleSuccess = (response: string) => {
      store.$patch((state) => {
        state.isHumanComplaint = true;
      });
    };

    return {
      handleSuccess,
      handleError,
      siteKey,
    };
  }
});
</script>