<template>
  <painel
    :titulo="integrante.id ? 'Atualizar Integrante' : 'Novo Integrante'"
    :icone="integrante.id ? 'pi pi-user-edit' : 'pi pi-user-plus'"
    :mostrarRefresh="false"
  >
    <div class="col-12">
      <div class="p-fluid formgrid grid">
        <div class="field col-12 md:col-3">
          <label>Matricula</label>
          <InputText v-model="integrante.matricula" type="text" />
        </div>

        <div class="field col-12 md:col-3">
          <label>Perfil</label>
          <Dropdown
            v-model="integrante.perfilEquipe.id"
            :options="perfis"
            optionLabel="name"
            optionValue="code"
          />
        </div>
      </div>

      <div class="p-fluid formgrid grid">
        <div class="field col-12 md:col-6">
          <label>Nome Completo</label>
          <InputText v-model="integrante.nome" type="text" />
        </div>

        <div class="field col-12 md:col-3">
          <label>CPF</label>
          <InputMask
            v-model="integrante.cpf"
            mask="999.999.999-99"
            type="text"
          />
        </div>

        <div class="field col-12 md:col-3">
          <label>Data de Nascimento</label>
          <Calendar
            inputId="icon"
            :showIcon="true"
            v-model="integrante.dataNascimentoDate"
            dateFormat="dd/mm/yy"
          />
        </div>

        <div class="field col-12 md:col-6">
          <label>Email</label>
          <InputText v-model="integrante.email" type="email" />
        </div>

        <div class="field col-12 md:col-3">
          <label>Telefone</label>
          <InputMask
            v-model="integrante.telefone"
            mask="(99) 99999-9999"
            type="text"
          />
        </div>

        <!-- <div class="field col-12">
          <label for="address">Address</label>
          <Textarea id="address" rows="4" />
        </div>

        <div class="field col-12 md:col-6">
          <label for="city">City</label>
          <InputText id="city" type="text" />
        </div>
        <div class="field col-12 md:col-3">
          <label for="state">State</label>
          <Dropdown
            id="state"
            v-model="dropdownItem"
            :options="dropdownItems"
            optionLabel="name"
            placeholder="Select One"
          ></Dropdown>
        </div>
        <div class="field col-12 md:col-3">
          <label for="zip">Zip</label>
          <InputText id="zip" type="text" />
        </div> -->
      </div>
    </div>

    <btn-cancelar
      label="Cancelar"
      title="cancelar"
      @click.stop="cancelar"
      icon="pi pi-times-circle"
      class="mr-2 p-button-secondary"
    />
    <btn-salvar
      label="Salvar"
      @click.stop="inserir"
      icon="pi pi-check-circle"
    />
  </painel>
  <router-view></router-view>
</template>

<script>
import { gestaoService } from "./service";

export default {
  data() {
    return {
      integrante: {
        id: null,
        nome: null,
        cpf: null,
        email: null,
        matricula: null,
        endereco: null,
        telefone: null,
        dataNascimento: null,
        dataNascimentoDate: null,
        perfilEquipe: {
          id: null,
        },
      },
      perfis: [{ name: "Gestão", code: 1 }],
    };
  },
  mounted() {
    if (this.$route.params.id) {
      gestaoService.obterIntegrante(this.$route.params.id).then((response) => {
        if (response && response.success) {
          this.integrante = response.data;
          this.integrante.dataNascimentoDate = this.$moment(
            this.integrante.dataNascimento,
            "DD/MM/YYYY"
          ).toDate();
        }
      });
    }
  },
  methods: {
    inserir() {
      this.integrante.dataNascimento = this.$moment(
        this.integrante.dataNascimentoDate
      ).format("DD/MM/YYYY");

      if (this.integrante.id) {
        this.$store.dispatch("addRequest");
        gestaoService
          .atualizarIntegrante(this.integrante.id, this.integrante)
          .then((response) => {
            this.respostaSalvar(response, true);
          });
      } else {
        this.$store.dispatch("addRequest");
        gestaoService.criarIntegrante(this.integrante).then((response) => {
          this.respostaSalvar(response, false);
        });
      }
    },
    respostaSalvar(response, edicao) {
      if (response && response.success) {
        this.$toast.add({
          severity: "success",
          summary: "Equipe",
          detail: `Integrante ${edicao ? "editado" : "inserido"} com sucesso`,
          life: 3000,
        });

        this.cancelar();
      } else {
        this.$toast.add({
          severity: "error",
          summary: "Erro",
          detail: response.errors.descricao,
          life: 10000,
        });
      }
      this.$store.dispatch("removeRequest");
    },
    cancelar() {
      this.$router.push({
        name: "Gestão",
      });
    },
  },
};
</script>
