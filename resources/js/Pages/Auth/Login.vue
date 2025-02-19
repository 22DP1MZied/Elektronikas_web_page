<template>
    <div class="login-page bg-gray-100 min-h-screen flex items-center justify-center">
        <div class="bg-white p-8 rounded-lg shadow-lg w-full sm:w-96">
            <h2 class="text-2xl font-semibold text-center mb-6 text-blue-900">Log in to Technorics</h2>

            <form @submit.prevent="login">
                <div class="mb-4">
                    <label for="email" class="block text-sm font-medium text-blue-900">Email</label>
                    <input
                        v-model="email"
                        type="email"
                        id="email"
                        class="w-full mt-2 px-4 py-2 border border-gray-300 rounded-lg"
                        placeholder="Enter your email"
                        required
                    />
                </div>

                <div class="mb-4">
                    <label for="password" class="block text-sm font-medium text-blue-900">Password</label>
                    <input
                        v-model="password"
                        type="password"
                        id="password"
                        class="w-full mt-2 px-4 py-2 border border-gray-300 rounded-lg"
                        placeholder="Enter your password"
                        required
                    />
                </div>

                <div class="flex items-center justify-between">
                    <button
                        type="submit"
                        class="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition"
                    >
                        Log In
                    </button>
                </div>
            </form>

            <div class="text-center text-sm text-gray-600 mt-6">
                Don't have an account?
                <router-link to="/register" class="text-blue-600 hover:underline">Sign up here</router-link>.
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            email: '',
            password: '',
        };
    },
    methods: {
        login() {
            // Send login request to Laravel backend
            axios.post('/login', {
                email: this.email,
                password: this.password,
            })
                .then(response => {
                    alert('Login successful!');
                    this.$router.push('/');
                })
                .catch(error => {
                    console.error('Login failed:', error);
                    alert('Invalid credentials');
                });
        },
    },
};
</script>
