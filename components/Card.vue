<template>
	<div :class="`card ${card.done ? 'is-complete' : ''}`">
		<div class="content">{{ card.serviceName }}</div>
        <div class="content">{{ card.businessName }}</div>
        <div class="content">{{ card.rating }}</div>
		<div class="buttons">
			<button @click="toggleCard">{{ card.done ? 'Undo' : 'Done' }}</button>
			<button @click="removeCard" class="delete">Delete</button>
		</div>
	</div>
</template>

<script>
export default {
	props: ['card'],
	methods: {
		toggleCard() {
			this.$store.commit('TOGGLE_CARD', this.card);
		},
		removeCard() {
			this.$store.commit('REMOVE_CARD', this.card);
		}
	}
}
</script>

<style>

</style>