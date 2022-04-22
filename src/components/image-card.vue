<template>
  <div class="card">
    <div class="card__header">
      <img class="user-img" :src="getUserAvatar" alt="Avatar" width="30" height="30" />
      <router-link :to="getUserRoute" class="user-info">
        <span class="user-title">{{ getUserFullName }}</span>
        <span class="user-instagram">{{ getUserSocialLink }}</span>
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
import { getSocialUsername } from '../_utils';
import { BreakPoint, AppRoutes } from '../const';

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
  computed: {
    getUserFullName() {
      return `${this.user.first_name} ${this.user.last_name ?? ''}`;
    },
    getUserSocialLink() {
      return this.user.instagram_username && getSocialUsername(this.user.instagram_username);
    },
    getUserAvatar() {
      return this.user.profile_image.small;
    },
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
