<template>
  <div class="user-info">
    <img class="user-img" :src="getUserAvatar" alt="Avatar" width="30" height="30" />
    <div>
      <div class="user-title">{{ getUserFullName }}</div>
      <div class="user-instagram">{{ getUserSocialLink }}</div>
    </div>
  </div>
</template>

<script>
import { getSocialUsername } from '@/_utils';

export default {
  name: 'UserInfo',
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
    getUserAvatar() {
      return this.user.profile_image.small;
    },
  },
};
</script>
