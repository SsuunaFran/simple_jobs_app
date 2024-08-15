<template>
  <v-card-text class="text-center bg-green-darken-2 pa-15">
    <div class="text-h2 font-weight-bold">Get a Job with us.</div>
    <div class="text-h6 pt-3">We care for your future, even if you dint.</div>
  </v-card-text>
  <v-row>
    <v-col cols="6">
      <v-card class="mx-3 my-8 bg-grey-lighten-3 pa-2  rounded-lg" elevation="1">
        <v-card-item>
          <v-card-title class="text-h5 font-weight-bold">
            Are you a Dev
          </v-card-title>

          <v-card-subtitle class="text-black">
            We've got you sorted. This is why we here.
          </v-card-subtitle>
        </v-card-item>
        <v-card-text>
          <v-dialog max-width="800">
            <template v-slot:activator="{ props: activatorProps }">
              <v-btn class="rounded-lg" v-bind="activatorProps" color="black text-none" text="Apply here"></v-btn>
            </template>

            <template v-slot:default="{isActive}">
              <v-card>
                <template v-slot:text>
                  <v-container>
                    <v-card>
                      <v-card-title>
                        <span class="headline">Job Application Form</span>
                      </v-card-title>
                      <v-card-subtitle>
                        Please fill out the form below to apply for the job.
                      </v-card-subtitle>
                
                      <v-form ref="form" v-model="valid" @submit.prevent="submitForm">
                        <v-card-text>
                          <v-row>
                            <v-col cols="12" md="6">
                              <v-text-field
                                v-model="formData.fullName"
                                :rules="[rules.required]"
                                label="Full Name"
                                required
                              ></v-text-field>
                            </v-col>
                            <v-col cols="12" md="6">
                              <v-text-field
                                v-model="formData.email"
                                :rules="[rules.required, rules.email]"
                                label="Email"
                                required
                                type="email"
                              ></v-text-field>
                            </v-col>
                          </v-row>
                
                          <v-row>
                            <v-col cols="12" md="6">
                              <v-text-field
                                v-model="formData.phoneNumber"
                                :rules="[rules.required, rules.phone]"
                                label="Phone Number"
                                required
                                type="tel"
                              ></v-text-field>                                           
                            </v-col>
                            <v-col cols="12" md="6">
                              <v-select
                                v-model="formData.position"
                                :items="jobtitles"
                                :rules="[rules.required]"
                                label="Position Applied For"
                                required
                              ></v-select>
                            </v-col>
                          </v-row>
                          <v-row>
                            <v-col cols="12">
                              <v-file-input
                                v-model="formData.resume"
                                :rules="[rules.required]"
                                label="Upload Resume"
                                required
                                accept=".pdf,.doc,.docx"
                              ></v-file-input>
                            </v-col>
                          </v-row>
                        </v-card-text>
                
                        <v-card-actions>
                          
                          <v-btn
                          text="Close"
                          color="red"
                          variant="elevated"
                          @click="isActive.value = false"
                        ></v-btn>
                          <v-spacer></v-spacer>
                          
                          <v-btn color="primary" variant="elevated" type="submit">Submit</v-btn>
                            
                        </v-card-actions>
                      </v-form>
                    </v-card>
                  </v-container>
                </template>
              </v-card>
            </template>
          </v-dialog>
        </v-card-text>
      </v-card>
    </v-col>
    <v-col cols="6">
      <v-card class="me-3 my-8 bg-light-green-lighten-4 pa-2  rounded-lg" elevation="1">
        <v-card-item>
          <v-card-title class="text-h5 font-weight-bold">
            Are you an Employer
          </v-card-title>
          <v-card-subtitle class="text-black">
            Simply add your Job and leave the rest to us. We are because you are.
          </v-card-subtitle>
        </v-card-item>
        <v-card-text>
          <!-- <v-btn class="text-none" text to="/addjob">Add Job</v-btn> -->
          <v-btn class=" rounded-lg" color="green text-none" text="Add Job" to="/addjob"></v-btn>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
  <section class="px-4 py-9 bg-light-blue-lighten-5">
    <div class="m-auto container-xl lg:container">
      <h2 class="text-h4 font-weight-bold text-center text-green pb-6">
        Browse Jobs
      </h2>
      <jobCards />
    </div>
  </section>
</template>
<script>
import jobCards from './jobCards.vue'
import jobsData from '../assets/jobs.json';

import {onMounted, ref} from 'vue'
export default {
  name: 'AppBody',
  components: {
    jobCards,
  },
  setup() {
      const valid = ref(true);
      const jobs = ref(jobsData);
      const jobtitles = ref([]);

      const createTitles=()=>{
        jobtitles.value = jobs.value.map(job => job.title);
      }

      onMounted(()=>{
        createTitles();
      })

      const formData = ref({
        fullName: '',
        email: '',
        phoneNumber: '',
        position: '',
        coverLetter: '',
        resume: null,
      });
  
      const rules = {
        required: value => !!value || 'Required.',
        email: value => /.+@.+\..+/.test(value) || 'E-mail must be valid.',
        phone: value => /^\d{10}$/.test(value) || 'Phone number must be 10 digits.',
      };
  
      const submitForm = () => {
        if (valid.value) {
          // Handle form submission
          console.log('Form submitted:', formData.value);
        }
      };
  
      const resetForm = () => {
        formData.value = {
          fullName: '',
          email: '',
          phoneNumber: '',
          position: '',
          coverLetter: '',
          resume: null,
        };
      };
  
      return {
        valid,
        formData,
        jobtitles,
        rules,
        submitForm,
        resetForm,
      };
    },

}
</script>
