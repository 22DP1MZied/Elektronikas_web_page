<template>
    <div class="forgot-password-page bg-gray-100 min-h-screen flex items-center justify-center">
        <div class="bg-white p-8 rounded-lg shadow-lg w-full sm:w-96">
            <h2 class="text-2xl font-semibold text-center mb-6 text-blue-900">Forgot Your Password?</h2>

            <form @submit.prevent="resetPassword">
                <div class="mb-4">
                    <label for="email" class="block text-sm font-medium text-blue-900">Enter your email address</label>
                    <input
                        v-model="email"
                        type="email"
                        id="email"
                        class="w-full mt-2 px-4 py-2 border border-gray-300 rounded-lg"
                        placeholder="Enter your email"
                        required
                    />
                </div>

                <div class="flex items-center justify-between">
                    <button
                        type="submit"
                        class="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition"
                    >
                        Reset Password
                    </button>
                </div>
            </form>

            <div class="text-center text-sm text-gray-600 mt-6">
                Remembered your password?
                <router-link to="/login" class="text-blue-600 hover:underline">Log in here</router-link>.
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            email: '',
        };
    },
    methods: {
        resetPassword() {
            // Handle password reset logic (e.g., send email for reset)
            axios.post('/password/email', { email: this.email })
                .then(response => {
                    alert('Password reset link sent to your email!');
                    this.$router.push('/login');
                })
                .catch(error => {
                    console.error('Error sending reset email:', error);
                    alert('Error resetting password');
                });
        },
    },
};
</script>
