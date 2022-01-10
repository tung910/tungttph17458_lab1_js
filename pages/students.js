const Students = {
  render() {
    return /*html */ `
<nav aria-label="Top" class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div class="border-b border-gray-200">
<div class="h-16 flex items-center">
  <!-- Mobile menu toggle, controls the 'mobileMenuOpen' state. -->
  <button type="button" class="bg-white p-2 rounded-md text-gray-400 lg:hidden">
    <span class="sr-only">Open menu</span>
    <!-- Heroicon name: outline/menu -->
    <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  </button>

  <!-- Logo -->
  <div class="ml-4 flex lg:ml-0">
    <a href="#">
      <span class="sr-only">Workflow</span>
      <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark.svg?color=indigo&shade=600" alt="">
    </a>
  </div>

  <!-- Flyout menus -->
  <div class="hidden lg:ml-8 lg:block lg:self-stretch">
    <div class="h-full flex space-x-8">
      <div class="flex">
        <div class="relative flex">
          <!-- Item active: "border-indigo-600 text-indigo-600", Item inactive: "border-transparent text-gray-700 hover:text-gray-800" -->
          <button type="button" class="border-transparent text-gray-700 hover:text-gray-800 relative z-10 flex items-center transition-colors ease-out duration-200 text-sm font-medium border-b-2 -mb-px pt-px" aria-expanded="false">
            Women
          </button>
        </div>

        <!--
          'Women' flyout menu, show/hide based on flyout menu state.

          Entering: "transition ease-out duration-200"
            From: "opacity-0"
            To: "opacity-100"
          Leaving: "transition ease-in duration-150"
            From: "opacity-100"
            To: "opacity-0"
        -->
        <div class="absolute top-full inset-x-0 text-sm text-gray-500">
          <!-- Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow -->
          <div class="absolute inset-0 top-1/2 bg-white shadow" aria-hidden="true"></div>

          <div class="relative bg-white">
            <div class="max-w-7xl mx-auto px-8">
              <div class="grid grid-cols-2 gap-y-10 gap-x-8 py-16">
                <div class="col-start-2 grid grid-cols-2 gap-x-8">
                  <div class="group relative text-base sm:text-sm">
                    <div class="aspect-w-1 aspect-h-1 rounded-lg bg-gray-100 overflow-hidden group-hover:opacity-75">
                      <img src="https://tailwindui.com/img/ecommerce-images/mega-menu-category-01.jpg" alt="Models sitting back to back, wearing Basic Tee in black and bone." class="object-center object-cover">
                    </div>
                    <a href="#" class="mt-6 block font-medium text-gray-900">
                      <span class="absolute z-10 inset-0" aria-hidden="true"></span>
                      New Arrivals
                    </a>
                    <p aria-hidden="true" class="mt-1">Shop now</p>
                  </div>

                  <div class="group relative text-base sm:text-sm">
                    <div class="aspect-w-1 aspect-h-1 rounded-lg bg-gray-100 overflow-hidden group-hover:opacity-75">
                      <img src="https://tailwindui.com/img/ecommerce-images/mega-menu-category-02.jpg" alt="Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees." class="object-center object-cover">
                    </div>
                    <a href="#" class="mt-6 block font-medium text-gray-900">
                      <span class="absolute z-10 inset-0" aria-hidden="true"></span>
                      Basic Tees
                    </a>
                    <p aria-hidden="true" class="mt-1">Shop now</p>
                  </div>
                </div>
                <div class="row-start-1 grid grid-cols-3 gap-y-10 gap-x-8 text-sm">
                  <div>
                    <p id="Clothing-heading" class="font-medium text-gray-900">
                      Clothing
                    </p>
                    <ul role="list" aria-labelledby="Clothing-heading" class="mt-6 space-y-6 sm:mt-4 sm:space-y-4">
                      <li class="flex">
                        <a href="#" class="hover:text-gray-800">
                          Tops
                        </a>
                      </li>

                      <li class="flex">
                        <a href="#" class="hover:text-gray-800">
                          Dresses
                        </a>
                      </li>

                      <li class="flex">
                        <a href="#" class="hover:text-gray-800">
                          Pants
                        </a>
                      </li>

                      <li class="flex">
                        <a href="#" class="hover:text-gray-800">
                          Denim
                        </a>
                      </li>

                      <li class="flex">
                        <a href="#" class="hover:text-gray-800">
                          Sweaters
                        </a>
                      </li>

                      <li class="flex">
                        <a href="#" class="hover:text-gray-800">
                          T-Shirts
                        </a>
                      </li>

                      <li class="flex">
                        <a href="#" class="hover:text-gray-800">
                          Jackets
                        </a>
                      </li>

                      <li class="flex">
                        <a href="#" class="hover:text-gray-800">
                          Activewear
                        </a>
                      </li>

                      <li class="flex">
                        <a href="#" class="hover:text-gray-800">
                          Browse All
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <p id="Accessories-heading" class="font-medium text-gray-900">
                      Accessories
                    </p>
                    <ul role="list" aria-labelledby="Accessories-heading" class="mt-6 space-y-6 sm:mt-4 sm:space-y-4">
                      <li class="flex">
                        <a href="#" class="hover:text-gray-800">
                          Watches
                        </a>
                      </li>

                      <li class="flex">
                        <a href="#" class="hover:text-gray-800">
                          Wallets
                        </a>
                      </li>

                      <li class="flex">
                        <a href="#" class="hover:text-gray-800">
                          Bags
                        </a>
                      </li>

                      <li class="flex">
                        <a href="#" class="hover:text-gray-800">
                          Sunglasses
                        </a>
                      </li>

                      <li class="flex">
                        <a href="#" class="hover:text-gray-800">
                          Hats
                        </a>
                      </li>

                      <li class="flex">
                        <a href="#" class="hover:text-gray-800">
                          Belts
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <p id="Brands-heading" class="font-medium text-gray-900">
                      Brands
                    </p>
                    <ul role="list" aria-labelledby="Brands-heading" class="mt-6 space-y-6 sm:mt-4 sm:space-y-4">
                      <li class="flex">
                        <a href="#" class="hover:text-gray-800">
                          Full Nelson
                        </a>
                      </li>

                      <li class="flex">
                        <a href="#" class="hover:text-gray-800">
                          My Way
                        </a>
                      </li>

                      <li class="flex">
                        <a href="#" class="hover:text-gray-800">
                          Re-Arranged
                        </a>
                      </li>

                      <li class="flex">
                        <a href="#" class="hover:text-gray-800">
                          Counterfeit
                        </a>
                      </li>

                      <li class="flex">
                        <a href="#" class="hover:text-gray-800">
                          Significant Other
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

      <div class="flex">
        <div class="relative flex">
          <!-- Item active: "border-indigo-600 text-indigo-600", Item inactive: "border-transparent text-gray-700 hover:text-gray-800" -->
          <button type="button" class="border-transparent text-gray-700 hover:text-gray-800 relative z-10 flex items-center transition-colors ease-out duration-200 text-sm font-medium border-b-2 -mb-px pt-px" aria-expanded="false">
            Men
          </button>
        </div>

        <!--
          'Men' flyout menu, show/hide based on flyout menu state.

          Entering: "transition ease-out duration-200"
            From: "opacity-0"
            To: "opacity-100"
          Leaving: "transition ease-in duration-150"
            From: "opacity-100"
            To: "opacity-0"
        -->
        <div class="absolute top-full inset-x-0 text-sm text-gray-500">
          <!-- Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow -->
          <div class="absolute inset-0 top-1/2 bg-white shadow" aria-hidden="true"></div>

          <div class="relative bg-white">
            <div class="max-w-7xl mx-auto px-8">
              <div class="grid grid-cols-2 gap-y-10 gap-x-8 py-16">
                <div class="col-start-2 grid grid-cols-2 gap-x-8">
                  <div class="group relative text-base sm:text-sm">
                    <div class="aspect-w-1 aspect-h-1 rounded-lg bg-gray-100 overflow-hidden group-hover:opacity-75">
                      <img src="https://tailwindui.com/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg" alt="Drawstring top with elastic loop closure and textured interior padding." class="object-center object-cover">
                    </div>
                    <a href="#" class="mt-6 block font-medium text-gray-900">
                      <span class="absolute z-10 inset-0" aria-hidden="true"></span>
                      New Arrivals
                    </a>
                    <p aria-hidden="true" class="mt-1">Shop now</p>
                  </div>

                  <div class="group relative text-base sm:text-sm">
                    <div class="aspect-w-1 aspect-h-1 rounded-lg bg-gray-100 overflow-hidden group-hover:opacity-75">
                      <img src="https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-06.jpg" alt="Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt." class="object-center object-cover">
                    </div>
                    <a href="#" class="mt-6 block font-medium text-gray-900">
                      <span class="absolute z-10 inset-0" aria-hidden="true"></span>
                      Artwork Tees
                    </a>
                    <p aria-hidden="true" class="mt-1">Shop now</p>
                  </div>
                </div>
                <div class="row-start-1 grid grid-cols-3 gap-y-10 gap-x-8 text-sm">
                  <div>
                    <p id="Clothing-heading" class="font-medium text-gray-900">
                      Clothing
                    </p>
                    <ul role="list" aria-labelledby="Clothing-heading" class="mt-6 space-y-6 sm:mt-4 sm:space-y-4">
                      <li class="flex">
                        <a href="#" class="hover:text-gray-800">
                          Tops
                        </a>
                      </li>

                      <li class="flex">
                        <a href="#" class="hover:text-gray-800">
                          Pants
                        </a>
                      </li>

                      <li class="flex">
                        <a href="#" class="hover:text-gray-800">
                          Sweaters
                        </a>
                      </li>

                      <li class="flex">
                        <a href="#" class="hover:text-gray-800">
                          T-Shirts
                        </a>
                      </li>

                      <li class="flex">
                        <a href="#" class="hover:text-gray-800">
                          Jackets
                        </a>
                      </li>

                      <li class="flex">
                        <a href="#" class="hover:text-gray-800">
                          Activewear
                        </a>
                      </li>

                      <li class="flex">
                        <a href="#" class="hover:text-gray-800">
                          Browse All
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <p id="Accessories-heading" class="font-medium text-gray-900">
                      Accessories
                    </p>
                    <ul role="list" aria-labelledby="Accessories-heading" class="mt-6 space-y-6 sm:mt-4 sm:space-y-4">
                      <li class="flex">
                        <a href="#" class="hover:text-gray-800">
                          Watches
                        </a>
                      </li>

                      <li class="flex">
                        <a href="#" class="hover:text-gray-800">
                          Wallets
                        </a>
                      </li>

                      <li class="flex">
                        <a href="#" class="hover:text-gray-800">
                          Bags
                        </a>
                      </li>

                      <li class="flex">
                        <a href="#" class="hover:text-gray-800">
                          Sunglasses
                        </a>
                      </li>

                      <li class="flex">
                        <a href="#" class="hover:text-gray-800">
                          Hats
                        </a>
                      </li>

                      <li class="flex">
                        <a href="#" class="hover:text-gray-800">
                          Belts
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <p id="Brands-heading" class="font-medium text-gray-900">
                      Brands
                    </p>
                    <ul role="list" aria-labelledby="Brands-heading" class="mt-6 space-y-6 sm:mt-4 sm:space-y-4">
                      <li class="flex">
                        <a href="#" class="hover:text-gray-800">
                          Re-Arranged
                        </a>
                      </li>

                      <li class="flex">
                        <a href="#" class="hover:text-gray-800">
                          Counterfeit
                        </a>
                      </li>

                      <li class="flex">
                        <a href="#" class="hover:text-gray-800">
                          Full Nelson
                        </a>
                      </li>

                      <li class="flex">
                        <a href="#" class="hover:text-gray-800">
                          My Way
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

      <a href="#" class="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800">Company</a>

      <a href="#" class="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800">Stores</a>
    </div>
  </div>

  <div class="ml-auto flex items-center">
    <div class="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
      <a href="#" class="text-sm font-medium text-gray-700 hover:text-gray-800">Sign in</a>
      <span class="h-6 w-px bg-gray-200" aria-hidden="true"></span>
      <a href="#" class="text-sm font-medium text-gray-700 hover:text-gray-800">Create account</a>
    </div>

    <div class="hidden lg:ml-8 lg:flex">
      <a href="#" class="text-gray-700 hover:text-gray-800 flex items-center">
        <img src="https://tailwindui.com/img/flags/flag-canada.svg" alt="" class="w-5 h-auto block flex-shrink-0">
        <span class="ml-3 block text-sm font-medium">
          CAD
        </span>
        <span class="sr-only">, change currency</span>
      </a>
    </div>

    <!-- Search -->
    <div class="flex lg:ml-6">
      <a href="#" class="p-2 text-gray-400 hover:text-gray-500">
        <span class="sr-only">Search</span>
        <!-- Heroicon name: outline/search -->
        <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </a>
    </div>

    <!-- Cart -->
    <div class="ml-4 flow-root lg:ml-6">
      <a href="#" class="group -m-2 p-2 flex items-center">
        <!-- Heroicon name: outline/shopping-bag -->
        <svg class="flex-shrink-0 h-6 w-6 text-gray-400 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
        <span class="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">0</span>
        <span class="sr-only">items in cart, view bag</span>
      </a>
    </div>
  </div>
</div>
</div>
</nav>
</header>
</div>`;
  }
};
export default Students;