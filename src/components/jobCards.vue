<template>
  <v-row align="center" justify="center" class="pa-5">
    <v-col cols="12" md="4" v-for="job in jobs" :key="job.id">
      <v-card append-icon="mdi-check" class="mx-auto rounded-lg" :title=job.type>
        <v-card-text class="text-h5 font-weight-bold">
          {{ job.title }}
        </v-card-text>
        <v-card-text class="text-body-1">{{ job.description }}</v-card-text>
        <v-card-text class="text-body-1 text-green font-weight-bold">{{ job.salary }}</v-card-text>
        <v-divider class="py-2"></v-divider>
        <v-row class="pa-3">
          <v-col cols="6">
            <v-card-text class="text-red text-body-1">
              {{ job.location }}
            </v-card-text>
          </v-col>
          <v-col cols="6" class="d-flex justify-end">
            <v-dialog max-width="800">
              <template v-slot:activator="{ props: activatorProps }">
                <v-btn class=" rounded-lg text-none" v-bind="activatorProps" color="green" text="Read more"></v-btn>
              </template>

              <template v-slot:default>
                <v-card>
                  <template v-slot:text>
                    <v-container>
                      <!-- Company Information -->
                      <v-card class="mb-4">
                        <v-card-title>
                          <v-typography variant="h1">{{ job.company.name }}</v-typography>
                        </v-card-title>
                        <v-card-subtitle>
                          <v-typography variant="body-1">{{ job.company.description }}</v-typography>
                        </v-card-subtitle>
                        <v-card-actions>
                          <v-list>
                            <v-list-item>
                              <v-list-item-icon>
                                <v-icon>mdi-email</v-icon>
                              </v-list-item-icon>
                              <v-list-item-content>
                                <v-list-item-title>
                                  <a :href="'mailto:' + job.company.contactEmail">{{ job.company.contactEmail }}</a>
                                </v-list-item-title>
                              </v-list-item-content>
                            </v-list-item>
                            <v-list-item>
                              <v-list-item-icon>
                                <v-icon>mdi-phone</v-icon>
                              </v-list-item-icon>
                              <v-list-item-content>
                                <v-list-item-title>
                                  <a :href="'tel:' + job.company.contactPhone">{{ job.company.contactPhone }}</a>
                                </v-list-item-title>
                              </v-list-item-content>
                            </v-list-item>
                          </v-list>
                        </v-card-actions>
                      </v-card>
                      <!-- Job Listing -->
                      <v-card>
                        <v-card-title>
                          <v-typography variant="h2">Job Opportunity: {{ job.title }}</v-typography>
                        </v-card-title>
                        <v-card-subtitle>
                          <v-list>
                            <v-list-item>
                              <v-list-item-content>
                                <v-list-item-title><strong>Location:</strong> {{ job.location }}</v-list-item-title>
                                <v-list-item-title><strong>Type:</strong> {{ job.type }}</v-list-item-title>
                                <v-list-item-title><strong>Salary:</strong> {{ job.salary }}</v-list-item-title>
                              </v-list-item-content>
                            </v-list-item>
                          </v-list>
                        </v-card-subtitle>
                        <v-card-text>
                          <v-typography variant="body-1">{{ job.description }}</v-typography>
                        </v-card-text>
                      </v-card>
                    </v-container>
                  </template>
                </v-card>
              </template>
            </v-dialog>
          </v-col>
        </v-row>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import { ref } from 'vue';
import jobsData from '../assets/jobs.json';

export default {
  name: 'JobCards',
  setup() {
    const jobs = ref(jobsData);
    return {
      jobs
    };
  }
};
</script>