<template>
    <div class="container mx-auto p-6">
        <h1 class="text-3xl font-bold mb-6">Register</h1>

        <div class="bg-white p-6 shadow-lg rounded-lg max-w-md mx-auto">
            <h2 class="text-xl font-semibold mb-4">Create an Account</h2>
            <form @submit.prevent="submitForm">
                <div class="mb-4">
                    <label class="block text-sm font-medium">Full Name</label>
                    <input v-model="form.name" type="text" class="w-full p-2 border rounded" required />
                </div>
                <div class="mb-4">
                    <label class="block text-sm font-medium">Email</label>
                    <input v-model="form.email" type="email" class="w-full p-2 border rounded" required />
                </div>
                <div class="mb-4">
                    <label class="block text-sm font-medium">Password</label>
                    <input v-model="form.password" type="password" class="w-full p-2 border rounded" required />
                </div>
                <div class="mb-4">
                    <label class="block text-sm font-medium">Confirm Password</label>
                    <input v-model="form.confirmPassword" type="password" class="w-full p-2 border rounded" required />
                </div>
                <button type="submit" class="bg-blue-600 text-white px-4 py-2 rounded w-full">Register</button>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            form: {
                name: '',
                email: '',
                password: '',
                confirmPassword: ''
            }
        };
    },
    methods: {
        submitForm() {
            if (this.form.password !== this.form.confirmPassword) {
                alert("Passwords do not match!");
                return;
            }
            alert(`Registration successful!\nName: ${this.form.name}\nEmail: ${this.form.email}`);
            this.form.name = '';
            this.form.email = '';
            this.form.password = '';
            this.form.confirmPassword = '';
        }
    }
};
</script>

<style scoped>
.container {
    max-width: 400px;
}
</style>
