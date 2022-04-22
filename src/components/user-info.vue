<template>
  <div :class="`user-info ${getStyles}`">
    <img class="user-img" :src="getAvatarUrl(windowWidth)" alt="User avatar" />
    <div>
      <h2 class="user-name">{{ getUserFullName }}</h2>
      <div class="user-instagram">{{ getUserSocialLink }}</div>
    </div>
  </div>
</template>

<script>
import { getSocialUsername } from '@/_utils';
import { AppRoutes, BreakPoint } from '@/const';

export default {
  name: 'UserInfo',
  data() {
    return {
      userPageRoute: this.$route.name === AppRoutes.USER_PAGE.name,
      windowWidth: window.innerWidth,
    };
  },
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
  computed: {
    getUserFullName() {
      return `${this.user.first_name} ${this.user.last_name ?? ''}`;
    },
    getUserSocialLink() {
      return this.user.instagram_username && getSocialUsername(this.user.instagram_username);
    },
    getStyles() {
      return this.userPageRoute ? 'user-info--user-page' : '';
    },
  },
  methods: {
    getAvatarUrl(screenWidth) {
      if (this.userPageRoute) {
        return screenWidth >= BreakPoint.TABLET
          ? this.user.profile_image.large
          : this.user.profile_image.medium;
      }
      return this.user.profile_image.small;
    },
  },
};
</script>
