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

      <div class="space-y-8">
        <div>
          <pre class="bg-indigo-950 text-white rounded-md p-2 text-sm overflow-x-auto">
            <code>
                &lt;button class="button"&gt;Normal/button&gt;
                &lt;button class="button is-white"&gt;White/button&gt;
                &lt;button class="button is-text"&gt;Texto/button&gt;
                &lt;button class="button is-primary"&gt;Primary/button&gt;
            </code>
          </pre>
        </div>
        <div>
          <button
            class="border px-4 py-2 cursor-pointer rounded-full border-gray-300 hover:border-gray-400"
          >
            Normal
          </button>
          <button class="bg-primary text-neutral-100 px-4 py-2 cursor-pointer rounded-full">
            Primary
          </button>
          <pre class="bg-gray-100 rounded-md p-4 text-sm overflow-x-auto">
            <code>
              &lt;button class="outline px-4 py-2 cursor-pointer rounded-full outline-gray-300 hover:outline-gray-500 focus:outline-none focus:shadow-outline"&gt;Normal&lt;/button&gt;
              &lt;button class="outline px-4 py-2 cursor-pointer rounded-full outline-gray-300 hover:outline-gray-500 focus:outline-none focus:shadow-outline"&gt;Normal&lt;/button&gt;
            </code>
          </pre>
        </div>
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
