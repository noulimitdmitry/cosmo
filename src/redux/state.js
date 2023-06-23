import reRender from '../render'

const state = {
  profilePage: {
    posts: [
      { text: "Post 1", likes: 23 },
      { text: "Post 2", likes: 12 },
      { text: "Post 3", likes: 24 },
      { text: "Post 4", likes: 543 },
      { text: "Post 5", likes: 1 },
    ],
    messagesPage: {
      friends: [
        { name: "Mercury", id: 1 },
        { name: "Venus", id: 2 },
        { name: "Earth", id: 3 },
        { name: "Mars", id: 4 },
        { name: "Saturn", id: 1 },
        { name: "Uranus", id: 1 },
        { name: "Neptune", id: 1 },
      ],
      dialogs: [
        "Hey, have you ever wondered what it would be like to visit other planets in our solar system?",
        "Absolutely! I often dream about exploring the mysteries of our celestial neighbors. Which planet intrigues you the most?",
        "Well, being from Mars, Ive always been curious about Earth. It's fascinating how it has such a diverse range of ecosystems and abundant water. What about you?",
        "As a Venutian, I'm naturally drawn to Venus. It's known for its extreme temperatures and thick atmosphere, but there's still so much we don't know about it. The idea of studying its unique conditions excites me.",
        "True, Venus is quite a mystery. But I've also heard that Jupiter, with its massive size and swirling storms, is a sight to behold. Imagine witnessing its iconic Great Red Spot up close!",
        "Absolutely! Jupiter's majestic presence and its many moons make it a captivating destination. And let's not forget about Saturn with its mesmerizing rings. It would be incredible to see them firsthand.",
        "Agreed! And what about the outermost planets, Uranus and Neptune? They're often overlooked, but their icy atmospheres and intriguing compositions make them intriguing candidates for exploration.",
        "You're right. The allure of the distant and enigmatic Uranus and Neptune cannot be ignored. The more we discover about our solar system, the more it becomes clear that there's so much left to explore and understand.",
        "Indeed, the wonders of our solar system are endless. It's a constant reminder of how vast and awe-inspiring the universe truly is. Let's keep dreaming and pushing the boundaries of knowledge together!",
      ],
    },
  },
};

export const addPost = (message) => {
  state.profilePage.posts.push({ text: message, likes: 0 });
  reRender(state)
};

export default state;
