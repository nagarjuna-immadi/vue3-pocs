<template>
  <div>
    Custom directives options api
    <div>
      <label for="inputElem">
        <input type="text" id="inputElem" class="form-control" v-focus />
      </label>
    </div>
  </div>
</template>
<script>
const focus = {
  mounted: (el) => el.focus(),
};
export default {
  directives: {
    focus,
  },
};
</script>
