<template>
    <div>
        <div class="inner-banner inner-banner-bg">
            <div class="container">
                <div class="inner-title text-center test-inner-title">
                    <h3>{{test?.name}}</h3>
                </div>
            </div>
        </div>

        <div class="container">
            <div v-if="testLoading" class="text-center py-4">
                <div class="spinner-border m-0 p-0" role="status"></div>
            </div>
            <template v-else>
                <div class="py-2" style="text-align:right;">
                    <el-button type="success" plain @click="generateReport" :loading="downloadLoading" :disabled="downloadLoading">Download Report</el-button>
                </div>
                <div class="main-report-wrapper">
                    <div class="inner-report-wrapper">
                        <div class="report-logo-container">
                            <img data-src="/images/logos/new-logo.webp" v-lazy-load alt="logo" />
                        </div>
                        <div class="report-heading-container">
                            <h2>{{test?.name}} Report Card</h2>
                            <div :class="`featured-badge feature-badge-color-1`">
                                <span>{{grade}}</span>
                            </div>
                        </div>
                        <div class="report-sheet">
                            <div class="row align-items-center">
                                <div class="col-lg-12 col-md-12 col-sm-12">
                                    <table class="table table-bordered">
                                        <thead>
                                            <tr class="table-primary tb-heading">
                                                <th scope="col" colspan="5">SUBJECT WISE EVALUATION</th>
                                            </tr>
                                            <tr class="table-primary text-center">
                                                <th scope="col">SUBJECT</th>
                                                <th scope="col">TOTAL QUESTIONS</th>
                                                <th scope="col">QUESTIONS ATTEMPTED</th>
                                                <th scope="col">TOTAL MARKS</th>
                                                <th scope="col">MARKS ALLOTED</th>
                                            </tr>
                                        </thead>
                                        <tbody class="text-center">
                                            <tr v-for="(item, i) in subject_wise_score" :key="i">
                                                <th scope="row">{{item.name}}</th>
                                                <td>{{item.number_of_question}}</td>
                                                <td>{{item.attempt_count}}</td>
                                                <td>{{item.total_mark_sum}}</td>
                                                <td>{{item.total_mark_alloted_sum}}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div class="col-lg-12 col-md-12 col-sm-12">
                                    <div class="column-chart my-4">
                                        <div class="text-center">
                                            <h5>SUBJECT WISE EVALUATION ANALYSIS</h5>
                                        </div>
                                        <column-chart :data="subjectReportSorted" suffix="%"></column-chart>
                                    </div>
                                </div>
                                <div class="col-lg-12 col-md-12 col-sm-12">
                                    <table class="table table-bordered">
                                        <thead>
                                            <tr class="table-primary tb-heading">
                                                <th scope="col" colspan="5">TOTAL EVALUATION</th>
                                            </tr>
                                            <tr class="table-primary text-center">
                                                <th scope="col">TOTAL QUESTIONS</th>
                                                <th scope="col">QUESTIONS ATTEMPTED</th>
                                                <th scope="col">TOTAL MARKS</th>
                                                <th scope="col">MARKS ALLOTED</th>
                                            </tr>
                                        </thead>
                                        <tbody class="text-center">
                                            <tr>
                                                <td>{{total_question_count}}</td>
                                                <td>{{total_answer_count}}</td>
                                                <td>{{total_score}}</td>
                                                <td>{{alloted_score}}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div class="col-lg-8 col-md-7 col-sm-12">
                                    <div class="column-chart my-4">
                                        <div class="text-center">
                                            <h5>TOTAL EVALUATION ANALYSIS</h5>
                                        </div>
                                        <pie-chart loading="Loading Chart..." :data="totalReport" suffix="%" :donut="false"></pie-chart>
                                    </div>
                                </div>
                                <div class="col-lg-4 col-md-5 col-sm-12">
                                    <table class="table table-bordered">
                                        <thead>
                                            <tr class="table-primary tb-heading">
                                                <th scope="col" colspan="2">GRADING SCALE</th>
                                            </tr>
                                        </thead>
                                        <tbody class="text-center">
                                            <tr :class="grade==='A' ? 'table-success' : ''">
                                                <th scope="row">A</th>
                                                <td>100% - 90%</td>
                                            </tr>
                                            <tr :class="grade==='B' ? 'table-success' : ''">
                                                <th scope="row">B</th>
                                                <td>89% - 75%</td>
                                            </tr>
                                            <tr :class="grade==='C' ? 'table-success' : ''">
                                                <th scope="row">C</th>
                                                <td>74% - 60%</td>
                                            </tr>
                                            <tr :class="grade==='D' ? 'table-success' : ''">
                                                <th scope="row">D</th>
                                                <td>59% - 45%</td>
                                            </tr>
                                            <tr :class="grade==='E' ? 'table-success' : ''">
                                                <th scope="row">E</th>
                                                <td>44% - 35%</td>
                                            </tr>
                                            <tr :class="grade==='F' ? 'table-success' : ''">
                                                <th scope="row">F</th>
                                                <td>34% - 0%</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <client-only>
                    <vue-html2pdf
                        :show-layout="false"
                        :float-layout="true"
                        :enable-download="true"
                        :preview-modal="false"
                        filename="report"
                        :paginate-elements-by-height="1100"
                        :pdf-quality="2"
                        pdf-format="a4"
                        pdf-orientation="landscape"
                        pdf-content-width="1120px"
                        :manual-pagination="false"
                        @beforeDownload="beforeDownload($event)"
                        @hasDownloaded="hasDownloaded($event)"
                        ref="html2Pdf"
                    >
                        <div class="main-report-wrapper" slot="pdf-content">
                            <div class="inner-report-wrapper">
                                <div class="report-logo-container">
                                    <h2>ARJUNAA ACADEMY FOR ACHIEVERS</h2>
                                </div>
                                <div class="report-heading-container">
                                    <h2>{{test?.name}} Report Card</h2>
                                    <div :class="`featured-badge feature-badge-color-1`">
                                        <span>{{grade}}</span>
                                    </div>
                                </div>
                                <div class="report-sheet">
                                    <div class="row align-items-center">
                                        <div class="col-lg-12 col-md-12 col-sm-12">
                                            <table class="table table-bordered">
                                                <thead>
                                                    <tr class="table-primary tb-heading">
                                                        <th scope="col" colspan="5">SUBJECT WISE EVALUATION</th>
                                                    </tr>
                                                    <tr class="table-primary text-center">
                                                        <th scope="col">SUBJECT</th>
                                                        <th scope="col">TOTAL QUESTIONS</th>
                                                        <th scope="col">QUESTIONS ATTEMPTED</th>
                                                        <th scope="col">TOTAL MARKS</th>
                                                        <th scope="col">MARKS ALLOTED</th>
                                                    </tr>
                                                </thead>
                                                <tbody class="text-center">
                                                    <tr v-for="(item, i) in subject_wise_score" :key="i">
                                                        <th scope="row">{{item.name}}</th>
                                                        <td>{{item.number_of_question}}</td>
                                                        <td>{{item.attempt_count}}</td>
                                                        <td>{{item.total_mark_sum}}</td>
                                                        <td>{{item.total_mark_alloted_sum}}</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <div class="col-lg-12 col-md-12 col-sm-12">
                                            <div class="column-chart my-4">
                                                <div class="text-center">
                                                    <h5>SUBJECT WISE EVALUATION ANALYSIS</h5>
                                                </div>
                                                <column-chart :data="subjectReportSorted" suffix="%"></column-chart>
                                            </div>
                                        </div>
                                        <div class="col-lg-12 col-md-12 col-sm-12">
                                            <table class="table table-bordered">
                                                <thead>
                                                    <tr class="table-primary tb-heading">
                                                        <th scope="col" colspan="5">TOTAL EVALUATION</th>
                                                    </tr>
                                                    <tr class="table-primary text-center">
                                                        <th scope="col">TOTAL QUESTIONS</th>
                                                        <th scope="col">QUESTIONS ATTEMPTED</th>
                                                        <th scope="col">TOTAL MARKS</th>
                                                        <th scope="col">MARKS ALLOTED</th>
                                                    </tr>
                                                </thead>
                                                <tbody class="text-center">
                                                    <tr>
                                                        <td>{{total_question_count}}</td>
                                                        <td>{{total_answer_count}}</td>
                                                        <td>{{total_score}}</td>
                                                        <td>{{alloted_score}}</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <div class="col-lg-8 col-md-7 col-sm-12">
                                            <div class="column-chart my-4">
                                                <div class="text-center">
                                                    <h5>TOTAL EVALUATION ANALYSIS</h5>
                                                </div>
                                                <pie-chart loading="Loading Chart..." :data="totalReport" suffix="%" :donut="false"></pie-chart>
                                            </div>
                                        </div>
                                        <div class="col-lg-4 col-md-5 col-sm-12">
                                            <table class="table table-bordered">
                                                <thead>
                                                    <tr class="table-primary tb-heading">
                                                        <th scope="col" colspan="2">GRADING SCALE</th>
                                                    </tr>
                                                </thead>
                                                <tbody class="text-center">
                                                    <tr :class="grade==='A' ? 'table-success' : ''">
                                                        <th scope="row">A</th>
                                                        <td>100% - 90%</td>
                                                    </tr>
                                                    <tr :class="grade==='B' ? 'table-success' : ''">
                                                        <th scope="row">B</th>
                                                        <td>89% - 75%</td>
                                                    </tr>
                                                    <tr :class="grade==='C' ? 'table-success' : ''">
                                                        <th scope="row">C</th>
                                                        <td>74% - 60%</td>
                                                    </tr>
                                                    <tr :class="grade==='D' ? 'table-success' : ''">
                                                        <th scope="row">D</th>
                                                        <td>59% - 45%</td>
                                                    </tr>
                                                    <tr :class="grade==='E' ? 'table-success' : ''">
                                                        <th scope="row">E</th>
                                                        <td>44% - 35%</td>
                                                    </tr>
                                                    <tr :class="grade==='F' ? 'table-success' : ''">
                                                        <th scope="row">F</th>
                                                        <td>34% - 0%</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </vue-html2pdf>
                </client-only>
            </template>
        </div>


    </div>
