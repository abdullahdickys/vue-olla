<template>
  <div class="bg-gray-50 pt-6 dark:bg-gray-900 container mx-auto px-6">
    <BlogPage />
  </div>
</template>
<script>
import { defineComponent } from "vue";
import BlogPage from "@/components/BlogPage.vue";

export default defineComponent({
  components: { BlogPage },
});
</script>
