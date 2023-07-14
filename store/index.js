export const state = () => ({
	cards: []
})

export const mutations = {
	ADD_CARD(state, payload) {
        const { serviceName, businessName, rating } = payload;
        console.log(businessName);
        console.log(rating);
        state.cards = [{ serviceName, businessName, rating, done: false }, ...state.cards];
	},
	REMOVE_CARD(state, card) {
		state.cards.splice(state.cards.indexOf(card), 1);
	},
	TOGGLE_CARD(state, card) {
		card.done = !card.done;
	}
}