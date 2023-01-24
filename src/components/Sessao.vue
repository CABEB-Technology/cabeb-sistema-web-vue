<template>
  <div class="text-color flex align-items-center text-center">
    <countdown :time="tempo" format="HH:mm:ss" @finish="endCallBack()">
      <template #="{ resolved }">
        <span>
          <small>Tempo de Sessão</small>
        </span>
        <br />
        <span>{{ resolved.HH }}</span> : <span>{{ resolved.mm }}</span> :
        <span>{{ resolved.ss }}</span>
      </template>
    </countdown>
  </div>
</template>

<script>
import Countdown from "vue3-countdown";

export default {
  name: "Sessao",

  data() {
    return {
      tempo: null,
    };
  },
  created() {
    this.tempo = 5 * 60 * 60 * 1000;
  },

  methods: {
    endCallBack() {
      localStorage.removeItem("id_usuario");
      localStorage.removeItem("usuario");
      localStorage.removeItem("token");
      this.$router.push("/login");
    },
  },
  components: {
    Countdown,
  },
};
</script>

<style scoped>
.text-color {
  color: white;
}
</style>
