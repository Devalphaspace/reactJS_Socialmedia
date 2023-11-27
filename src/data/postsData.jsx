const postsData = [
  {
    id: 1,
    userId: 1,
    name: "John Welly",
    contentPic:
      "https://i.postimg.cc/XNxbhCqx/futuristic-14-920x518.jpg",
    profilePic:
      "https://i.postimg.cc/mZP646wP/2289-Sk-VNQSBGQU1-PIDEw-Mjgt-MTIy.jpg",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    cover: "https://images.unsplash.com/photo-1566994616736-69fe8cc420f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1086&q=80",
    place: 'USA',
    lan: "Engligh",
  },
  {
    id: 2,
    userId: 2,
    name: "Luccy",
    contentPic:
      "https://i.postimg.cc/90Xj0W8G/anime-girl-smile-23-920x518.jpg",
    profilePic: "https://i.postimg.cc/6Q8c9d5w/german.png",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    cover: "https://images.unsplash.com/photo-1434725039720-aaad6dd32dfe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1042&q=80",
    place: "Las Vegas",
    lan: "Engligh",
  },
  {
    id: 3,
    userId: 3,
    name: "Peter Leo",
    contentPic:
      "https://i.postimg.cc/zvdYR964/fantasy-traveler-14-920x518.jpg",
    profilePic: "https://i.postimg.cc/W3r7ZTkH/diver.png",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    cover: "https://images.unsplash.com/photo-1506869640319-fe1a24fd76dc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    place: "London",
    lan: "Engligh",
  },
  {
    id: 4,
    userId: 4,
    name: "Alijah Kajal",
    contentPic:
      "https://images.unsplash.com/photo-1699862160391-1aa177a3baff?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    profilePic: "https://i.postimg.cc/W3r7ZTkH/diver.png",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    cover: "https://images.unsplash.com/photo-1699862160391-1aa177a3baff?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    place: "London",
    lan: "Engligh",
  },
  {
    id: 5,
    userId: 5,
    name: "Miriam Veljko",
    contentPic:
      "https://images.unsplash.com/photo-1699626896851-4e5b96c51f15?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    profilePic: "https://i.postimg.cc/W3r7ZTkH/diver.png",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    cover: "https://images.unsplash.com/photo-1506869640319-fe1a24fd76dc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    place: "London",
    lan: "Engligh",
  },
  {
    id: 6,
    userId: 6,
    name: "Perce Soraya",
    contentPic:
      "https://images.unsplash.com/photo-1699455790015-da3e113241f6?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    profilePic: "https://i.postimg.cc/W3r7ZTkH/diver.png",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    cover: "https://images.unsplash.com/photo-1506869640319-fe1a24fd76dc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    place: "London",
    lan: "Engligh",
  },
  {
    id: 7,
    userId: 7,
    name: "Maxi Sumayya",
    contentPic:
      "https://images.unsplash.com/photo-1521815049196-8a76f26a2135?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    profilePic: "https://i.postimg.cc/W3r7ZTkH/diver.png",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    cover: "https://images.unsplash.com/photo-1506869640319-fe1a24fd76dc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    place: "London",
    lan: "Engligh",
  },
  {
    id: 8,
    userId: 8,
    name: "Lynet Traianus",
    contentPic:
      "https://images.unsplash.com/photo-1698681889353-d39a24b78bac?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    profilePic: "https://i.postimg.cc/W3r7ZTkH/diver.png",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    cover: "https://images.unsplash.com/photo-1506869640319-fe1a24fd76dc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    place: "London",
    lan: "Engligh",
  },
  {
    id: 9,
    userId: 9,
    name: "Şenay Amichai",
    contentPic:
      "https://images.unsplash.com/photo-1679967486442-562ac8798ad8?q=80&w=3028&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    profilePic: "https://i.postimg.cc/W3r7ZTkH/diver.png",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    cover: "https://images.unsplash.com/photo-1506869640319-fe1a24fd76dc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    place: "London",
    lan: "Engligh",
  },
  {
    id: 10,
    userId: 10,
    name: "Marlies Sandip",
    contentPic:
      "https://images.unsplash.com/photo-1640582024795-9208f2f0e177?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    profilePic: "https://i.postimg.cc/W3r7ZTkH/diver.png",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    cover: "https://images.unsplash.com/photo-1506869640319-fe1a24fd76dc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    place: "London",
    lan: "Engligh",
  },
];

export default postsData;
