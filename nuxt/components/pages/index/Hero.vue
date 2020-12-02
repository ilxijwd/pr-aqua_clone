<template>
  <div class="hero-background">
    <div class="spacer flex flex-col-reverse p-4 md:justify-center md:h-full lg:flex-row">
      <div class="flex items-center justify-center mr-16 md:mr-24 md:mb-32 mt-8 md:mt-16 lg:w-1/2 lg:m-0">
        <div class="space-y-4 md:w-auto md:mr-4 icons">
          <div class="ml-4 md:ml-8 lg:ml-16">
            <img
              src="/images/pages/index/icon-1.png"
              alt="Bathroom"
              @mouseover="icon_1 = true"
              @mouseleave="icon_1 = false"
            />
            <transition name="fade">
              <div v-if="icon_1">{{ $t('pages.index.hero.bubbles[0]') }}</div>
            </transition>
          </div>
          <div>
            <img
              src="/images/pages/index/icon-2.png"
              alt="Kitchen"
              @mouseover="icon_2 = true"
              @mouseleave="icon_2 = false"
            />
            <transition name="fade">
              <div v-if="icon_2">{{ $t('pages.index.hero.bubbles[1]') }}</div>
            </transition>
          </div>
          <div>
            <img
              src="/images/pages/index/icon-3.png"
              alt="Washing machine"
              @mouseover="icon_3 = true"
              @mouseleave="icon_3 = false"
            />
            <transition name="fade">
              <div v-if="icon_3">{{ $t('pages.index.hero.bubbles[2]') }}</div>
            </transition>
          </div>
          <div class="ml-4 md:ml-8 lg:ml-16">
            <img
              src="/images/pages/index/icon-4.png"
              alt="Dishwasher safe"
              @mouseover="icon_4 = true"
              @mouseleave="icon_4 = false"
            />
            <transition name="fade">
              <div v-if="icon_4">{{ $t('pages.index.hero.bubbles[3]') }}</div>
            </transition>
          </div>
        </div>
        <div class="globe-container">
          <img src="/images/pages/index/globe.png" alt="Globe" />
        </div>
      </div>
      <div class="flex flex-col items-center md:justify-center lg:w-1/2">
        <div class="text-red-800 font-bold text-2xl text-center uppercase mt-5 md:text-5xl lg:m-0">
          {{ $t('pages.index.hero.title') }}
        </div>
        <img class="h-16 mt-5 md:h-24 lg:h-32" src="/images/pages/index/drop.png" alt="Waterdrop" />
        <img
          class="h-16 mt-5 md:h-32 sm:hidden lg:block lg:ml-10"
          src="/images/pages/index/waterdrop.png"
          alt="Waterdropping"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data() {
    return {
      icon_1: false,
      icon_2: false,
      icon_3: false,
      icon_4: false,
    }
  },
})
</script>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.hero-background {
  background-image: url('/images/pages/index/sea.png');
  @apply w-full h-screen bg-center bg-no-repeat bg-cover;
}

.icons {
  @media (min-width: 320px) {
    width: 75%;
  }

  @media (min-width: 370px) {
    width: 50%;
  }

  @media (min-width: 768px) {
    width: auto;
  }

  & > div {
    @apply relative;

    & > img {
      @apply cursor-pointer;

      opacity: 0.85;
      height: 46px;
      width: 46px;

      @screen md {
        height: 69px;
        width: 69px;
      }

      @screen lg {
        height: 115px;
        width: 115px;
      }
    }

    & > div {
      @apply absolute font-bold text-white;

      @screen sm {
        @apply text-xl;
        width: 250px;
        transform: translateX(48px);
        top: 10%;
      }

      @screen md {
        @apply text-2xl;
        width: 300px;
        transform: translateX(72px);
        top: 20%;
      }

      @screen lg {
        @apply text-3xl;
        width: 400px;
        transform: translateX(128px);
        top: 35%;
      }
    }
  }
}

.globe-container {
  img {
    @screen md {
      height: 300px;
    }

    @screen lg {
      height: 520px;
    }
  }
}
</style>
