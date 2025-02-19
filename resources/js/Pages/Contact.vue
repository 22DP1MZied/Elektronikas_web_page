<template>
    <div class="container mx-auto p-6">
        <h1 class="text-3xl font-bold mb-6">Contact Us</h1>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <!-- Contact Form -->
            <div class="bg-white p-6 shadow-lg rounded-lg">
                <h2 class="text-xl font-semibold mb-4">Send us a message</h2>
                <form @submit.prevent="submitForm">
                    <div class="mb-4">
                        <label class="block text-sm font-medium">Name</label>
                        <input v-model="form.name" type="text" class="w-full p-2 border rounded" required />
                    </div>
                    <div class="mb-4">
                        <label class="block text-sm font-medium">Email</label>
                        <input v-model="form.email" type="email" class="w-full p-2 border rounded" required />
                    </div>
                    <div class="mb-4">
                        <label class="block text-sm font-medium">Message</label>
                        <textarea v-model="form.message" class="w-full p-2 border rounded" rows="4" required></textarea>
                    </div>
                    <button type="submit" class="bg-blue-600 text-white px-4 py-2 rounded">Send</button>
                </form>
            </div>

            <!-- Contact Details -->
            <div class="bg-white p-6 shadow-lg rounded-lg">
                <h2 class="text-xl font-semibold mb-4">Our Contact Details</h2>
                <p><strong>Phone:</strong> +371 123 456 78</p>
                <p><strong>Email:</strong> support@technorics.com</p>
                <p><strong>Address:</strong> Brīvības iela 100, Rīga, Latvia</p>
                <div class="mt-4">
                    <iframe
                        class="w-full h-64 rounded"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2176.4561!2d24.105184!3d56.950244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46eecf06f3b3b3b5%3A0x23f06f05a4b4a4a5!2sBr%C4%ABv%C4%ABbas%20iela%20100%2C%20R%C4%ABga%2C%20Latvia!5e0!3m2!1sen!2slv!4v1616144552465!5m2!1sen!2slv"
                        allowfullscreen="" loading="lazy">
                    </iframe>
                </div>
            </div>
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
                message: ''
            }
        };
    },
    methods: {
        submitForm() {
            alert(`Message sent!\nName: ${this.form.name}\nEmail: ${this.form.email}\nMessage: ${this.form.message}`);
            this.form.name = '';
            this.form.email = '';
            this.form.message = '';
        }
    }
};
</script>

<style scoped>
.container {
    max-width: 800px;
}
</style>
