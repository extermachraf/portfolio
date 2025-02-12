const skills = [
  "Next.js",
  "React.js",
  "JavaScript",
  "TypeScript",
  "Docker",
  "Java",
  "C++",
  "C",
  "Shell",
  "NestJS",
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">My Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-4 text-center"
            >
              <span className="text-lg font-semibold">{skill}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
