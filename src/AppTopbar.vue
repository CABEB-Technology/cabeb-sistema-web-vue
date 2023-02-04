<template>
  <div class="layout-topbar">
    <button
      class="layout-topbar-logo p-link layout-topbar-button mr-2"
      @click="onMenuToggle"
    >
      <i class="pi pi-bars"></i>
    </button>
    <router-link to="/" class="layout-topbar-logo-1">
      <span class="ml-2">SIGI</span>
    </router-link>

    <button
      class="p-link layout-topbar-menu-button layout-topbar-button"
      v-styleclass="{
        selector: '@next',
        enterClass: 'hidden',
        enterActiveClass: 'scalein',
        leaveToClass: 'hidden',
        leaveActiveClass: 'fadeout',
        hideOnOutsideClick: true,
      }"
    >
      <i class="pi pi-ellipsis-v"></i>
    </button>
    <ul class="layout-topbar-menu hidden lg:flex origin-top">
      <li>
        <button class="p-link layout-topbar-button" @click="openModal">
          <i class="pi pi-user"></i>
          <span>Usuário</span>
        </button>
      </li>
      <li>
        <Sessao />
      </li>
      <li>
        <button class="p-link layout-topbar-button" @click="logout">
          <i class="pi pi-arrow-circle-right"></i>
          <span>Sair</span>
        </button>
      </li>
    </ul>

    <Dialog
      header="Informações de Usuário"
      v-model:visible="displayModal"
      :style="{ width: '25vw' }"
      :modal="true"
    >
      <InformacoesUsuario :data="perfil" />
    </Dialog>
  </div>
</template>

<script>
import Sessao from "./components/Sessao.vue";
import service from "./app/admin/usuarios/service";

export default {
  components: {
    Sessao,
  },
  data() {
    return {
      displayModal: false,
      perfil: null,
    };
  },
  created() {
    this.obterUsuario();
  },
  methods: {
    obterUsuario() {
      this.$store.dispatch("addRequest");
      service.obterUsuario(localStorage.getItem("id_usuario")).then((res) => {
        if (res && res.success) {
          this.perfil = res.data;
        }
        this.$store.dispatch("removeRequest");
      });
    },
    onMenuToggle(event) {
      this.$emit("menu-toggle", event);
    },
    onTopbarMenuToggle(event) {
      this.$emit("topbar-menu-toggle", event);
    },
    logout() {
      localStorage.removeItem("id_usuario");
      localStorage.removeItem("usuario");
      localStorage.removeItem("token");
      this.$router.push("/login");
    },
    openModal() {
      this.displayModal = true;
    },
    closeModal() {
      this.displayModal = false;
    },
  },
  computed: {
    darkTheme() {
      return this.$appState.darkTheme;
    },
  },
};
</script>