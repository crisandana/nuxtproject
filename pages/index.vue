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
      <button @click="addCard">Add</button>
      <!-- <span class="stars">
        <span v-for="i in stars.full" class="fas fa-star" aria-hidden="true"></span><span v-for="i in stars.half" class="fas fa-star-half-alt" aria-hidden="true"></span><span v-for="i in stars.empty" class="far fa-star" aria-hidden="true"></span>
      </span> -->

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
      rating: 0
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
        this.rating = 0;
      }
    }
  }
}
</script>
