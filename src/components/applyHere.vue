<template>
  <v-container>
    <v-form ref="form" v-model="isValid">
      <v-card>
        <v-card-title>
          <h3 class="headline">Add New Job</h3>
        </v-card-title>

        <v-card-subtitle>
          <v-container>
            <v-text-field
              v-model="formData.title"
              :rules="[rules.required]"
              label="Job Title"
              required
            ></v-text-field>

            <v-textarea
              v-model="formData.description"
              :rules="[rules.required]"
              label="Job Description"
              rows="4"
              required
            ></v-textarea>

            <v-text-field
              v-model="formData.location"
              :rules="[rules.required]"
              label="Location"
              required
            ></v-text-field>

            <v-text-field
              v-model="formData.salary"
              :rules="[rules.required]"
              label="Salary"
              required
            ></v-text-field>

            <v-select
              v-model="formData.type"
              :items="jobTypes"
              :rules="[rules.required]"
              label="Job Type"
              required
            ></v-select>

            <v-text-field
              v-model="formData.companyName"
              :rules="[rules.required]"
              label="Company Name"
              required
            ></v-text-field>

            <v-textarea
              v-model="formData.companyDescription"
              :rules="[rules.required]"
              label="Company Description"
              rows="2"
              required
            ></v-textarea>

            <v-text-field
              v-model="formData.contactEmail"
              :rules="[rules.required, rules.email]"
              label="Contact Email"
              required
            ></v-text-field>

            <v-text-field
              v-model="formData.contactPhone"
              :rules="[rules.required]"
              label="Contact Phone"
              required
            ></v-text-field>
          </v-container>
        </v-card-subtitle>

        <v-card-actions>
          <v-btn
          text
          color="red"
          variant="elevated"
          @click="resetForm"
        >
          Reset
        </v-btn>
          <v-spacer></v-spacer>
          <v-btn color="primary" variant="elevated" @click="submitForm">Submit</v-btn>
        </v-card-actions>
      </v-card>
    </v-form>
  </v-container>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const isValid = ref(true);
    const form = ref(null);
    const formData = ref({
      title: '',
      description: '',
      location: '',
      salary: '',
      type: '',
      companyName: '',
      companyDescription: '',
      contactEmail: '',
      contactPhone: ''
    });

    const jobTypes = ['Full-Time', 'Part-Time', 'Contract', 'Internship'];

    const rules = {
      required: value => !!value || 'This field is required.',
      email: value => /.+@.+\..+/.test(value) || 'E-mail must be valid.',
    };

    const submitForm = () => {
      if (form.value.validate()) {
        console.log('Form submitted:', formData.value);
        // Handle form submission (e.g., send data to API)
      }
    };

    const resetForm = () => {
      form.value.reset();
      formData.value = {
        title: '',
        description: '',
        location: '',
        salary: '',
        type: '',
        companyName: '',
        companyDescription: '',
        contactEmail: '',
        contactPhone: ''
      };
    };

    return {
      isValid,
      form,
      formData,
      jobTypes,
      rules,
      submitForm,
      resetForm
    };
  }
};
</script>
