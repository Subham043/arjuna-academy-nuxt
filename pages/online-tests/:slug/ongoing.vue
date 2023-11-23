<template>
    <div>
        <client-only>
            <fullscreen v-model="fullscreen">
                <div :class="`bg-light ${fullscreen ? 'h-100' : ''}`">
                    <div class="inner-banner inner-banner-bg">
                        <div class="container">
                            <div class="inner-title text-center test-inner-title">
                                <h3>Test</h3>
                            </div>
                        </div>
                    </div>
            
                    <div class="blog-details-area py-3">
                        <div class="container">
                            <div class="row">
                                <div class="col-12">
                                    <div class="text-center">
                                        <h5>
                                            <code>Timeline</code>
                                        </h5>
                                    </div>
                                    <div class="question_set_div">
                                        <div class="question_set_marker d-flex flex-wrap align-items-center" style="justify-content:center">
                                            <div v-for="i in total_questions" :key="i" :class="`${(i)==parseInt(current_question) ? 'question_set_box_current' : ((i)<parseInt(current_question) ? 'question_set_box_completed' : 'question_set_box_pending')} question_set_box`" >{{i}}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr/>
                        <div class="container">
                            <div class="row align-items-center">
                                <div class="col-lg-9">
                                    <div class="question-block">
                                        <div class="question-block-counter p-2">
                                            <div class="d-flex align-items-center justify-content-between ">
                                                <div class="col-auto text-center">
                                                    <p class="head-text text-light">Subject</p>
                                                    <h6 class="head-counter text-light">Maths</h6>
                                                </div>
                                                <div class="col-auto text-center">
                                                    <p class="head-text text-light">Difficulty</p>
                                                    <h6 class="head-counter text-light">Hard</h6>
                                                </div>
                                                <div class="col-auto text-center">
                                                    <p class="head-text text-light">Marks</p>
                                                    <h6 class="head-counter text-light">5</h6>
                                                </div>
                                                <div class="col-auto text-center">
                                                    <p class="head-text text-light">Duration</p>
                                                    <h6 class="head-counter text-light">10 mins</h6>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="question-section p-2">
                                            <h4>
                                                Question <code>({{ current_question }}/{{ total_questions }})</code>
                                            </h4>
                                            <div>
                                                <p>These GK questions and answers from various topics are for all kids from age groups between 4 to 12 and other students can also gain knowledge. An elaborative explanation is also provided with questions so that it will help children to understand the topic and help them in revision and memorizing the answers to all questions. Which animal is known as the king of the jungle?</p>
                                            </div>
                                        </div>
                                        <div class="answer-section">
                                            <div class="d-flex align-items-center flex-wrap">
                                                <div class="col-lg-6 col-md-6 col-sm-12 answer-holder p-2">
                                                    <el-radio v-model="selected_answer" label="Answer1">Option A</el-radio>
                                                </div>
                                                <div class="col-lg-6 col-md-6 col-sm-12 answer-holder p-2">
                                                    <el-radio v-model="selected_answer" label="Answer2">Option B</el-radio>
                                                </div>
                                                <div class="col-lg-6 col-md-6 col-sm-12 answer-holder p-2">
                                                    <el-radio v-model="selected_answer" label="Answer3">Option C</el-radio>
                                                </div>
                                                <div class="col-lg-6 col-md-6 col-sm-12 answer-holder p-2">
                                                    <el-radio v-model="selected_answer" label="Answer4">Option D</el-radio>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="py-1 px-2 text-center">
                                            <el-button type="success" plain>Submit</el-button>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-3">
                                    <div class="timer-div">
                                        <client-only>
                                            <vac v-if="timerTrigger" :start-time="startOn" :end-time="scheduledOn" @finish="timeElapsedHandler">
                                                <span
                                                slot="process"
                                                slot-scope="{ timeObj }">
                                                    <div style="position: relative;">
                                                        <div class="timer" :style="`--duration: ${duration * 60};--size: 250;`">
                                                        <div class="mask">
                                                        </div>
                                                        </div>
                                                        <h5 class="countdown">{{ `${timeObj.m} mins ${timeObj.s} secs` }}</h5>
                                                    </div>
                                                </span>
                                                <div slot="finish">
                                                    <div style="position: relative;">
                                                    <div class="timer-full" :style="`--duration: 0;--size: 250;`">
                                                        <div class="mask">
                                                        </div>
                                                    </div>
                                                    <h4 class="countdown"><span class="badge badge-danger-light">Times Up!!</span></h4>
                                                    </div>
                                                </div>
                                            </vac>
                                        </client-only>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </fullscreen>
        </client-only>

    </div>
