<template>
  <b-container fluid>
    <b-row>
      <b-col cols="12" class="text-center">
        <fa-icon icon="spinner" class="fa-spin fa-3x mb-3" />
        <component :is="tag">{{ message }}...</component>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  props: {
    message: {
      type: String,
      required: false,
      default() {
        return "Loading";
      },
    },
    tag: {
      type: String,
      required: false,
      default() {
        return "h3";
      },
      validator(tag) {
        return ["h1", "h2", "h3", "h4", "h5", "h6", "div", "span"].includes(
          tag
        );
      },
    },
  },
};
</script>
