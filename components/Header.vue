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
                                    <a
                                        href="mailto:info@aaaedu.in"><span>info@aaaedu.in</span></a>
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

        <div class="navbar-area">
            <div class="mobile-responsive-nav">
                <div class="container">
                    <div class="mobile-responsive-menu">
                        <div class="logo">
                            <NuxtLink to="/">
                                <img src="/images/logos/new-logo.png" class="logo-one" alt="logo" />
                                <img src="/images/logos/new-logo.png" class="logo-two" alt="logo" />
                            </NuxtLink>
                        </div>
                    </div>
                </div>
            </div>

            <div class="desktop-nav nav-area">
                <div class="container-fluid">
                    <nav class="navbar navbar-expand-md navbar-light">
                        <NuxtLink to="/" class="navbar-brand">
                            <img src="/images/logos/new-logo.png" class="logo-one" alt="Logo" />
                            <img src="/images/logos/new-logo.png" class="logo-two" alt="Logo" />
                        </NuxtLink>
                        <div class="collapse navbar-collapse mean-menu" id="navbarSupportedContent">
                            <ul class="navbar-nav">
                                <li class="nav-item">
                                    <NuxtLink to="/" class="nav-link active"> Home </NuxtLink>
                                </li>
                                <li class="nav-item">
                                    <NuxtLink to="/about-us" class="nav-link dropdown-toggle"> About Us </NuxtLink>
                                    <ul class="dropdown-menu">
                                        <li class="nav-item">
                                            <NuxtLink to="/mission-vision" class="nav-link"> Mission & Vision </NuxtLink>
                                        </li>
                                        <li class="nav-item">
                                            <NuxtLink to="/leadership-team" class="nav-link"> Leadership Team & Faculty </NuxtLink>
                                        </li>
                                        <li class="nav-item">
                                            <NuxtLink to="/testimonial" class="nav-link"> Testimonial </NuxtLink>
                                        </li>
                                    </ul>
                                </li>
                                <li class="nav-item">
                                    <NuxtLink to="#" class="nav-link dropdown-toggle"> Courses </NuxtLink>
                                    <ul class="dropdown-menu">
                                        <li class="nav-item">
                                            <NuxtLink to="/courses" class="nav-link dropdown-toggle"> School (Std VIII to X) </NuxtLink>
                                            <ul class="dropdown-menu">
                                                <li class="nav-item">
                                                    <NuxtLink to="/courses/detail" class="nav-link"> Class 8 Foundation Course </NuxtLink>
                                                </li>
                                                <li class="nav-item">
                                                    <NuxtLink to="/courses/detail" class="nav-link"> Class 9 Foundation Course </NuxtLink>
                                                </li>
                                            </ul>
                                        </li>
                                        <li class="nav-item">
                                            <NuxtLink to="/courses/detail" class="nav-link"> Digital Live Classes </NuxtLink>
                                        </li>
                                    </ul>
                                </li>
                                <li class="nav-item">
                                    <NuxtLink to="#" class="nav-link dropdown-toggle"> Achievers </NuxtLink>
                                    <ul class="dropdown-menu">
                                        <li class="nav-item">
                                            <NuxtLink to="/achievers" class="nav-link"> JEE </NuxtLink>
                                        </li>
                                        <li class="nav-item">
                                            <NuxtLink to="/achievers" class="nav-link"> NEET </NuxtLink>
                                        </li>
                                        <li class="nav-item">
                                            <NuxtLink to="/achievers" class="nav-link"> K-CET </NuxtLink>
                                        </li>
                                        <li class="nav-item">
                                            <NuxtLink to="/achievers" class="nav-link"> NSTSE </NuxtLink>
                                        </li>
                                    </ul>
                                </li>
                                <li class="nav-item">
                                    <NuxtLink to="#" class="nav-link dropdown-toggle"> Knowledge Desk </NuxtLink>
                                    <ul class="dropdown-menu">
                                        <li class="nav-item">
                                            <NuxtLink to="/knowledge-desk" class="nav-link"> Blogs </NuxtLink>
                                        </li>
                                        <li class="nav-item">
                                            <NuxtLink to="/expert-tips" class="nav-link"> Expert Tips </NuxtLink>
                                        </li>
                                        <li class="nav-item">
                                            <NuxtLink to="/faq" class="nav-link"> FAQ </NuxtLink>
                                        </li>
                                        <li class="nav-item">
                                            <NuxtLink to="#" class="nav-link"> Vriddhi </NuxtLink>
                                        </li>
                                    </ul>
                                </li>
                                <li class="nav-item">
                                    <NuxtLink to="/events" class="nav-link"> Upcoming Events </NuxtLink>
                                </li>
                                <li class="nav-item">
                                    <NuxtLink to="/contact-us" class="nav-link"> Contact Us </NuxtLink>
                                </li>
                                <li class="nav-item">
                                    <NuxtLink to="/auth/sign-in" class="nav-link"> Sign In </NuxtLink>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
            <div class="side-nav-responsive">
                <div class="container">
                    <div class="dot-menu">
                        <div class="circle-inner">
                            <div class="circle circle-one"></div>
                            <div class="circle circle-two"></div>
                            <div class="circle circle-three"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'HeaderComponent',
}
</script>