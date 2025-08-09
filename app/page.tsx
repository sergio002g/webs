import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Code, Palette, DollarSign, Search, LifeBuoy, Star, MessageCircle, Sparkles } from "lucide-react"

export default function LandingPage() {
  const services = [
    {
      icon: <Palette className="h-8 w-8 text-white" />,
      title: "Diseño que Enamora",
      description:
        "Cada web es una obra de arte, diseñada para capturar miradas y reflejar la esencia 'good good' de tu marca.",
    },
    {
      icon: <DollarSign className="h-8 w-8 text-white" />,
      title: "Tu Presupuesto, Nuestra Guía",
      description:
        "Creamos soluciones web de alto impacto que se ajustan a tu inversión. ¡La calidad no tiene por qué ser inalcanzable!",
    },
    {
      icon: <Search className="h-8 w-8 text-white" />,
      title: "Visibilidad Garantizada",
      description:
        "Desarrollamos webs informativas optimizadas para que tu mensaje no solo sea hermoso, sino que también llegue a quien debe llegar.",
    },
    {
      icon: <LifeBuoy className="h-8 w-8 text-white" />,
      title: "Soporte Sin Complicaciones",
      description: "Te acompañamos en cada paso, asegurando que tu web funcione a la perfección y evolucione contigo.",
    },
  ]

  const projects = [
    {
      quote:
        "¡Simplemente espectacular! Mi web quedó 'algo de otro mundo' y el proceso fue increíblemente fluido. ¡La mejor inversión!",
      name: "Ana G.",
      title: "Emprendedora Visionaria",
      avatarQuery: "happy young woman",
    },
    {
      quote:
        "Necesitaba algo 'pintoresco' y funcional, y superaron mis expectativas. Mi página informativa ahora es mi mejor carta de presentación.",
      name: "Carlos M.",
      title: "Consultor Innovador",
      avatarQuery: "smiling man with glasses",
    },
    {
      quote:
        "Un servicio 'good good' de principio a fin. Obtuve una web de calidad premium que se ajustó a mi presupuesto. ¡Impresionante!",
      name: "Sofía L.",
      title: "Dueña de Negocio Exitoso",
      avatarQuery: "confident woman",
    },
  ]

  const whatsappNumber = "593963167281"
  const whatsappLink = `https://wa.me/${whatsappNumber}`

  return (
    <div className="flex flex-col min-h-[100dvh] bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-950 dark:to-gray-800">
      {/* Header */}
      <header className="px-4 lg:px-6 h-16 flex items-center justify-between border-b border-blue-200 dark:border-gray-700 bg-white/90 backdrop-blur-sm sticky top-0 z-50">
        <Link
          href="#"
          className="flex items-center justify-center gap-2 text-blue-700 dark:text-blue-300 transform hover:scale-105 transition-transform duration-300"
        >
          <Code className="h-7 w-7" />
          <span className="text-xl font-bold">Webs a tu Medida</span>
        </Link>
        <nav className="hidden md:flex gap-6">
          <Link
            href="#services"
            className="text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors"
          >
            Servicios
          </Link>
          <Link
            href="#projects"
            className="text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors"
          >
            Proyectos
          </Link>
          <Link
            href="#contact"
            className="text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors"
          >
            Contacto
          </Link>
        </nav>
        <Button
          asChild
          className="ml-4 bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 group"
        >
          <Link href={whatsappLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
            <MessageCircle className="h-5 w-5 group-hover:scale-110 transition-transform" />
            WhatsApp
          </Link>
        </Button>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-20 md:py-32 lg:py-40 xl:py-56 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-gray-800 dark:to-gray-900 text-center relative overflow-hidden animate-background-pan">
          <div className="absolute inset-0 opacity-20 dark:opacity-10">
            <Image
              src="/abstract-geometric-shapes.png"
              alt="Background Pattern"
              layout="fill"
              objectFit="cover"
              quality={100}
              className="z-0"
            />
          </div>
          <div className="container px-4 md:px-6 relative z-10 max-w-5xl mx-auto">
            <div className="space-y-6">
              <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl text-gray-900 dark:text-white leading-tight animate-fade-in-up">
                Tu Visión, Nuestra Magia: <br className="hidden sm:inline" /> Webs que Dejan Huella.
              </h1>
              <p className="max-w-[900px] mx-auto text-lg md:text-xl text-gray-700 dark:text-gray-300 animate-fade-in-up delay-200">
                Transformamos tus ideas en una presencia online "algo de otro mundo", adaptándonos a tu presupuesto.
                ¡Prepárate para impresionar!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-400">
                <Button
                  asChild
                  size="lg"
                  className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-full shadow-xl transition-all duration-300 transform hover:scale-105 group"
                >
                  <Link
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <MessageCircle className="h-5 w-5 group-hover:scale-110 transition-transform" />
                    ¡Hablemos por WhatsApp!
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-blue-500 text-blue-700 hover:bg-blue-50 dark:border-blue-400 dark:text-blue-300 dark:hover:bg-gray-700 font-bold py-3 px-8 rounded-full shadow-md transition-all duration-300 transform hover:scale-105 bg-transparent"
                >
                  <Link href="#projects">Ver Proyectos</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="w-full py-20 md:py-32 lg:py-40 bg-white dark:bg-gray-950">
          <div className="container px-4 md:px-6 max-w-6xl mx-auto">
            <div className="flex flex-col items-center justify-center space-y-6 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-gray-900 dark:text-white">
                  Nuestros Servicios: Calidad "Algo de Otro Mundo"
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Descubre cómo transformamos tus ideas en una presencia online impactante y efectiva.
                </p>
              </div>
            </div>
            <div className="mx-auto grid items-start gap-10 py-16 sm:grid-cols-2 lg:grid-cols-4">
              {services.map((service, index) => (
                <Card
                  key={index}
                  className="group flex flex-col items-center p-8 text-center bg-gradient-to-br from-blue-500 to-purple-600 text-white rounded-xl shadow-lg transform hover:scale-105 hover:rotate-1 transition-all duration-300"
                >
                  <div className="flex justify-center mb-6 p-3 bg-white/20 rounded-full group-hover:bg-white/30 transition-colors">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-sm opacity-90">{service.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Projects/Testimonials Section */}
        <section
          id="projects"
          className="w-full py-20 md:py-32 lg:py-40 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800"
        >
          <div className="container px-4 md:px-6 max-w-6xl mx-auto">
            <div className="flex flex-col items-center justify-center space-y-6 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-gray-900 dark:text-white">
                  Historias de Éxito: Clientes Felices con Webs Únicas
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  La prueba de que tu visión puede ser una realidad, sin importar el presupuesto.
                </p>
              </div>
            </div>
            <div className="mx-auto grid items-start gap-10 py-16 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {projects.map((project, index) => (
                <Card
                  key={index}
                  className="flex flex-col items-center p-8 text-center bg-white dark:bg-gray-950 rounded-xl shadow-lg transform hover:shadow-2xl transition-all duration-300"
                >
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-lg italic text-gray-700 dark:text-gray-300 mb-6">&quot;{project.quote}&quot;</p>
                  <Image
                    src={`/abstract-geometric-shapes.png?height=64&width=64&query=${project.avatarQuery}`}
                    width={64}
                    height={64}
                    alt={project.name}
                    className="rounded-full mb-2 border-2 border-blue-500"
                  />
                  <p className="font-semibold text-gray-900 dark:text-white">{project.name}</p>
                  <p className="text-sm text-muted-foreground">{project.title}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Custom Budget Section (Replaced Pricing) */}
        <section className="w-full py-20 md:py-32 lg:py-40 bg-white dark:bg-gray-950 text-center">
          <div className="container px-4 md:px-6 max-w-4xl mx-auto">
            <Sparkles className="h-32 w-32 text-blue-500 mx-auto mb-6 animate-pulse-strong" />
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-gray-900 dark:text-white mb-4">
              Tu Presupuesto es Nuestro Límite. ¡La Magia Sucede Aquí!
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              Olvídate de planes rígidos. Nos adaptamos a tu visión y a tu inversión para crear una web informativa que
              realmente te represente. Cuéntanos tu idea y te sorprenderás con lo que podemos lograr.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full shadow-xl transition-all duration-300 transform hover:scale-105 group"
            >
              <Link href={whatsappLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <MessageCircle className="h-5 w-5 group-hover:scale-110 transition-transform" />
                ¡Hablemos de tu Presupuesto!
              </Link>
            </Button>
          </div>
        </section>

        {/* Final Call-to-Action Section */}
        <section
          id="contact"
          className="w-full py-20 md:py-32 lg:py-40 bg-gradient-to-br from-blue-500 to-purple-600 text-white text-center"
        >
          <div className="container grid items-center justify-center gap-6 px-4 md:px-6 max-w-4xl mx-auto">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight lg:text-5xl">
                ¿Listo para una Web que Deje Huella?
              </h2>
              <p className="mx-auto max-w-[800px] text-lg md:text-xl opacity-90">
                Tu presencia online "algo de otro mundo" está a solo un mensaje de distancia.
              </p>
            </div>
            <div className="mx-auto w-full max-w-md space-y-4">
              <Button
                asChild
                size="lg"
                className="w-full bg-green-400 hover:bg-green-500 text-gray-900 font-bold py-4 px-8 rounded-full shadow-xl transition-all duration-300 transform hover:scale-105 group"
              >
                <Link
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3"
                >
                  <MessageCircle className="h-6 w-6 group-hover:scale-110 transition-transform" />
                  ¡Contáctame por WhatsApp!
                </Link>
              </Button>
              <p className="text-sm opacity-80">Tu consulta es sin compromiso. ¡Esperamos tu mensaje!</p>
            </div>
          </div>
        </section>
      </main>

      {/* Floating WhatsApp Button */}
      <Link
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 animate-bounce-slow group"
        aria-label="Contactar por WhatsApp"
      >
        <MessageCircle className="h-8 w-8 group-hover:scale-110 transition-transform" />
      </Link>

      {/* Footer */}
      <footer className="flex flex-col gap-4 sm:flex-row py-8 w-full shrink-0 items-center px-4 md:px-6 border-t border-blue-200 dark:border-gray-700 bg-white dark:bg-gray-950 text-gray-700 dark:text-gray-300">
        <p className="text-sm">Webs a tu Medida</p>
        <nav className="sm:ml-auto flex flex-wrap justify-center gap-4 sm:gap-6">
          <Link href="#projects" className="text-sm hover:underline underline-offset-4">
            Proyectos
          </Link>
          <Link href="#contact" className="text-sm hover:underline underline-offset-4">
            Contacto
          </Link>
        </nav>
        <div className="text-sm mt-4 sm:mt-0 sm:ml-4">
          WhatsApp:{" "}
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-600 hover:underline flex items-center gap-1"
          >
            <MessageCircle className="h-4 w-4" /> +593 963167281
          </a>
        </div>
      </footer>
    </div>
  )
}
