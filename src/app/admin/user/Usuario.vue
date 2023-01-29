<template>
  <painel titulo="Usuários" icone="pi pi-users" :refreshFunction="obterTodos">
    <tabela headerStyle="width: 3em" id="tableComponent" :data="data">
      <template #botoes> </template>
      <template #conteudo>
        <Column headerStyle="width: 3em">
          <template class="grid row align-items-center" #body="slotProps">
            <Button
              type="button"
              title="Opções"
              icon="pi pi-cog"
              class="p-button-text p-button-lg"
              @click="toggle($event, slotProps.data)"
              aria-haspopup="true"
              aria-controls="overlay_menu"
            />
            <Menu id="overlay_menu" ref="menu" :model="items" :popup="true" />
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
  <Dialog
    header="Informações de Usuário"
    v-model:visible="displayModal"
    :style="{ width: '25vw' }"
    :modal="true"
  >
    <InformacoesUsuario :data="usuario" />
  </Dialog>
</template>

<script>
import service from "./service";

export default {
  data() {
    return {
      data: [],
      usuario: null,
      displayModal: false,
      items: [
        {
          label: "Opções",
          items: [
            {
              label: "Detalhar",
              icon: "pi pi-info-circle",
              command: () => {
                this.detalhar(this.objeto);
              },
            },
            {
              label: "Editar",
              icon: "pi pi-pencil",
              command: () => {
                this.editar(this.objeto);
              },
            },
            {
              label: "Deletar",
              icon: "pi pi-trash",
              command: () => {
                this.deletar(this.objeto);
              },
            },
          ],
        },
      ],
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
    toggle(event, objeto) {
      this.objeto = objeto;
      this.$refs.menu.toggle(event);
    },
    detalhar(prop) {
      this.usuario = prop;
      this.displayModal = true;
    },
    editar(prop) {
      console.log(prop);
    },
    deletar(prop) {
      this.$store.dispatch("addRequest");
      service.deletarUsuario(prop.id).then((res) => {
        if (res && res.success) {
          this.obterTodos();
          this.$toast.add({
            severity: "success",
            summary: "Usuario",
            detail: "Usuário deletado com sucesso!",
            life: 3000,
          });
          this.$store.dispatch("removeRequest");
        }
      });
    },
  },
};
</script>