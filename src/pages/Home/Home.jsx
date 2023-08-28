import { HomeSections } from "../../utils/HomeSections";

function Home() {
  return (
    <div className='min-h-screen py-16 px-4 sm:px-6 lg:px-8 h-full'>
    <div className='max-w-3xl mx-auto'>
      {HomeSections.map((section, index) => (
        <div key={index} className='mt-8 text-center'>
          <h2 className='text-2xl font-bold text-blue-950 mb-2 text-left'>{section.title}</h2>
          <p className='text-lg text-red-950 text-justify'>
            <span className=''>{section.subtitle}</span>
            {section.content}
          </p>
        </div>
      ))}
    </div>
  </div>
  );
}

export default Home;
