<template>
  <div class="page__wrapper page__wrapper--user-page">
    <user-profile v-if="isUserLoaded" />
    <loading v-else />
  </div>
</template>

<script>
import { mapActions, mapMutations, mapState } from 'vuex';
import { MutationType } from '@/store/mutations';
import { ActionType } from '@/store/actions';
import { State } from '@/store/state';
import Loading from '../components/loading.vue';
import UserProfile from '../components/user-profile.vue';

export default {
  name: 'UserPage',
  components: { UserProfile, Loading },
  created() {
    this.loadUserProfile(this.$route.params.username);
  },
  destroyed() {
    this.clearUserData();
  },
  computed: {
    ...mapState({
      isUserLoaded: State.IS_USER_LOADED,
    }),
  },
  methods: {
    ...mapActions({
      loadUserProfile: ActionType.FETCH_USER,
    }),
    ...mapMutations({
      clearUserData: MutationType.CLEAR_USER_DATA,
    }),
  },
};
</script>
