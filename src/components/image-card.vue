<template>
  <div class="card">
    <div class="card__header">
      <router-link :to="getUserRoute">
        <user-info :user="user" />
      </router-link>
    </div>
    <div class="card__img-container">
      <img class="card__img" :src="getUrl(windowWidth)" alt="Picture" :style="getStyle" />
    </div>
    <div class="card__views">
      <span class="views-count">51 200</span>
      <img src="../assets/icons/eye.png" alt="views-icon" />
    </div>
  </div>
</template>

<script>
import { BreakPoint, AppRoutes } from '../const';
import UserInfo from './user-info.vue';

export default {
  name: 'ImageCard',
  data() {
    return {
      windowWidth: window.innerWidth,
    };
  },
  props: {
    user: {
      type: Object,
      required: true,
    },
    imgUrls: {
      type: Object,
      required: true,
    },
    imageBgColor: {
      type: String,
      required: true,
      default: '#FFFFFF',
    },
  },
  components: { UserInfo },
  computed: {
    getUserRoute() {
      return {
        name: AppRoutes.USER_PAGE.name,
        params: {
          username: this.user.username,
        },
      };
    },
    getStyle() {
      return `background-color: ${this.imageBgColor}`;
    },
  },
  methods: {
    getUrl(screenWidth) {
      return screenWidth >= BreakPoint.MOBILE_LANDSCAPE && screenWidth < BreakPoint.TABLET
        ? this.imgUrls.regular
        : this.imgUrls.small;
    },
  },
};
</script>
