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
                                    <div v-if="errorMessage" class="mb-1">
                                        <el-alert
                                        :title="errorMessage"
                                        type="error"
                                        show-icon></el-alert>
                                    </div>
                                    <div class="question-block">
                                        <div class="question-block-counter p-2">
                                            <div class="d-flex align-items-center justify-content-between ">
                                                <div class="col-auto text-center">
                                                    <p class="head-text text-light">Subject</p>
                                                    <h6 class="head-counter text-light">{{questionSet?.current_quiz.subject.name}}</h6>
                                                </div>
                                                <div class="col-auto text-center">
                                                    <p class="head-text text-light">Difficulty</p>
                                                    <h6 class="head-counter text-light">{{questionSet?.current_quiz.difficulty}}</h6>
                                                </div>
                                                <div class="col-auto text-center">
                                                    <p class="head-text text-light">Marks</p>
                                                    <h6 class="head-counter text-light">{{questionSet?.current_quiz.mark}}</h6>
                                                </div>
                                                <div class="col-auto text-center">
                                                    <p class="head-text text-light">Duration</p>
                                                    <h6 class="head-counter text-light">{{questionSet?.current_quiz.duration}} mins</h6>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="question-section p-2">
                                            <h4>
                                                Question <code>({{ current_question }}/{{ total_questions }})</code>
                                            </h4>
                                            <div v-html="questionSet?.current_quiz.question" />
                                        </div>
                                        <div class="answer-section">
                                            <div class="d-flex align-items-center flex-wrap">
                                                <div class="col-lg-6 col-md-6 col-sm-12 answer-holder p-2">
                                                    <el-radio v-model="attempted_answer" label="Answer1"><div class="px-3" v-html="questionSet?.current_quiz.answer_1" /></el-radio>
                                                </div>
                                                <div class="col-lg-6 col-md-6 col-sm-12 answer-holder p-2">
                                                    <el-radio v-model="attempted_answer" label="Answer2"><div class="px-3" v-html="questionSet?.current_quiz.answer_2" /></el-radio>
                                                </div>
                                                <div class="col-lg-6 col-md-6 col-sm-12 answer-holder p-2">
                                                    <el-radio v-model="attempted_answer" label="Answer3"><div class="px-3" v-html="questionSet?.current_quiz.answer_3" /></el-radio>
                                                </div>
                                                <div class="col-lg-6 col-md-6 col-sm-12 answer-holder p-2">
                                                    <el-radio v-model="attempted_answer" label="Answer4"><div class="px-3" v-html="questionSet?.current_quiz.answer_4" /></el-radio>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="py-1 px-2 text-center">
                                            <el-button type="success" plain @click="fillAnswerHandler">Submit</el-button>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-3">
                                    <div class="timer-div">
                                        <client-only>
                                            <vac v-if="timerTrigger" :start-time="startOn" :end-time="scheduledOn" @finish="timeElapsedHandler">
                                                <span
                                                    slot="process"
                                                    slot-scope="{ timeObj }"
                                                >
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
                <el-dialog title="WARNING" :visible.sync="dialogVisible" width="30%" :center="true" :close-on-click-modal="false" :close-on-press-escape="false" :show-close="false">
                    <div class="p-1 px-4">
                        <p>{{dialogMessage}}</p>
                    </div>
                    <span slot="footer" class="dialog-footer">
                        <el-button type="primary" @click="closeWarningModal">Resume Test</el-button>
                    </span>
                </el-dialog>
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
            window.addEventListener("blur", this.tabChangedHandler);
            this.makeFullScreen()
        }
    },
    destroyed() {
        window.removeEventListener("blur", this.tabChangedHandler);
    },
    data() {
        return {
            timerTrigger: false,
            startOn: new Date().getTime(),
            scheduledOn: new Date(new Date().getTime() + 10 * 60000).getTime(),
            duration: 10,
            fullscreen: false,
            dialogVisible: false,
            dialogMessage: '',
            tabChangedWarnCounter: 0,
            fullScreenWarnCounter: 0,
            total_questions: 0,
            current_question: 2,
            attempted_answer: null,
            questionSetLoading: false,
            questionSet: null,
            answerSubmitLoading: false,
            errorMessage: null,
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
        await this.getQuestionSet();
    },
    watch: {
        fullscreen(to, from) {
            if(to===false){
                this.makeFullScreen();
            }
        },
    },
    methods: {
        async closeWarningModal(){
            this.dialogVisible = false;
            this.fullscreen = true;
            this.dialogMessage = ''
        },
        async makeFullScreen(){
            if(!this.dialogVisible){
                if (this.fullScreenWarnCounter <= 2) {
                    this.dialogVisible = true;
                    this.dialogMessage = "This exam needs to be conducted on fullscreen mode. Please dnt try to exit the fullscreen mode until your exam is over. It wil exit the fullscreen mode once your exam is over. If you exit the fullscreen mode by yourself then you will be barred from giving this exam.";
                }
                else if(this.fullScreenWarnCounter == 3) {
                    await this.eliminatedHandler('Tried to escape full screen mode while attending the exam!');
                }
                this.fullScreenWarnCounter++;
            }
        },
        async timeElapsedHandler() {
            this.timerTrigger = false;
            this.answerSubmitLoading = true;
            this.errorMessage = 'Time for answering the question exceeded!'
            try {
                const response = await this.$privateApi.post(API_ROUTES.tests + `/${this.$route.params.slug}/fill-answer`, {
                    attempt_status: 'Failed To Answer',
                    reason: 'Time for answering the question exceeded!'
                }); // eslint-disable-line
                this.attempted_answer=null;
            } catch (err) {
                // console.log(err.response);// eslint-disable-line
                // this.errorMessage = err?.response?.data?.message
                
            } finally {
                this.answerSubmitLoading = false;
                this.errorMessage = null;
            }
        },
        tabChangedHandler() {
            if (process.client) {
                this.tabChangedWarning();
            }
        },
        async tabChangedWarning() {
            if(!this.dialogVisible){
                if (this.tabChangedWarnCounter <= 1) {
                    this.dialogVisible = true;
                    this.dialogMessage = "This is a warning because you tried escape the exam screen. If you do it again, then you will be barred from giving this exam!";
                }
                else if(this.tabChangedWarnCounter == 2) {
                    await this.eliminatedHandler('Tried to escape focus on the exam screen by viewing another screen else than exam screen tab while attending the exam!');
                }
                this.tabChangedWarnCounter++;
            }
        },
        async getQuestionSet() {
            this.questionSetLoading = true;
            try {
                const response = await this.$privateApi.get(API_ROUTES.tests + `/${this.$route.params.slug}/question-set`); // eslint-disable-line
                this.questionSet = response.data.question_set;
                this.total_questions = response.data.total_question_count;
                this.current_question = response.data.current_question_count;
                this.scheduledOn = new Date(new Date().getTime() + response.data.question_set.current_quiz.duration * 60000).getTime();
                this.duration = response.data.question_set.current_quiz.duration;
                this.timerTrigger = true;
            } catch (err) {
                // console.log(err.response);// eslint-disable-line
                this.$nuxt.context.error({
                    status: err.response.status,
                    message: err.response.data.message,
                })

            } finally {
                this.questionSetLoading = false;
            }
        },
        async fillAnswerHandler() {
            if(!this.attempted_answer){
                this.errorMessage = 'Please select an answer'
                return;
            }
            this.errorMessage = null;
            this.answerSubmitLoading = true;
            try {
                const response = await this.$privateApi.post(API_ROUTES.tests + `/${this.$route.params.slug}/fill-answer`, {
                    attempted_answer:this.attempted_answer
                }); // eslint-disable-line
                this.attempted_answer=null;
            } catch (err) {
                // console.log(err.response);// eslint-disable-line
                this.errorMessage = err?.response?.data?.message

            } finally {
                this.answerSubmitLoading = false;
            }
        },
        async eliminatedHandler(reason) {
            this.answerSubmitLoading = true;
            this.errorMessage = reason
            try {
                const response = await this.$privateApi.post(API_ROUTES.tests + `/${this.$route.params.slug}/eliminated`, {
                    reason
                }); // eslint-disable-line
                this.attempted_answer=null;
            } catch (err) {
                // console.log(err.response);// eslint-disable-line
                // this.errorMessage = err?.response?.data?.message

            } finally {
                this.answerSubmitLoading = false;
                this.errorMessage = null;
            }
        },
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