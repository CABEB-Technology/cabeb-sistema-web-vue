<template>
    <div class="grid">
        <div class="col-12">
            <div class="card">
                <div class="flex justify-content-between">
                    <h5>
                        <i :class="icone" v-if="icone && icone.includes('pi-')"></i>
                        <font-awesome-icon :class="icone" :icon="icone" v-if="icone && !icone.includes('pi-')" />
                        {{ titulo }}
                    </h5>
                    <btn-refresh @click="refreshFunction" v-if="mostrarRefresh"></btn-refresh>
                </div>
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        titulo: {
            type: String,
            default: () => 'A DEFINIR',
        },

        icone: {
            type: String,
            default: () => null,
        },

        refreshFunction: {
            type: Function,
            default: () => null,
        },

        mostrarRefresh: {
            type: Boolean,
            default: () => true,
        },
    },
};
</script>