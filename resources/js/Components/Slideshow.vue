<template>
    <div class="relative w-full max-w-2xl mx-auto">
        <div class="overflow-hidden rounded-lg">
            <img :src="images[currentIndex]" class="w-full h-64 object-cover transition-all duration-500" />
        </div>
        <button @click="prevSlide" class="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-3 py-1 rounded">&#10094;</button>
        <button @click="nextSlide" class="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-3 py-1 rounded">&#10095;</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            images: [
                'https://rgbcustompc.com/cdn/shop/files/SY-PCBuild-FrostNov2023_300x.png?v=1703786732',
                'https://www.pcworld.com/wp-content/uploads/2024/04/pcw08_Asus-Gaming-PC.jpg?quality=50&strip=all&w=1024',
                'https://store.hp.com/app/assets/images/uploads/prod/how-to-build-a-gaming-computer-hero1555706958293.jpg'
            ],
            currentIndex: 0,
        };
    },
    methods: {
        prevSlide() {
            this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
        },
        nextSlide() {
            this.currentIndex = (this.currentIndex + 1) % this.images.length;
        }
    }
};
</script>

<style scoped>
button {
    transition: background-color 0.3s;
}
button:hover {
    background-color: #555;
}
</style>
