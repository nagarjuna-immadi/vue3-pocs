<template>
  <div>
    Custom directives composition api
    <div>
      <label for="inputElem">
        <input type="text" id="inputElem" class="form-control" v-focus />
      </label>
    </div>
  </div>
</template>

<script setup>
const vFocus = {
  mounted: (el) => el.focus(),
};
</script>
