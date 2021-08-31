<template>
  <div class="stepper-panel" id="step-control">
    <div class="stepper-container" id="step-control">
      <div
        class="step"
        :class="{ active: currentPage === 1, checked: prevPage >= 1 }"
      >
        <div class="circle-container circle-1"></div>
        <div class="content">
          <span class="content-text">寄送地址</span>
        </div>
      </div>
      <div
        class="step"
        :class="{ active: currentPage === 2, checked: prevPage >= 2 }"
      >
        <div class="circle-container circle-2"></div>
        <div class="content">
          <span class="content-text">運送方式</span>
        </div>
      </div>
      <div
        class="step"
        :class="{ active: currentPage === 3, checked: prevPage >= 3 }"
      >
        <div class="circle-container circle-3"></div>
        <div class="content">
          <span class="content-text">付款資訊</span>
        </div>
      </div>
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
};
</script>


<style scoped>

.stepper-container {
  height: 80px;
  padding: 1rem 0;
  width: 100%;
  display: flex;
  align-items: center;
}

.step {
  align-items: center;
  justify-content: flex-start;
  display: flex;
  position: relative;
  z-index: -1;
  overflow: hidden;
  flex: 1 1;
}
.step .content {
  display: flex;
  position: relative;
  height: 32px;
  line-height: 32px;
  margin-left: 3px;
  color: gray;
}

.step .circle-container {
  background-color: transparent;
  text-align: center;
  flex: none;
  z-index: 1;
  height: 32px;
  width: 32px;
  border: 1px solid gray;
  border-radius: 50%;
  color: gray;
  display: flex;
  justify-content: center;
  align-items: center;
}
.active .circle-container {
  background-color: #2A2A2A;
  color: white;
}
.checked .circle-container {
  background-color: #2A2A2A;
  color: white;
}

.active .content {
  color: #2A2A2A;
  font-weight: 600;
}
.checked .content {
  color: #2A2A2A;
  font-weight: 600;
}
.active,
.checked {
  color: #2A2A2A;
  font-weight: 600;
}

.checked .content::after {
  content: "";
  background-color: #2A2A2A;
}

.step:not(:first-child) {
  padding-left: 16px;
}
.step:not(:last-child) .content::after {
  content: "";
  position: absolute;
  width: 1000px;
  height: 2px;
  background-color: gray;
  top: 16px;
  left: calc(100% + 1rem);
  right: calc(100% - 1rem);
}
.step:not(:last-child).checked .content::after {
  content: "";
  background-color: #2A2A2A;
}
.step:not(:last-child).active .content::after {
  content: "";
  background-color: #2A2A2A;
}
.step:last-child {
  flex: none;
}
.circle-1::after {
  content: "1";
}
.circle-2::after {
  content: "2";
}
.circle-3::after {
  content: "3";
}
.checked > .circle-1::after {
  content: "\2714";
  background-color: #2A2A2A;
}
.checked > .circle-2::after {
  content: "\2714";
  background-color: #2A2A2A;
}
.checked > .circle-2::after {
  content: "\2714";
  background-color: #2A2A2A;
}

.none {
  display: none;
}
</style>