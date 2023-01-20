<template>
  <painel titulo="Usuários" icone="pi pi-users" :refreshFunction="obterTodos">
    <tabela headerStyle="width: 3em" id="tableComponent" :data="data">
      <template #botoes>  </template>
      <template #conteudo>
        
        <Column headerStyle="width: 3em">
          <template #body="slotProps">
            <btn-detalhar @click="detalhar(slotProps.data)"></btn-detalhar>
            <btn-atualizar @click="editar(slotProps.data)"></btn-atualizar>
            <btn-deletar @click="deletar(slotProps.data)"></btn-deletar>
          </template>
        </Column>

        <Column field="usuario" header="Usuário" :sortable="true">
          <template #body="slotProps">
            {{ slotProps.data.usuario }}
          </template>
        </Column>

        <Column field="email" header="E-mail" :sortable="true">
          <template #body="slotProps">
            {{ slotProps.data.email }}
          </template>
        </Column>

        <Column field="cpf" header="CPF" :sortable="true">
          <template #body="slotProps">
            {{ slotProps.data.cpf }}
          </template>
        </Column>

        <Column field="modificado" header="Modificado" :sortable="true">
          <template #body="slotProps">
            {{ slotProps.data.modificado }}
          </template>
        </Column>

      </template>
    </tabela>
  </painel>
</template>

<script>
import service from "./service";

export default {
  data() {
    return {
      data: [],
    };
  },
  mounted() {
    this.obterTodos();
  },
  methods: {
    obterTodos() {
      this.$store.dispatch("addRequest");
      service.obterTodos().then((res) => {
        if (res && res.success) {
          this.data = res.data;
        }
        this.$store.dispatch("removeRequest");
      });
    },
    detalhar(prop) {
      console.log(prop);
    },
    editar(prop) {
      console.log(prop);
    },
    deletar(prop) {
      console.log(prop);
    },
  },
};
</script>
