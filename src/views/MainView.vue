<template>
  <div>
    <div class="gallery-wrapper">
      <image-gallery v-if="isDataLoaded" />
      <loading v-else />
    </div>
    <pagination />
  </div>
</template>

<script>
import { ActionType } from '@/store/actions';
import { State } from '@/store/state';
import { mapActions, mapState } from 'vuex';
import Loading from '../components/loading.vue';
import ImageGallery from '../components/image-gallery.vue';
import Pagination from '../components/pagination.vue';

export default {
  name: 'MainView',
  components: { ImageGallery, Loading, Pagination },
  created() {
    this.loadPhotos();
  },
  computed: {
    ...mapState({
      isDataLoaded: State.IS_DATA_LOADED,
    }),
  },
  methods: {
    ...mapActions({
      loadPhotos: ActionType.FETCH_PHOTOS,
    }),
  },
};
</script>
