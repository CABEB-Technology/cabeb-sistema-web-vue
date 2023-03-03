<template>
  <painel
    :titulo="usuario.id ? 'Atualizar Usuário' : 'Novo Usuário'"
    :icone="usuario.id ? 'pi pi-user-edit' : 'pi pi-user-plus'"
  >
    <!-- <div class="col-12">
      <div class="p-fluid formgrid grid">
        <div class="field col-12 md:col-6">
          <label for="firstname2">Firstname</label>
          <InputText id="firstname2" type="text" />
        </div>
        <div class="field col-12 md:col-6">
          <label for="lastname2">Lastname</label>
          <InputText id="lastname2" type="text" />
        </div>
        <div class="field col-12">
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
        </div>
      </div>
    </div> -->
  </painel>
</template>

<script>
import { usuarioService } from "./service";

export default {
  data() {
    return {
      usuario: {
        id: null,
      },
    };
  },
  mounted() {
    if (this.$route.params.id) {
      usuarioService.obterUsuario(this.$route.params.id).then((response) => {
        if (response && response.success) {
          this.usuario = response.data;
        }
      });
    }
  },
};
</script>
