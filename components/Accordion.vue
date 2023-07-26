<template>
    <div>
      <div class="accordion" id="accordionExample">
        <div v-for="(item, index) in items" :key="index" class="accordion-item">
          <h2 class="accordion-header" :id="'heading' + index">
            <button
              class="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              :data-bs-target="'#collapse' + index"
              :aria-expanded="index === 0 ? 'true' : 'false'"
              :aria-controls="'collapse' + index"
              @click="toggleAccordion(index)"
            >
              {{ item.title }}
            </button>
          </h2>
          <div
            :id="'collapse' + index"
            class="accordion-collapse collapse"
            :class="{ show: index === activeIndex }"
            :aria-labelledby="'heading' + index"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              {{ item.content }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        activeIndex: 0, // Índice del "accordion" abierto por defecto
        items: [
          {
            title: 'Pregunta 1',
            content: 'Respuesta 1',
          },
          {
            title: 'Pregunta 2',
            content: 'Respuesta 2',
          },
          {
            title: 'Pregunta 3',
            content: 'Respuesta 3',
          },
        ],
      };
    },
    methods: {
      toggleAccordion(index) {
        this.activeIndex = this.activeIndex === index ? null : index;
      },
    },
  };
  </script>