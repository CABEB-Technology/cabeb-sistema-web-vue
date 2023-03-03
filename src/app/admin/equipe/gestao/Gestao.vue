<template>
  <painel titulo="Gestão" icone="pi pi-id-card" :refreshFunction="obterTodos">
    <tabela headerStyle="width: 3em" id="tableComponent" :data="data">
      <template #botoes>
        <btn-inserir @click="inserir"></btn-inserir>
      </template>
      <template #conteudo>
        <Column headerStyle="width: 3em">
          <template #body="slotProps">
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

        <Column field="nome" header="Nome" :sortable="true">
          <template #body="slotProps">
            {{ slotProps.data.nome }}
          </template>
        </Column>

        <Column field="email" header="E-mail" :sortable="true">
          <template #body="slotProps">
            {{ slotProps.data.email }}
          </template>
        </Column>

        <Column field="telefone" header="Telefone" :sortable="true">
          <template #body="slotProps">
            {{ slotProps.data.telefone }}
          </template>
        </Column>

        <Column field="modificado" header="Modificado" :sortable="true">
          <template #body="slotProps">
            {{ slotProps.data.modificadoDate }}
          </template>
        </Column>

        <Column field="perfilEquipe" header="Perfil" :sortable="true">
          <template #body="slotProps">
            <Tag>{{ slotProps.data.perfilEquipe.perfil }}</Tag>
          </template>
        </Column>
      </template>
    </tabela>
  </painel>
</template>

<script>
import { gestaoService } from "../service";

export default {
  data() {
    return {
      data: [],
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
                this.confirmarExclusao(this.objeto);
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
      gestaoService.obterGestao().then((res) => {
        if (res && res.success) {
          this.data = res.data;
          this.data.forEach((integrante) => {
            integrante.modificadoDate = this.$moment(
              integrante.modificado,
              "yyyy-MM-dd HH:mm:ss"
            ).format("DD/MM/YYYY HH:mm:ss");
          });
        }
        this.$store.dispatch("removeRequest");
      });
    },
    inserir() {
      this.$router.push({
        name: "gestao_inserir",
      });
    },
    editar(prop) {
      this.$router.push({
        name: "gestao_atualizar",
        params: {
          id: prop.id,
        },
      });
    },
    confirmarExclusao(prop) {
      this.$confirm.require({
        message: `Tem certeza que deseja deletar o integrante ${prop.nome}?`,
        header: "Confirmação",
        icon: "pi pi-exclamation-triangle",
        acceptLabel: "Sim",
        rejectLabel: "Não",
        accept: () => {
          this.deletar(prop);
        },
      });
    },
    deletar(prop) {
      this.$store.dispatch("addRequest");
      gestaoService.deletarIntegrante(prop.id).then((res) => {
        if (res && res.success) {
          this.obterTodos();
          this.$toast.add({
            severity: "success",
            summary: "Equipe",
            detail: "Integrante deletado com sucesso!",
            life: 3000,
          });
          this.$store.dispatch("removeRequest");
        }
      });
    },
    toggle(event, objeto) {
      this.objeto = objeto;
      this.$refs.menu.toggle(event);
    },
  },
};
</script>
