<template>
    <div class="infobox w-[45vw] h-[40vw] bg-teal-100 rounded-xl border-6 shadow-xl">
      
      <header class="bg-blue-600 text-white py-8">
        <div class="container mx-auto text-center">
            <h1 class="text-[3vw] font-bold">16 Personalities</h1>
            <p class="text-[2vw] mt-2">Discover Your Personality Type Based on Myers-Briggs Theory</p>
        </div>
      </header>

    <section class="container mx-auto my-12 px-6">
        <div class="bg-white rounded-lg shadow-lg p-6 mb-8">
            <h2 class="text-[2vw] font-bold mb-4">What is 16 Personalities?</h2>
            <p class="text-[1.25vw] leading-relaxed">
                <strong>16 Personalities</strong> is a popular online platform that offers a free personality test based on the
                <strong>Myers-Briggs Type Indicator (MBTI)</strong>, a well-known psychological framework for understanding
                personality differences. The website helps you discover your unique personality type, understand your
                strengths and weaknesses, and how to apply this knowledge to various aspects of your life.
            </p>
        </div>

        <div class="bg-white rounded-lg shadow-lg p-6 mb-8">
            <h2 class="text-[2vw] font-bold mb-4">The 16 Personality Types</h2>
            <p class="text-[1.25vw] leading-relaxed mb-4">
                The 16 personality types are divided into four categories based on the following traits:
            </p>
            <div class="grid grid-cols-2 gap-6 md:grid-cols-4">
                <div class="bg-purple-100 p-2 rounded-lg text-center">
                    <h3 class="text-[1.25vw] font-semibold">Analysts</h3>
                    <p class="text-[1vw]">Logical, strategic thinkers (e.g., INTJ, INTP, ENTJ, ENTP)</p>
                </div>
                <div class="bg-green-100 p-2 rounded-lg text-center">
                    <h3 class="text-[1.25vw] font-semibold">Diplomats</h3>
                    <p class="text-[1vw]">Empathetic, idealistic individuals (e.g., INFJ, INFP, ENFJ, ENFP)</p>
                </div>
                <div class="bg-blue-100 p-2 rounded-lg text-center">
                    <h3 class="text-[1.25vw] font-semibold">Sentinels</h3>
                    <p class="text-[1vw]">Practical and dependable personalities (e.g., ISTJ, ISFJ, ESTJ, ESFJ)</p>
                </div>
                <div class="bg-yellow-100 p-2 rounded-lg text-center">
                    <h3 class="text-[1.25vw] font-semibold">Explorers</h3>
                    <p class="text-[1vw]">Spontaneous and adaptable individuals (e.g., ISTP, ISFP, ESTP, ESFP)</p>
                </div>
            </div>
        </div>

        
        <div class="bg-white rounded-lg shadow-lg p-6 mb-8">
            <h2 class="text-[2vw] font-bold mb-4">Why Use 16 Personalities?</h2>
            <ul class="list-disc pl-6 space-y-4 text-[1.25vw] leading-relaxed">
                <li><strong>Self-Awareness:</strong> Understand your strengths, challenges, and tendencies.</li>
                <li><strong>Career Guidance:</strong> Receive advice on career paths that align with your personality type.</li>
                <li><strong>Relationship Compatibility:</strong> Explore how you interact with others based on personality types.</li>
                <li><strong>Free to Use:</strong> The test is completely free with additional premium insights available.</li>
            </ul>
        </div>

        <div class="bg-white rounded-lg shadow-lg p-6 mb-8">
            <h2 class="text-[2vw] font-bold mb-4">Purpose of this Website</h2>
            <p class="text-[1.25vw] leading-relaxed">
                This site serves as a gallery of personality types, allowing users to set one as their profile. 
                Inspired by the 16 Personalities framework, it is an independent creation and not affiliated with the official website. 
                Each section of the circle represents one of the four categories, with each containing four personality types. 
                The site aims to encourage exploration and provide users with fun, personalized profiles. 
                For more details, visit the official 16 Personalities website.
            </p>
        </div>
        
        <div class="bg-white rounded-lg shadow-lg p-6 mb-8">
            <h2 class="text-[2vw] font-bold mb-4">How to Take the Test</h2>
            <p class="text-[1.25vw] leading-relaxed">
                Taking the test is simple! Just visit the website, answer a series of multiple-choice questions, and in
                just a few minutes, you'll receive your personality type, complete with a detailed description and actionable
                insights. The test is free and takes around 10-15 minutes to complete.
            </p>
        </div>
    </section>
    </div>
</template>

<script setup>

</script>

<style lang="css" scoped>

.infobox{
  border-color: rgb(0, 146, 146);
  overflow-y: scroll;
  scrollbar-width: none;
}

</style>
