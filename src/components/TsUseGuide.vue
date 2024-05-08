<template>
  <div ref="el"></div>
  <HelloWorld ref="helloworld"/>
</template>

<script setup lang='ts'>
import { reactive, ref, computed } from "vue";
import HelloWorld from "./HelloWorld.vue";
import type { User } from "@/types/user"
// 手动定义一个复杂的类型
const initCode = ref<string | number>('200')

// 定义一个元素ref
const el = ref<HTMLImageElement | null> (null)

// 定义一个组件ref
const helloworld = ref<InstanceType<typeof HelloWorld> | null>(null)

const user:User = reactive({
  name: '张三',
  age: 18,
})

const age = computed<number>(()=>{
  return 2
})
</script>

<style scoped>
</style>