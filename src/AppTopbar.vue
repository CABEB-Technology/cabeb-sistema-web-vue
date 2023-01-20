<template>
	<div class="layout-topbar">
		<router-link to="/" class="p-link">
			<img alt="Logo" src="./assets/images/logo.png"  style="height: 4rem;"/>
		</router-link>
		<button class="p-link layout-menu-button layout-topbar-button" @click="onMenuToggle">
			<i class="pi pi-bars"></i>
		</button>

		<button class="p-link layout-topbar-menu-button layout-topbar-button"
			v-styleclass="{ selector: '@next', enterClass: 'hidden', enterActiveClass: 'scalein', 
			leaveToClass: 'hidden', leaveActiveClass: 'fadeout', hideOnOutsideClick: true}">
			<i class="pi pi-ellipsis-v"></i>
		</button>
		<ul class="layout-topbar-menu hidden lg:flex origin-top">
			<li>
				<button class="p-link layout-topbar-button">
					<i class="pi pi-user"></i>
					<span>Usuário</span>
				</button>
			</li>
			<li>
				<button class="p-link layout-topbar-button" @click="logout">
					<i class="pi pi-arrow-circle-right"></i>
					<span>Sair</span>
				</button>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
    methods: {
        onMenuToggle(event) {
            this.$emit('menu-toggle', event);
        },
		onTopbarMenuToggle(event) {
            this.$emit('topbar-menu-toggle', event);
        },
		logout() {
            localStorage.removeItem('id_usuario');
            localStorage.removeItem('usuario')
            localStorage.removeItem('token');
            this.$router.push('/login');
        },
    },
	computed: {
		darkTheme() {
			return this.$appState.darkTheme;
		}
	}
}
</script>