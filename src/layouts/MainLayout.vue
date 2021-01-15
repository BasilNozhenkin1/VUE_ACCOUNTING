<template>
  <div class="app-main-layout">
    <Navbar @click="isOpen = !isOpen" />
    <Sidebar v-model="isOpen" />

    <main class="app-content" :class="{ full: !isOpen }">
      <div class="app-page">
				<Loader v-if="loading"/>
        <router-view v-else/>
      </div>
    </main>

    <div class="fixed-action-btn">
      <a class="btn-floating btn-large blue" href="#">
        <i class="large material-icons">add</i>
      </a>
    </div>
  </div>
</template>
<script>
import Navbar from "@/components/app/Nabvar";
import Sidebar from "@/components/app/Sidebar.vue";

export default {
  name: "main-layout",
  data: () => ({
    isOpen: true,
		loading: true
  }),
  async mounted() {
    if (!Object.keys(this.$store.getters.info).length) {
      await this.$store.dispatch("getInfo");
    }
    this.loading = false;
  },
  components: {
    Navbar,
    Sidebar
  }
};
</script>
