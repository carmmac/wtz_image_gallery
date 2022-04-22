<template>
  <div>
    <header class="user-header">
      <div class="user-info">
        <h1 class="user-name">{{ getUserFullName }}</h1>
        <span class="user-instagram">{{ getUserSocialLink }}</span>
      </div>
      <img
        class="user-img user-img--user-page"
        :src="getAvatarUrl(windowWidth)"
        alt="User profile photo"
      />
    </header>
    <div class="user-details">
      <span v-if="user.bio" class="user-details__item">{{ user.bio }}</span>
      <span v-if="user.location" class="user-details__item">Location: {{ user.location }}</span>
      <span v-if="user.portfolio_url" class="user-details__item"
        >Portfolio: {{ user.portfolio_url }}</span
      >
    </div>
  </div>
</template>

<script>
import { BreakPoint } from '@/const';
import { State } from '@/store/state';
import { mapState } from 'vuex';
import { getSocialUsername } from '@/_utils';

export default {
  name: 'UserProfile',
  data() {
    return {
      windowWidth: window.innerWidth,
    };
  },
  computed: {
    ...mapState({
      user: State.USER_PROFILE,
    }),
    getUserFullName() {
      return `${this.user.first_name} ${this.user.last_name ?? ''}`;
    },
    getUserSocialLink() {
      return this.user.instagram_username && getSocialUsername(this.user.instagram_username);
    },
  },
  methods: {
    getAvatarUrl(screenWidth) {
      return screenWidth >= BreakPoint.TABLET
        ? this.user.profile_image.large
        : this.user.profile_image.medium;
    },
  },
};
</script>
