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
          {{ email }}
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
          {{ telefone }}
        </div>
      </li>
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
      telefone: null,
    };
  },
  mounted() {
    this.nome = this.data.usuario;
    this.email = this.data.email;
    this.telefone = this.data.telefone;
  },
};
</script>