</template>

<script>
import { API_ROUTES } from '~/helper/api_routes';

export default {
    name: "OnlineTestReportPage",
    layout: "MainPageLayout",
    middleware: ['auth'],
    data() {
        return {
            testLoading: false,
            downloadLoading: false,
            test: null,
            alloted_score: 0,
            total_score: 0,
            total_question_count: 0,
            total_answer_count: 0,
            subject_wise_score: [],
            rgb: [],
        };
    },
    head() {
        return {
            title: this.test?.meta_title,
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
                    content: this.test?.meta_title
                },
                {
                    hid: 'og:type',
                    name: 'og:type',
                    content: 'website'
                },
                {
                    hid: 'description',
                    name: 'description',
                    content: this.test?.meta_description
                },
                {
                    hid: 'keywords',
                    name: 'keywords',
                    content: this.test?.meta_keywords
                },
            ],
            script: [{
                    type: 'application/ld+json',
                    innerHTML: this.test?.meta_scripts // <- set jsonld object in data or wherever you want
                }],
            __dangerouslyDisableSanitizers: ['script'],
        };
    },
    computed: {
        subjectReportSorted() {
            const subjectReport = [...this.subject_wise_score];
            const sortedSubjectReport = subjectReport.sort((a, b) => {return b.total_mark_alloted_sum - a.total_mark_alloted_sum;});
            const graph = [];
            for (let index = 0; index < sortedSubjectReport.length; index++) {
                graph.push([sortedSubjectReport[index].name, ((sortedSubjectReport[index].total_mark_alloted_sum/sortedSubjectReport[index].total_mark_sum)*100).toFixed(2)]);
            }
            return graph;
        },
        totalReport() {
            const graph = [];
            graph.push(['Total', ((this.total_score/this.total_score)*100).toFixed(2)]);
            graph.push(['Alloted', ((this.alloted_score/this.total_score)*100).toFixed(2)]);
            return graph;
        },
        grade(){
            const percentage = ((this.alloted_score/this.total_score)*100).toFixed(2);
            if(percentage>=90 && percentage<=100){
                return 'A';
            }else if(percentage>=75 && percentage<=89){
                return 'B';
            }else if(percentage>=60 && percentage<=74){
                return 'C';
            }else if(percentage>=45 && percentage<=59){
                return 'D';
            }else if(percentage>=35 && percentage<=44){
                return 'E';
            }else if(percentage>=0 && percentage<=34){
                return 'F';
            }
        }
    },
    async fetch() {
        await this.getOnlineTestReport();
    },
    methods: {
        async getOnlineTestReport() {
            this.testLoading = true;
            try {
                const response = await this.$privateApi.get(API_ROUTES.tests + `/${this.$route.params.slug}/report`); // eslint-disable-line
                this.test = response.data.test;
                this.alloted_score = response.data.alloted_score;
                this.total_score = response.data.total_score;
                this.total_question_count = response.data.total_question_count;
                this.total_answer_count = response.data.total_answer_count;
                this.subject_wise_score = response.data.subject_wise_score;
            }
            catch (err) {
                // console.log(err);// eslint-disable-line
                this.$nuxt.context.error({
                    status: err.response.status,
                    message: err.response.data.message,
                });
            }
            finally {
                this.testLoading = false;
            }
        },
        generateReport () {
            this.$refs.html2Pdf.generatePdf()
        },
        beforeDownload(event){
            this.downloadLoading=true
        },
        hasDownloaded(event){
            this.downloadLoading=false
        },
    }
}
</script>

