<template>
  <div>
    <h1 class="visually-hidden">User profile</h1>
    <user-info :user="user" />
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
import { State } from '@/store/state';
import { mapState } from 'vuex';
import UserInfo from './user-info.vue';

export default {
  name: 'UserProfile',
  components: { UserInfo },
  computed: {
    ...mapState({
      user: State.USER_PROFILE,
    }),
  },
};
</script>
