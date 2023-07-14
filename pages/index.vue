<template> 
  <main>
    <!-- <div> 
      <h1>Home Page</h1>
    </div> -->
    
    <div class="create-new">
      <input 
        type="text" 
        v-model="serviceName" 
        placeholder="Add a service name" />
        <input 
        type="text" 
        v-model="businessName" 
        placeholder="Add business" />
        <input 
        type="text" 
        v-model="rating"     
        v-rating="5"
        placeholder="Add rating"  />
        <b-form-rating v-model="rating"></b-form-rating>
    <p class="mt-2">Rating: {{ rating }}</p>
      <button @click="addCard">Add</button>

      <div class="d-flex flex-row mb-3">
        <div class="p-2">Flex item 1</div>
        <div class="p-2">Flex item 2</div>
        <div class="p-2">Flex item 3</div>
      </div>
      
    </div>

    <div class="cards">
      <Card
        v-for="(card, i) in $store.state.cards"
        :key="i"
        :card="card" />
    </div>

  </main>
</template>

<script>
export default {
  // name: 'index', => to create first page

  directives: {
    rating: {
      bind(el, binding) {
        el.addEventListener('input', event => {
          const inputValue = event.target.value;
          const numericValue = inputValue.replace(/\D/g, '');
          const maxValue = Math.min(parseInt(numericValue), binding.value);
          event.target.value = maxValue;
        });
      }
    }
  },
  data (){
    return {
      serviceName: '',
      businessName: '',
      rating: null
    }
  },
  methods: {
    addCard () {
      if (this.serviceName && this.businessName && this.rating) {
        console.log(this.serviceName);
        this.$store.commit("ADD_CARD", { 
        serviceName: this.serviceName, 
        businessName: this.businessName, 
        rating: this.rating 
      });

        this.serviceName = '';
        this.businessName = '';
        this.rating = null;
      }
    }
  }
}
</script>
