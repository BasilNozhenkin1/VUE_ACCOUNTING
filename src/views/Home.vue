<template>
	<div>
		<div class="page-title">
			<h3>Счет</h3>

			<button class="btn waves-effect waves-light btn-small" @click="refresh">
				<i class="material-icons">refresh</i>
			</button>
		</div>
		<Loader v-if="loading"/>
		<div v-else
				 class="row">
			<HomeBill
				:rates="currency.rates"/>

			<HomeCurrency
				:rates="currency.rates"
				:date="currency.date"
			/>
		</div>
	</div>
</template>
<script>
import HomeBill from "@/components/home/Bill";
import HomeCurrency from "@/components/home/Currency";
export default {
	name: "home",
	data: () => ({
		loading: true,
		currency: null
	}),
	async mounted() {
		this.currency = await this.$store.dispatch("getCurrency");
		console.log(this.currency);
		this.loading = false;
	},
	methods: {
		async refresh() {
			this.loading = true;
			this.currency = await this.$store.dispatch("getCurrency");
			this.loading = false;
		}
	},
	components: {
		HomeBill,HomeCurrency
	}
};
</script>
