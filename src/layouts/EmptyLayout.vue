<template>
  <div class="grey darken-1 empty-layout">
    <router-view/>
  </div>
</template>
<script>
import messages from "@/utils/mesages";
export default {
	computed: {
		error() {
			return this.$store.getters.error;
		}
	},
	watch: {
		error(fbError) {
			console.log(fbError);
			this.$error(messages[fbError.code] || 'Произошла ошибка');
		}
	}
};	
</script>