import { AboutSections } from "../../utils/AboutSections";

function About() {
  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8 h-screen">
    <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl font-extrabold text-gray-800 mb-8">
        About <span className="text-red-500">Ambula</span>
      </h1>
      {AboutSections.map((section, index) => (
        <div key={index} className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">{section.title}</h2>
          <p className="text-gray-600 text-lg">{section.content}</p>
        </div>
      ))}
      <div className="text-center">
        <p className="text-gray-600">
          Learn more about us and our mission on our official website:{' '}
          <a href="https://ambula.app/" className="text-blue-500 hover:underline">
            ambula.app
          </a>
        </p>
      </div>
    </div>
  </div>
  );
}

export default About;
