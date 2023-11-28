<template>
    <div>
        <header class="top-header">
            <div class="container-fluid">
                <div class="row align-items-center">
                    <div class="col-lg-9 col-md-8">
                        <div class="header-left">
                            <ul>
                                <li>
                                    <span class="svg-icon">
                                        <font-awesome-icon :icon="['fa', 'phone']"  />
                                    </span>
                                    <a href="tel:+917676642258" aria-label="76766 42258">76766 42258</a>
                                </li>
                                <li>
                                    <span class="svg-icon">
                                        <font-awesome-icon :icon="['fa', 'envelope']"  />
                                    </span>
                                    <a href="mailto:info@aaaedu.in" aria-label="info@aaaedu.in"><span>info@aaaedu.in</span></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-4">
                        <div class="header-right">
                            <ul class="social-list">
                                <li>
                                    <a href="https://www.facebook.com/www.aaaedu.in/" target="_blank" aria-label="facebook page">
                                        <span class="svg-icon">
                                            <font-awesome-icon :icon="['fab', 'facebook-f']"  />
                                        </span>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://twitter.com/academy_arjunaa" target="_blank" aria-label="twitter page">
                                        <span class="svg-icon">
                                            <font-awesome-icon :icon="['fab', 'twitter']"  />
                                        </span>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.instagram.com/arjunaa_academy_for_achievers/" target="_blank" aria-label="instagram page">
                                        <span class="svg-icon">
                                            <font-awesome-icon :icon="['fab', 'instagram']"  />
                                        </span>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://in.linkedin.com/company/arjunaa-academy-for-achievers" target="_blank" aria-label="linkedin page">
                                        <span class="svg-icon">
                                            <font-awesome-icon :icon="['fab', 'linkedin']"  />
                                        </span>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.youtube.com/channel/UCcPOkcZ_YGpTMcVnLJQYLPA" target="_blank" aria-label="youtube page">
                                        <span class="svg-icon">
                                            <font-awesome-icon :icon="['fab', 'youtube']"  />
                                        </span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </header>

        <div id="navbar" class="navbar-area">
            <div class="mobile-responsive-nav">
                <div class="container">
                    <div class="mobile-responsive-menu">
                        <div class="logo">
                            <NuxtLink to="/" aria-label="home page">
                                <img data-src="/images/logos/logo-sm.webp" id="logo-one-mobile" class="logo-one mobile-logo" v-lazy-load
                                    alt="logo" />
                                <img data-src="/images/logos/logo-sm.webp" id="logo-two-mobile" class="logo-two mobile-logo" v-lazy-load
                                    alt="logo" />
                            </NuxtLink>
                        </div>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation" @click="drawer = true">
                            <span class="svg-icon">
                                <font-awesome-icon :icon="['fa', 'bars']"  />
                            </span>
                        </button>
                    </div>
                </div>
            </div>

            <div class="desktop-nav nav-area">
                <div class="container-fluid">
                    <nav class="navbar navbar-expand-md navbar-light">
                        <NuxtLink to="/" class="navbar-brand" aria-label="home page">
                            <img data-src="/images/logos/new-logo.webp" id="logo-one" class="logo-one" alt="Logo" v-lazy-load/>
                            <img data-src="/images/logos/logo-sm.webp" id="logo-two" class="logo-two" alt="Logo" v-lazy-load/>
                        </NuxtLink>

                        <div class="collapse navbar-collapse mean-menu" id="navbarSupportedContent">
                            <ul class="navbar-nav">
                                <li class="nav-item">
                                    <NuxtLink to="/about-us"
                                        aria-label="about us page"
                                        :class="`nav-link dropdown-toggle ${($nuxt.$route.path.includes('about-us') || $nuxt.$route.path.includes('mission-vision') || $nuxt.$route.path.includes('leadership-team') || $nuxt.$route.path.includes('testimonial')) && 'nuxt-link-active'}`">
                                        About Us </NuxtLink>
                                    <ul class="dropdown-menu">
                                        <li class="nav-item">
                                            <NuxtLink to="/mission-vision"
                                                aria-label="mission & vision page"
                                                :class="`nav-link ${($nuxt.$route.path.includes('mission-vision')) && 'nuxt-link-active'}`">
                                                Mission & Vision </NuxtLink>
                                        </li>
                                        <li class="nav-item">
                                            <NuxtLink to="/leadership-team"
                                                aria-label="leadership team & faculty page"
                                                :class="`nav-link ${($nuxt.$route.path.includes('leadership-team')) && 'nuxt-link-active'}`">
                                                Leadership Team & Faculty </NuxtLink>
                                        </li>
                                        <li class="nav-item">
                                            <NuxtLink to="/testimonial"
                                                aria-label="testimonial page"
                                                :class="`nav-link ${($nuxt.$route.path.includes('testimonial')) && 'nuxt-link-active'}`">
                                                Testimonial </NuxtLink>
                                        </li>
                                    </ul>
                                </li>
                                <li class="nav-item">
                                    <NuxtLink to="#"
                                        :class="`nav-link dropdown-toggle ${($nuxt.$route.path.includes('courses')) && 'nuxt-link-active'}`">
                                        Courses </NuxtLink>
                                    <ul v-if="branchLoading" class="dropdown-menu">
                                        <el-skeleton style="width: 100%" animated>
                                            <template slot="template">
                                                <li v-for="i in 4" :key="i" class="nav-item">
                                                    <el-skeleton-item variant="p" style="width: 100%" />
                                                    <br />
                                                </li>
                                            </template>
                                        </el-skeleton>
                                    </ul>
                                    <ul v-if="!branchLoading && branch.length > 0" class="dropdown-menu">
                                        <li v-for="(item, i) in branch" :key="i" class="nav-item">
                                            <NuxtLink to="#"
                                                :class="`nav-link dropdown-toggle ${($nuxt.$route.path.includes(item.slug)) && 'nuxt-link-active'}`" v-html="item.name" />
                                            <ul class="dropdown-menu">
                                                <li class="nav-item">
                                                    <NuxtLink to="#" class="nav-link dropdown-toggle">School (STD VIII to X)
                                                    </NuxtLink>
                                                    <ul class="dropdown-menu">
                                                        <li v-for="(it, index) in item.courses" :key="index"
                                                            v-if="it.class == 'School (STD VIII to X)'" class="nav-item">
                                                            <NuxtLink :to="`/${item.slug}/courses/${it.slug}`" :aria-label="it.name"
                                                                :class="`nav-link ${($nuxt.$route.path.includes(it.slug)) && 'nuxt-link-active'}`" v-html="it.name" />
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li class="nav-item">
                                                    <NuxtLink to="#" class="nav-link dropdown-toggle"> Senior Secocndary
                                                        (XI, XII, PU) </NuxtLink>
                                                    <ul class="dropdown-menu">
                                                        <li v-for="(it, index) in item.courses" :key="index"
                                                            v-if="it.class == 'Senior Secondary (XI, XII, PU)'"
                                                            class="nav-item">
                                                            <NuxtLink :to="`/${item.slug}/courses/${it.slug}`" :aria-label="it.name"
                                                                :class="`nav-link ${($nuxt.$route.path.includes(it.slug)) && 'nuxt-link-active'}`" v-html="it.name" />
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li class="nav-item">
                                                    <NuxtLink to="#" class="nav-link dropdown-toggle"> Online </NuxtLink>
                                                    <ul class="dropdown-menu">
                                                        <li v-for="(it, index) in item.courses" :key="index"
                                                            v-if="it.class == 'Online'" class="nav-item">
                                                            <NuxtLink :to="`/${item.slug}/courses/${it.slug}`" :aria-label="it.name"
                                                                :class="`nav-link ${($nuxt.$route.path.includes(it.slug)) && 'nuxt-link-active'}`" v-html="it.name" />
                                                        </li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li class="nav-item">
                                    <NuxtLink to="#"
                                        :class="`nav-link dropdown-toggle ${($nuxt.$route.path.includes('achievers')) && 'nuxt-link-active'}`">
                                        Achievers </NuxtLink>
                                    <ul v-if="achieverCategoryLoading" class="dropdown-menu">
                                        <el-skeleton style="width: 100%" animated>
                                            <template slot="template">
                                                <li v-for="i in 4" :key="i" class="nav-item">
                                                    <el-skeleton-item variant="p" style="width: 100%" />
                                                    <br />
                                                </li>
                                            </template>
                                        </el-skeleton>
                                    </ul>
                                    <ul v-if="!achieverCategoryLoading && achieverCategory.length > 0"
                                        class="dropdown-menu">
                                        <li v-if="!achieverCategoryLoading && achieverCategory.length > 0"
                                            v-for="(item, i) in achieverCategory" :key="i" class="nav-item">
                                            <NuxtLink :to="`/achievers/${item.slug}`" :aria-label="item.name"
                                                :class="`nav-link ${($nuxt.$route.path.includes(item.slug)) && 'nuxt-link-active'}`" v-html="item.name" />
                                        </li>
                                    </ul>
                                </li>
                                <li class="nav-item">
                                    <NuxtLink to="#"
                                        :class="`nav-link dropdown-toggle ${($nuxt.$route.path.includes('knowledge-desk') || $nuxt.$route.path.includes('expert-tips') || $nuxt.$route.path.includes('faq') || $nuxt.$route.path.includes('vrddhi')) && 'nuxt-link-active'}`">
                                        Knowledge Desk </NuxtLink>
                                    <ul class="dropdown-menu">
                                        <li class="nav-item">
                                            <NuxtLink to="/knowledge-desk" aria-label="blog page"
                                                :class="`nav-link ${($nuxt.$route.path.includes('knowledge-desk')) && 'nuxt-link-active'}`">
                                                Blogs </NuxtLink>
                                        </li>
                                        <li class="nav-item">
                                            <NuxtLink to="/expert-tips" aria-label="expert tips page"
                                                :class="`nav-link ${($nuxt.$route.path.includes('expert-tips')) && 'nuxt-link-active'}`">
                                                Expert Tips </NuxtLink>
                                        </li>
                                        <li class="nav-item">
                                            <NuxtLink to="/faq" aria-label="faq page"
                                                :class="`nav-link ${($nuxt.$route.path.includes('faq')) && 'nuxt-link-active'}`">
                                                FAQ </NuxtLink>
                                        </li>
                                        <li class="nav-item">
                                            <NuxtLink to="/vrddhi" aria-label="vrddhi page"
                                                :class="`nav-link ${($nuxt.$route.path.includes('vrddhi')) && 'nuxt-link-active'}`">
                                                Vrddhi </NuxtLink>
                                        </li>
                                    </ul>
                                </li>
                                <li class="nav-item">
                                    <NuxtLink to="/events" aria-label="upcoming events page"
                                        :class="`nav-link ${($nuxt.$route.path.includes('events')) && 'nuxt-link-active'}`">
                                        Upcoming Events </NuxtLink>
                                </li>
                                <li class="nav-item">
                                    <NuxtLink to="/contact-us" aria-label="contact us page"
                                        :class="`nav-link ${($nuxt.$route.path.includes('contact-us')) && 'nuxt-link-active'}`">
                                        Contact Us </NuxtLink>
                                </li>
                                <li v-if="!$auth.loggedIn" class="nav-item">
                                    <NuxtLink to="/auth/sign-in" aria-label="sign in page"
                                        :class="`nav-link ${($nuxt.$route.path.includes('auth/sign-in')) && 'nuxt-link-active'}`">
                                        Sign In </NuxtLink>
                                </li>
                                <li v-else class="nav-item">
                                    <NuxtLink to="#"
                                        :class="`nav-link dropdown-toggle ${($nuxt.$route.path.includes('profile')) && 'nuxt-link-active'}`">
                                        Account </NuxtLink>
                                    <ul class="dropdown-menu" style="left: unset; right: 0;">
                                        <li class="nav-item">
                                            <NuxtLink to="/profile" aria-label="profile page"
                                                :class="`nav-link ${($nuxt.$route.path.includes('profile')) && 'nuxt-link-active'}`">
                                                Profile ({{ $auth.user.name }}) </NuxtLink>
                                        </li>
                                        <li class="nav-item">
                                            <NuxtLink to="/online-tests" aria-label="profile page"
                                                :class="`nav-link ${($nuxt.$route.path.includes('online-tests')) && 'nuxt-link-active'}`">
                                                Online Tests </NuxtLink>
                                        </li>
                                        <li class="nav-item">
                                            <a href="javascript:void(0)" aria-label="logout page" class="nav-link" @click="logout"> Logout </a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
            <el-drawer title="Arjunaa Academy for Achievers" size="80%" :visible.sync="drawer" direction="rtl">
                <el-menu default-active="2" class="el-menu-vertical-demo">
                    <el-menu-item index="1">
                        <NuxtLink to="/" aria-label="home page">
                            <i class="el-icon-s-home"></i>
                            <span>Home</span>
                        </NuxtLink>
                    </el-menu-item>
                    <el-submenu index="1">
                        <template slot="title">
                            <i class="el-icon-reading"></i>
                            <span>Courses</span>
                        </template>
                        <el-submenu v-if="!branchLoading && branch.length > 0" v-for="(item, i) in branch" :key="i"
                            :index="`1-${i}`">
                            <p slot="title" v-html="item.name" />
                            <el-submenu :index="`1-${i}-1`">
                                <template slot="title">School</template>
                                <NuxtLink v-for="(it, index) in item.courses" :key="index" :aria-label="it.name"
                                    v-if="it.class == 'School (STD VIII to X)'" :to="`/${item.slug}/courses/${it.slug}`">
                                    <el-menu-item :index="`1-${i}-3-${index}`">
                                    <span v-html="it.name" />
                                    </el-menu-item>
                                </NuxtLink>
                            </el-submenu>
                            <el-submenu :index="`1-${i}-2`">
                                <template slot="title">Senior Secondary</template>
                                <NuxtLink v-for="(it, index) in item.courses" :key="index" :aria-label="it.name"
                                    v-if="it.class == 'Senior Secondary (XI, XII, PU)'"
                                    :to="`/${item.slug}/courses/${it.slug}`">
                                    <el-menu-item :index="`1-${i}-3-${index}`">
                                        <span v-html="it.name" />
                                    </el-menu-item>
                                </NuxtLink>
                            </el-submenu>
                            <el-submenu :index="`1-${i}-3`">
                                <template slot="title">Online</template>
                                <NuxtLink v-for="(it, index) in item.courses" :key="index" v-if="it.class == 'Online'" :aria-label="it.name"
                                    :to="`/${item.slug}/courses/${it.slug}`">
                                    <el-menu-item :index="`1-${i}-3-${index}`">
                                        <span v-html="it.name" />
                                    </el-menu-item>
                                </NuxtLink>
                            </el-submenu>
                        </el-submenu>
                    </el-submenu>
                    <el-submenu index="3">
                        <template slot="title">
                            <i class="el-icon-school"></i>
                            <span>About Us</span>
                        </template>
                        <NuxtLink to="/mission-vision" aria-label="mission & vision page">
                            <el-menu-item index="3-1">Mission & Vision </el-menu-item>
                        </NuxtLink>
                        <NuxtLink to="/leadership-team" aria-label="leadership team & faculty page">
                            <el-menu-item index="3-2">Leadership Team & Faculty </el-menu-item>
                        </NuxtLink>
                        <NuxtLink to="/testimonial" aria-label="testimonial page">
                            <el-menu-item index="3-3">Testimonial </el-menu-item>
                        </NuxtLink>
                    </el-submenu>
                    <el-submenu index="4">
                        <template slot="title">
                            <i class="el-icon-trophy"></i>
                            <span>Achievers</span>
                        </template>
                        <NuxtLink v-if="!achieverCategoryLoading && achieverCategory.length > 0"
                            v-for="(item, i) in achieverCategory" :key="i" :to="`/achievers/${item.slug}`" :aria-label="item.name">
                            <el-menu-item :index="`4-${i + 1}`">
                                <span  v-html="item.name" />
                            </el-menu-item>
                        </NuxtLink>
                    </el-submenu>
                    <el-submenu index="5">
                        <template slot="title">
                            <i class="el-icon-notebook-2"></i>
                            <span>Knowledge Desk</span>
                        </template>
                        <NuxtLink to="/knowledge-desk" aria-label="blogs page">
                            <el-menu-item index="5-1">Blogs </el-menu-item>
                        </NuxtLink>
                        <NuxtLink to="/expert-tips" aria-label="expert tips page">
                            <el-menu-item index="5-2">Expert Tips </el-menu-item>
                        </NuxtLink>
                        <NuxtLink to="/faq" aria-label="tips page">
                            <el-menu-item index="5-3">Faq </el-menu-item>
                        </NuxtLink>
                        <NuxtLink to="/vrddhi" aria-label="vrddhi page">
                            <el-menu-item index="5-4">Vrddhi </el-menu-item>
                        </NuxtLink>
                    </el-submenu>
                    <el-menu-item index="6">
                        <NuxtLink to="/events" aria-label="upcoming events page">
                            <i class="el-icon-data-analysis"></i>
                            <span>Upcoming Events</span>
                        </NuxtLink>
                    </el-menu-item>
                    <el-menu-item index="7">
                        <NuxtLink to="/contact-us" aria-label="contact us page">
                            <i class="el-icon-service"></i>
                            <span>Contact Us</span>
                        </NuxtLink>
                    </el-menu-item>
                    <el-menu-item v-if="!$auth.loggedIn" index="8">
                        <NuxtLink to="/auth/sign-in" aria-label="sign in page">
                            <i class="el-icon-user"></i>
                            <span>Sign In</span>
                        </NuxtLink>
                    </el-menu-item>
                    <el-submenu v-else index="9">
                        <template slot="title">
                            <i class="el-icon-user"></i>
                            <span>Account</span>
                        </template>
                        <NuxtLink to="/profile" aria-label="profile page">
                            <el-menu-item index="9-1">Profile </el-menu-item>
                        </NuxtLink>
                        <NuxtLink to="//online-tests" aria-label="online test page">
                            <el-menu-item index="9-2">Online Tests</el-menu-item>
                        </NuxtLink>
                        <el-menu-item index="9-3" aria-label="logout page" @click="logout">Logout </el-menu-item>
                    </el-submenu>
                </el-menu>
            </el-drawer>
        </div>
    </div>
