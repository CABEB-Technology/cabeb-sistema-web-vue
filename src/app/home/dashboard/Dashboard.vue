<template>
  <div class="card">
    <div class="surface-section">
      <div
        class="
          flex
          justify-content-between
          flex-wrap
          align-items-start
          flex-column
          lg:justify-content-between lg:flex-row
        "
      >
        <div>
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
        <div class="flex justify-content-end">
          <img
            alt="Logo"
            src="../../../assets/images/logo.png"
            style="height: 6.5rem"
          />
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
    </div>
  </div>
</template>

<script>
export default {};
</script>