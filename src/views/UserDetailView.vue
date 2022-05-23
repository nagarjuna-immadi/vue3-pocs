<template>
  <div class="row">
    <div class="col-12 mb-5">
      <h4>User Details</h4>
      <div>User Id: {{ this.$route.params.id }}</div>
      <div>
        <router-link to="/users/1">User 1</router-link> |
        <router-link to="/users/2">User 2</router-link> |
        <router-link to="/users/3">User 3</router-link>
      </div>
      <div class="mt-3">
        <h4>Child Views</h4>
        <router-link :to="`/users/${this.$route.params.id}/profile`">Profile</router-link> |
        <router-link :to="`/users/${this.$route.params.id}/posts`">Posts</router-link>
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  created() {
    // watch params to track param changes
    this.$watch(
      () => this.$route.params,
      (toParams, fromParams) => {
        console.log('watch to params', toParams);
        console.log('watch from params', fromParams);
        // Fetch user details from server if required
        // eslint-disable-next-line
      }
    );
  },
  mounted() {
    // This executes only on component mount
    // Don't execute for param change
    console.log('User Id: ', this.$route.params.id);
    console.log('Query params: ', this.$route.query);
    console.log('Hash: ', this.$route.hash);
  },
  beforeRouteEnter(to, from) {
    // called before the route that renders this component is confirmed.
    // does NOT have access to `this` component instance,
    // because it has not been created yet when this guard is called!
    console.log('beforeRouteEnter', to, from);
  },
  beforeRouteUpdate(to, from) {
    // This in-component route guard execute for route change
    // i.e param change, hash change etc...
    console.log('To User Id: ', to.params.id);
    console.log('From User Id: ', from.params.id);
    // Fetch user details from server if required
  },
  beforeRouteLeave(to, from) {
    // called when the route that renders this component is about to be navigated away from.
    console.log('beforeRouteLeave', to, from);
  },
};
</script>
