<template>
  <div class="cart-panel">
    <div class="cart-container">
      <div class="cart-content">
        <h4 class="title">購物籃</h4>
        <div class="cart-items" id="all-item">
          <div class="item" v-for="cart in initialCart" :key="cart.id">
            <div class="pic">
              <img :src="cart.image" alt="" />
            </div>
            <div class="info">
              <div class="info-left">
                <div class="info-title">
                  <span>{{ cart.name }}</span>
                </div>
                <div class="info-amount">
                  <span
                    class="circle-container"
                    id="subtract"
                    @click="amountSubtract(cart.id)"
                    >-</span
                  >
                  <span class="amount">{{ cart.amount }}</span>
                  <span
                    class="circle-container"
                    id="add"
                    @click="amountAdd(cart.id)"
                    >+</span
                  >
                </div>
              </div>
              <div class="info-price">
                <span>$</span><span id="price">{{ cart.price }}</span>
              </div>
            </div>
          </div>
          <div class="cart-info">
            <div class="cart-info-delivery">
              <span>運費</span>
              <span id="total-delivery-price">{{ delivery }}</span>
            </div>
            <div class="cart-info-total">
              <span>小記</span>
              <span id="total">{{ total }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    initialCart: {
      type: Array,
      required: true,
    },
    delivery: {
      type: [String, Number],
      required: true,
    },
    total: {
      type: [Number, String],
      required: true,
    },
  },
  methods: {
    amountAdd(id) {
      this.$emit("after-add", id);
    },
    amountSubtract(id) {
      this.$emit("after-subtract", id);
    },
  },
};
</script>

<style scoped>
.title {
  padding: 2rem 1.5rem;
}
.cart-panel {
  padding: 1rem;
}
.cart-content {
  flex: 1;
  border: 1px solid gray;
  border-radius: 5px;
}
.cart-items {
  padding: 0 1.5rem;
  display: flex;
  flex-direction: column;
}
.item {
  padding: 0.5rem 0;
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
}
.pic {
  width: 100px;
  height: 100px;
  min-width: 50px;
  min-height: 50px;
  align-self: center;
  margin: auto 0;
}

.info {
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  margin-left: 1.5rem;
}
.info-left {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.info-amount {
  margin: 1rem 0;
  display: flex;
  flex-wrap: wrap;
  position: relative;
  text-align: center;
  vertical-align: middle;
}
.amount {
  margin: 0 1rem;
  line-height: 27px;
}
.pic img {
  width: 100%;
  height: 100%;
}
.cart-info-delivery,
.cart-info-total {
  display: flex;
  justify-content: space-between;
  border-top: 1px solid gray;
  padding: 1.5rem 0;
}

.circle-container {
  height: 26px;
  width: 26px;
  border-radius: 50%;
  color: #2a2a2a;
  background-color: #f0f0f5;
  margin: 0 auto;
}
.circle-container:hover {
  cursor: pointer;
}
#subtract {
  line-height: 23px;
}
#add {
  line-height: 26px;
}
</style>