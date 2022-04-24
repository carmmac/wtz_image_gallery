<template>
<div>
  <h1 class="visually-hidden">Image gallery</h1>
  <ul class="gallery">
    <li class="gallery-item" v-for="{ id, user, urls, color } in photos" :key="`photo-${id}`">
      <image-card :user="user" :imgUrls="urls" :imageBgColor="color" />
    </li>
  </ul>
</div>
</template>

<script>
import { mapState } from 'vuex';
import { State } from '@/store/state';
import ImageCard from './image-card.vue';

export default {
  name: 'ImageGallery',
  components: { ImageCard },
  computed: {
    ...mapState({
      photos: State.PHOTOS,
    }),
  },
};
</script>