<style scoped>
.test-inner-title{
    padding-top: 50px;
    padding-bottom: 10px;
}
.main-report-wrapper{
    width:100%;
    padding: 10px;
    background-color: #e9e9e9;
    margin: 10px 0;
    border-radius: 5px;
}
.inner-report-wrapper{
    border:3px dashed #ccc;
    background-color: white;
    border-radius: 5px;
}
.report-logo-container{
    text-align:center;
    padding: 10px;
}
.report-logo-container img{
    height: 150px;
    object-fit:contain;
}
.report-heading-container{
    padding: 5px 10px;
    text-align:center;
    background-color:#354621;
    position: relative;
}
.report-heading-container h2{
    text-transform: capitalize;
    font-size: 1.6rem;
    margin:0;
    color: white;
}
.report-sheet{
    padding: 10px 10px;
}
.tb-heading th{
    background-color:#eacf6c;
    color: white;
    text-align:center;
}

.featured-badge {
  --badge-size: 4rem;
  height: var(--badge-size);
  width: var(--badge-size);
  position: absolute;
  right: 0;
  bottom: -10px;
}
/* add ribbons */
.featured-badge::before,
.featured-badge::after {
  content: '';
  position: absolute;
  top: 50%;
  width: calc(var(--badge-size) / 4);
  height: calc(var(--badge-size) * 0.75);
  background: #ff0000;
  border-width: 0 calc(var(--badge-size) / 16);
  border-color: #140037;
  border-style: solid;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 50% 90%, 0% 100%);
}
.featured-badge::before {
  left: 0; transform: translateX(100%) rotate(25deg);
  z-index:1;
}
.featured-badge::after {
  right: 0; transform: translateX(-100%) rotate(-25deg);
  z-index: 1;
}
/* text */
.featured-badge span {
  position: absolute;
  top: 50%; left: 50%;
  transform: translate(-50%, -50%);
  width: var(--badge-size);
  height: var(--badge-size);
  font-size: calc(var(--badge-size) / 3);
  font-weight: bold;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f0c808;
  box-shadow: 0.025em 0.025em 0.1em #303030;
  border-radius: 50%;
}
.feature-badge-color-1 span {
  background: #f0c808;
  z-index:2;
}
/* text area */
.featured-badge span::before {
  content: '';
  position: absolute;
  top: 50%; left: 50%;
  transform: translate(-50%, -50%);
  width: 85%; height: 85%;
  background: #c4a408;
  box-shadow: 0.025em 0.025em 0.1em #303030 inset;
  border-radius: 50%;
  z-index: -1;
}
.feature-badge-color-1 span::before {
  background: #c4a408;
}
</style>