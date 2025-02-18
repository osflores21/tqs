import { useEffect, useState, useRef } from "react";
import { Tabs, FloatingIndicator, Burger, Drawer, Button } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import classes from "../styles/classes.module.css";

interface NavbarProps {
  setActiveSection: (section: string) => void;
}

const sections = ["main", "whoAre", "products", "quote", "joinRed"];
const HEADER_HEIGHT = 80;

const Navbar: React.FC<NavbarProps> = ({ setActiveSection }) => {
  const [currentSection, setCurrentSection] = useState(0);
  const [opened, setOpened] = useState(false); // State for Drawer
  const tabRefs = useRef<Record<string, HTMLButtonElement | null>>({});
  const listRef = useRef<HTMLDivElement | null>(null);

  const matches = useMediaQuery("(max-width: 768px)"); // Check if screen is small

  useEffect(() => {
    const handleScroll = (event: WheelEvent) => {
      if (event.deltaY > 0) {
        setCurrentSection((prev) => Math.min(prev + 1, sections.length - 1));
      } else {
        setCurrentSection((prev) => Math.max(prev - 1, 0));
      }
    };
    window.addEventListener("wheel", handleScroll, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, []);

  useEffect(() => {
    const section = document.getElementById(sections[currentSection]);
    if (section) {
      const yOffset = section.getBoundingClientRect().top + window.scrollY - HEADER_HEIGHT;
      window.scrollTo({ top: yOffset, behavior: "smooth" });
      setActiveSection(sections[currentSection]);
    }
  }, [currentSection]);

  return (
    <>
      {/* Burger menu for mobile */}
      {matches && (
        <Burger size="lg" opened={opened} onClick={() => setOpened((prev) => !prev)} color="red" />
      )}

      {/* Drawer for mobile menu */}
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
        {/* Mobile Menu List */}
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
                    setOpened(false); // Close the drawer after selection
                  }
                }}
                style={{ marginBottom: '10px' }} // Optional, for spacing
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

      {/* Full desktop menu */}
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
