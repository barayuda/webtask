<template>
  <div class="about">
    <section class="hero is-fullheight is-default is-bold">
      <div class="hero-body">
        <div class="container">
          <div class="columns is-vcentered">
            <div class="column is-3 is-offset-1 landing-caption">
              <h1 class="title is-3 has-text-weight-light has-text-left has-text-centered-mobile is-spaced">
                {{ about.title }}
              </h1>
              <p class="subtitle is-6 has-text-left is-muted is-hidden-mobile">
                {{ about.opening_crawl }}
              </p>
            </div>
            <div class="column is-7 is-offset-1">
              <figure class="image is-4by3">
                <img src="../assets/images/rainy@3x.png" alt="Description" />
              </figure>
              <p class="subtitle is-6 has-text-centered-mobile m-t-xl is-muted is-hidden-desktop is-hidden-tablet">
                {{ about.opening_crawl }}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="hero-foot mb-20">
        <div class="container">
          <div class="has-text-centered">
            <h1 class="about-title has-text-weight-light is-size-1">Lorem Ipsum</h1>
          </div>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="container">
        <div class="body-page">
          <div class="columns packages">
            <div class="column" v-for="n in 4" v-bind:key="n">
              <div class="package">
                <div class="package-icon">
                  <img src="../assets/images/blue@2x.png" alt="icon" width="64" height="64" />
                </div>
                <div class="package-title">
                  <h2 class="has-text-weight-bold">Lorem Ipsum</h2>
                </div>
                <div class="package-description">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nec turpis convallis, rutrum arcu eleifend, efficitur leo. Quisque finibus nibh urna, vitae tincidunt tortor imperdiet sed.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { DataFactory } from "@/data/dataFactory";

const AboutRepository = DataFactory.get('about');

export default {
  data () {
    return {
      about: {
        title: "Lorem Ipsum",
        opening_crawl: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nec turpis convallis, rutrum arcu eleifend, efficitur leo. Quisque finibus nibh urna, vitae tincidunt tortor imperdiet sed. Morbi arcu sem, luctus nec congue ut, egestas ac orci. Donec ac vestibulum odio, nec imperdiet tellus."
      }
    }
  },
  created() {
    this.fetch();
  },
  methods: {
    async fetch() {
      const { data } = await AboutRepository.get();
      this.about = data;
    }
  },
  computed: {
    computedPhotos() {
      return this.about;
    }
  }
};
</script>