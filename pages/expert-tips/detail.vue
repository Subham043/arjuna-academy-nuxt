<template>
    <div>
        <Breadcrumb title="Expert Tips Detail" />

        <div class="blog-details-area pt-100 pb-70">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="blog-details-content pr-20">
                            <ul class="tag-list">
                                <li><i class="ri-calendar-todo-fill"></i> Jan 12,2022</li>
                                <li>
                                    <i class="ri-price-tag-3-fill"></i>
                                    <a href="tags.html">Education</a>
                                </li>
                            </ul>
                            <h1>Tips to Overcome Exam Fear and Stress</h1>
                            <p>Students all over the world dread the word ‘exam’. The period before an exam is a trying and
                                stressful
                                time not only for children but their parents as well. Exam fear and stress is a common
                                experience for
                                students, particularly around board exams. However, there are a number of strategies that
                                students can
                                use to help manage these feelings and perform to the best of their abilities. The important
                                point is to
                                always maintain a positive outlook with proper preparation.</p>
                            <p>Here are some pointers that can be followed to overcome those exam jitters:</p>
                            <ul>
                                <li>Prepare ahead of time: One of the best ways to reduce exam stress is to be
                                    well-prepared. This
                                    means starting to study early, reviewing material regularly, and seeking help when
                                    needed.</li>
                                <li>Create a study schedule: Having a plan for how you will study can help you stay
                                    organized and
                                    manage your time effectively. Consider breaking your study sessions into smaller chunks
                                    and
                                    taking breaks in between.</li>
                                <li>Get enough sleep: It's important to get enough rest in the days leading up to an exam.
                                    Try to go
                                    to bed at a regular time and avoid pulling all-nighters.</li>
                                <li>Exercise and eat well: Exercise and a healthy diet can help reduce stress and improve
                                    concentration. Make sure to get regular physical activity and eat a balanced diet.</li>
                                <li>Practice relaxation techniques: There are a number of relaxation techniques that can
                                    help you
                                    manage exam stress, this includes deep breathing, progressive muscle relaxation, and
                                    meditation.</li>
                                <li>Seek support: If you're feeling overwhelmed, it can be helpful to talk to someone about
                                    your
                                    feelings. Consider seeking support from a friend, family member, or counselor.</li>
                                <li>Stay positive: It's important to try to stay positive and focus on the progress you have
                                    made
                                    rather than dwelling on any negative thoughts or feelings.</li>
                            </ul>
                            <p>Remember that it's normal to feel some level of stress or anxiety around exams. By using
                                these
                                strategies and finding what works best for you, you can better manage these feelings and
                                perform to
                                the best of your ability on exam day.</p>
                            <p>Here are some tips to overcome exam fear on exam day:</p>
                            <ul>
                                <li>Stay calm and give your best</li>
                                <li>Have a light breakfast</li>
                                <li>Ensure that you have all you need for giving exams before leaving the house</li>
                                <li>Reach your examination hall ahead of schedule</li>
                                <li>Keep a cool head and read the questions carefully before answering</li>
                                <li>Allocate a certain time for answering every question and stick to it</li>
                                <li>Make sure to review the entire paper once before handing it over</li>
                            </ul>
                            <h2>What not to do after your examination:</h2>
                            <p>It is important to not discuss and compare your performance with your peers extensively.
                                Worrying
                                about what has happened will not help you in any way. In fact, it will only sap you of your
                                physical and
                                mental energy and shift focus away from any upcoming exam that you may have.</p>
                            <p>Examinations are a part of life and they come and go. What you need to do is prepare your
                                best and be
                                ready with the right mind and attitude. What happens next will be decided by destiny.</p>


                            <div class="article-share">
                                <div class="row align-items-center">
                                    <div class="col-lg-6 col-md-6">
                                        <div class="article-tag">
                                            <ul>
                                                <li class="title">
                                                    <i class="ri-price-tag-3-fill"></i>
                                                </li>
                                                <li>
                                                    <a href="tags.html" target="_blank"> Education,</a>
                                                </li>
                                                <li>
                                                    <a href="tags.html" target="_blank">Business, </a>
                                                </li>
                                                <li><a href="tags.html" target="_blank">Physics</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="col-lg-6 col-md-6">
                                        <div class="article-social-icon">
                                            <ul class="social-icon">
                                                <li class="title">Share :</li>
                                                <li>
                                                    <a href="https://www.facebook.com/" target="_blank">
                                                        <i class="ri-facebook-fill"></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="https://twitter.com/" target="_blank">
                                                        <i class="ri-twitter-fill"></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="https://www.pinterest.com/" target="_blank">
                                                        <i class="ri-instagram-line"></i>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
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
    name: "ExpertTipDetailPage",
    layout: "MainPageLayout",
    mounted() {
        // eslint-disable-next-line nuxt/no-env-in-hooks
        if (process.client) {
            this.$scrollTo("#__nuxt", 0, { force: true });
        }
    },
    data() {
        return {
            blog_data: [
                {
                    title: "All that is wrong with codding in the field of apprentices",
                    description: "Lorem ipsum dolor sit amet, constetur adipiscing elit, sed do eiusmod tempor incididunt.",
                    image: "/images/blog/blog-img4.jpg"
                },
                {
                    title: "How to use technology to adapt your talent to the world",
                    description: "Lorem ipsum dolor sit amet, constetur adipiscing elit, sed do eiusmod tempor incididunt.",
                    image: "/images/blog/blog-img2.jpg"
                },
                {
                    title: "Here are the things to look for when selecting an online course",
                    description: "Lorem ipsum dolor sit amet, constetur adipiscing elit, sed do eiusmod tempor incididunt.",
                    image: "/images/blog/blog-img5.jpg"
                },
                {
                    title: "All that is wrong with codding in the field of apprentices",
                    description: "Lorem ipsum dolor sit amet, constetur adipiscing elit, sed do eiusmod tempor incididunt.",
                    image: "/images/blog/blog-img4.jpg"
                },
                {
                    title: "How to use technology to adapt your talent to the world",
                    description: "Lorem ipsum dolor sit amet, constetur adipiscing elit, sed do eiusmod tempor incididunt.",
                    image: "/images/blog/blog-img2.jpg"
                },
                {
                    title: "Here are the things to look for when selecting an online course",
                    description: "Lorem ipsum dolor sit amet, constetur adipiscing elit, sed do eiusmod tempor incididunt.",
                    image: "/images/blog/blog-img5.jpg"
                },
            ],
        };
    },
    components: { Breadcrumb }
}
</script>