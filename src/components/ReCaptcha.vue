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

export default defineComponent({
  name: 'ReCaptcha',
  components: {
    VueRecaptcha
  },
  setup() {
    const siteKey = computed(() => {
      return '6LfLZookAAAAALuZwXjwXgOoin_C8fHLkKscFkb0';
    });

    const handleError = () => {
    };

    const handleSuccess = (response: string) => {
    };

    return {
      handleSuccess,
      handleError,
      siteKey,
    };
  }
});
</script>