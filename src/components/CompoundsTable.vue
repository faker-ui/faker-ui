<template>
  <b-table :fields="fields" :items="items" show-empty />
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      fields: [
        {
          key: "label",
          label: "Label"
        },
        {
          key: "example",
          label: "Example",
          formatter: (value,key,item) => item.value
        },
        {
          key: "actions",
          label: ""
        }
      ]
    }
  }
}
</script>