</template>

<script>
import { API_ROUTES } from '~/helper/api_routes';


export default {
    name: "TestOngoingPage",
    layout: "MainPageLayout",
    middleware: ['auth'],
    mounted() {
        if (process.client) {
            this.$scrollTo("#__nuxt", 0, { force: true });
            window.addEventListener("blur", this.logTabChanged);
            this.makeFullScreen()
        }
    },
    destroyed() {
        window.removeEventListener("blur", this.logTabChanged);
    },
    data() {
        return {
            timerTrigger: true,
            startOn: new Date().getTime(),
            scheduledOn: new Date(new Date().getTime() + 10 * 60000).getTime(),
            duration: 10,
            fullscreen: false,
            warnStatus: false,
            warnCounter: 0,
            total_questions: 30,
            current_question: 5,
            selected_answer: null,
            // blogLoading: false,
            // blog: null,
            // prev_blog: null,
            // next_blog: null,
            // popularBlogLoading: false,
            // popularBlog: [],
            // popularBlogCount: 1,
            // popularBlogCurrentPage: 1,
            // popularBlogPerPage: 1,
            // blogCommentLoading: false,
            // blogComment: [],
            // blogCommentPage: 1,
            // blogCommentCount: 1,
            // blogCommentPerPage: 1,
            // blogCommentLastPage: 1,
            // commentPostLoading: false,
            // name: this.$auth.loggedIn ? this.$auth.user.name : '',
            // email: this.$auth.loggedIn ? this.$auth.user.email : '',
            // comment: '',
        };
    },
    head() {
        return {
            title: 'Test Ongoing',
            link: [
                {
                    rel: 'canonical',
                    href: this.$config.mainURL + this.$route.path,
                },
            ],
            meta: [
                // hid is used as unique identifier. Do not use `vmid` for it as it will not work
                {
                    hid: 'og:title',
                    name: 'og:title',
                    content: 'Test Ongoing'
                },
                {
                    hid: 'og:type',
                    name: 'og:type',
                    content: 'website'
                },
                {
                    hid: 'description',
                    name: 'description',
                    content: 'Test Ongoing'
                },
                {
                    hid: 'keywords',
                    name: 'keywords',
                    content: 'Test Ongoing'
                },
            ],
        }
    },
    async fetch() {
        // await this.getBlog();
    },
    watch: {
        // $route(to, from) {
        //     this.handlePopularBlogPageChnage();
        //     if (process.client) {
        //         this.$scrollTo("#popular-blog-area", 0, { force: true });
        //     }
        // },
        // blog(to, from) {
        //     this.getBlogComment();
        // },
        // blogCommentPage(to, from) {
        //     this.getBlogComment(to);
        //     if (process.client) {
        //         this.$scrollTo("#blog-comment-area", 0, { force: true });
        //     }
        // },
    },
    methods: {
        makeFullScreen(){
            this.$alert("This exam needs to be conducted on fullscreen mode. Please dnt try to exit the fullscreen mode until your exam is over. It wil exit the fullscreen mode once your exam is over. If you exit the fullscreen mode by yourself then you will be barred from giving this exam.", "WARNING!!", {
                confirmButtonText: "MAKE FULLSCREEN",
                callback: action => {
                    this.fullscreen = true
                    this.$message({
                        type: "success",
                        message: `You can continue with the exam`
                    });
                }
            });
        },
        async timeElapsedHandler() {
            this.timerTrigger = false;
        },
        logTabChanged() {
            if (process.client) {
                this.warningOpen();
            }
        },
        warningOpen() {
            if (this.warnStatus === false && this.warnCounter <= 1) {
                this.warnStatus = true;
                ++this.warnCounter;
                this.$alert("This is a warning because you tried escape the exam screen. If you do it again, then you will be barred from giving this exam!", "WARNING!!", {
                    confirmButtonText: "OK",
                    callback: action => {
                        this.$message({
                            type: "success",
                            message: `You can continue with the exam`
                        });
                    }
                });
            }
            else {
                // this.abortExam();
                console.log('exam cancelled');
            }
        },
        // async getBlog() {
        //     this.blogLoading = true;
        //     try {
        //         const response = await this.$publicApi.get(API_ROUTES.blog + `/${this.$route.params.slug}`); // eslint-disable-line
        //         this.blog = response.data.blog;
        //         this.next_blog = response.data.next_blog;
        //         this.prev_blog = response.data.prev_blog;
        //     } catch (err) {
        //         // console.log(err.response);// eslint-disable-line
        //         this.$nuxt.context.error({
        //             status: err.response.status,
        //             message: err.response.data.message,
        //         })

        //     } finally {
        //         this.blogLoading = false;
        //     }
        // },
        // async getPopluarBlog(page = 0) {
        //     this.popularBlogLoading = true;
        //     try {
        //         const response = await this.$publicApi.get(API_ROUTES.blog + `?total=8&page=${page}&filter[is_popular]=true&sort=-published_on`); // eslint-disable-line
        //         this.popularBlog = response.data.data
        //         this.popularBlogCount = response?.data?.meta?.total
        //         this.popularBlogPerPage = response?.data?.meta?.per_page
        //         this.popularBlogCurrentPage = this.$route.query.page ? Number(this.$route.query.page) : 1;
        //     } catch (err) {
        //         // console.log(err.response);// eslint-disable-line
        //         this.$nuxt.context.error({
        //             status: err.response.status,
        //             message: err.response.data.message,
        //         })

        //     } finally {
        //         this.popularBlogLoading = false;
        //     }
        // },
        // handlePopularBlogPaginationChnage(page) {
        //     this.$router.push({ query: { page } });
        // },
        // handlePopularBlogPageChnage() {
        //     this.popularBlogCurrentPage = this.$route.query.page ? Number(this.$route.query.page) : 1;
        //     this.getPopluarBlog(this.$route.query.page ? Number(this.$route.query.page) : 1);
        // },
        // async formHandler() {
        //     this.commentPostLoading = true;
        //     try {
        //         const response = await this.$publicApi.post(API_ROUTES.blog + `/comment/${this.blog?.id}/create`, {
        //             name: this.name,
        //             email: this.email,
        //             comment: this.comment,
        //         });
        //         this.comment = ''
        //         this.$refs.form.reset()
        //         this.$toast.success('Commented Successfully.')
        //     } catch (err) {
        //         this.$refs.form.setErrors({
        //             email: err?.response?.data?.errors?.email?.length > 0 && err?.response?.data?.errors?.email[0],
        //             name: err?.response?.data?.errors?.name?.length > 0 && err?.response?.data?.errors?.name[0],
        //             comment: err?.response?.data?.errors?.comment?.length > 0 && err?.response?.data?.errors?.comment[0],
        //         });
        //         if (err?.response?.data?.message) this.$toast.error(err?.response?.data?.message)
        //         if (err?.response?.data?.error) this.$toast.error(err?.response?.data?.error)

        //     } finally {
        //         this.commentPostLoading = false;
        //     }
        // },
        // async getBlogComment(page = 1) {
        //     if(this.blog){
        //         this.blogCommentLoading = true;
        //         try {
        //             const response = await this.$publicApi.get(API_ROUTES.blog + `/comment/${this.blog?.id}/paginate?total=8&page=${page}`); // eslint-disable-line
        //             this.blogComment = [...this.blogComment, ...response.data.data]
        //             this.blogCommentCount = response?.data?.meta?.total
        //             this.blogCommentPerPage = response?.data?.meta?.per_page
        //             this.blogCommentLastPage = response?.data?.meta?.last_page
        //         } catch (err) {
        //             // console.log(err.response);// eslint-disable-line
        //             this.$nuxt.context.error({
        //                 status: err.response.status,
        //                 message: err.response.data.message,
        //             })
        //         } finally {
        //             this.blogCommentLoading = false;
        //         }
        //     }
        // },
    },
}
</script>

