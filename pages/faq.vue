<template>
    <div>
        <Breadcrumb title="FAQ" />

        <div class="faq-area pt-100 pb-70">
            <div class="container">
                <div class="row">
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
                            <div class="section-title mb-45">
                                <span>FAQ</span>
                                <h2>Frequently asked question</h2>
                            </div>
                            <ul class="accordion">
                                <li class="accordion-item">
                                    <h4 class="accordion-title active">
                                        How do we create course content?
                                    </h4>
                                    <div class="accordion-content show">
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit
                                            diam nonummy nibh sed euismod tincidunt ut laoreet dolore
                                            magna aliquam erat volutpat ut wisi enim veniam lorem
                                            dolore magna aliqua consectetuer adipiscing elit diam
                                            nonummy nibh sed euismod tincidunt ut.
                                        </p>
                                    </div>
                                </li>
                                <li class="accordion-item">
                                    <h4 class="accordion-title active">
                                        How can i manage my account?
                                    </h4>
                                    <div class="accordion-content show">
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit
                                            diam nonummy nibh sed euismod tincidunt ut laoreet dolore
                                            magna aliquam erat volutpat ut wisi enim veniam lorem
                                            dolore magna aliqua consectetuer adipiscing elit diam
                                            nonummy nibh sed euismod tincidunt ut.
                                        </p>
                                    </div>
                                </li>
                                <li class="accordion-item">
                                    <h4 class="accordion-title active">
                                        What are the benefits of ledu learning?
                                    </h4>
                                    <div class="accordion-content show">
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit
                                            diam nonummy nibh sed euismod tincidunt ut laoreet dolore
                                            magna aliquam erat volutpat ut wisi enim veniam lorem
                                            dolore magna aliqua consectetuer adipiscing elit diam
                                            nonummy nibh sed euismod tincidunt ut.
                                        </p>
                                    </div>
                                </li>
                                <li class="accordion-item">
                                    <h4 class="accordion-title active">
                                        Is support for learners included?
                                    </h4>
                                    <div class="accordion-content show">
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit
                                            diam nonummy nibh sed euismod tincidunt ut laoreet dolore
                                            magna aliquam erat volutpat ut wisi enim veniam lorem
                                            dolore magna aliqua consectetuer adipiscing elit diam
                                            nonummy nibh sed euismod tincidunt ut.
                                        </p>
                                    </div>
                                </li>
                                <li class="accordion-item">
                                    <h4 class="accordion-title active">
                                        How do we create course content?
                                    </h4>
                                    <div class="accordion-content show">
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit
                                            diam nonummy nibh sed euismod tincidunt ut laoreet dolore
                                            magna aliquam erat volutpat ut wisi enim veniam lorem
                                            dolore magna aliqua consectetuer adipiscing elit diam
                                            nonummy nibh sed euismod tincidunt ut.
                                        </p>
                                    </div>
                                </li>
                                <li class="accordion-item">
                                    <h4 class="accordion-title active">
                                        How can i manage my account?
                                    </h4>
                                    <div class="accordion-content show">
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit
                                            diam nonummy nibh sed euismod tincidunt ut laoreet dolore
                                            magna aliquam erat volutpat ut wisi enim veniam lorem
                                            dolore magna aliqua consectetuer adipiscing elit diam
                                            nonummy nibh sed euismod tincidunt ut.
                                        </p>
                                    </div>
                                </li>
                                <li class="accordion-item">
                                    <h4 class="accordion-title active">
                                        What are the benefits of ledu learning?
                                    </h4>
                                    <div class="accordion-content show">
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit
                                            diam nonummy nibh sed euismod tincidunt ut laoreet dolore
                                            magna aliquam erat volutpat ut wisi enim veniam lorem
                                            dolore magna aliqua consectetuer adipiscing elit diam
                                            nonummy nibh sed euismod tincidunt ut.
                                        </p>
                                    </div>
                                </li>
                                <li class="accordion-item">
                                    <h4 class="accordion-title active">
                                        Is support for learners included?
                                    </h4>
                                    <div class="accordion-content show">
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit
                                            diam nonummy nibh sed euismod tincidunt ut laoreet dolore
                                            magna aliquam erat volutpat ut wisi enim veniam lorem
                                            dolore magna aliqua consectetuer adipiscing elit diam
                                            nonummy nibh sed euismod tincidunt ut.
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



export default {
    name: "FaqPage",
    layout: "MainPageLayout",
    data() {
        return {};
    },
    mounted() {
        // eslint-disable-next-line nuxt/no-env-in-hooks
        if (process.client) {
            this.$scrollTo("#__nuxt", 0, { force: true });
        }
    },
    components: { Breadcrumb }
}
</script>