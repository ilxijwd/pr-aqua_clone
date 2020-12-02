<template>
  <div class="gradient p-3 md:p-6 lg:p-8">
    <div class="max-w-6xl mx-auto">
      <div class="text-center uppercase mb-6 md:mb-8 lg:mb-12 text-sm md:text-2xl font-bold">
        {{ $t('pages.index.about.applicable-for.title') }}:
      </div>
      <div class="applicable-for mb-8 md:mb-12">
        <div v-for="place in $t('pages.index.about.applicable-for.places')" :key="place.alt">
          <div>{{ place.name }}</div>
          <img :src="`/images/pages/index/${place.img}.jpg`" :alt="place.alt" />
        </div>
      </div>
      <div class="text-sm md:text-2xl uppercase font-bold text-center mb-6 md:mb-8 lg:mb-12">
        {{ $t('pages.index.about.advantages.title') }}:
      </div>
      <div class="flex flex-col-reverse lg:flex-row">
        <div class="flex flex-col items-center lg:w-1/2">
          <table class="info-table">
            <thead>
              <tr>
                <th v-for="(item, index) in $t('pages.index.about.advantages.table.head')" :key="`head-item-${index}`">
                  {{ item }}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(row, row_index) in $t('pages.index.about.advantages.table.rows')" :key="`row-${row_index}`">
                <td v-for="(col, col_index) in row" :key="`col-${col_index}`">
                  {{ col }}
                </td>
              </tr>
            </tbody>
          </table>
          <div class="text-green-600 text-xs font-bold p-3 pb-0 md:max-w-sm">
            {{ $t('pages.index.about.advantages.table.description') }}
          </div>
        </div>
        <div class="mb-6 lg:w-1/2">
          <ul class="list-disc list-inside font-bold text-sm md:text-base md:max-w-xl md:mx-auto">
            <li v-for="(item, index) in $t('pages.index.about.advantages.list')" :key="`list-item-${index}`">
              {{ item }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.gradient {
  background: linear-gradient(116.27deg, #fcf89e 0%, rgba(250, 255, 0, 0) 100%);
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
}

.applicable-for {
  @apply grid grid-cols-1 gap-6;

  @screen md {
    @apply grid-cols-2 gap-8;
  }

  @screen lg {
    @apply grid-cols-4;
  }

  & > div {
    @apply flex flex-col items-center;

    & > :first-child {
      @apply text-xs mb-3 uppercase font-bold;

      @screen md {
        @apply text-base mb-4;
      }

      @screen lg {
        @apply text-lg mb-5;
      }
    }

    & > :last-child {
      width: 180px;
      height: 180px;
    }
  }
}

.info-table {
  @apply table-fixed text-xs;

  @screen md {
    @apply max-w-xl text-base;
  }

  td {
    @apply border px-2 py-1;
  }

  th {
    @apply bg-gray-300 border px-2 py-2;
  }

  tbody {
    @apply text-center text-xs;

    @screen md {
      @apply text-sm;
    }

    & > tr:nth-child(2n + 1) {
      @apply bg-gray-100;

      & > td:nth-child(3) {
        @apply bg-orange-100;
      }

      & > td:nth-child(4) {
        @apply bg-teal-100;
      }
    }

    & > tr:nth-child(2n) {
      @apply bg-gray-200;

      & > td:nth-child(3) {
        @apply bg-orange-200;
      }

      & > td:nth-child(4) {
        @apply bg-teal-200;
      }
    }
  }
}
</style>
