<template>
  <b-container class="compounds" fluid>
    <b-row>
      <b-col cols="12" sm="6">
        <h1>Generate</h1>
      </b-col>
      <b-col cols="12" sm="6" class="text-right">
        <b-btn-group>
          <b-btn variant="outline-primary" @click="addCompound"
            >Add Compound</b-btn
          >
          <b-btn variant="outline-primary" @click="writeRecord"
            >Add Field</b-btn
          >
        </b-btn-group>
      </b-col>
    </b-row>
    <b-row>
      <b-col cols="12">
        <b-card header="Settings" header-tag="h2" header-class="h4">
          <b-form>
            <b-form-row>
              <b-col cols="6">
                <b-form-group
                  label="Mode"
                  label-for="mode-select-input"
                  v-bind="commonFormGroupAttrs"
                >
                  <b-form-select id="mode-select-input" v-model="settings.mode">
                    <b-form-select-option
                      :value="null"
                      key="mode-select-option-null"
                      >--- Select a Mode ---</b-form-select-option
                    >
                    <b-form-select-option
                      v-for="mode in modes"
                      :key="`mode-select-option-${mode.key}`"
                      :value="mode.key"
                    >
                      {{ mode.label }}
                    </b-form-select-option>
                  </b-form-select>
                </b-form-group>
              </b-col>
              <b-col cols="6">
                <b-form-group label="Rows" v-bind="commonFormGroupAttrs">
                  <b-form-spinbutton v-model="settings.rows" />
                </b-form-group>
              </b-col>
            </b-form-row>
          </b-form>
        </b-card>
      </b-col>
    </b-row>
    <b-row>
      <b-col cols="12">
        <h2>Fields</h2>
      </b-col>
    </b-row>
    <b-row>
      <b-col cols="12">
        <h2>Data</h2>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: "Generator",
  data() {
    return {
      commonFormGroupAttrs: {
        "label-cols": 12,
        "label-cols-md": 6,
      },
      items: [],
      modes: [
        {
          key: "single",
          label: "Single Records",
        },
        {
          key: "multiple",
          label: "Multiple Records",
        },
      ],
      settings: {
        mode: null,
        rows: 3,
      },
    };
  },
  computed: {
    GeneratorModes: () => import("@/enums/GeneratorModes")
  },
  mounted() {
    this.getRecords();
  },
  methods: {
    addCompound() {
      alert("Adding Field");
    },
    getRecords() {},
    writeRecord() {},
  },
};
</script>
