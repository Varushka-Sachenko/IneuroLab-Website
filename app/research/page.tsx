import Accordion from '../components/Accordeon';

// Временные данные для начала работы
const projects = [
  {
    id: 1,
    title: "Нейрон и окружающий мир",
    description: "Исследование свойств специализированных нейронов и нейронных групп",
    content: "Подробное описание проекта...",
    members: ["КВ", "Иван Петров"],
    publications: ["Ссылка на публикацию 1", "Ссылка на публикацию 2"],
    image: "/images/project1.jpg",
    status: "active" // или "completed"
  },
  // ... остальные проекты
];

export default function Research() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Research</h1>
      
      <section className="mb-8">
        <p className="text-lg mb-6">
          {/* Вставьте сюда аннотацию от КВ */}
          Цель нашей лаборатории - исследование принципов работы мозга через современные технологии...
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-6">Актуальные проекты</h2>
        <div className="space-y-4">
          {projects.map((project) => (
            <Accordion 
              key={project.id}
              title={project.title}
              content={
                <div>
                  <p>{project.content}</p>
                  <div className="mt-4">
                    <strong>Исполнители:</strong> {project.members.join(', ')}
                  </div>
                  {project.publications.length > 0 && (
                    <div className="mt-2">
                      <strong>Публикации:</strong>
                      <ul className="list-disc list-inside">
                        {project.publications.map((pub, index) => (
                          <li key={index}>{pub}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              }
            />
          ))}
        </div>
      </section>
    </div>
  );
}