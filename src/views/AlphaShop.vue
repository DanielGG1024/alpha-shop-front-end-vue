<template>
  <div class="main">
    <h1 class="main-title">結帳</h1>
    <div class="main-container">
      <div class="left-content">
        <Stepper :currentPage="currentPage" :prevPage="prevPage" />
        <Part
          :currentPage="currentPage"
          :prevPage="prevPage"
          @handleDeliveryStandard="DeliveryStandard"
          @handleDeliveryDhl="DeliveryDhl"
        />
      </div>
      <div class="right-content">
        <Cart
          :initial-cart="cart"
          :delivery="delivery"
          :total="total"
          @after-add="handleAmountAdd"
          @after-subtract="handleAmountSubtract"
        />
      </div>
      <div class="btn-panel">
        <div class="btn-container">
          <div class="btn-content" id="btn-control">
            <button
              class="btn-prev"
              @click.prevent.stop="handlePrevBtn"
              v-show="currentPage !== 1"
            >
              上一步
            </button>
            <button
              v-if="currentPage < 3"
              class="btn-next"
              @click.prevent.stop="handleNextBtn"
            >
              下一步
            </button>
            <button v-else class="btn-complete" @click.prevent.stop="handleNextBtn">
              確認下單
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Stepper from "./../components/Stepper";
import Part from "./../components/Part";
import Cart from "./../components/Cart";

const dummyData = [
  {
    id: 1,
    name: "破壞補釘修身牛仔褲",
    amount: 1,
    price: 3999,
    // ??
    image: require("../assets/1.png"),
    // ??
  },
  {
    id: 2,
    name: "刷色直筒牛仔褲",
    amount: 1,
    price: 1299,
    image: require("../assets/2.png"),
  },
];

export default {
  components: {
    Stepper,
    Part,
    Cart,
  },
  data() {
    return {
      cart: [],
      delivery: "免費",
      total: 0,
      currentPage: 1,
      prevPage: 0,
    };
  },
  created() {
    this.fetchCart();
    this.totalAmount();
  },
  methods: {
    fetchCart() {
      this.cart = dummyData;
    },
    handleNextBtn() {
      if (this.currentPage >= 3) return;
      this.currentPage += 1;
      this.prevPage += 1;
    },
    handlePrevBtn() {
      if (this.currentPage <= 1) return;
      this.currentPage -= 1;
      this.prevPage -= 1;
    },
    handleAmountAdd(id) {
      this.cart = this.cart.map((item) => {
        if (item.id === id) {
          item.amount += 1;
          this.totalAmount();
        }
        return item;
      });
    },
    handleAmountSubtract(id) {
      this.cart = this.cart.map((item) => {
        if (item.id === id && item.amount > 1) {
          item.amount -= 1;
          this.totalAmount();
        }
        return item;
      });
    },
    DeliveryStandard() {
      this.delivery = "免費";
      this.totalAmount();
    },
    DeliveryDhl() {
      this.delivery = 500;
      this.totalAmount();
    },
    totalAmount() {
      let itemsPrice = 0;
      let deliveryPrice = 0;
      if (isNaN(Number(this.delivery))) {
        deliveryPrice = 0;
        this.delivery = "免費";
      } else {
        deliveryPrice = this.delivery;
      }
      this.cart.map((item) => {
        itemsPrice += item.amount * item.price;
      });
      this.total = itemsPrice + deliveryPrice;
    },
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
.main {
  width: 90%;
  margin: 0 auto;
}
.main-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(5, 1fr);
  grid-template-areas:
    "left right"
    "left right"
    "left right"
    "left right"
    "btn right";
}
.left-content {
  padding: 0 1.5rem;
  grid-area: left;
}
.right-content {
  padding: 0 1.5rem;
  margin-top: 2.5rem;
  grid-area: right;
}
.main-title {
  font-size: 2rem;
  padding: 1.5rem;
}
.title {
  font-size: 1.5rem;
  padding: 1.5rem 0;
}
.btn-panel {
  margin-top: 20px;
  grid-area: btn;
}
.btn-container {
  padding: 1rem 1.5rem;
  height: 100%;
}
.btn-content {
  position: relative;
  padding-top: 1rem;
  border-top: 1px solid #a7aaaf;
  display: flex;
  justify-content: space-between;
  height: 100%;
}
.btn-container button {
  width: 35%;
  border-radius: 5px;
  font-size: 16px;
  padding: 8px;
  height: 40px;
  border: none;
  cursor: pointer;
}
.btn-prev {
  text-align: left;
  background-color: transparent;
}
.btn-prev::before {
  content: "←";
  margin-right: 1rem;
}
.btn-next,
.btn-complete{
  position: absolute;
  right: 0;
  top: 16px;
  bottom: 16px;
  background-color: #F67599;
  color: white;
}
.btn-next::after {
  content: "→";
  margin-left: 1rem;
}

.none {
  display: none;
}
</style>