<style scoped>
.test-inner-title{
    padding-top: 50px;
    padding-bottom: 10px;
}
/* timer starts */
.countdown{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 1.2rem;
}

.timer {
    background: -webkit-linear-gradient(left, #eee 50%, #019ff8 50%);
    border-radius: 100%;
    margin:auto;
    height: calc(var(--size) * 1px);
    width: calc(var(--size) * 1px);
    position: relative;
    -webkit-animation: time calc(var(--duration) * 1s) steps(1000, start) infinite;
      -webkit-mask: radial-gradient(transparent 50%,#000 50%);
      mask: radial-gradient(transparent 50%,#000 50%);
}
.timer-full {
    font-size: 3.2rem;
    display: inline-block;
    vertical-align: top;
    font-weight: 600;
    background: -webkit-linear-gradient(left, #eee 100%, #019ff8 50%);
    border-radius: 100%;
    height: calc(var(--size) * 1px);
    width: calc(var(--size) * 1px);
    position: relative;
    -webkit-animation: time calc(var(--duration) * 1s) steps(1000, start) infinite;
      -webkit-mask: radial-gradient(transparent 50%,#000 50%);
      mask: radial-gradient(transparent 50%,#000 50%);
}
.mask {
    border-radius: 100% 0 0 100% / 50% 0 0 50%;
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 50%;
    -webkit-animation: mask calc(var(--duration) * 1s) steps(500, start) infinite;
    -webkit-transform-origin: 100% 50%;
}
@keyframes time {
    100% {
        -webkit-transform: rotate(360deg);
    }
}
@keyframes mask {
    0% {
        background: #019ff8;
        -webkit-transform: rotate(0deg);
    }
    50% {
        background: #019ff8;
        -webkit-transform: rotate(-180deg);
    }
    50.01% {
        background: #eee;
        -webkit-transform: rotate(0deg);
    }
    100% {
        background: #eee;
        -webkit-transform: rotate(-180deg);
    }
}
/* timer ends */

/* question set starts */
.question_set_div{
  /* border:1px solid #888888; */
  width:100%;
  margin-bottom:10px;
}
.question_set_marker{
  /* border:1px solid #888888; */
  width:100%;
}
.question_set_box{
  width:40px;
  height:40px;
  border:1px dashed #b8b8b8;
  display:grid;
  place-content:center;
}
.question_set_box_pending{
  background-color: #ee8f8f;
}
.question_set_box_completed{
  background-color: #a3e1a3;
}
.question_set_box_current{
  background-color: #9292f3;
}
/* question sets ends */
.question-block{
    border: 1px solid #ebebeb;
    border-radius: 3px;
    width: 100%;
}
.question-section{
    /* border-bottom: 1px solid #ebebeb; */
}
.question-block-counter{
    background-color: #999d90;
}
.answer-holder{
    border: 1px dashed #ebebeb;
}
.answer-holder:nth-child(odd){
    border-left:none;
}
.answer-holder:nth-child(even){
    border-left:none;
    border-right:none;
}
/* .answer-holder:nth-child(3n){
    border-bottom:none;
}
.answer-holder:nth-child(3n+1){
    border-bottom:none;
} */
.answer-holder:nth-child(4n){
    border-top:none;
}
.head-counter{
    color: #303133;
    font-size: 20px;
    margin:0;
}
.head-text{
    color: #606266;
    font-size: 14px;
    margin-bottom: 4px;
}
</style>