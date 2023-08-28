function About() {
  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8 h-screen">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-extrabold text-gray-800 mb-8">About <span className="text-red-500">Ambula</span></h1>
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Our Mission</h2>
          <p className="text-gray-600 text-lg">
            Ambula is a trailblazing app-based healthcare platform that aims to bridge communication gaps in healthcare delivery and empower individuals to take control of their health. Our mission is to provide seamless access to top-quality healthcare services and to guide our users towards a healthier future.
          </p>
        </div>
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Our Vision</h2>
          <p className="text-gray-600 text-lg">
            Our vision is to reshape the healthcare landscape in India by leveraging technology to make healthcare services more accessible, convenient, and patient-centric. We envision a future where everyone has the tools to proactively manage their health and well-being.
          </p>
        </div>
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Our Team</h2>
          <p className="text-gray-600 text-lg">
            At Ambula, our team consists of passionate professionals from various fields, including healthcare, technology, and design. We are united by our commitment to revolutionize healthcare delivery and make a positive impact on people{"'"}s lives.
          </p>
        </div>
        <div className="text-center">
          <p className="text-gray-600">
            Learn more about us and our mission on our official website: <a href="https://ambula.app/" className="text-blue-500 hover:underline">ambula.app</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
