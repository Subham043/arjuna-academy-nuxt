<template>
    <div>
        <Breadcrumb title="Mission & Vision" />

        <div class="faq-area pt-100 pb-70">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-6">
                        <div class="faq-img">
                            <img src="/images/faq-img.jpg" alt="faq" />
                            <div class="shape">
                                <img src="/images/faq-shape.png" alt="Faq" />
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="faq-accordion pl-20">
                            <ul class="accordion">
                                <li class="accordion-item">
                                    <h2 class="accordion-title active">
                                        Mission
                                    </h2>
                                    <div class="accordion-content show">
                                        <el-skeleton v-if="loading" :rows="6" animated />
                                        <p v-else>
                                            {{ mission }}
                                        </p>
                                    </div>
                                </li>
                                <li class="accordion-item">
                                    <h2 class="accordion-title active">
                                        Vision
                                    </h2>
                                    <div class="accordion-content show">
                                        <el-skeleton v-if="loading" :rows="6" animated />
                                        <p v-else>
                                            {{ vision }}
                                        </p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Breadcrumb from '~/components/Breadcrumb.vue';
import {API_ROUTES} from '~/helper/api_routes';



export default {
    name: "FaqPage",
    layout: "MainPageLayout",
    data() {
        return {
            mission: "",
            vision: "",
            loading: false,
        };
    },
    async fetch() {
      await this.getMissionVision();
    },
    mounted() {
        // eslint-disable-next-line nuxt/no-env-in-hooks
        if (process.client) {
            this.$scrollTo("#__nuxt", 0, { force: true });
        }
    },
    methods: {
        async getMissionVision() {
            this.loading=true;
            try {
                const response = await this.$publicApi.get(API_ROUTES.mission_vision); // eslint-disable-line
                this.mission = response.data.mission.mission
                this.vision = response.data.mission.vision
            } catch (err) {
                // console.log(err.response);// eslint-disable-line
                if(err?.response?.data?.message) this.$toast.error(err?.response?.data?.message)
                if(err?.response?.data?.error) this.$toast.error(err?.response?.data?.error)

            }finally{
                this.loading=false;
            }
        },
    },
    components: { Breadcrumb }
}
</script>