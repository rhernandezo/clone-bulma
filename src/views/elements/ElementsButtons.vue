<template>
  <main class="flex-1 p-4">
    <section class="mb-8">
      <h1 class="text-4xl font-bold mb-4 text-primary">Buttons</h1>
    </section>

    <section class="mb-8">
      <div class="my-16">
        <button class="button">Button</button>
      </div>
    </section>

    <section id="colors" class="mb-8">
      <p class="text-2xl mb-4">Colors</p>
      <div class="flex flex-row gap-2 items-center">
        <button class="button">Normal</button>
        <button class="button is-white">White</button>
        <button class="button is-text">Texto</button>
        <button class="button is-primary">Primary</button>
      </div>
    </section>

    <section id="colors" class="mb-8">
      <p class="text-2xl mb-4">Disabled</p>
      <div class="flex flex-row gap-2 items-center">
        <button class="button" disabled>Normal</button>
        <button class="button is-white" disabled>White</button>
        <button class="button is-text" disabled>Texto</button>
        <button class="button is-primary" disabled>Primary</button>
      </div>
    </section>

    <section id="section-sizes" class="mb-8">
      <p class="text-2xl mb-4">Sizes</p>
      <div class="flex flex-row gap-2 items-center">
        <button class="button text-xs">X Small</button>
        <button class="button text-sm">Small</button>
        <button class="button">Normal</button>
        <button class="button text-lg">Large</button>
      </div>
    </section>

    <section id="section-icon" class="mb-8">
      <div class="mb-4">
        <p class="text-2xl mb-4">Icon</p>
        <div class="flex flex-row gap-2 items-center">
          <button class="button-icon is-small">
            <span class="icon">
              <i class="fa-solid fa-bars"></i>
            </span>
          </button>

          <button class="button-icon">
            <span class="icon">
              <i class="fa-solid fa-bars"></i>
            </span>
          </button>

          <button class="button-icon is-medium">
            <span class="icon">
              <i class="fa-solid fa-bars"></i>
            </span>
          </button>

          <button class="button-icon is-large">
            <span class="icon">
              <i class="fa-solid fa-bars"></i>
            </span>
          </button>
        </div>
      </div>
      <div>
        <p class="text-2xl mb-4">fontawesome icon</p>
        <div class="flex flex-row gap-2 items-center">
          <button class="button-icon is-small">
            <span class="icon">
              <i class="fa-solid fa-bars fa-sm"></i>
            </span>
          </button>

          <button class="button-icon">
            <span class="icon">
              <i class="fa-solid fa-bars"></i>
            </span>
          </button>

          <button class="button-icon is-medium">
            <span class="icon">
              <i class="fa-solid fa-bars fa-lg"></i>
            </span>
          </button>

          <button class="button-icon is-large">
            <span class="icon">
              <i class="fa-solid fa-bars fa-2x"></i>
            </span>
          </button>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped lang="scss"></style>
