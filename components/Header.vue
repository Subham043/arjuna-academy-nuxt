<template>
    <div>
        <header class="top-header">
            <div class="container-fluid">
                <div class="row align-items-center">
                    <div class="col-lg-9 col-md-8">
                        <div class="header-left">
                            <ul>
                                <li>
                                    <i class="ri-phone-fill"></i>
                                    <a href="tel:+917676642258">76766 42258</a>
                                </li>
                                <li>
                                    <i class="ri-mail-fill"></i>
                                    <a href="mailto:info@aaaedu.in"><span>info@aaaedu.in</span></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-4">
                        <div class="header-right">
                            <ul class="social-list">
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
        </header>

        <div id="navbar" class="navbar-area">
            <div class="mobile-responsive-nav">
                <div class="container">
                    <div class="mobile-responsive-menu">
                        <div class="logo">
                            <NuxtLink to="/">
                                <img src="/images/logos/logo-sm.png" id="logo-one-mobile" class="logo-one mobile-logo"
                                    alt="logo" />
                                <img src="/images/logos/logo-sm.png" id="logo-two-mobile" class="logo-two mobile-logo"
                                    alt="logo" />
                            </NuxtLink>
                        </div>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation" @click="drawer = true">
                            <i class="ri-menu-2-fill"></i>
                        </button>
                    </div>
                </div>
            </div>

            <div class="desktop-nav nav-area">
                <div class="container-fluid">
                    <nav class="navbar navbar-expand-md navbar-light">
                        <NuxtLink to="/" class="navbar-brand">
                            <img src="/images/logos/new-logo.png" id="logo-one" class="logo-one" alt="Logo" />
                            <img src="/images/logos/logo-sm.png" id="logo-two" class="logo-two" alt="Logo" />
                        </NuxtLink>

                        <div class="collapse navbar-collapse mean-menu" id="navbarSupportedContent">
                            <ul class="navbar-nav">
                                <li class="nav-item">
                                    <NuxtLink to="/about-us"
                                        :class="`nav-link dropdown-toggle ${($nuxt.$route.path.includes('about-us') || $nuxt.$route.path.includes('mission-vision') || $nuxt.$route.path.includes('leadership-team') || $nuxt.$route.path.includes('testimonial')) && 'nuxt-link-active'}`">
                                        About Us </NuxtLink>
                                    <ul class="dropdown-menu">
                                        <li class="nav-item">
                                            <NuxtLink to="/mission-vision"
                                                :class="`nav-link ${($nuxt.$route.path.includes('mission-vision')) && 'nuxt-link-active'}`">
                                                Mission & Vision </NuxtLink>
                                        </li>
                                        <li class="nav-item">
                                            <NuxtLink to="/leadership-team"
                                                :class="`nav-link ${($nuxt.$route.path.includes('leadership-team')) && 'nuxt-link-active'}`">
                                                Leadership Team & Faculty </NuxtLink>
                                        </li>
                                        <li class="nav-item">
                                            <NuxtLink to="/testimonial"
                                                :class="`nav-link ${($nuxt.$route.path.includes('testimonial')) && 'nuxt-link-active'}`">
                                                Testimonial </NuxtLink>
                                        </li>
                                    </ul>
                                </li>
                                <li class="nav-item">
                                    <NuxtLink to="#" class="nav-link dropdown-toggle"> Courses </NuxtLink>
                                    <ul class="dropdown-menu">
                                        <li class="nav-item">
                                            <NuxtLink to="/courses" class="nav-link dropdown-toggle"> School (Std VIII to X)
                                            </NuxtLink>
                                            <ul class="dropdown-menu">
                                                <li class="nav-item">
                                                    <NuxtLink to="/courses/detail" class="nav-link"> Class 8 Foundation
                                                        Course </NuxtLink>
                                                </li>
                                                <li class="nav-item">
                                                    <NuxtLink to="/courses/detail" class="nav-link"> Class 9 Foundation
                                                        Course </NuxtLink>
                                                </li>
                                            </ul>
                                        </li>
                                        <li class="nav-item">
                                            <NuxtLink to="/courses/detail" class="nav-link"> Digital Live Classes
                                            </NuxtLink>
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
                                    <ul v-if="!achieverCategoryLoading && achieverCategory.length > 0" class="dropdown-menu">
                                        <li v-if="!achieverCategoryLoading && achieverCategory.length > 0"
                                            v-for="(item, i) in achieverCategory" :key="i" class="nav-item">
                                            <NuxtLink :to="`/achievers/${item.slug}`"
                                                :class="`nav-link ${($nuxt.$route.path.includes(item.slug)) && 'nuxt-link-active'}`">
                                                {{ item.name }} </NuxtLink>
                                        </li>
                                    </ul>
                                </li>
                                <li class="nav-item">
                                    <NuxtLink to="#"
                                        :class="`nav-link dropdown-toggle ${($nuxt.$route.path.includes('knowledge-desk') || $nuxt.$route.path.includes('expert-tips') || $nuxt.$route.path.includes('faq') || $nuxt.$route.path.includes('vrddhi')) && 'nuxt-link-active'}`">
                                        Knowledge Desk </NuxtLink>
                                    <ul class="dropdown-menu">
                                        <li class="nav-item">
                                            <NuxtLink to="/knowledge-desk"
                                                :class="`nav-link ${($nuxt.$route.path.includes('knowledge-desk')) && 'nuxt-link-active'}`">
                                                Blogs </NuxtLink>
                                        </li>
                                        <li class="nav-item">
                                            <NuxtLink to="/expert-tips"
                                                :class="`nav-link ${($nuxt.$route.path.includes('expert-tips')) && 'nuxt-link-active'}`">
                                                Expert Tips </NuxtLink>
                                        </li>
                                        <li class="nav-item">
                                            <NuxtLink to="/faq"
                                                :class="`nav-link ${($nuxt.$route.path.includes('faq')) && 'nuxt-link-active'}`">
                                                FAQ </NuxtLink>
                                        </li>
                                        <li class="nav-item">
                                            <NuxtLink to="/vrddhi"
                                                :class="`nav-link ${($nuxt.$route.path.includes('vrddhi')) && 'nuxt-link-active'}`">
                                                Vrddhi </NuxtLink>
                                        </li>
                                    </ul>
                                </li>
                                <li class="nav-item">
                                    <NuxtLink to="/events"
                                        :class="`nav-link ${($nuxt.$route.path.includes('events')) && 'nuxt-link-active'}`">
                                        Upcoming Events </NuxtLink>
                                </li>
                                <li class="nav-item">
                                    <NuxtLink to="/contact-us"
                                        :class="`nav-link ${($nuxt.$route.path.includes('contact-us')) && 'nuxt-link-active'}`">
                                        Contact Us </NuxtLink>
                                </li>
                                <li v-if="!$auth.loggedIn" class="nav-item">
                                    <NuxtLink to="/auth/sign-in"
                                        :class="`nav-link ${($nuxt.$route.path.includes('auth/sign-in')) && 'nuxt-link-active'}`">
                                        Sign In </NuxtLink>
                                </li>
                                <li v-else class="nav-item">
                                    <NuxtLink to="#"
                                        :class="`nav-link dropdown-toggle ${($nuxt.$route.path.includes('profile')) && 'nuxt-link-active'}`">
                                        Account </NuxtLink>
                                    <ul class="dropdown-menu" style="left: unset; right: 0;">
                                        <li class="nav-item">
                                            <NuxtLink to="/profile"
                                                :class="`nav-link ${($nuxt.$route.path.includes('profile')) && 'nuxt-link-active'}`">
                                                Profile ({{ $auth.user.name }}) </NuxtLink>
                                        </li>
                                        <li class="nav-item">
                                            <a href="javascript:void(0)" class="nav-link" @click="logout"> Logout </a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
            <el-drawer size="40%" :visible.sync="drawer" direction="rtl">
                <el-menu default-active="2" class="el-menu-vertical-demo">
                    <el-menu-item index="1">
                            <NuxtLink to="/">
                                <i class="el-icon-s-home"></i>
                                <span>Home</span>
                            </NuxtLink>
                        </el-menu-item>
                    <!-- <el-submenu index="1">
                        <template slot="title">
                            <i class="el-icon-reading"></i>
                            <span>Content</span>
                        </template>
                        <NuxtLink to="/content/all">
                            <el-menu-item index="1-1">All Content</el-menu-item>
                        </NuxtLink>
                        <NuxtLink to="/content/free">
                            <el-menu-item index="1-2">Free Content</el-menu-item>
                        </NuxtLink>
                        <NuxtLink to="/content/paid">
                            <el-menu-item index="1-3">Paid Content</el-menu-item>
                        </NuxtLink>
                    </el-submenu> -->
                    <el-submenu index="3">
                        <template slot="title">
                            <i class="el-icon-school"></i>
                            <span>About Us</span>
                        </template>
                        <NuxtLink to="/mission-vision">
                            <el-menu-item index="3-1">Mission & Vision </el-menu-item>
                        </NuxtLink>
                        <NuxtLink to="/leadership-team">
                            <el-menu-item index="3-2">Leadership Team & Faculty </el-menu-item>
                        </NuxtLink>
                        <NuxtLink to="/testimonial">
                            <el-menu-item index="3-3">Testimonial </el-menu-item>
                        </NuxtLink>
                    </el-submenu>
                    <el-submenu index="4">
                        <template slot="title">
                            <i class="el-icon-trophy"></i>
                            <span>Achievers</span>
                        </template>
                        <NuxtLink v-if="!achieverCategoryLoading && achieverCategory.length > 0" v-for="(item, i) in achieverCategory" :key="i" :to="`/achievers/${item.slug}`">
                            <el-menu-item :index="`4-${i+1}`">{{ item.name }} </el-menu-item>
                        </NuxtLink>
                    </el-submenu>
                    <el-submenu index="5">
                        <template slot="title">
                            <i class="el-icon-notebook-2"></i>
                            <span>Knowledge Desk</span>
                        </template>
                        <NuxtLink to="/knowledge-desk">
                            <el-menu-item index="5-1">Blogs </el-menu-item>
                        </NuxtLink>
                        <NuxtLink to="/expert-tips">
                            <el-menu-item index="5-2">Expert Tips </el-menu-item>
                        </NuxtLink>
                        <NuxtLink to="/faw">
                            <el-menu-item index="5-3">Faq </el-menu-item>
                        </NuxtLink>
                        <NuxtLink to="/faw">
                            <el-menu-item index="5-4">Vrddhi </el-menu-item>
                        </NuxtLink>
                    </el-submenu>
                    <el-menu-item index="6">
                        <NuxtLink to="/events">
                            <i class="el-icon-data-analysis"></i>
                            <span>Upcoming Events</span>
                        </NuxtLink>
                    </el-menu-item>
                    <el-menu-item index="7">
                        <NuxtLink to="/contact-us">
                            <i class="el-icon-service"></i>
                            <span>Contact Us</span>
                        </NuxtLink>
                    </el-menu-item>
                    <el-menu-item v-if="!$auth.loggedIn" index="8">
                        <NuxtLink to="/auth/sign-in">
                            <i class="el-icon-user"></i>
                            <span>Sign In</span>
                        </NuxtLink>
                    </el-menu-item>
                    <el-submenu v-else index="9">
                        <template slot="title">
                            <i class="el-icon-user"></i>
                            <span>Account</span>
                        </template>
                        <NuxtLink to="/profile">
                            <el-menu-item index="9-1">Profile </el-menu-item>
                        </NuxtLink>
                        <el-menu-item index="9-2" @click="logout">Logout </el-menu-item>
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
    },
    data() {
        return {
            achieverCategory: [],
            achieverCategoryLoading: false,
            drawer: false,
        }
    },
    watch: {
        $route(to) {
            this.drawer = false;
        }
    },
    methods: {
        async getAchieverCategory(page = 0) {
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
        async logout() {
            await this.$auth.logout()
        }
    },
}
</script>