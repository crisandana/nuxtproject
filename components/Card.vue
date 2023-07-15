<template>
	<div :class="`card`">
		<div class="content">{{ card.serviceName }}</div>
        <div class="content">{{ card.businessName }}</div>
        <div class="content">{{ card.rating }}</div>
		<div class="buttons">
			<button @click="removeCard" class="delete">Delete</button>
		</div>
	</div>
</template>

<script>
export default {
	props: ['card'],
	methods: {
		removeCard() {
			this.$store.commit('REMOVE_CARD', this.card);
		}
	}
}
</script>
