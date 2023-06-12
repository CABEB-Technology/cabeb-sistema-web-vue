<template>
  <div class="grid">
    <div class="col-12 lg:col-12 xl:col-12">
      <div class="card mb-0">
        <div class="font-medium text-3xl text-900">
          Ginásio Pernambucano Aurora
        </div>
        <div class="flex align-items-center text-700 flex-wrap">
          <div class="mr-5 flex align-items-center mt-4">
            <i class="pi pi-credit-card mr-2"></i>
            <span>10.572.071/0035-61</span>
          </div>
          <div class="mr-5 flex align-items-center mt-4">
            <i class="pi pi-phone mr-2"></i>
            <span>(81) 3181-4777</span>
          </div>
          <div class="mr-5 flex align-items-center mt-4">
            <i class="pi pi-instagram mr-2"></i>
            <span>@eremgpaurora</span>
          </div>
          <div class="flex align-items-center mt-4">
            <i class="pi pi-whatsapp mr-2"></i>
            <span>(81) 9 9488-9925</span>
          </div>
        </div>
      </div>

    </div>
  </div>

  <div class="surface-ground">
    <div class="grid">
      <CardDash
        nome="Estudantes"
        :valor="765"
        icon="pi pi-users text-blue-500 text-xl"
        descricao="Total de estudantes."
        cor="bg-blue-100"
      />
      <CardDash
        nome="Turmas"
        :valor="17"
        icon="pi pi-sitemap text-orange-500 text-xl"
        descricao="Total de turmas."
        cor=" bg-orange-100"
      />
      <CardDash
        nome="Equipe"
        :valor="57"
        icon="pi pi-id-card text-cyan-500 text-xl"
        descricao="Total da Equipe."
        cor="bg-cyan-100"
      />
      <CardDash
        nome="Professores"
        :valor="32"
        icon="pi pi-user-edit text-purple-500 text-xl"
        descricao="Total de professores."
        cor="bg-purple-100"
      />

      <div class="col-12 xl:col-6">
        <div class="card">
          <h5>Universo por Gênero</h5>
          <Chart type="bar" :data="lineData" :options="lineOptions" />
        </div>
      </div>
      <div class="col-12 xl:col-6">
        <div class="card">
          <h5>Universo por Gênero</h5>
          <Chart type="line" :data="lineData" :options="lineOptions" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      products: {
        value: null,
      },
      lineOptions: null,
      lineData: {
        labels: [
          "1° Ano",
          "2° Ano",
          "3° Ano",
        ],
        datasets: [
          {
            label: "Masculino",
            data: [75, 100, 85],
            fill: false,
            backgroundColor: "#06b6d4",
            borderColor: "#06b6d4",
            tension: 0.4,
          },

          {
            label: "Feminino",
            data: [95, 65, 94],
            fill: false,
            backgroundColor: "#c996fa",
            borderColor: "#c996fa",
            tension: 0.4,
          },

          {
            label: "Outros",
            data: [25, 105, 102],
            fill: false,
            backgroundColor: "#2f4860",
            borderColor: "#2f4860",
            tension: 0.4,
          },
        ],
      },
    };
  },
};
</script>
