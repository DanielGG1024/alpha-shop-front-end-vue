<template>
  <div class="form-panel">
    <div class="form-container">
      <form action="">
        <div class="form-content" id="a-form">
          <!-- .part  step 三種不同內容-->
          <div class="part part-delivery" v-if="currentPage === 1">
            <h4 class="title">寄送地址</h4>
            <div class="grid-row">
              <div class="form-row gird-salutation">
                <label for="">稱謂</label>
                <div class="select-wrapper">
                  <select name="a-type" id="a-type" required>
                    <option value="" disabled selected>稱謂</option>
                    <option value="male">先生</option>
                    <option value="female">小姐</option>
                  </select>
                </div>
              </div>
              <div class="form-row grid-name">
                <label for="">姓名</label>
                <div class="input-wrapper">
                  <input type="text" placeholder="姓名" />
                </div>
              </div>
              <div class="form-row grid-phone">
                <label for="">電話</label>
                <div class="input-wrapper">
                  <input type="text" placeholder="請輸入行動電話" />
                </div>
              </div>
              <div class="form-row grid-email">
                <label for="">Email</label>
                <div class="input-wrapper">
                  <input type="text" placeholder="請輸入電子郵件" />
                </div>
              </div>
              <div class="form-row grid-location">
                <label for="">縣市</label>
                <div class="select-wrapper">
                  <select name="a-type" id="a-type" required>
                    <option value="" disabled selected>縣市</option>
                    <option value="1">台北</option>
                    <option value="2">桃園</option>
                    <option value="3">新竹</option>
                    <option value="4">苗栗</option>
                    <option value="5">台中</option>
                  </select>
                </div>
              </div>
              <div class="form-row grid-address">
                <label for="">地址</label>
                <div class="input-wrapper">
                  <input type="text" placeholder="請輸入地址" />
                </div>
              </div>
            </div>
          </div>
          <div class="part part-courier" v-if="currentPage === 2">
            <h4 class="title">運送方式</h4>
            <div class="part-courier-conrainer">
              <label
                for="standard"
                class="form-row"
                data-price="0"
                @click="handleDeliveryStandard"
              >
                <div class="description">
                  <input type="radio" id="standard" name="delivery" checked />
                  <div class="">
                    <p>標準運送</p>
                    <small>約3~7個工作天</small>
                  </div>
                </div>
                <div>
                  <span>免費</span>
                </div>
              </label>
              <label
                for="dhl"
                class="form-row "
                data-price="500"
                @click="handleDeliveryDhl"
              >
                <div class="description">
                  <input type="radio" id="dhl" name="delivery" />
                  <div>
                    <p>DHL 貨運</p>
                    <small>48小時內送達</small>
                  </div>
                </div>
                <span>500</span>
              </label>
            </div>
          </div>
          <div class="part part-payment" v-if="currentPage === 3">
            <h4 class="title">付款資訊</h4>
            <div class="grid-row">
              <div class="form-row grid-name">
                <label for="">持卡人姓名</label>
                <div class="input-wrapper">
                  <input type="text" placeholder="john Doe" />
                </div>
              </div>
              <div class="form-row grid-number">
                <label for="">卡號</label>
                <div class="input-wrapper">
                  <input type="text" placeholder="1111 2222 3333 4444" />
                </div>
              </div>
              <div class="form-row grid-date">
                <label for="">有效日期</label>
                <div class="input-wrapper">
                  <input type="text" placeholder="MM/YY" />
                </div>
              </div>
              <div class="form-row grid-ccv">
                <label for="">CVC/CCV</label>
                <div class="input-wrapper">
                  <input type="text" placeholder="123" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    currentPage: {
      type: Number,
      required: true,
    },
    prevPage: {
      type: Number,
      required: true,
    },
  },
  methods: {
    handleDeliveryStandard() {
      this.$emit("handleDeliveryStandard");
    },
    handleDeliveryDhl() {
      this.$emit("handleDeliveryDhl");
    },
  },
};
</script>

<style scoped>
.none {
  display: none;
}

.part-delivery .grid-row {
  padding: 0.5rem 0rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-template-areas:
    "salutation name name name"
    "phone phone email email"
    "location address address address";
  grid-gap: 1rem;
}
.gird-salutation {
  grid-area: salutation;
}
.grid-name {
  grid-area: name;
}
.grid-phone {
  grid-area: phone;
}
.grid-email {
  grid-area: email;
}
.grid-location {
  grid-area: location;
}
.grid-address {
  grid-area: address;
}

.part-courier label {
  box-sizing: border-box;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
}
.part-courier .description {
  display: flex;
  align-items: center;
}
.part-courier-conrainer {
  /* padding: 0.5rem 1rem; */
}

.part-courier .form-row {
  margin-top: 16px;
  border: 1px solid gray;
  border-radius: 5px;
  font-size: 16px;
  padding: 8px;
  align-items: center;
  cursor: pointer;
  width: 80%;
}
.part-courier .form-row small {
  display: block;
  color: gray;
}
.description > div {
  margin-left: 0.5rem;
}
p {
  margin-block-start: 0.5em;
  margin-block-end: 0.5em;
}

.part-payment .grid-row {
  padding: 0.5rem 0rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-template-areas:
    "name name name ."
    "number number number ."
    "date date ccv ccv";
  grid-gap: 1rem;
}
.part-payment .grid-name {
  grid-area: name;
}
.part-payment .grid-number {
  grid-area: number;
}
.part-payment .grid-date {
  grid-area: date;
}
.part-payment .grid-ccv {
  grid-area: ccv;
}

input {
  border: 1px solid gray;
  border-radius: 5px;
  font-size: 16px;
  padding: 8px;
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  /* min-width: 100%;
    max-width: 100%; */
}
input[type="text"] {
  width: 100%;
  background-color: transparent;
}
input[type="text"]::placeholder {
  color: gray;
}
input[type="radio"] {
  cursor: pointer;
  -webkit-appearance: none;
  border-radius: 50%;
}
input[type="radio"]:checked {
  box-shadow: inset 0 0 0 5px #2A2A2A;
}
.select-wrapper {
  position: relative;
}
.select-wrapper::after {
  content: "";
  border-style: solid;
  border-width: 6px 4px 0 4px;
  border-color: gray transparent transparent transparent;
  position: absolute;
  top: 50%;
  right: 8px;
  transform: translateY(-50%);
  z-index: -1;
}
select {
  border: 1px solid #808080;
  border-radius: 5px;
  font-size: 16px;
  padding: 8px;
  -webkit-appearance: none;
  background-color: transparent;
  width: 100%;
}
select:invalid {
  color: #808080;
}
.form-row > label {
  height: 21px;
  display: block;
  margin: 3px 0;
  font-weight: 600;
  color: #808080;
  padding-bottom: 0.5rem;
}
</style>