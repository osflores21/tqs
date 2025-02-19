import { useEffect, useState, useRef } from "react";
import { useMediaQuery } from "@mantine/hooks";
import { Tabs, FloatingIndicator, Burger, Drawer, Button } from "@mantine/core";
import classes from "../styles/classes.module.css";

interface NavbarProps {
  setActiveSection: (section: string) => void;
}

const sections = ["main", "whoAre", "products", "quote", "joinRed"];
const HEADER_HEIGHT = 80;

const Navbar: React.FC<NavbarProps> = ({ setActiveSection }) => {
  const [currentSection, setCurrentSection] = useState(0);
  const [opened, setOpened] = useState(false);
  const tabRefs = useRef<Record<string, HTMLButtonElement | null>>({});
  const listRef = useRef<HTMLDivElement | null>(null);
  const [isScrolling, setIsScrolling] = useState(false);

  const matches = useMediaQuery("(max-width: 768px)");

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      setIsScrolling(true);
      window.scrollTo({
        top: section.offsetTop - HEADER_HEIGHT,
        behavior: "smooth",
      });

      setTimeout(() => {
        setIsScrolling(false);
      }, 500);
    }
  };

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: `-${HEADER_HEIGHT}px 0px 0px 0px`,
      threshold: 1.0,
    };

    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        const sectionId = entry.target.id;
        if (entry.isIntersecting && !isScrolling) {
          const index = sections.indexOf(sectionId);
          if (index !== -1) {
            setCurrentSection(index);
            setActiveSection(sectionId);
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((sectionId) => {
      const section = document.getElementById(sectionId);
      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [sections, setActiveSection, isScrolling]);

  return (
    <>
      {matches && (
        <Burger size="lg" opened={opened} onClick={() => setOpened((prev) => !prev)} color="red" />
      )}
      <Drawer
        opened={opened}
        onClose={() => setOpened(false)}
        title="Menú"
        padding="xl"
        size="xs"
        position="right"
        withCloseButton={false}
        overlayProps={{ backgroundOpacity: 0.5, blur: 4 }}
      >
        <div className={classes.list} style={{ display: 'flex', flexDirection: 'column' }}>
          {sections
            .filter((sectionId) => sectionId !== "main")
            .map((sectionId) => (
              <Button
                key={sectionId}
                variant="subtle"
                color="dark"
                onClick={() => {
                  const index = sections.indexOf(sectionId);
                  if (index !== -1) {
                    setCurrentSection(index);
                    setOpened(false);
                  }
                  setCurrentSection(sections.indexOf(sectionId));
                  scrollToSection(sectionId);
                }}
                style={{ marginBottom: '10px' }}
              >
                {sectionId === "whoAre"
                  ? "¿Quiénes Somos?"
                  : sectionId === "products"
                    ? "Productos"
                    : sectionId === "quote"
                      ? "Cotiza tu plan"
                      : "Únete a la Red"}
              </Button>
            ))}
        </div>
      </Drawer>

      {!matches && (
        <Tabs
          value={sections[currentSection]}
          onChange={(value) => {
            const index = sections.indexOf(value as string);
            if (index !== -1) {
              setCurrentSection(index);
            }
          }}
          variant="none"
        >
          <Tabs.List ref={listRef} className={classes.list}>
            <FloatingIndicator
              className={classes.indicator}
              target={tabRefs.current[sections[currentSection]] || undefined}
              parent={listRef.current || undefined}
            />
            {sections
              .filter((sectionId) => sectionId !== "main")
              .map((sectionId) => (
                <Tabs.Tab
                  className={classes.control}
                  key={sectionId}
                  value={sectionId}
                  ref={(el) => {
                    tabRefs.current[sectionId] = el;
                  }}
                  onClick={() => {
                    setCurrentSection(sections.indexOf(sectionId)); // Actualizar sección activa
                    scrollToSection(sectionId); // Desplazar hacia la sección
                  }}
                >
                  {sectionId === "whoAre"
                    ? "¿Quiénes Somos?"
                    : sectionId === "products"
                      ? "Productos"
                      : sectionId === "quote"
                        ? "Cotiza tu plan"
                        : "Únete a la Red"}
                </Tabs.Tab>
              ))}
          </Tabs.List>
        </Tabs>
      )}
    </>
  );
};

export default Navbar;
