<template>
    <div>
        <!-- Hero Banner Section with Custom Background -->
        <section
            class="relative bg-blue-900 text-white h-96 flex items-center justify-center bg-cover bg-center"
            :style="{ backgroundImage: 'url(' + customBackgroundImage + ')' }"
        >
            <div class="text-center">
                <h1 class="text-5xl font-bold mb-4">Welcome to Technorics</h1>
                <p class="text-lg mb-6">Your one-stop shop for all things technology, from gadgets to home appliances.</p>
                <button
                    @click="navigateToCategory('TV')"
                    class="bg-blue-600 text-white py-2 px-6 rounded-full text-lg hover:bg-blue-500 transition"
                >
                    Explore TV Collection
                </button>
            </div>
        </section>

        <nav class="bg-blue-900 text-white py-2">
            <div class="container mx-auto flex items-center justify-between px-4">
                <!-- Left Section: Logo & Language -->
                <div class="flex items-center space-x-4">
                    <span class="text-2xl font-bold">Technorics</span>
                    <div class="relative">
                        <button class="flex items-center space-x-1">
                            <span>LV</span>
                            <i class="fas fa-chevron-down"></i>
                        </button>
                    </div>
                </div>

                <!-- Center Section: Search Bar -->
                <div class="flex-1 mx-4">
                    <div class="relative">
                        <input
                            type="text"
                            placeholder="Meklēt Technorics..."
                            class="w-full rounded-full py-2 px-4 text-black"
                        />
                        <i class="fas fa-search absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500"></i>
                    </div>
                </div>

                <!-- Right Section: User & Cart -->
                <div class="flex items-center space-x-6">
                    <button class="flex items-center space-x-2">
                        <i class="fas fa-user"></i>
                        <span><a href="/register">Mans Technorics</a></span>

                    </button>
                    <button class="flex items-center space-x-2">
                        <i class="fas fa-shopping-cart"></i>
                        <span>Groza</span>
                    </button>
                </div>
            </div>

            <!-- Second Row: Menu & Categories -->
            <div class="bg-blue-800 text-white py-2">
                <div class="container mx-auto flex justify-between px-4">
                    <div class="flex space-x-6">
                        <button class="font-bold border-b-2 border-white">Produkti</button>
                        <button>Pakalpojumi</button>
                        <button>Jaunumi</button>
                    </div>
                    <div class="text-sm">
                        Klientu centrs P.-Pk. 10-19 <i class="fas fa-phone"></i> 67 555 888
                    </div>
                </div>
            </div>

            <!-- Category Icons (Side-by-Side with Flexbox) -->
            <div class="bg-white text-blue-900 py-4 shadow">
                <div class="container mx-auto flex justify-center gap-8">
                    <div
                        v-for="category in categories"
                        :key="category.name"
                        class="flex flex-col items-center space-y-1 hover:scale-110 transform transition duration-300"
                    >
                        <i :class="category.icon" class="text-3xl hover:text-blue-600"></i>
                        <span class="text-sm" @click="navigateToCategory(category.name)">{{ category.name }}</span>
                    </div>
                </div>
            </div>
        </nav>

        <!-- Featured Section -->
        <section class="bg-gray-100 py-16">
            <div class="container mx-auto text-center">
                <h2 class="text-3xl font-bold text-blue-900 mb-8">Featured Products</h2>
                <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    <div class="bg-white shadow-lg p-4 rounded-md">
                        <img src="https://via.placeholder.com/200" alt="Product 1" class="w-full h-40 object-cover rounded-md mb-4" />
                        <h3 class="text-xl font-semibold text-blue-900">Product 1</h3>
                        <p class="text-gray-500">Category 1</p>
                        <p class="mt-2 text-blue-600">$199.99</p>
                    </div>
                    <div class="bg-white shadow-lg p-4 rounded-md">
                        <img src="https://via.placeholder.com/200" alt="Product 2" class="w-full h-40 object-cover rounded-md mb-4" />
                        <h3 class="text-xl font-semibold text-blue-900">Product 2</h3>
                        <p class="text-gray-500">Category 2</p>
                        <p class="mt-2 text-blue-600">$149.99</p>
                    </div>
                    <div class="bg-white shadow-lg p-4 rounded-md">
                        <img src="https://via.placeholder.com/200" alt="Product 3" class="w-full h-40 object-cover rounded-md mb-4" />
                        <h3 class="text-xl font-semibold text-blue-900">Product 3</h3>
                        <p class="text-gray-500">Category 3</p>
                        <p class="mt-2 text-blue-600">$299.99</p>
                    </div>
                    <div class="bg-white shadow-lg p-4 rounded-md">
                        <img src="https://via.placeholder.com/200" alt="Product 4" class="w-full h-40 object-cover rounded-md mb-4" />
                        <h3 class="text-xl font-semibold text-blue-900">Product 4</h3>
                        <p class="text-gray-500">Category 4</p>
                        <p class="mt-2 text-blue-600">$249.99</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Newsletter Signup Section -->
        <section class="bg-blue-900 text-white py-16">
            <div class="container mx-auto text-center">
                <h2 class="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
                <p class="text-lg mb-6">Get the latest news, promotions, and exclusive offers delivered straight to your inbox.</p>
                <form class="flex justify-center">
                    <input
                        type="email"
                        placeholder="Enter your email"
                        class="w-1/3 py-2 px-4 rounded-l-full text-black"
                    />
                    <button
                        type="submit"
                        class="bg-blue-600 text-white py-2 px-6 rounded-r-full hover:bg-blue-500 transition"
                    >
                        Subscribe
                    </button>
                </form>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    data() {
        return {
            customBackgroundImage: 'https://your-image-link.com/your-image.jpg', // Replace with your image URL
            categories: [
                { name: 'TV', icon: 'fas fa-tv' },
                { name: 'Izklaide', icon: 'fas fa-gamepad' },
                { name: 'IT', icon: 'fas fa-laptop' },
                { name: 'Telefoni', icon: 'fas fa-mobile-alt' },
                { name: 'Audio', icon: 'fas fa-headphones' },
            ],
        };
    },
    // methods: {
    //     navigateToCategory(categoryName) {
    //         this.$router.push({ name: 'category', params: { categoryName } });
    //     },
    // },
};
</script>

<style scoped>
button {
    transition: opacity 0.3s;
}
button:hover {
    opacity: 0.8;
}

/* Hero Banner Section */
.hero-banner {
    background-image: url('https://via.placeholder.com/1600x600');
    background-size: cover;
    background-position: center;
}

/* Footer Styling */
footer {
    background-color: #1e40af;
    color: white;
}
footer a {
    text-decoration: none;
    color: white;
}

footer a:hover {
    color: #4db8ff;
}
</style>
