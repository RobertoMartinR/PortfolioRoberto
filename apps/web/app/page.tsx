import Image from "next/image";

import { Button } from "@/components/ui/button"

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="flex-1 flex items-center justify-center px-4 py-16 bg-gradient-to-br from-background to-secondary">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            ¡Hola! Soy{" "}
            <span className="text-primary">Tu Nombre</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-fade-in">
            Desarrollador Full Stack especializado en{" "}
            <span className="text-foreground font-semibold">React</span>,{" "}
            <span className="text-foreground font-semibold">Next.js</span> y{" "}
            <span className="text-foreground font-semibold">TypeScript</span>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            <Button size="lg">
              Ver mis proyectos
            </Button>
            <Button variant="outline" size="lg">
              Descargar CV
            </Button>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 px-4 bg-card">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">50+</div>
              <div className="text-sm text-muted-foreground">Proyectos completados</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">3+</div>
              <div className="text-sm text-muted-foreground">Años de experiencia</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">20+</div>
              <div className="text-sm text-muted-foreground">Tecnologías dominadas</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">100%</div>
              <div className="text-sm text-muted-foreground">Proyectos entregados</div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Preview */}
      <section className="py-16 px-4 bg-background">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Tecnologías principales</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {['React', 'Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'Tailwind'].map((tech) => (
              <div
                key={tech}
                className="p-4 bg-card rounded-lg border border-border hover:shadow-md transition-shadow"
              >
                <div className="text-lg font-semibold">{tech}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">¿Listo para trabajar juntos?</h2>
          <p className="text-xl mb-8 opacity-90">
            Estoy disponible para nuevos proyectos y colaboraciones
          </p>
          <Button variant="secondary" size="lg">
            Contáctame
          </Button>
        </div>
      </section>
    </div>
  );
}
