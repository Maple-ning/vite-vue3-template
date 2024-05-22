import { defineStore } from "pinia";
import { ref } from "vue";
import { getToken, removeToken, setToken } from "@/utils/cache/cookies"

export const useUserStore = defineStore("user",() => {
  const token = ref<string>(getToken() || "");
  const username = ref<string>("");

  const login = async () => {
    setToken('123')
    return "123"
  }

  const logout = () => {
    removeToken()
    token.value = "";
  }

  return { token, username, login, logout}
})