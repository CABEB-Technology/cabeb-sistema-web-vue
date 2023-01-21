<template>
  <div class="surface-section">
    <ul class="list-none p-0 m-0">
      <li
        class="
          flex
          align-items-center
          py-3
          px-2
          border-top-1
          surface-border
          flex-wrap
        "
      >
        <div class="text-500 w-6 md:w-2 font-medium">Nome</div>
        <div class="text-900 w-full md:w-8 md:flex-order-0 flex-order-1">
          {{ nome }}
        </div>
      </li>

      <li
        class="
          flex
          align-items-center
          py-3
          px-2
          border-top-1
          surface-border
          flex-wrap
        "
      >
        <div class="text-500 w-6 md:w-2 font-medium">Perfil</div>
        <div class="text-900 w-full md:w-8 md:flex-order-0 flex-order-1">
          <Chip label="Gestor" class="mr-2"></Chip>
        </div>
      </li>
      <li
        class="
          flex
          align-items-center
          py-3
          px-2
          border-top-1
          surface-border
          flex-wrap
        "
      >
        <div class="text-500 w-6 md:w-2 font-medium">E-mail</div>
        <div class="text-900 w-full md:w-8 md:flex-order-0 flex-order-1">
          brendson@gmail.com
        </div>
      </li>
      <li
        class="
          flex
          align-items-center
          py-3
          px-2
          border-top-1
          surface-border
          flex-wrap
        "
      >
        <div class="text-500 w-6 md:w-2 font-medium">Telefone</div>
        <div class="text-900 w-full md:w-8 md:flex-order-0 flex-order-1">
          (81)98861-5976
        </div>
      </li>
      <!-- <li class="flex align-items-center py-3 px-2 border-top-1 border-bottom-1 surface-border flex-wrap">
            <div class="text-500 w-6 md:w-2 font-medium">Plot</div>
            <div class="text-900 w-full md:w-8 md:flex-order-0 flex-order-1 line-height-3">
                A group of professional bank robbers start to feel the heat from police
                when they unknowingly leave a clue at their latest heist.</div>
        </li> -->
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    data: Object,
  },
  data() {
    return {
        nome: null,
        email: null,
        telefone: null
    }
  },
  created(){
    this.nome = this.data.nome
  }
};
</script>