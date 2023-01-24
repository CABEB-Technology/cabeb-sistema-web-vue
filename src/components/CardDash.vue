<template>
  <div class="col-12 md:col-6 lg:col-3">
    <div class="surface-card shadow-2 p-3 border-round">
      <div class="flex justify-content-between mb-3">
        <div>
          <span class="block text-500 font-medium mb-3">{{ nome }}</span>
          <div class="text-900 font-medium text-xl">{{ valor }}</div>
        </div>
        <div :class="confCor" style="width: 2.5rem; height: 2.5rem">
          <i :class="icon"></i>
        </div>
      </div>
      <span class="text-500">{{ descricao }}</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      confCor: null,
    };
  },
  created() {
    this.confCor = "flex align-items-center justify-content-center border-round " + this.cor;
  },
  props: {
    nome: String,
    valor: Number,
    icon: String,
    descricao: String,
    cor: String,
  },
};
</script>