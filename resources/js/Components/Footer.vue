<template>
    <footer class="bg-blue-900 text-white py-8">
        <div class="container mx-auto text-center">
            <div class="flex justify-center space-x-8 mb-6">
                <a href="#" class="hover:text-blue-400">About Us</a>
                <a href="/contacts" class="hover:text-blue-400">Contact</a>
                <a href="#" class="hover:text-blue-400">Terms & Conditions</a>
                <a href="#" class="hover:text-blue-400">Privacy Policy</a>
            </div>
            <p class="text-sm">&copy; 2025 Technorics. All rights reserved.</p>
        </div>
    </footer>
</template>

<script>
export default {
    name: "FooterComponent",
};
</script>

<style scoped>
footer a {
    transition: color 0.3s;
}
</style>
