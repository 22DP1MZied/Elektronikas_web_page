<template>
    <div class="register-page bg-gray-100 min-h-screen flex items-center justify-center">
        <div class="bg-white p-8 rounded-lg shadow-lg w-full sm:w-96">
            <h2 class="text-2xl font-semibold text-center mb-6 text-blue-900">Register for Technorics</h2>

            <form @submit.prevent="handleSubmit">
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

                <div class="mb-4">
                    <label for="confirmPassword" class="block text-sm font-medium text-blue-900">Confirm Password</label>
                    <input
                        v-model="confirmPassword"
                        type="password"
                        id="confirmPassword"
                        class="w-full mt-2 px-4 py-2 border border-gray-300 rounded-lg"
                        placeholder="Confirm your password"
                        required
                    />
                </div>

                <div class="flex items-center justify-between">
                    <button
                        type="submit"
                        class="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition"
                    >
                        Register
                    </button>
                </div>
            </form>

            <p class="text-center text-sm text-gray-600 mt-4">
                Already have an account? <router-link to="/login" class="text-blue-600">Login here</router-link>.
            </p>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            email: '',
            password: '',
            confirmPassword: '',
        };
    },
    methods: {
        handleSubmit() {
            if (this.password !== this.confirmPassword) {
                alert('Passwords do not match!');
                return;
            }

            // Handle registration logic (e.g., send data to backend API)
            console.log('User Registered:', this.email);
            alert('Registration successful!');
            this.$router.push('/'); // Redirect to homepage after successful registration
        },
    },
};
</script>

<style scoped>
.register-page {
    background-color: #f7fafc;
}

button:hover {
    background-color: #3182ce;
}

input {
    font-size: 16px;
}

label {
    font-size: 14px;
}
</style>
