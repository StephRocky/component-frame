<script setup>
import { ref, provide, watch } from "vue";
import eleInput from "@/packages/base/input";

// 提供子组件参数
const info1 = ref({
  eleId: "11111",
  eleName: "input",
  eleType: "base",
  eleKey: "input1",
  eleValue: "123",
  eleEvent: ["input"],
  label: "灵活月租费用",
  classId: "2",
  className: "form",
  config: {},
});
const info2 = ref({
  eleId: "22222",
  eleName: "input",
  eleType: "base",
  eleKey: "input2",
  eleValue: "456",
  eleEvent: [],
  label: "灵活月租费用",
  classId: "2",
  className: "form",
  config: {},
});

// 测试子组件的绑定值
const input1 = ref("");
const input2 = ref("");
watch(input1, (val) => {
  console.log(val);
});
watch(input2, (val) => {
  console.log(val);
});

// 测试子组件的事件
const handlerCallback = (data) => {
  console.log("子组件事件触发");
  const { params } = data;
  info2.value.eleValue = params[0];
};
provide("handlerCallback", handlerCallback);
</script>

<template>
  <div>
    <to-space />
    <eleInput :info="info1" v-model="input1" />
    <eleInput :info="info2" v-model="input2" />
  </div>
</template>