</template>

<script>
import { API_ROUTES } from '~/helper/api_routes';

export default {
    name: 'HeaderComponent',
    mounted() {
        this.getAchieverCategory();
        this.getBranch();
    },
    data() {
        return {
            achieverCategory: [],
            achieverCategoryLoading: false,
            branch: [],
            branchLoading: false,
            drawer: false,
        }
    },
    watch: {
        $route(to) {
            this.drawer = false;
        }
    },
    methods: {
        async getAchieverCategory() {
            this.achieverCategoryLoading = true;
            try {
                const response = await this.$publicApi.get(API_ROUTES.achieverCategory); // eslint-disable-line
                this.achieverCategory = response.data.achiverCategory
            } catch (err) {
                // console.log(err.response);// eslint-disable-line
                if (err?.response?.data?.message) this.$toast.error(err?.response?.data?.message)
                if (err?.response?.data?.error) this.$toast.error(err?.response?.data?.error)
            } finally {
                this.achieverCategoryLoading = false;
            }
        },
        async getBranch() {
            this.branchLoading = true;
            try {
                const response = await this.$publicApi.get(API_ROUTES.branch + '/all'); // eslint-disable-line
                this.branch = response.data.branch
            } catch (err) {
                // console.log(err.response);// eslint-disable-line
                if (err?.response?.data?.message) this.$toast.error(err?.response?.data?.message)
                if (err?.response?.data?.error) this.$toast.error(err?.response?.data?.error)
            } finally {
                this.branchLoading = false;
            }
        },
        async logout() {
            await this.$auth.logout()
        }
    },
}
</script>