function Popular() {
  const topics = [
    { name: "Artificial Intelligence", icon: "🤖", description: "Explore AI advancements and applications." },
    { name: "Cybersecurity", icon: "🔒", description: "Latest trends in online security and protection." },
    { name: "Cloud Computing", icon: "☁️", description: "Learn about AWS, Azure, and Google Cloud." },
    { name: "Blockchain", icon: "⛓️", description: "Decentralized tech and cryptocurrency innovations." },
    { name: "Software Development", icon: "💻", description: "Best practices and emerging programming trends." },
    { name: "DevOps", icon: "🚀", description: "CI/CD, automation, and modern infrastructure." },
    { name: "Data Science", icon: "📊", description: "Machine learning, big data, and analytics." },
    { name: "Internet of Things", icon: "🌐", description: "Connected devices and smart technology." },
    { name: "Augmented & Virtual Reality", icon: "🕶️", description: "Future of immersive digital experiences." },
    { name: "Artificial Intelligence", icon: "🤖", description: "Explore AI advancements and applications." },
    { name: "Cybersecurity", icon: "🔒", description: "Latest trends in online security and protection." },
    { name: "Cloud Computing", icon: "☁️", description: "Learn about AWS, Azure, and Google Cloud." },
  ];

  return (
    <>
      <div className="p-6 bg-gray-600 min-h-screen flex flex-col items-center">
        <h1 className=" text-[#ffc0c7] text-3xl font-bold mb-6">Popular IT Topics</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
          {topics.map((topic, index) => (
            <div 
              key={index} 
              className="bg-gray-800 shadow-md rounded-lg p-6 text-center  transition cursor-pointer flex flex-col items-center"
            >
              <span className="text-4xl mb-3">{topic.icon}</span>
              <p className=" text-white text-lg font-semibold text-gray-800">{topic.name}</p>
              <p className="text-white mt-2 text-sm">{topic.description}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Popular;
