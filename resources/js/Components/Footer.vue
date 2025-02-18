<template>
    <footer class="bg-gray-800 text-white p-4 mt-8">
        <div class="container mx-auto text-center">
            <p>&copy; {{ new Date().getFullYear() }} Technorics. All rights reserved.</p>
            <div class="flex justify-center space-x-4 mt-2">
                <a href="#" class="hover:text-gray-400">Privacy Policy</a>
                <a href="#" class="hover:text-gray-400">Terms of Service</a>
                <a href="#" class="hover:text-gray-400">Contact</a>
            </div>
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
