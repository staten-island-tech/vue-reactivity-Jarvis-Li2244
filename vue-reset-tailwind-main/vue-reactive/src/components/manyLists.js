import { ref, reactive } from 'vue';

export const sectCirc = reactive([
    {
        color: "from-purple-600 to-fuchsia-500",
        orientation: "bg-linear-135 border-t-[1.5vw] border-l-[1.5vw] border-b-[0.5vw] border-r-[0.5vw] rounded-tl-[100%]",
        name: "analysts"
    },
    {
        color: "from-blue-600 to-sky-500",
        orientation: "bg-linear-225 border-t-[1.5vw] border-l-[0.5vw] border-b-[0.5vw] border-r-[1.5vw] rounded-tr-[100%]",
        name: "sentinels"
    },
    {
        color: "from-orange-400 to-yellow-400",
        orientation: "bg-linear-45 border-t-[0.5vw] border-l-[1.5vw] border-b-[1.5vw] border-r-[0.5vw] rounded-bl-[100%]",
        name: "explorers"
    },
    {
        color: "from-green-700 to-emerald-500",
        orientation: "bg-linear-315 border-t-[0.5vw] border-l-[0.5vw] border-b-[1.5vw] border-r-[1.5vw] rounded-br-[100%]",
        name: "diplomats"
    }
  ])

export const cardList = [
    { 
      title: 'INTJ', 
      label: "The Architect", 
      image: 'theArchitect.png', 
      type: "analysts", 
      info: "INTJs are strategic, logical, and visionary, with a strong desire to understand and improve the world.",
      link: "https://www.16personalities.com/intj-personality"
    },
    { 
      title: 'ENTP', 
      label: "The Debater", 
      image: 'theDebater.png', 
      type: "analysts", 
      info: "ENTPs are energetic, inventive, and love to challenge ideas and debate others in order to grow intellectually.",
      link: "https://www.16personalities.com/entp-personality"
    },
    { 
      title: 'INTP', 
      label: "The Logician", 
      image: 'theLogician.png', 
      type: "analysts", 
      info: "INTPs are independent, logical, and always eager to explore new theories, ideas, and innovative concepts.",
      link: "https://www.16personalities.com/intp-personality"
    },
    { 
      title: 'ENTJ', 
      label: "The Commander", 
      image: 'theCommander.png', 
      type: "analysts", 
      info: "ENTJs are assertive, strategic, and natural leaders, driven to achieve goals and make decisions efficiently.",
      link: "https://www.16personalities.com/entj-personality"
    },
    { 
      title: 'ISFJ', 
      label: "The Defender", 
      image: 'theDefender.png', 
      type: "sentinels", 
      info: "ISFJs are nurturing, responsible, and hardworking, often dedicated to helping and protecting others.",
      link: "https://www.16personalities.com/isfj-personality"
    },
    { 
      title: 'ISTJ', 
      label: "The Logistician", 
      image: 'theLogistician.png', 
      type: "sentinels", 
      info: "ISTJs are responsible, organized, and practical, with a strong preference for order, structure, and facts.",
      link: "https://www.16personalities.com/istj-personality"
    },
    { 
      title: 'ESTJ', 
      label: "The Executive", 
      image: 'theExecutive.png', 
      type: "sentinels", 
      info: "ESTJs are decisive, efficient, and strong-willed, often focused on organization, structure, and leadership.",
      link: "https://www.16personalities.com/estj-personality"
    },
    { 
      title: 'ESFJ', 
      label: "The Consul", 
      image: 'theConsul.png', 
      type: "sentinels", 
      info: "ESFJs are warm, outgoing, and highly attuned to the needs of others, often focused on maintaining harmony and stability.",
      link: "https://www.16personalities.com/esfj-personality"
    },
    { 
      title: 'ENFP', 
      label: "The Campaigner", 
      image: 'theCampaigner.png', 
      type: "diplomats", 
      info: "ENFPs are enthusiastic, creative, and curious, often seeking out new experiences and possibilities.",
      link: "https://www.16personalities.com/enfp-personality"
    },
    { 
      title: 'INFJ', 
      label: "The Advocate", 
      image: 'theAdvocate.png', 
      type: "diplomats", 
      info: "INFJs are insightful, compassionate, and deeply committed to helping others and creating a better world.",
      link: "https://www.16personalities.com/infj-personality"
    },
    { 
      title: 'INFP', 
      label: "The Mediator", 
      image: 'theMediator.png', 
      type: "diplomats", 
      info: "INFPs are idealistic, empathetic, and driven by a strong sense of personal values and deep empathy for others.",
      link: "https://www.16personalities.com/infp-personality"
    },
    { 
      title: 'ENFJ', 
      label: "The Protagonist", 
      image: 'theProtagonist.png', 
      type: "diplomats", 
      info: "ENFJs are empathetic, charismatic, and inspiring, often working to bring out the best in others and create harmony.",
      link: "https://www.16personalities.com/enfj-personality"
    },
    { 
      title: 'ISFP', 
      label: "The Adventurer", 
      image: 'theAdventurer.png', 
      type: "explorers", 
      info: "ISFPs are creative, artistic, and sensitive, often drawn to hands-on experiences and exploring the world around them.",
      link: "https://www.16personalities.com/isfp-personality"
    },
    { 
      title: 'ESTP', 
      label: "The Entrepreneur", 
      image: 'theEntrepreneur.png', 
      type: "explorers", 
      info: "ESTPs are energetic, spontaneous, and action-oriented, thriving in fast-paced environments and new challenges.",
      link: "https://www.16personalities.com/estp-personality"
    },
    { 
      title: 'ISTP', 
      label: "The Virtuoso", 
      image: 'theVirtuoso.png', 
      type: "explorers", 
      info: "ISTPs are practical, creative, and independent, known for their ability to adapt quickly and solve problems.",
      link: "https://www.16personalities.com/istp-personality"
    },
    { 
      title: 'ESFP', 
      label: "The Entertainer", 
      image: 'theEntertainer.png', 
      type: "explorers", 
      info: "ESFPs are outgoing, energetic, and spontaneous, often seeking fun and excitement while connecting with others.",
      link: "https://www.16personalities.com/esfp-personality"
    }
];
  
export const profileKey = ref([])
export const profileCard = ref([{ 
  title: '', 
  label: "", 
  image: '', 
  type: "", 
  info: "",
  link: ""
}])
