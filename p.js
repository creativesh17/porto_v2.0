var demos = [];
function set_demo(image, title, category) {
    demos.push({ image, title, category, url: '' });
}

set_demo('./images/homepage/homepage_1.png', 'Electronic Ecommerce Site', 'Show All');
set_demo('./images/homepage/homepage_2.png', 'Clothing Store', 'Show All');
set_demo('./images/homepage/homepage_3.png', 'Grocery Ecommerce Site', 'Show All');
set_demo('./images/homepage/homepage_4.png', 'Religious Clothing Store', 'Show All');
set_demo('./images/shop/shop_1.png', 'Electronic Ecommerce Site', 'Show All');
set_demo('./images/shop/shop_2.png', 'Clothing Store', 'Show All');
set_demo('./images/shop/shop_3.png', 'Grocery Ecommerce Site', 'Show All');
set_demo('./images/shop/shop_4.png', 'Religious Clothing Store', 'Show All');
set_demo('./images/product/product_1.png', 'Electronic Ecommerce Site', 'Show All');
set_demo('./images/product/product_2.png', 'Clothing Store', 'Show All');
set_demo('./images/product/product_3.png', 'Grocery Ecommerce Site', 'Show All');
set_demo('./images/product/product_4.png', 'Religious Clothing Store', 'Show All');


set_demo('./images/homepage/homepage_1.png', 'Electronic Ecommerce Site', 'Homepage');
set_demo('./images/homepage/homepage_2.png', 'Clothing Store', 'Homepage');
set_demo('./images/homepage/homepage_3.png', 'Grocery Ecommerce Site', 'Homepage');
set_demo('./images/homepage/homepage_4.png', 'Religious Clothing Store', 'Homepage');

set_demo('./images/shop/shop_1.png', 'Electronic Ecommerce Site', 'Shop');
set_demo('./images/shop/shop_2.png', 'Clothing Store', 'Shop');
set_demo('./images/shop/shop_3.png', 'Grocery Ecommerce Site', 'Shop');
set_demo('./images/shop/shop_4.png', 'Religious Clothing Store', 'Shop');

set_demo('./images/product/product_1.png', 'Electronic Ecommerce Site', 'Product');
set_demo('./images/product/product_2.png', 'Clothing Store', 'Product');
set_demo('./images/product/product_3.png', 'Grocery Ecommerce Site', 'Product');
set_demo('./images/product/product_4.png', 'Religious Clothing Store', 'Product');

set_demo('./images/others/cart_1.png', 'Electronic Ecommerce Site', 'Others');
set_demo('./images/others/checkout_1.png', 'Clothing Store', 'Others');
set_demo('./images/others/wishlist_1.png', 'Religious Clothing Store', 'Others');
set_demo('./images/others/dashboard_1.png', 'Grocery Ecommerce Site', 'Others');

let categories = demos.map(i => i.category)
    .filter((i, k, arr) => arr.indexOf(i) === k)
    .map((i, key) => {
        return `
        <li class="nav-item ${key == 0 ? 'active' : ''}" data-option-value="${key == 0 ? '*' : "."+i.toLowerCase().replaceAll(' ','_')}">
            <a class="nav-link custom-nav-link ${key == 0 ? 'active' : ''}" href="#">${i}</a>
        </li>
    `;
    }).join('');

document.getElementById('showcase_category').insertAdjacentHTML('afterbegin', categories);

document.getElementById('demo_item_html').innerHTML = demos
    .map(i => {
        return `
    <div class="col-sm-6 col-md-4 col-lg-3 col-xl-1-5 isotope-item ${i.category.toLowerCase().replaceAll(' ','_')}"
        style="position: absolute; left: 0px; top: 0px;">
        <div class="appear-animation animated" data-appear-animation="fadeInUpShorter"
            data-appear-animation-delay="" data-appear-animation-duration="750">
            <div class="portfolio-item hover-effect-1 text-center">
                <a href="${i.url}" title="demo">
                    <span
                        class="thumb-info thumb-info-no-zoom thumb-info-no-overlay thumb-info-no-bg">
                        <span class="thumb-info-wrapper thumb-info-wrapper-demos m-0">
                            <img data-plugin-options="{&#39;threshold&#39;: 500, &#39;effect&#39;:&#39;fadeIn&#39;}"
                                src="${i.image}"
                                data-plugin-lazyload=""
                                data-original="${i.image}" width="350"
                                height="259" class="img-fluid" alt="">
                        </span>
                    </span>
                </a>
                <h5 class="text-color-dark text-capitalize mt-3">${i.title}</h5>
            </div>
        </div>
    </div>
    `
    }).join('')
