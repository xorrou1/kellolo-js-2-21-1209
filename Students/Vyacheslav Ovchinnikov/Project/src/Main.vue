<template>
    <div>
            <div class="top">
                <header class="header center">
                    <div id='search-controller' class="header__left">
                        <a class="logo" href="#"><img class="logo__img" src="https://raw.githubusercontent.com/Veledar/STATIK/master/imgs/logo.png" alt="logo">BRAN<span>D</span></a>
                        <form action="#" class="search">
                            <a href="#" class="search__browse">Browse <i class="fas fa-caret-down"></i></a>
                            <input name="search" type="text" placeholder="Search for Item...">
                            <button type="submit"><i class="fas fa-search"></i></button>
                        </form>
                    </div>
                    <div class="header__right">
                        <a class="cart" href="#" id="basket-toggler" @click="showBasket = !showBasket"><img class="header__cart" src="https://raw.githubusercontent.com/Veledar/STATIK/master/imgs/cart.png" alt="Basket"></a>
                                                
                        <div class="headerCartWrap">
                            <div class="headerCartWrapBlock"></div>
                            <Basket  v-show="showBasket" ref="basket"/>
                        </div>

                        <a href="#" class="button">My Account <i class="fas fa-caret-down"></i></a>
                    </div>
                </header>
                <div class="line-horizon"></div>
                <nav class="top__nav center">
                    <ul class="menu">
                        <li class="menu__list"><a href="#" class="menu__link menu__link_active">Home</a>
                            <div class="drop drop__first">
                                <div class="drop__flex">
                                    <h3 class="drop__h3">Women</h3>
                                    <ul class="drop__ul">
                                        <li><a href="#" class="drop__a">Dresses</a></li>
                                        <li><a href="#" class="drop__a">Tops</a></li>
                                        <li><a href="#" class="drop__a">Sweaters/Knits</a></li>
                                        <li><a href="#" class="drop__a">Jackets/Coats</a></li>
                                        <li><a href="#" class="drop__a">Blazers</a></li>
                                        <li><a href="#" class="drop__a">Denim</a></li>
                                        <li><a href="#" class="drop__a">Leggings/Pants</a></li>
                                        <li><a href="#" class="drop__a">Skirts/Shorts</a></li>
                                        <li><a href="#" class="drop__a">Accessories </a></li>
                                    </ul>
                                </div>
                                <div class="drop__flex">
                                    <h3 class="drop__h3">Women</h3>
                                    <ul class="drop__ul">
                                        <li><a href="#" class="drop__a">Dresses</a></li>
                                        <li><a href="#" class="drop__a">Tops</a></li>
                                        <li><a href="#" class="drop__a">Sweaters/Knits</a></li>
                                        <li><a href="#" class="drop__a">Jackets/Coats</a></li>
                                    </ul>
                                    <h3 class="drop__h3">Women</h3>
                                    <ul class="drop__ul">
                                        <li><a href="#" class="drop__a">Dresses</a></li>
                                        <li><a href="#" class="drop__a">Tops</a></li>
                                        <li><a href="#" class="drop__a">Sweaters/Knits</a></li>
                                        <li><a href="#" class="drop__a">Jackets/Coats</a></li>
                                    </ul>
                                </div>
                                <div class="drop__flex">
                                    <h3 class="drop__h3">Women</h3>
                                    <ul class="drop__ul">
                                        <li><a href="#" class="drop__a">Dresses</a></li>
                                        <li><a href="#" class="drop__a">Tops</a></li>
                                        <li><a href="#" class="drop__a">Sweaters/Knits</a></li>
                                        <li><a href="#" class="drop__a">Jackets/Coats</a></li>
                                    </ul>
                                    <a href=""><img src="https://raw.githubusercontent.com/Veledar/STATIK/master/imgs/navDrop.jpg" alt="nav img"></a>
                                </div>
                            </div>
                        </li>
                        <li class="menu__list"><a href="#" class="menu__link">Man</a>
                            <div class="drop drop__first">
                                <div class="drop__flex">
                                    <h3 class="drop__h3">Women</h3>
                                    <ul class="drop__ul">
                                        <li><a href="#" class="drop__a">Dresses</a></li>
                                        <li><a href="#" class="drop__a">Tops</a></li>
                                        <li><a href="#" class="drop__a">Sweaters/Knits</a></li>
                                        <li><a href="#" class="drop__a">Jackets/Coats</a></li>
                                        <li><a href="#" class="drop__a">Blazers</a></li>
                                        <li><a href="#" class="drop__a">Denim</a></li>
                                        <li><a href="#" class="drop__a">Leggings/Pants</a></li>
                                        <li><a href="#" class="drop__a">Skirts/Shorts</a></li>
                                        <li><a href="#" class="drop__a">Accessories </a></li>
                                    </ul>
                                </div>
                                <div class="drop__flex">
                                    <h3 class="drop__h3">Women</h3>
                                    <ul class="drop__ul">
                                        <li><a href="#" class="drop__a">Dresses</a></li>
                                        <li><a href="#" class="drop__a">Tops</a></li>
                                        <li><a href="#" class="drop__a">Sweaters/Knits</a></li>
                                        <li><a href="#" class="drop__a">Jackets/Coats</a></li>
                                    </ul>
                                    <h3 class="drop__h3">Women</h3>
                                    <ul class="drop__ul">
                                        <li><a href="#" class="drop__a">Dresses</a></li>
                                        <li><a href="#" class="drop__a">Tops</a></li>
                                        <li><a href="#" class="drop__a">Sweaters/Knits</a></li>
                                        <li><a href="#" class="drop__a">Jackets/Coats</a></li>
                                    </ul>
                                </div>
                                <div class="drop__flex">
                                    <h3 class="drop__h3">Women</h3>
                                    <ul class="drop__ul">
                                        <li><a href="#" class="drop__a">Dresses</a></li>
                                        <li><a href="#" class="drop__a">Tops</a></li>
                                        <li><a href="#" class="drop__a">Sweaters/Knits</a></li>
                                        <li><a href="#" class="drop__a">Jackets/Coats</a></li>
                                    </ul>
                                    <a href=""><img src="https://raw.githubusercontent.com/Veledar/STATIK/master/imgs/navDrop.jpg" alt="nav img"></a>
                                </div>
                            </div>
                        </li>
                        <li class="menu__list"><a href="#" class="menu__link">Women</a>
                            <div class="drop drop__first">
                                <div class="drop__flex">
                                    <h3 class="drop__h3">Women</h3>
                                    <ul class="drop__ul">
                                        <li><a href="#" class="drop__a">Dresses</a></li>
                                        <li><a href="#" class="drop__a">Tops</a></li>
                                        <li><a href="#" class="drop__a">Sweaters/Knits</a></li>
                                        <li><a href="#" class="drop__a">Jackets/Coats</a></li>
                                        <li><a href="#" class="drop__a">Blazers</a></li>
                                        <li><a href="#" class="drop__a">Denim</a></li>
                                        <li><a href="#" class="drop__a">Leggings/Pants</a></li>
                                        <li><a href="#" class="drop__a">Skirts/Shorts</a></li>
                                        <li><a href="#" class="drop__a">Accessories </a></li>
                                    </ul>
                                </div>
                                <div class="drop__flex">
                                    <h3 class="drop__h3">Women</h3>
                                    <ul class="drop__ul">
                                        <li><a href="#" class="drop__a">Dresses</a></li>
                                        <li><a href="#" class="drop__a">Tops</a></li>
                                        <li><a href="#" class="drop__a">Sweaters/Knits</a></li>
                                        <li><a href="#" class="drop__a">Jackets/Coats</a></li>
                                    </ul>
                                    <h3 class="drop__h3">Women</h3>
                                    <ul class="drop__ul">
                                        <li><a href="#" class="drop__a">Dresses</a></li>
                                        <li><a href="#" class="drop__a">Tops</a></li>
                                        <li><a href="#" class="drop__a">Sweaters/Knits</a></li>
                                        <li><a href="#" class="drop__a">Jackets/Coats</a></li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                        <li class="menu__list"><a href="#" class="menu__link">Kids</a>
                            <div class="drop drop__last">
                                <div class="drop__flex">
                                    <h3 class="drop__h3">Women</h3>
                                    <ul class="drop__ul">
                                        <li><a href="#" class="drop__a">Dresses</a></li>
                                        <li><a href="#" class="drop__a">Tops</a></li>
                                        <li><a href="#" class="drop__a">Sweaters/Knits</a></li>
                                        <li><a href="#" class="drop__a">Jackets/Coats</a></li>
                                        <li><a href="#" class="drop__a">Blazers</a></li>
                                        <li><a href="#" class="drop__a">Denim</a></li>
                                        <li><a href="#" class="drop__a">Leggings/Pants</a></li>
                                        <li><a href="#" class="drop__a">Skirts/Shorts</a></li>
                                        <li><a href="#" class="drop__a">Accessories </a></li>
                                    </ul>
                                </div>
                                <div class="drop__flex">
                                    <h3 class="drop__h3">Women</h3>
                                    <ul class="drop__ul">
                                        <li><a href="#" class="drop__a">Dresses</a></li>
                                        <li><a href="#" class="drop__a">Tops</a></li>
                                        <li><a href="#" class="drop__a">Sweaters/Knits</a></li>
                                        <li><a href="#" class="drop__a">Jackets/Coats</a></li>
                                    </ul>
                                    <a href=""><img src="https://raw.githubusercontent.com/Veledar/STATIK/master/imgs/navDrop.jpg" alt="nav img"></a>
                                </div>
                            </div>
                        </li>
                        <li class="menu__list"><a href="#" class="menu__link">Accoseriese</a>
                            <div class="drop drop_last">
                                <div class="drop__flex">
                                    <h3 class="drop__h3">Women</h3>
                                    <ul class="drop__ul">
                                        <li><a href="#" class="drop__a">Dresses</a></li>
                                        <li><a href="#" class="drop__a">Tops</a></li>
                                        <li><a href="#" class="drop__a">Sweaters/Knits</a></li>
                                        <li><a href="#" class="drop__a">Jackets/Coats</a></li>
                                    </ul>
                                    <h3 class="drop__h3">Women</h3>
                                    <ul class="drop__ul">
                                        <li><a href="#" class="drop__a">Dresses</a></li>
                                        <li><a href="#" class="drop__a">Tops</a></li>
                                        <li><a href="#" class="drop__a">Sweaters/Knits</a></li>
                                        <li><a href="#" class="drop__a">Jackets/Coats</a></li>
                                    </ul>
                                </div>
                                <div class="drop__flex">
                                    <h3 class="drop__h3">Women</h3>
                                    <ul class="drop__ul">
                                        <li><a href="#" class="drop__a">Dresses</a></li>
                                        <li><a href="#" class="drop__a">Tops</a></li>
                                        <li><a href="#" class="drop__a">Sweaters/Knits</a></li>
                                        <li><a href="#" class="drop__a">Jackets/Coats</a></li>
                                    </ul>
                                    <a href=""><img src="https://raw.githubusercontent.com/Veledar/STATIK/master/imgs/navDrop.jpg" alt="nav img"></a>
                                </div>
                            </div>
                        </li>
                        <li class="menu__list"><a href="#" class="menu__link">Featured</a>
                            <div class="drop drop_last">
                                <div class="drop__flex">
                                    <h3 class="drop__h3">Women</h3>
                                    <ul class="drop__ul">
                                        <li><a href="#" class="drop__a">Dresses</a></li>
                                        <li><a href="#" class="drop__a">Tops</a></li>
                                        <li><a href="#" class="drop__a">Sweaters/Knits</a></li>
                                        <li><a href="#" class="drop__a">Jackets/Coats</a></li>
                                        <li><a href="#" class="drop__a">Blazers</a></li>
                                        <li><a href="#" class="drop__a">Denim</a></li>
                                        <li><a href="#" class="drop__a">Leggings/Pants</a></li>
                                        <li><a href="#" class="drop__a">Skirts/Shorts</a></li>
                                        <li><a href="#" class="drop__a">Accessories </a></li>
                                    </ul>
                                </div>
                                <div class="drop__flex">
                                    <h3 class="drop__h3">Women</h3>
                                    <ul class="drop__ul">
                                        <li><a href="#" class="drop__a">Dresses</a></li>
                                        <li><a href="#" class="drop__a">Tops</a></li>
                                        <li><a href="#" class="drop__a">Sweaters/Knits</a></li>
                                        <li><a href="#" class="drop__a">Jackets/Coats</a></li>
                                    </ul>
                                    <h3 class="drop__h3">Women</h3>
                                    <ul class="drop__ul">
                                        <li><a href="#" class="drop__a">Dresses</a></li>
                                        <li><a href="#" class="drop__a">Tops</a></li>
                                        <li><a href="#" class="drop__a">Sweaters/Knits</a></li>
                                        <li><a href="#" class="drop__a">Jackets/Coats</a></li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                        <li class="menu__list"><a href="#" class="menu__link">Hot Deals </a>
                            <div class="drop drop_last">
                                <div class="drop__flex">
                                    <h3 class="drop__h3">Women</h3>
                                    <ul class="drop__ul">
                                        <li><a href="#" class="drop__a">Dresses</a></li>
                                        <li><a href="#" class="drop__a">Tops</a></li>
                                        <li><a href="#" class="drop__a">Sweaters/Knits</a></li>
                                        <li><a href="#" class="drop__a">Jackets/Coats</a></li>
                                        <li><a href="#" class="drop__a">Blazers</a></li>
                                        <li><a href="#" class="drop__a">Denim</a></li>
                                        <li><a href="#" class="drop__a">Leggings/Pants</a></li>
                                        <li><a href="#" class="drop__a">Skirts/Shorts</a></li>
                                        <li><a href="#" class="drop__a">Accessories </a></li>
                                    </ul>
                                </div>
                                <div class="drop__flex">
                                    <h3 class="drop__h3">Women</h3>
                                    <ul class="drop__ul">
                                        <li><a href="#" class="drop__a">Dresses</a></li>
                                        <li><a href="#" class="drop__a">Tops</a></li>
                                        <li><a href="#" class="drop__a">Sweaters/Knits</a></li>
                                        <li><a href="#" class="drop__a">Jackets/Coats</a></li>
                                    </ul>
                                    <h3 class="drop__h3">Women</h3>
                                    <ul class="drop__ul">
                                        <li><a href="#" class="drop__a">Dresses</a></li>
                                        <li><a href="#" class="drop__a">Tops</a></li>
                                        <li><a href="#" class="drop__a">Sweaters/Knits</a></li>
                                        <li><a href="#" class="drop__a">Jackets/Coats</a></li>
                                    </ul>
                                </div>
                                <div class="drop__flex">
                                    <h3 class="drop__h3">Women</h3>
                                    <ul class="drop__ul">
                                        <li><a href="#" class="drop__a">Dresses</a></li>
                                        <li><a href="#" class="drop__a">Tops</a></li>
                                        <li><a href="#" class="drop__a">Sweaters/Knits</a></li>
                                        <li><a href="#" class="drop__a">Jackets/Coats</a></li>
                                    </ul>
                                    <a href=""><img src="https://raw.githubusercontent.com/Veledar/STATIK/master/imgs/navDrop.jpg" alt="nav img"></a>
                                </div>
                            </div>
                        </li>
                    </ul>
                </nav>
                <aside class="promo">
                    <div class="promo__content container">
                        <div></div>
                        <div><b>THE BRAND</b><br>OF LUXERIOUS <span>FASHION</span></div></div>
                </aside>
                <div class="offer-box center">
                    <section class="offer">
                        <a href="#"><img src="https://raw.githubusercontent.com/kellolo/static/master/img/JS1_shop/offer1.jpg" alt="photo"></a>
                        <div>
                            <h2 class="topOfferLabel">Hot deal</h2>
                            <p class="offerLabel">For men</p>
                        </div>
                    </section>
                    <section class="offer">
                        <a href="#"><img src="https://raw.githubusercontent.com/kellolo/static/master/img/JS1_shop/offer2.jpg" alt="photo"></a>
                        <div>
                            <h2 class="topOfferLabel">LUXIROUS & trendy</h2>
                            <p class="offerLabel">ACCESORIES</p>
                        </div>
                    </section>
                    <section class="offer">
                        <a href="#"><img src="https://raw.githubusercontent.com/kellolo/static/master/img/JS1_shop/offer3.jpg" alt="photo"></a>
                        <div>
                            <h2 class="topOfferLabel">30% offer</h2>
                            <p class="offerLabel">women</p>
                        </div>
                    </section>
                    <section class="offer">
                        <a href="#"><img src="https://raw.githubusercontent.com/kellolo/static/master/img/JS1_shop/offer4.jpg" alt="photo"></a>
                        <div>
                            <h2 class="topOfferLabel">new arrivals</h2>
                            <p class="offerLabel">FOR kids</p>
                        </div>
                    </section>
                </div>
                <main class="product-box center">
                    <h1 class="product-box__head">Fetured Items</h1>
                    <p class="product-box__desc">Shop for items based on what we featured in this week</p>
                    <Catalog />
                </main>
                <button class="product-box__button">Browse All Products<img src="https://raw.githubusercontent.com/Veledar/STATIK/master/imgs/arrowToRight.png" alt="Стрелка"></button>
                <div class="offerForWomen center">
                    <aside class="offerForWomenBanner">
                        <div class="offerText">
                            <div>30% <span>OFFER</span></div>
                            <div>FOR WOMEN</div></div>
                    </aside>
                    <div class="offerForWomenDetails">
                        <article class="offerUnit">
                            <h2 class="offerDetailsHead">Free Delivery</h2>
                            <p class="offerDetailsText">Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive models.</p>
                        </article>
                        <article class="offerUnit">
                            <h2 class="offerDetailsHead">Free Delivery</h2>
                            <p class="offerDetailsText">Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive models.</p>
                        </article>
                        <article class="offerUnit">
                            <h2 class="offerDetailsHead">Free Delivery</h2>
                            <p class="offerDetailsText">Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive models.</p>
                        </article>
                    </div>
                </div>
                <div class="subscribeWrap">
                    <div class="center subscribe">
                        <div class="subscribeReview">
                            <figure class="subscribeReviewUnit">
                                <div class="subscribeReviewUnitLeft">
                                    <img src="https://raw.githubusercontent.com/Veledar/STATIK/master/imgs/reviewPerson.png" alt="Фото персоны"></div>
                                <figcaption class="subscribeReviewUnitRight">
                                    <blockquote>“Vestibulum quis porttitor dui! Quisque viverra nunc mi, a pulvinar purus condimentum a. Aliquam condimentum mattis neque sed pretium”</blockquote>
                                    <div class="reviewName">Bin Burhan</div>
                                    <div class="reviewFrom">Dhaka, Bd</div>
                                    <div class="reviewsSwitch">
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                    </div>
                                </figcaption>
                            </figure>
                        </div>
                        <div class="subscribeDivider"></div>
                        <div class="subscribeRight">
                            <div class="subscribeRightHead">Subscribe</div>
                            <div class="subscribeRightText">FOR OUR NEWLETTER AND PROMOTION</div>
                            <form class="subscribeForm" action="#">
                                <input placeholder="Enter Your Email" type="text">
                                <button>Subscribe</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <footer class="footer center">
                <aside class="footer__brand">
                    <a class="logo footer__logo" href="#"><img class="logo__img" src="https://raw.githubusercontent.com/Veledar/STATIK/master/imgs/logo.png" alt="logo">BRAN<span>D</span></a>
                    <p class="footer__brand__text1">
                        Objectively transition extensive data rather than cross functional solutions. Monotonectally syndicate
                        multidisciplinary materials before go forward benefits. Intrinsicly syndicate an expanded array of
                        processes and cross-unit partnerships.</p>
                    <p class="footer__brand__text2">
                        Efficiently plagiarize 24/365 action items and focused infomediaries.
                        Distinctively seize superior initiatives for wireless technologies. Dynamically optimize.</p>
                </aside>
                <nav class="footer__column">
                    <h2>COMPANY</h2>
                    <a href="#">Home</a>
                    <a href="#">Shop</a>
                    <a href="#">About</a>
                    <a href="#">How It Works</a>
                    <a href="#">Contact</a>
                </nav>
                <nav class="footer__column">
                    <h2>INFORMATION</h2>
                    <a href="#">Tearms & Condition</a>
                    <a href="#">Privacy Policy</a>
                    <a href="#">How to Buy</a>
                    <a href="#">How to Sell</a>
                    <a href="#">Promotion</a>
                </nav>
                <nav class="footer__column">
                    <h2>SHOP CATEGORY</h2>
                    <a href="#">Men</a>
                    <a href="#">Women</a>
                    <a href="#">Child</a>
                    <a href="#">Apparel</a>
                    <a href="#">Browse All</a>
                </nav>
            </footer>
            <div class="copyrights center">
                <div class="copyrights__wrap">
                    <div class="copyrights__left">&copy; 2017 Brand All Rights Reserved.</div>
                    <nav class="copyrights__right">
                        <a href="#"><i class="fab fa-facebook-f"></i></a>
                        <a href="#"><i class="fab fa-twitter"></i></a>
                        <a href="#"><i class="fab fa-linkedin-in"></i></a>
                        <a href="#"><i class="fab fa-pinterest-p"></i></a>
                        <a href="#"><i class="fab fa-google-plus-g"></i></a>
                    </nav>
                </div>
            </div>
    </div>
</template>

<script>
import Catalog from './components/catalog.vue'
import Basket from './components/basket.vue'

export default {
    // components: { 'catalog-component': Catalog },
    components: { Catalog, Basket },
    data() {
        return {
            showBasket: false,
        }
    },
    methods: {
        _get(url) {
            return fetch(url).then(d => d.json())
        },  
    },
}
</script>

<style>

</style>